"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Code, Briefcase, GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";


export default function About() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const quickFacts = [
		{
			key: "software-engineer",
			icon: <Code className="h-5 w-5" />,
			title: "Software Engineering",
			description: "Passionate about coding and innovative Technology ",
		},
		{
			key: "Software-development",
			icon: <Briefcase className="h-5 w-5" />,
			title: "Software Development",
			description: "Building responsive, user-friendly applications",
		},
		{
			key: "continuous-learner",
			icon: <GraduationCap className="h-5 w-5" />,
			title: "Mechanical Engineering",
			description: "Graduate from Cape Peninsula University of Technology",
		},
		{
			key: "johannesburg",
			icon: <MapPin className="h-5 w-5" />,
			title: "Johannesburg, Gauteng",
			description: "South Africa",
		},
	];

	return (
		<section id="about" className="py-20 relative scroll-mt-16">
			<SectionHeading title="About Me" subtitle="Get to know me better" />
			<div
				className={cn(
					"mx-auto space-y-6 opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
					mounted && "opacity-100 translate-x-0",
				)}
			>
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
					<Image
						className="mx-auto object-cover border-2 border-primary max-w-screen-md float-end rounded-2xl shadow-lg shadow-gray-900/50 mt-0.5"
						src="/images/Photo_.jpg"
						alt="profile picture"
						width={374}
						height={350}
						priority
					/>

					<div className="box-content size-82 mx-auto bg-gray-900 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-lg">
						<p className=" text-gray-300 leading-relaxed">
							Aspiring Software Engineer passionate about building responsive,
							user-friendly applications and exploring the evolving
							possibilities of AI. Eager to thrive in collaborative development
							environments and continuously expand technical and creative skill
							sets.
						</p>
						<p className="text-gray-300 leading-relaxed mt-3">
							My journey in tech is fueled by curiosity and a passion for
							creating impactful solutions. I continuously learn and adapt to
							emerging technologies to stay ahead in a rapidly evolving
							innovative space.{" "}
						</p>
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
					{quickFacts.map((fact) => (
						<div
							key={fact.key} 
							className="bg-gray-900 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50 hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] shadow-lg"
						>
							<div className="flex items-center gap-4">
								<div>{fact.icon}</div>
								<div>
									<h3 className="font-medium text-gray-200">{fact.title}</h3>
									<p className="text-sm text-gray-400">{fact.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
