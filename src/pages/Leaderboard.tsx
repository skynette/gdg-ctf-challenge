import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import { TimeIntervalFlag } from "../components/TimeIntervalFlag";
import { SERVER_URL, flags } from "../components/constants";

interface LeaderboardUser {
	username: string;
	points: number;
}

const Leaderboard: React.FC = () => {
	const {
		data: leaderboardData,
		isLoading,
		isError,
		refetch,
	} = useQuery<LeaderboardUser[], Error>(
		"leaderboard",
		async () => {
			const response = await fetch(`${SERVER_URL}leaderboard/`);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
		{
			staleTime: 1000,
		}
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			refetch();
		}, 1000);

		return () => clearInterval(intervalId);
	}, [refetch]);

	if (isLoading) {
		return (
			<div className="container mx-auto p-8 mt-">
				<h1 className="font-semibold text-fs-h4 mb-4">
					Leaderboard{" "}
					<TimeIntervalFlag durationInMins={5} flag={flags.moonlight_fl4g} />
				</h1>
				<table className="min-w-full bg-white border border-gray-300">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b">Username</th>
							<th className="py-2 px-4 border-b">Points</th>
						</tr>
					</thead>
					<tbody>
						{[...Array(5)].map((_, index) => (
							<tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
								<td className="py-2 px-4 border-b animate-pulse bg-gray-100 rounded-md">
									<Skeleton height={20} width={100} />
								</td>
								<td className="py-2 px-4 border-b animate-pulse bg-gray-100 rounded-md">
									<Skeleton height={20} width={60} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}

	if (isError || !leaderboardData) {
		return <div className="text-red-600">Error fetching leaderboard data</div>;
	}

	const sortedLeaderboard = [...leaderboardData].sort(
		(a, b) => b.points - a.points
	);

	return (
		<div className="min-h-[calc(100vh_-_152px)] container padding-inline mx-auto py-6 mt-20">
			<h1 className="font-semibold text-fs-h4 mb-4">Leaderboard</h1>
			<table className="min-w-full bg-white border border-gray-300">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b text-left">Username</th>
						<th className="py-2 px-4 border-b text-left">Points</th>
					</tr>
				</thead>
				<tbody>
					{sortedLeaderboard.map((user, index) => (
						<tr key={index}>
							<td className="py-2 px-4 border-b">{user.username}</td>
							<td className="py-2 px-4 border-b">{user.points}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Leaderboard;
