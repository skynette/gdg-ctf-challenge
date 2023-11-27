export const PrimaryButton = ({text}:{text: string}) => {
	return (
		<div>
			<a
				href="#"
				className="text-white text-fs-body-2 leading-[22.4px] font-bold px-8 py-4 rounded-lg bg-clr-gdg-green transition duration-200 hover:bg-clr-gdg-green-600">
				{text}
			</a>
		</div>
	);
};
