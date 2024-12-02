import { FlagFlip } from "../FlagFlip";

interface PersonCardProps {
	name: string;
	role: string;
	flag?: string;
}

const index = ({ flag, role, name }: PersonCardProps) => {
	return (
		<FlagFlip
			flag={flag}
			className="h-40 rounded-md shadow-card bg-clr-gdg-green-100/20">
			<article className="h-full w-full flex items-center justify-center text-center flex-col">
				<h5 className="text-fs-body-3 font-semibold">{name}</h5>
				<p className="text-fs-body-1">{`${role}`}</p>
			</article>
		</FlagFlip>
	);
};

export default index;
