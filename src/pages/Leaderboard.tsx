import React from 'react';
import { useQuery } from 'react-query';

interface LeaderboardUser {
    username: string;
    points: number;
}

const Leaderboard: React.FC = () => {
    const { data: leaderboardData, isLoading, isError } = useQuery<LeaderboardUser[], Error>(
        'leaderboard',
        async () => {
            const response = await fetch('http://localhost:8000/leaderboard/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    );

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (isError || !leaderboardData) {
        return <div className="text-red-600">Error fetching leaderboard data</div>;
    }

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
                    {leaderboardData.map((user, index) => (
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
