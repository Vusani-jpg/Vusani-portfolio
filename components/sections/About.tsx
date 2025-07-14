"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Code, Briefcase, GraduationCap, MapPin, Sparkles, Users, Zap } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";

export default function About() {
	const [mounted, setMounted] = useState(false);
	const [activeFact, setActiveFact] = useState<string | null>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	const quickFacts = [
		{
			key: "software-engineer",
			icon: <Code className="h-6 w-6" />,
			title: "Software Engineering",
			description: "Passionate about crafting elegant, scalable solutions with cutting-edge technologies",
			highlight: "Full-Stack Development",
		},
		{
			key: "software-development",
			icon: <Briefcase className="h-6 w-6" />,
			title: "Software Development",
			description: "Building responsive, user-centric applications that solve real-world problems",
			highlight: "Problem Solver",
		},
		{
			key: "mechanical-engineering",
			icon: <GraduationCap className="h-6 w-6" />,
			title: "Mechanical Engineering",
			description: "Graduate from Cape Peninsula University of Technology with strong analytical foundation",
			highlight: "Analytical Mindset",
		},
		{
			key: "location",
			icon: <MapPin className="h-6 w-6" />,
			title: "Johannesburg, Gauteng",
			description: "South Africa - Ready to work globally and remotely",
			highlight: "Global Ready",
		},
	];

	const skills = [
		{ name: "Frontend", icon: <Sparkles className="h-4 w-4" />, level: 80 },
		{ name: "Teamwork", icon: <Users className="h-4 w-4" />, level: 95 },
		{ name: "Problem Solving", icon: <Zap className="h-4 w-4" />, level: 88 },
		{ name: "Self-Motivation", icon: <Zap className="h-4 w-4" />, level: 88 },
	];

	return (
		<section id="about" className="py-20 relative scroll-mt-16 overflow-hidden">
						<div className="absolute inset-0 pointer-events-none" />
			
			<SectionHeading title="About Me" subtitle="Get to know me better" />
			
			<div
				className={cn(
					"mx-auto space-y-8 opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
					mounted && "opacity-100 translate-x-0",
				)}
			>

				<div className="grid lg:grid-cols-2 gap-8 items-center">

					<div className="relative group">
						<div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
						<Image
							className="relative mx-auto object-cover border-2 border-primary/20 max-w-screen-md rounded-2xl shadow-2xl shadow-gray-900/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/20"
							src="./images/Profile.jpg"
							alt="Professional shot of a software engineer"
							width={400}
							height={500}
							priority
						/>
					</div>


					<div className="space-y-6">
						<div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
							<h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
								<Sparkles className="h-5 w-5 text-primary" />
								Passionate Software Engineer
							</h3>
							<p className="text-gray-300 leading-relaxed text-lg">
								I&apos;m a dedicated software Developer with a unique blend of mechanical engineering background and modern software development expertise. My passion lies in creating innovative, user-centric solutions that bridge the gap between complex technical challenges and elegant user experiences.
							</p>
							<p className="text-gray-300 leading-relaxed mt-4">
								With a strong foundation in both analytical thinking and creative problem-solving, I thrive in collaborative environments where I can contribute to meaningful projects that make a real impact. I&apos;m constantly exploring emerging technologies, particularly in AI and machine learning, to stay at the forefront of innovation.
							</p>
						</div>

						<div className="grid grid-cols-2 gap-4">
							{skills.map((skill) => (
								<div key={skill.name} className="bg-gray-900/60 backdrop-blur-sm p-4 rounded-xl border border-gray-800/30 hover:border-primary/50 transition-all duration-300">
									<div className="flex items-center gap-3 mb-2">
										{skill.icon}
										<span className="text-sm font-medium text-gray-200">{skill.name}</span>
									</div>
									<div className="w-full bg-gray-800 rounded-full h-2">
										<div 
											className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
											style={{ width: `${skill.level}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					{quickFacts.map((fact) => (
						<div
							key={fact.key}
							className={cn(
								"bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border transition-all duration-500 cursor-pointer group relative overflow-hidden",
								activeFact === fact.key 
									? "border-primary shadow-lg shadow-primary/20 " 
									: "border-gray-800/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
							)}
							onMouseEnter={() => setActiveFact(fact.key)}
							onMouseLeave={() => setActiveFact(null)}
						>
						
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							
							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-3">
									<div className={cn(
										"p-2 rounded-lg transition-all duration-300",
										activeFact === fact.key 
											? "bg-primary/20 text-primary" 
											: "bg-gray-800/50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
									)}>
										{fact.icon}
									</div>
									<div>
										<h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
											{fact.title}
										</h3>
										<p className="text-xs text-primary/80 font-medium">
											{fact.highlight}
										</p>
									</div>
								</div>
								<p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
									{fact.description}
								</p>
							</div>
						</div>
					))}
				</div>

			
			</div>
		</section>
	);
}
