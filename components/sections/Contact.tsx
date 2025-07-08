"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
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

			if (response.ok) {
				setSubmitStatus({
					type: 'success',
					message: 'Message sent successfully! I\'ll get back to you soon.'
				});
				setFormData({ name: "", email: "", message: "" });
			} else {
				setSubmitStatus({
					type: 'error',
					message: result.error || 'Failed to send message. Please try again.'
				});
			}
		} catch (error) {
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
			icon: <MapPin className="h-8 w-5" />,
			label: "Location",
			value: "Johannesburg, 2094",
		},
		{
			icon: <Phone className="h-5 w-5" />,
			label: "Phone",
			value: "+27 621611797",
			link: "tel:+27621611797",
		},
		{
			icon: <Mail className="h-5 w-5" />,
			label: "Email",
			value: "Matsigilvi@gmail.com",
			link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRHtMssHmWzvBVjCRpdBKjblNRRMNrDjcQlVGkMLnxbvTWdwpLmZMQZBLnPnnrtnrhWFl",
		},
		{
			icon: <Linkedin className="h-5 w-5" />,
			label: "LinkedIn",
			value: "linkedin.com/in/vusani-matsigila",
			link: "https://www.linkedin.com/in/vusani-matsigila/",
		},
		{
			icon: <Github className="h-5 w-5" />,
			label: "GitHub",
			value: "github.com/Vusani-jpg",
			link: "https://github.com/Vusani-jpg",
		},
	];

	return (
		<section id="contact" className="py-20 relative scroll-mt-16">
			<SectionHeading title="Contact Me" subtitle="Let's get in touch" />

			<div className="grid md:grid-cols-2 gap-10">
				<div
					className={cn(
						"space-y-6 opacity-0 transform -translate-x-8 transition-all duration-1000",
						mounted && "opacity-100 translate-x-0",
					)}
				>
					<div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
						<h3 className="text-xl font-semibold mb-4">Contact Information</h3>
						<div className="space-y-4">
							{contactInfo.map((info, index) => (
								<div key={index} className="flex items-start gap-3">
									<div className="mt-1">{info.icon}</div>
									<div>
										<h4 className="text-sm text-gray-400">{info.label}</h4>
										{info.link ? (
											<a
												href={info.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-gray-300 hover:text-primary transition-colors"
											>
												{info.value}
											</a>
										) : (
											<p className="text-gray-300">{info.value}</p>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div
					className={cn(
						"opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
						mounted && "opacity-100 translate-x-0",
					)}
				>
					<form
						onSubmit={handleSubmit}
						className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50"
					>
						<h3 className="text-xl font-semibold mb-4">
							Send a Message
						</h3>
						
						{/* Status Message */}
						{submitStatus.type && (
							<div className={cn(
								"p-3 rounded-lg mb-4 text-sm",
								submitStatus.type === 'success' 
									? "bg-green-900/30 border border-green-700/50 text-green-300"
									: "bg-red-900/30 border border-red-700/50 text-red-300"
							)}>
								{submitStatus.message}
							</div>
						)}
						
						<div className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="text-sm text-gray-300 mb-1 block"
								>
									Name
								</label>
								<Input
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your name"
									required
									disabled={isSubmitting}
									className="bg-gray-800/50 border-primary text-white focus:border-teal-500 focus:ring-teal-500/20 hover:shadow-primary hover:shadow-[0_0_20px_rgba()] disabled:opacity-50"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="text-sm text-gray-300 mb-1 block"
								>
									Email
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Your email"
									required
									disabled={isSubmitting}
									className="bg-gray-800/50 border-primary text-white hover:shadow-primary hover:shadow-[0_0_20px_rgba()] disabled:opacity-50"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="text-sm text-gray-300 mb-1 block"
								>
									Message
								</label>
								<Textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Your Message here. . . ."
									required
									disabled={isSubmitting}
									className="bg-gray-800/50 text-white border-primary hover:shadow-primary hover:shadow-[0_0_20px_rgba()] disabled:opacity-50"
								/>
							</div>
							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-primary text-white hover:shadow-primary hover:shadow-[0_0_20px_rgba()] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<>
										<Loader2 className="h-4 w-4 mr-2 animate-spin" />
										Sending...
									</>
								) : (
									<>
										<Send className="h-4 w-4 mr-2" />
										Send Message
									</>
								)}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
