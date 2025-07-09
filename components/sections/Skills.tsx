"use client";

import { useState, useEffect } from "react";
import { 
	Code, 
	Server, 
	Brain, 
	Database, 
	Palette, 
	Zap,
	TrendingUp,
	Shield
} from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";

interface Skill {
	name: string;
	proficiency: number; // 0-100
	icon?: React.ReactNode;
}

interface SkillCategory {
	icon: React.ReactNode;
	title: string;
	description: string;
	skills: Skill[];
	color: string;
}

export default function Skills() {
	const [mounted, setMounted] = useState(false);
	// const [activeCategory, setActiveCategory] = useState<number | null>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	const skillCategories: SkillCategory[] = [
		{
			icon: <Code className="h-6 w-6" />,
			title: "Programming Languages",
			description: "Core languages I use for development",
			color: "from-blue-500/20 to-cyan-500/20",
			skills: [
				{ name: "TypeScript", proficiency: 80 },
				{ name: "JavaScript", proficiency: 80 },
				{ name: "Python", proficiency: 65 },
				{ name: "HTML/CSS", proficiency: 95 },
			],
		},
		{
			icon: <Server className="h-6 w-6" />,
			title: "Frameworks & Libraries",
			description: "Modern tools and frameworks I work with",
			color: "from-green-500/20 to-emerald-500/20",
			skills: [
				{ name: "React", proficiency: 90 },
				{ name: "Next.js", proficiency: 85 },
				{ name: "Node.js", proficiency: 80 },
				{ name: "Tailwind CSS", proficiency: 95 },
			],
		},
		{
			icon: <Database className="h-6 w-6" />,
			title: "Databases & Tools",
			description: "Data management and development tools",
			color: "from-purple-500/20 to-violet-500/20",
			skills: [
				{ name: "Git", proficiency: 90 },
				{ name: "GitHub", proficiency: 85 },
				{ name: "VS Code", proficiency: 95 },
				{ name: "MongoDB", proficiency: 70 },
			],
		},
		{
			icon: <Palette className="h-6 w-6" />,
			title: "Design & UX",
			description: "Design principles and user experience",
			color: "from-pink-500/20 to-rose-500/20",
			skills: [
				{ name: "Responsive Design", proficiency: 90 },
				{ name: "UI/UX Design", proficiency: 80 },
				{ name: "Accessibility", proficiency: 85 },
				{ name: "Design Systems", proficiency: 70 },
			],
		},
		{
			icon: <Zap className="h-6 w-6" />,
			title: "Performance & Testing",
			description: "Optimization and quality assurance",
			color: "from-yellow-500/20 to-orange-500/20",
			skills: [
				{ name: "Performance Optimization", proficiency: 80 },
				{ name: "Unit Testing", proficiency: 75 },
				{ name: "Jest", proficiency: 70 },
				{ name: "Webpack", proficiency: 65 },
			],
		},
		{
			icon: <Brain className="h-6 w-6" />,
			title: "Soft Skills",
			description: "Professional and collaborative abilities",
			color: "from-indigo-500/20 to-blue-500/20",
			skills: [
				{ name: "Problem Solving", proficiency: 90 },
				{ name: "Agile Methodologies", proficiency: 85 },
				{ name: "Team Collaboration", proficiency: 90 },
				{ name: "Communication", proficiency: 85 },

			],
		},
	];

	const getProficiencyColor = (proficiency: number) => {
		if (proficiency >= 90) return "bg-gradient-to-r from-green-400 to-emerald-500";
		if (proficiency >= 80) return "bg-gradient-to-r from-blue-400 to-cyan-500";
		if (proficiency >= 70) return "bg-gradient-to-r from-yellow-400 to-orange-500";
		return "bg-gradient-to-r from-gray-400 to-gray-500";
	};

	const getProficiencyLabel = (proficiency: number) => {
		if (proficiency >= 90) return "Expert";
		if (proficiency >= 80) return "Advanced";
		if (proficiency >= 65) return "Intermediate";
		return "Beginner";
	};

	return (
		<section id="skills" className="py-20 relative scroll-mt-16">
			<SectionHeading
				title="Skills & Expertise"
				subtitle="Technologies, tools, and abilities I've mastered"
			/>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{skillCategories.map((category, index) => (
					<div
						key={index}
						className={cn(
							"bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-primary transition-all duration-500 opacity-0 transform translate-y-8 group cursor-pointer",
							{
								"opacity-100 translate-y-0": mounted,
								"hover:scale-105 hover:shadow-xl hover:shadow-primary/10": mounted,
							},
						)}
						style={{
							transitionDelay: mounted ? `${index * 150}ms` : "0ms",
						}}
						// onMouseEnter={() => setActiveCategory(index)}
						// onMouseLeave={() => setActiveCategory(null)}
					>
						<div className="flex flex-col h-full">
							{/* Header */}
							<div className="flex items-center gap-3 mb-4">
								<div className={cn(
									"p-3 rounded-xl transition-all duration-300",
									`bg-gradient-to-br ${category.color}`,
									"group-hover:scale-110 group-hover:rotate-3"
								)}>
									{category.icon}
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
										{category.title}
									</h3>
									<p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
										{category.description}
									</p>
								</div>
							</div>

							{/* Skills List */}
							<div className="flex-grow space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<div
										key={skillIndex}
										className="space-y-2"
										style={{
											animationDelay: mounted ? `${(index * 150) + (skillIndex * 50)}ms` : "0ms",
										}}
									>
										<div className="flex justify-between items-center">
											<span className="text-gray-300 font-medium text-sm">
												{skill.name}
											</span>
											<span className="text-xs text-gray-400">
												{getProficiencyLabel(skill.proficiency)}
											</span>
										</div>
										
										{/* Progress Bar */}
										<div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
											<div
												className={cn(
													"h-full rounded-full transition-all duration-1000 ease-out",
													getProficiencyColor(skill.proficiency)
												)}
												style={{
													width: mounted ? `${skill.proficiency}%` : "0%",
													transitionDelay: mounted ? `${(index * 150) + (skillIndex * 50)}ms` : "0ms",
												}}
											/>
											{/* Glow effect on hover */}
											<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white rounded-full" />
										</div>
									</div>
								))}
							</div>

							{/* Category Stats */}
							<div className="mt-6 pt-4 border-t border-gray-800/50">
								<div className="flex justify-between items-center text-sm">
									<span className="text-gray-400">
										{category.skills.length} skills
									</span>
									<span className="text-gray-300 font-medium">
										{Math.round(
											category.skills.reduce((acc, skill) => acc + skill.proficiency, 0) / 
											category.skills.length
										)}% avg
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Skills Summary */}
			{mounted && (
				<div 
					className="mt-16 text-center opacity-0 animate-in slide-in-from-bottom-4 duration-1000"
					style={{ animationDelay: "1200ms" }}
				>
					<div className="inline-flex items-center gap-4 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-full px-6 py-3">
						<TrendingUp className="h-5 w-5 text-primary" />
						<span className="text-gray-300">
							<span className="font-semibold text-white">
								{skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills
							</span>{" "}
							across{" "}
							<span className="font-semibold text-white">
								{skillCategories.length} categories
							</span>
						</span>
						<Shield className="h-5 w-5 text-primary" />
					</div>
				</div>
			)}
		</section>
	);
}
