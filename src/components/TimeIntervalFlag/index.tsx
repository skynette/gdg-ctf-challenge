import { useEffect, useState } from "react";

export function TimeIntervalFlag({
	flag,
	durationInMins: durationInMs,
}: {
	flag: string;
	durationInMins: number;
}) {
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setShown((prev) => !prev);
		}, durationInMs * 60 * 1000);

		return () => clearInterval(intervalId);
	}, [durationInMs]);

	if (!shown) return null;

	return <p>{flag}</p>;
}
