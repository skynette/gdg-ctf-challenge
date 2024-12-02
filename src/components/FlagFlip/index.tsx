import { ReactNode, useState } from "react";
import { toast } from "react-hot-toast";

export function FlagFlip({
	children,
	flag,
	className,
}: {
	children: ReactNode;
	flag?: string;
	className?: string;
}) {
	const [hasFlipped, setHasFlipped] = useState(false);

	const handleToggle = () => {
		if (!flag) return;

		setHasFlipped((prev) => !prev);

		// only show toast when it has not flipped
		if (!hasFlipped) {
			navigator.clipboard
				.writeText(flag)
				.then(() => {
					toast.success(
						`Flag: ${flag} found. Added to clipboard successfully.`
					);
				})
				.catch((error) => {
					console.error("Failed to copy flag to clipboard: ", error);
				});
		}
	};

	return (
		<button
			className={`block group [perspective:1000px] overflow-clip cursor-default h-20 w-full ${className}`}
			onClick={handleToggle}>
			<div
				className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
					flag && hasFlipped ? "[transform:rotateY(180deg)]" : ""
				}`}>
				{/* front face */}
				<div className="absolute inset-0 [backface-visibility:hidden]">
					{children}
				</div>

				{/* Back Face */}
				{flag && (
					<div className="absolute inset-0 h-full w-full bg-black/80 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
						<p>{flag}</p>
					</div>
				)}
			</div>
		</button>
	);
}
