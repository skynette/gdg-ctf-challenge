export const PrimaryButton = ({text}:{text: string}) => {
	return (
		<div>
			<a
				href="https://chat.whatsapp.com/FuqdLyzumFR6VEHdFEkdP5"
				target="_blank"
				rel="noreferrer"
				className="text-white text-fs-body-2 leading-[22.4px] font-bold px-6 py-3 rounded-lg bg-clr-gdg-green transition duration-200 hover:bg-clr-gdg-green-600">
				{text}
			</a>
		</div>
	);
};
