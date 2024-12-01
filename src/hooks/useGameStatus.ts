import { useQuery } from "react-query";
import { GAME_STATUS_QUERY_KEY, SERVER_URL } from "../components/constants";
import { GameStatusType } from "../type";

export function useGameStatus() {
	return useQuery<GameStatusType, Error>(
		GAME_STATUS_QUERY_KEY,
		async () => {
			const response = await fetch(`${SERVER_URL}game-control/`);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
		{
			refetchInterval: 30 * 1000, // 30 secs
		}
	);
}
