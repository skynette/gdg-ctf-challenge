import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { GAME_STATUS_QUERY_KEY, SERVER_URL } from "../components/constants";
import { useGameStatus } from "../hooks/useGameStatus";

const GameControl: React.FC = () => {
	const [gameStatusToggle, setGameStatusToggle] = useState(false);

	const { data: gameStatus, isLoading: fetchingGameStatus } = useGameStatus();
	const queryClient = useQueryClient();

	useEffect(() => {
		if (gameStatus) {
			setGameStatusToggle(gameStatus.game_started);
		}
	}, [gameStatus]);

	const { mutate: saveGameControls, isLoading } = useMutation(
		async (formData: { action: string; password: string }) => {
			const response = await fetch(`${SERVER_URL}game-control/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					action: formData.action,
					password: formData.password,
				}),
			});
			const data = await response.json();

			if (response.ok) {
				toast.success(
					`Game has ${formData.action === "start" ? "started" : "stopped"}`
				);
			} else {
				// Handle specific error states and display appropriate error messages
				if (response.status === 400) {
					toast.error(data.error || "Failed to submit flag");
				} else {
					toast.error("An unexpected error occurred");
				}
			}

			return queryClient.invalidateQueries(GAME_STATUS_QUERY_KEY);
		}
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const gameControl = e.currentTarget["gameControl"].checked;
		const password = e.currentTarget["password"].value;

		if (password.length === 0) {
			toast.error("Please fill password");
			return;
		}

		saveGameControls({ password, action: gameControl ? "start" : "end" });
	};

	if (!gameStatus || fetchingGameStatus)
		return (
			<div className="min-h-[calc(100vh_-_72px)] padding-inline flex items-center justify-center">
				Loading...
			</div>
		);

	return (
		<div className="min-h-[calc(100vh_-_72px)] padding-inline bg-clr-gdg-green-100/10 rounded-md shadow-md flex items-center justify-center">
			<div className="max-w-lg w-full mt-10 mx-auto shadow-md py-12 px-8">
				<h1 className="font-semibold text-fs-h4 mb-2">Game Controls</h1>
				<p className="mb-6">Start or stop the game here.</p>
				<form
					onSubmit={handleSubmit}
					className="space-y-6 border-t border-t-gray-400 pt-6">
					<label className="inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							value=""
							className="sr-only peer"
							name="gameControl"
							checked={gameStatusToggle}
							onChange={(e) => setGameStatusToggle(e.currentTarget.checked)}
						/>
						<span className="me-3 font-medium text-gray-900 pointer-events-none select-none">
							Stop game
						</span>
						<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-checked:content-['Stop']"></div>
						<span className="ms-3 font-medium text-gray-900 pointer-events-none select-none">
							Start game
						</span>
					</label>
					<div className="space-y-3">
						<label htmlFor="password" className="font-medium">
							Password
						</label>
						<input
							name="password"
							className="w-full mb-4 block p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-clr-gdg-green"
						/>
					</div>
					<button
						type="submit"
						disabled={isLoading}
						className={`w-full p-3 bg-clr-gdg-green text-white rounded-md hover:bg-clr-gdg-green-600 ${
							isLoading ? "opacity-50 cursor-not-allowed" : ""
						}`}>
						{isLoading ? "Saving settings..." : "Save Settings"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default GameControl;
