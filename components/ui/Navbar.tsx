"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export default function Navbar() {
	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetElement = document.querySelector(href);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<nav
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300  text-white shadow-lg",
				"backdrop-blur-sm px-4",
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link
						href="/"
						onClick={(e) => handleNavClick(e, "#home")}
						className="flex items-center space-x-3 pt-2 text-white font-bold hover:scale-110 transition-smooth duration-600"
					>
						<div className="bg-primary hover:shadow-primary hover:shadow-[0_0_15px_rgba()]">
							<img
								src="images/Nav-profile.jpg"
								alt="Profile"
								className="h-12 w-11 object-contain"
							/>
						</div>
						<span className="text-primary text-2xl">Vusani Matsigila</span>
					</Link>
					
					<div className="hidden md:flex space-x-8 text-xl">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={(e) => handleNavClick(e, item.href)}
								className={`hover:text-primary transition-colors duration-300 hover:underline hover:underline-offset-5 ${
									item.name === "Home" ? "text-primary hover:text-white  underline underline-offset-5" : ""
								}`}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
  );
}