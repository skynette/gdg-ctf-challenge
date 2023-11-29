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
            const response = await fetch('/api/leaderboard/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !leaderboardData) {
        return <div>Error fetching leaderboard data</div>;
    }

    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
