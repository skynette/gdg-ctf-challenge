import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Skeleton from 'react-loading-skeleton';

interface LeaderboardUser {
    username: string;
    points: number;
}

const Leaderboard: React.FC = () => {
    const { data: leaderboardData, isLoading, isError, refetch } = useQuery<LeaderboardUser[], Error>(
        'leaderboard',
        async () => {
            const response = await fetch('http://localhost:8000/leaderboard/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        {
            staleTime: 1000, // Set a short stale time to automatically refetch every second
        }
    );

    // Use useEffect and setInterval to trigger manual refetch every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 100000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [refetch]);

    if (isLoading) {
        return (
            <div className="container mx-auto p-8">
                {/* Use Skeleton for loading state */}
                <div className="animate-pulse bg-gray-100 p-4 rounded-md">
                    <Skeleton height={30} width={100} />
                    <Skeleton height={30} width={60} />
                </div>
            </div>
        );
    }

    if (isError || !leaderboardData) {
        return <div className="text-red-600">Error fetching leaderboard data</div>;
    }

    // Sort the leaderboardData by highest score
    const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.points - a.points);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Username</th>
                        <th className="py-2 px-4 border-b">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedLeaderboard.map((user, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
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
