import { Navigate, useLocation } from "react-router-dom";
import { useGameStatus } from "../../hooks/useGameStatus";

export function Protected({ children }: { children: JSX.Element }) {
	const { data, isError, error, isLoading } = useGameStatus();
	const { pathname: currentPath } = useLocation();

	if (currentPath === "/game-control" || currentPath === "/instructions")
		return children;

	if (!data || isLoading) {
		return (
			<div className="min-h-[calc(100vh_-_72px)] padding-inline flex flex-col items-center justify-center gap-4">
				<p className="text-lg font-medium">Checking Game Status...</p>
				<p>Please hold on a moment</p>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="min-h-[calc(100vh_-_72px)] padding-inline flex flex-col items-center justify-center gap-4">
				<h1 className="text-xl font-medium">Something went wrong, oops</h1>
				<p>{error.message || "Please try again later"}</p>
			</div>
		);
	}

	if (!data.game_started) return <Navigate to={"/instructions"} />;
  
	if (data.game_started) return children;

	return null;
}
