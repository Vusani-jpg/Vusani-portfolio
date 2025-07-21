"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import SectionHeading from "../ui/section-heading";

export default function Certifications() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<section id="certifications" className="py-20 relative scroll-mt-16">
			<SectionHeading
				title="Certifications"
				subtitle="Some acquired certificates"
			/>
			<div
				className={cn(
					"text-center space-y-6 max-w-4xl px-4 opacity-0 transform translate-y-8 transition-all duration-1000",
					mounted && "opacity-100 translate-y-0",
				)}
			>
				<div>
				
					<div className="pt-4 flex-co gap-8 justify-center ">
						
					
							<Image
								className="ml-2 rounded-2xl shadow-xl border-2 border-secondary hover:scale-120 transition-all duration-400"
								aria-hidden
						
								src="./images/FNB Full Stack Development certificate.png"
								alt="FNB Cert"
								width={400}
								height={400}
							/>
							<Image
								className="ml-2 rounded-2xl shadow-xl border-2 border-secondary hover:scale-110 transition-all duration-400"
								aria-hidden
						
								src="./images/HTML BASICS.png"
								alt="HTML Cert"
								width={800}
								height={400}
							/>
						
					</div>
				</div>
			</div>

			
		</section>
	);
}
