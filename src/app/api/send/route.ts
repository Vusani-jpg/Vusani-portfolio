import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../../../components/email';

// TypeScript interfaces for better type safety
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: { id?: string } | null;
  error?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Input sanitization function
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Rate limiting (simple in-memory store - consider Redis for production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per 15 minutes

  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const { name, email, message }: ContactFormData = body;

    // Enhanced validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Validate sanitized inputs
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 10 and 2000 characters.' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service is temporarily unavailable.' },
        { status: 500 }
      );
    }

    // Get recipient email from environment variable
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'matsigilvi@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    // Send email using React template only (removed duplicate HTML)
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      subject: `New Contact Form Message from ${sanitizedName}`,
      react: EmailTemplate({ 
        firstName: sanitizedName, 
        email: sanitizedEmail, 
        message: sanitizedMessage 
      }) as React.ReactElement,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    const response: ApiResponse = {
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      data: { id: data?.id }
    };

    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
} 