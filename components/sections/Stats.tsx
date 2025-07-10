"use client";

import { useState, useEffect } from "react";
import { Coffee, Code, Calendar } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";

export default function Stats() {
	const [mounted, setMounted] = useState(false);
	const [counts, setCounts] = useState({
		coffees: 0,
		projects: 0,
		experience: 0,
		achievements: 0
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted) {
			const targetCounts = {
				coffees: 674,
				projects: 12,
				experience: 1,
				achievements: 15
			};

			const duration = 10000; // 2 seconds
			const interval = 50; // Update every 50ms
			const steps = duration / interval;

			const animateCounts = () => {
				let currentStep = 0;
				const timer = setInterval(() => {
					currentStep++;
					const progress = currentStep / steps;

					setCounts({
						coffees: Math.floor(targetCounts.coffees * progress),
						projects: Math.floor(targetCounts.projects * progress),
						experience: Math.floor(targetCounts.experience * progress),
						achievements: Math.floor(targetCounts.achievements * progress)
					});

					if (currentStep >= steps) {
						clearInterval(timer);
						setCounts(targetCounts);
					}
				}, interval);
			};

			// Start animation after a small delay
			const timeout = setTimeout(animateCounts, 2000);
			return () => clearTimeout(timeout);
		}
	}, [mounted]);

	const stats = [
		{
			key: "coffees",
			icon: <Coffee className="h-8 w-8" />,
			title: "Coffees Consumed",
			value: counts.coffees,
			suffix: "+",
			description: "Fueling creativity and late-night coding sessions"
		},
		{
			key: "projects",
			icon: <Code className="h-8 w-8" />,
			title: "Projects Completed",
			value: counts.projects,
			suffix: "+",
			description: "From concept to deployment, delivering quality solutions"
		},
		{
			key: "experience",
			icon: <Calendar className="h-8 w-8" />,
			title: "Years Experience",
			value: counts.experience,
			suffix: "+",
			description: "Professional software development experience"
		},
			];

	return (
		<section id="stats" className="py-20 relative scroll-mt-16 overflow-hidden">
			<div className="absolute inset-0 pointer-events-none" />
			
			<SectionHeading title="My Stats" subtitle="Numbers that tell my story" />
			
			<div
				className={cn(
					"mx-auto space-y-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-300",
					mounted && "opacity-100 translate-y-0",
				)}
			>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{stats.map((stat, index) => (
						<div
							key={stat.key}
							className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/30 group relative overflow-hidden"
							style={{
								animationDelay: `${index * 200}ms`
							}}
						>
							
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							
							<div className="relative z-10 text-center">
								<div className="flex justify-center mb-4">
									<div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:bg-primary/30 transition-all duration-300">
										{stat.icon}
									</div>
								</div>
								
								<div className="mb-3">
									<div className="text-3xl md:text-4xl font-bold text-white mb-1">
										{stat.value}
										<span className="text-primary">{stat.suffix}</span>
									</div>
									<h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
										{stat.title}
									</h3>
								</div>
								
								<p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
									{stat.description}
								</p>
							</div>
						</div>
					))}
				</div>

				
				<div className="mt-12 bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
					<h3 className="text-2xl font-bold text-center text-white mb-6">
						What These Numbers Mean
					</h3>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="text-center">
							<div className="text-primary text-2xl font-bold mb-2">674+</div>
							<div className="text-gray-300">Cups of coffee represent countless hours of problem-solving, debugging, and creating innovative solutions. Each cup fuels the passion for coding.</div>
						</div>
						<div className="text-center">
							<div className="text-primary text-2xl font-bold mb-2">12+</div>
							<div className="text-gray-300">Projects completed showcase versatility across different technologies, frameworks, and domains - from web apps to mobile solutions.</div>
						</div>
						<div className="text-center">
							<div className="text-primary text-2xl font-bold mb-2">1+</div>
							<div className="text-gray-300">Years of experience in software development, continuously learning and adapting to new technologies and industry best practices.</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 