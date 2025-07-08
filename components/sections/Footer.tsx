export default function Footer() {
	return (
		<div className="mb-2 text-center text-gray-400 text-sm">
			<p>
				© {new Date().toLocaleString("default", { month: "long" })}{" "}
				{new Date().getFullYear()} Vusani Matsigila. All rights reserved.
			</p>
		</div>
	);
}
