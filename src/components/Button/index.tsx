export const PrimaryButton = ({text}:{text: string}) => {
	return (
		<div>
			<a
				href="https://tix.africa/discover/asa2023"
				className="text-primary-white leading-[22.4px] font-bold px-8 py-4 rounded-lg bg-green transition duration-200 hover:bg-green-600">
				{text}
			</a>
		</div>
	);
};

export const SecondaryButton = () => {
	return (
		<div>
			<a
				href="#"
				className="text-primary-white leading-[22.4px] font-bold flex gap-2 items-center sec-btn">
				<span>Join as Vendor</span> <img src="./arrow-right.svg" alt="" />
			</a>
		</div>
	);
};
