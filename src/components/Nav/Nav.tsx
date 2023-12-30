import { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Button";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const clickHandler = () => {
		setIsMenuOpen(false);
	}

	return (
		<div className="bg-white fixed z-[1] top-0 left-0 w-full shadow-card">
			<nav className="padding-inline pt-6 lg:py-8 flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:items-center">
				<div className="flex justify-between items-center">
					<div className="w-40 lg:w-60">
						<Link to="/" onClick={clickHandler}>
							<img
								src="/assets/gdg-benin-logo.png"
								alt="GDG Benin Logo"
								className="w-full"
							/>
						</Link>
					</div>
					<div
						className={`${
							isMenuOpen ? "menu" : ""
						} w-6 flex flex-col lg:hidden gap-y-2 cursor-pointer`}
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<div className="w-full h-[2px] bg-clr-gdg-green-800 transition-[transform] duration-200 ease-linear" />
						<div className="w-full h-[2px] bg-clr-gdg-green-800 transition-[transform] duration-200 ease-linear" />
						<div className="w-full h-[2px] bg-clr-gdg-green-800 transition-[transform] duration-200 ease-linear" />
					</div>
				</div>
				<div
					className={`grid lg:flex lg:flex-row items-end transition-[grid-template-rows] overflow-hidden lg:overflow-visible duration-300 ease-in-out ${
						isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
					}`}>
					<div className="overflow-hidden flex flex-col lg:flex-row items-end lg:items-center gap-8 lg:overflow-visible">
						<ul className="inline">
							<li>
								<Link
									to="/instructions"
									onClick={clickHandler}
									className="text-fs-body-3 font-medium text-clr-gdg-green-800 lg:after:w-[0px] lg:after:mx-auto lg:after:h-[2px] lg:after:block lg:after:bg-clr-gdg-green lg:after:transition-[width] lg:after:duration-150 lg:after:ease-linear lg:hover:after:w-full">
									CTF Challenge
								</Link>
							</li>
							<li>
								<Link
									to="/ctf"
									onClick={clickHandler}
									className="text-fs-body-3 font-medium text-clr-gdg-green-800 lg:after:w-[0px] lg:after:mx-auto lg:after:h-[2px] lg:after:block lg:after:bg-clr-gdg-green lg:after:transition-[width] lg:after:duration-150 lg:after:ease-linear lg:hover:after:w-full">
									CTF Submission
								</Link>
							</li>
							<li>
								<Link
									to="/leaderboard"
									onClick={clickHandler}
									className="text-fs-body-3 text-clr-gdg-green-800 font-medium lg:after:w-[0px] lg:after:mx-auto lg:after:h-[2px] lg:after:block lg:after:bg-clr-gdg-green lg:after:transition-[width] lg:after:duration-150 lg:after:ease-linear lg:hover:after:w-full">
									Leaderboard
								</Link>
							</li>
							{/* Uncomment if we do add the chat feature */}
							{/* <li>
								<Link
									to="/chat"
									onClick={clickHandler}
									className="text-fs-body-3 text-clr-gdg-green-800 font-medium lg:after:w-[0px] lg:after:mx-auto lg:after:h-[2px] lg:after:block lg:after:bg-clr-gdg-green lg:after:transition-[width] lg:after:duration-150 lg:after:ease-linear lg:hover:after:w-full">
									Chat
								</Link>
							</li> */}
						</ul>
						<div className="pb-8 lg:pb-0">
							<PrimaryButton text="Join" />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
