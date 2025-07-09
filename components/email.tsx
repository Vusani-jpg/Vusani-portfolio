import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f8f9fa', padding: '20px' }}>
    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#333', marginBottom: '20px', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
        New Contact Form Message
      </h2>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0', borderLeft: '4px solid #007bff' }}>
        <p style={{ margin: '10px 0' }}>
          <strong style={{ color: '#333' }}>Name:</strong> 
          <span style={{ color: '#666' }}> {firstName}</span>
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong style={{ color: '#333' }}>Email:</strong> 
          <span style={{ color: '#666' }}> {email}</span>
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong style={{ color: '#333' }}>Message:</strong>
        </p>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '4px', marginTop: '10px', border: '1px solid #dee2e6' }}>
          {message.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < message.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #dee2e6' }}>
        <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
          This message was sent from your portfolio contact form at {new Date().toLocaleString()}.
        </p>
      </div>
    </div>
  </div>
);