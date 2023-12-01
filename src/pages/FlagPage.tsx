import { useParams } from "react-router-dom";

const FlagPage = () => {
	const { flag } = useParams();
	return (
		<div className="h-screen w-full flex items-center justify-center bg-clr-gdg-green-100/30">
			<h1>Flag: {flag}</h1>
		</div>
	);
};

export default FlagPage;
