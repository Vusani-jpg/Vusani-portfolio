"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import Image from "next/image";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";

export default function Projects() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const projects = [
		{
			title: "Portfolio Website",
			description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and a clean design.",
			technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
			githubUrl: "#",
			liveUrl: "#",
			icon: <Code className="h-6 w-6" />,
			image: "/images/Profile.jpg",
		},
		{
			title: "Tic Tac Toe Game",
			description: "A simple Tic Tac Toe game built with HTML, CSS, and JavaScript. Features a responsive design and a clean interface.",
			technologies: ["HTML", "JAVASCRIPT","React", "Next.js"],
			githubUrl: "#",
			liveUrl: "#",
			icon: <Code className="h-6 w-6" />,
			image: "/images/TIC-TAC.png",
		},
		// {
		// 	title: "Weather Dashboard",
		// 	description: "A weather application that displays current weather conditions and forecasts using external APIs and interactive charts.",
		// 	technologies: ["JavaScript", "HTML", "CSS", "Chart.js"],
		// 	githubUrl: "#",
		// 	liveUrl: "#",
		// 	icon: <Code className="h-6 w-6" />,
		// 	image: "/images/photo_.jpg",
		// },
	];

	return (
		<section id="projects" className="py-20 relative scroll-mt-16">
			<SectionHeading
				title="Projects"
				subtitle="Some of my recent work and personal projects"
			/>

			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
				{projects.map((project, index) => (
					<div
						key={index}
						className={cn(
							"bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 opacity-0 transform translate-y-8 group",
							{
								"opacity-100 translate-y-0": mounted,
								[`transition-delay-${index * 100}`]: mounted,
							},
						)}
						style={{
							transitionDelay: mounted ? `${index * 100}ms` : "0ms",
						}}
					>
						{/* Project Image Preview */}
						<div className="relative h-68 overflow-hidden">
							<Image
								src={project.image}
								alt={`${project.title} preview`}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-115"
							/>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
						</div>

						<div className="p-6">
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 bg-gray-800/50 rounded-lg">
									{project.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-200">
									{project.title}
								</h3>
							</div>

							<p className="text-gray-300 mb-4">
								{project.description}
							</p>

							<div className="mb-4">
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="bg-gray-800/50 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-700/50"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="flex gap-3">
								<a
									href={project.githubUrl}
									className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white px-4 py-2 rounded-lg border border-gray-700/50 transition-all duration-200 group-hover:border-primary"
								>
									<Github className="h-4 w-4" />
									Code
								</a>
								<a
									href={project.liveUrl}
									className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-all duration-200"
								>
									<ExternalLink className="h-4 w-4" />
									Live Demo
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
} 