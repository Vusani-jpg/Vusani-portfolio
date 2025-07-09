"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Linkedin, Github, MessageCircle, Send, CheckCircle, XCircle } from "lucide-react";
import SectionHeading from "../../components/ui/section-heading";
import { Button } from "../../src/components/ui/button";
import { Input } from "../../src/components/ui/input";
import { Textarea } from "../../src/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Contact() {
	const [mounted, setMounted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: 'success' | 'error' | null;
		message: string;
	}>({ type: null, message: '' });
	
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear status when user starts typing again
		if (submitStatus.type) {
			setSubmitStatus({ type: null, message: '' });
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: '' });

		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				setSubmitStatus({
					type: 'success',
					message: result.message || 'Message sent successfully! I\'ll get back to you soon.'
				});
				setFormData({ name: "", email: "", message: "" });
			} else {
				setSubmitStatus({
					type: 'error',
					message: result.error || 'Failed to send message. Please try again.'
				});
			}
		} catch  {
			setSubmitStatus({
				type: 'error',
				message: 'Network error. Please check your connection and try again.'
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const contactInfo = [
		{
			icon: <MapPin className="h-5 w-5" />,
			label: "Location",
			value: "Johannesburg, 2094",
			color: "from-blue-500 to-cyan-500",
		},
		{
			icon: <Phone className="h-5 w-5" />,
			label: "Phone",
			value: "+27 621611797",
			link: "tel:+27621611797",
			color: "from-green-500 to-emerald-500",
		},
		{
			icon: <Mail className="h-5 w-5" />,
			label: "Email",
			value: "Matsigilvi@gmail.com",
			link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRHtMssHmWzvBVjCRpdBKjblNRRMNrDjcQlVGkMLnxbvTWdwpLmZMQZBLnPnnrtnrhWFl",
			color: "from-purple-500 to-pink-500",
		},
		{
			icon: <Linkedin className="h-5 w-5" />,
			label: "LinkedIn",
			value: "linkedin.com/in/vusani-matsigila",
			link: "https://www.linkedin.com/in/vusani-matsigila/",
			color: "from-blue-600 to-blue-700",
		},
		{
			icon: <Github className="h-5 w-5" />,
			label: "GitHub",
			value: "github.com/Vusani-jpg",
			link: "https://github.com/Vusani-jpg",
			color: "from-gray-600 to-gray-800",
		},
		{
			icon: <MessageCircle className="h-5 w-5" />,
			label: "WhatsApp",
			value: "+27 621611797",
			link: "https://wa.me/27621611797",
			color: "from-green-600 to-green-700",
		},
	];

	return (
		<section id="contact" className="py-20 relative scroll-mt-16 overflow-hidden ">
			{/* Enhanced animated background elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Floating particles */}
				<div className={cn(
					"absolute left-4 top-20 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50",
					mounted && "animate-bounce"
				)} style={{ animationDelay: '0s', animationDuration: '3s' }} />
				<div className={cn(
					"absolute left-8 top-40 w-1 h-1 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50",
					mounted && "animate-ping"
				)} style={{ animationDelay: '1s', animationDuration: '4s' }} />
				<div className={cn(
					"absolute left-12 top-60 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/50",
					mounted && "animate-bounce"
				)} style={{ animationDelay: '2s', animationDuration: '2.5s' }} />
				
				<div className={cn(
					"absolute right-6 top-32 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full shadow-lg shadow-pink-400/50",
					mounted && "animate-bounce"
				)} style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
				<div className={cn(
					"absolute right-12 top-48 w-1 h-1 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50",
					mounted && "animate-ping"
				)} style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
				<div className={cn(
					"absolute right-4 top-80 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-lg shadow-orange-400/50",
					mounted && "animate-bounce"
				)} style={{ animationDelay: '2.5s', animationDuration: '2s' }} />
				
				{/* Enhanced decorative lines */}
				<div className={cn(
					"absolute left-0 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent",
					mounted && "animate-pulse"
				)} style={{ animationDuration: '6s' }} />
				<div className={cn(
					"absolute right-0 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent",
					mounted && "animate-pulse"
				)} style={{ animationDuration: '8s', animationDelay: '2s' }} />
				
				{/* Grid pattern overlay */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<SectionHeading title="Contact Me" subtitle="Let's get in touch" />

				<div className="grid lg:grid-cols-2 gap-12 mt-16">
					{/* Contact Information */}
					<div
						className={cn(
							"space-y-6 opacity-0 transform -translate-x-8 transition-all duration-1000",
							mounted && "opacity-100 translate-x-0",
						)}
					>
						<div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 relative overflow-hidden shadow-2xl">
							{/* Enhanced glow effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-700" />
							
							{/* Corner accent */}
							<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
							
							<h3 className="text-2xl font-bold mb-6 relative z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
								Get In Touch
							</h3>
							<div className="space-y-4 relative z-10">
								{contactInfo.map((info, index) => (
									<div 
										key={index} 
										className={cn(
											"group flex items-start gap-4 p-4 rounded-xl transition-all duration-500 hover:bg-gray-800/40 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/50 border border-transparent hover:border-gray-600/30",
											mounted && "animate-fade-in-up"
										)}
										style={{ 
											animationDelay: `${index * 100}ms`,
											animationDuration: '0.6s'
										}}
									>
										<div className={cn(
											"flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
											`bg-gradient-to-r ${info.color}`,
											mounted && "animate-bounce-in"
										)} style={{ animationDelay: `${index * 100 + 200}ms` }}>
											<div className="text-white">
												{info.icon}
											</div>
										</div>
										<div className="flex-1 min-w-0">
											<h4 className="text-sm font-medium text-gray-400 mb-1">{info.label}</h4>
											{info.link ? (
												<a
													href={info.link}
													target="_blank"
													rel="noopener noreferrer"
													className="text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block font-medium"
												>
													{info.value}
												</a>
											) : (
												<p className="text-gray-200 font-medium">{info.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div
						className={cn(
							"opacity-0 transform translate-x-8 transition-all duration-1000",
							mounted && "opacity-100 translate-x-0",
						)}
					>
						<div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 relative overflow-hidden shadow-2xl">
							{/* Enhanced glow effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/5 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-700" />
							
							{/* Corner accent */}
							<div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-br-full" />
							
							<h3 className="text-2xl font-bold mb-6 relative z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
								Send Message
							</h3>
							
							<form onSubmit={handleSubmit} className="space-y-6 relative z-10">
								<div className="space-y-2">
									<label htmlFor="name" className="text-sm font-medium text-gray-300">
										Name
									</label>
									<Input
										id="name"
										name="name"
										type="text"
										value={formData.name}
										onChange={handleChange}
										required
										className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
										placeholder="Your name"
									/>
								</div>
								
								<div className="space-y-2">
									<label htmlFor="email" className="text-sm font-medium text-gray-300">
										Email
									</label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
										placeholder="your.email@example.com"
									/>
								</div>
								
								<div className="space-y-2">
									<label htmlFor="message" className="text-sm font-medium text-gray-300">
										Message
									</label>
									<Textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none"
										placeholder="Your message..."
									/>
								</div>

								{/* Status Message */}
								{submitStatus.type && (
									<div className={cn(
										"flex items-center gap-3 p-4 rounded-lg border transition-all duration-500",
										submitStatus.type === 'success' 
											? "bg-green-500/10 border-green-500/30 text-green-300" 
											: "bg-red-500/10 border-red-500/30 text-red-300"
									)}>
										{submitStatus.type === 'success' ? (
											<CheckCircle className="h-5 w-5 text-green-400" />
										) : (
											<XCircle className="h-5 w-5 text-red-400" />
										)}
										<span className="text-sm font-medium">{submitStatus.message}</span>
									</div>
								)}

								<Button
									type="submit"
									disabled={isSubmitting}
									className={cn(
										"w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
										isSubmitting && "animate-pulse"
									)}
								>
									{isSubmitting ? (
										<div className="flex items-center gap-2">
											<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
											Sending...
										</div>
									) : (
										<div className="flex items-center gap-2">
											<Send className="h-4 w-4" />
											Send Message
										</div>
									)}
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* Enhanced bottom decorative elements */}
			<div className="absolute bottom-10 left-1/4 w-1 h-16 bg-gradient-to-t from-transparent via-blue-400/30 to-transparent animate-pulse shadow-lg shadow-blue-400/50" style={{ animationDuration: '5s' }} />
			<div className="absolute bottom-20 right-1/4 w-1 h-12 bg-gradient-to-t from-transparent via-purple-400/30 to-transparent animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDuration: '7s', animationDelay: '1s' }} />
			
			{/* Additional floating elements */}
			<div className="absolute bottom-32 left-1/2 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce shadow-lg shadow-green-400/50" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
			<div className="absolute bottom-16 right-1/3 w-1 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{ animationDuration: '6s', animationDelay: '2s' }} />
		</section>
	);
}
