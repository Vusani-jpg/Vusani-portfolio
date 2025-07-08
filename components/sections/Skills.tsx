"use client";

import { useState, useEffect } from "react";
import { Code, Server, Brain } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";

export default function Skills() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const skillCategories = [
		{
			icon: <Code className="h-6 w-6" />,
			title: "Languages",
			skills: ["HTML", "JavaScript", "Python" , "TypeScript"],
		},
		{
			icon: <Server className="h-6 w-6" />,
			title: "Dev Tools",
			skills: ["Git", "GitHub", "VS Code" ],
		},
		{
			icon: <Brain className="h-6 w-6" />,
			title: "Skills",
			skills: [
				"Software Development",
				"Problem-Solving",
				"Responsive Web Design",
				"Agile Methodologies",
			],
		},
	];

	return (
		<section id="skills" className="py-20 relative scroll-mt-16">
			<SectionHeading
				title="Skills"
				subtitle="Technologies and abilities I've acquired"
			/>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
				{skillCategories.map((category, index) => (
					<div
						key={index}
						className={cn(
							"bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-primary transition-all duration-300 opacity-0 transform translate-y-8",
							{
								"opacity-100 translate-y-0": mounted,
								[`transition-delay-${index * 100}`]: mounted,
							},
						)}
						style={{
							transitionDelay: mounted ? `${index * 100}ms` : "0ms",
						}}
					>
						<div className="flex flex-col h-full">
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 bg-gray-800/50 rounded-lg ">
									{category.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-200">
									{category.title}
								</h3>
							</div>

							<div className="flex-grow">
								<ul className="space-y-3">
									{category.skills.map((skill, skillIndex) => (
										<li
											key={skillIndex}
											className="bg-gray-800/30 px-4 py-2 rounded-lg border border-gray-700/50 "
										>
											<span className="text-gray-300">{skill}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
