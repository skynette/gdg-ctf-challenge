import { Navigate } from "react-router-dom";
import { useGameStatus } from "../../hooks/useGameStatus";

export function Protected({ children }: { children: JSX.Element }) {
	const { data, isError, error, isLoading } = useGameStatus();
	const currentPath = window.location.pathname;

	if (currentPath === "/game-control" || currentPath === "/instructions")
		return children;

	if (!data || isLoading) {
		return (
			<div className="min-h-[calc(100vh_-_72px)] padding-inline flex flex-col items-center justify-center">
				<p>Checking Game Status...</p>
				<p>Please hold on a moment</p>
			</div>
		);
	}

	if (isError) {
		return (
			<div>
				<h1>Something went wrong, oops</h1>
				<p>{error.message || "Please try again later"}</p>
			</div>
		);
	}

	if (data.game_started) return children;

	if (!data.game_started) return <Navigate to={"/instructions"} />;

	return null;
}
