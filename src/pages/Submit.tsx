import React, { useState } from 'react';
import { useMutation } from 'react-query';

interface SubmitFlagForm {
    username: string;
    flag: string;
}

const SubmitFlag: React.FC = () => {
    const [formData, setFormData] = useState<SubmitFlagForm>({
        username: '',
        flag: '',
    });

    const submitFlagMutation = useMutation(
        async () => {
            const response = await fetch('/api/submit-flag/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            return response.json();
        },
        {
            onSuccess: () => {
                console.log('Flag submitted successfully');
                // Handle successful flag submission
            },
        }
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitFlagMutation.mutate();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>Submit Flag</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Flag"
                    name="flag"
                    value={formData.flag}
                    onChange={handleChange}
                />
                <button type="submit" disabled={submitFlagMutation.isLoading}>
                    Submit Flag
                </button>
            </form>
        </div>
    );
};

export default SubmitFlag;
