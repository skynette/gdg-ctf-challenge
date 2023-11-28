import { PrimaryButton } from "../Button";

const Nav = () => {
	return (
		<div className="bg-white/90 fixed z-[1] top-0 left-0 w-full">
			<nav className="padding-inline py-6 flex justify-between items-center">
				<div className="w-40 lg:w-60">
					<img
						src="./assets/gdg-benin-logo.png"
						alt="GDG Benin Logo"
						className="w-full"
					/>
				</div>
				<div>
					<div className="">
						<PrimaryButton text="Join the community"/>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
