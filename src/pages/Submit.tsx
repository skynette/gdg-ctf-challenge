import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';

interface SubmitFlagForm {
    username: string;
    flag: string;
}

const SubmitFlag: React.FC = () => {
    const [formData, setFormData] = useState<SubmitFlagForm>({
        username: '',
        flag: '',
    });

    useEffect(() => {
        const storedUsername = localStorage.getItem('ctfUsername');
        if (storedUsername) {
            setFormData((prevData) => ({
                ...prevData,
                username: storedUsername,
            }));
        }
    }, []);

    const submitFlagMutation = useMutation(
        async () => {
            const response = await fetch('https://gdg-ctf.up.railway.app/submit-flag/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Display success notification
                toast.success('Flag submitted successfully');
                localStorage.setItem('ctfUsername', formData.username);
            } else {
                // Handle specific error states and display appropriate error messages
                const data = await response.json();
                if (response.status === 400) {
                    toast.error(data.error || 'Failed to submit flag');
                } else {
                    toast.error('An unexpected error occurred');
                }
            }

            return response.json();
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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Submit Flag</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={localStorage.getItem('ctfUsername') !== null}
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Flag"
                    name="flag"
                    value={formData.flag}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    disabled={submitFlagMutation.isLoading}
                    className={`w-full p-2 bg-blue-500 text-white rounded-md ${
                        submitFlagMutation.isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    {submitFlagMutation.isLoading ? 'Submitting...' : 'Submit Flag'}
                </button>
            </form>
        </div>
    );
};

export default SubmitFlag;
