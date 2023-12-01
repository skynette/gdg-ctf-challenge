import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { SERVER_URL } from "../components/constants";

interface SubmitFlagForm {
	username: string;
	flag: string;
}

const SubmitFlag: React.FC = () => {
	const [formData, setFormData] = useState<SubmitFlagForm>({
		username: "",
		flag: "",
	});

	useEffect(() => {
		const storedUsername = localStorage.getItem("ctfUsername");
		if (storedUsername) {
			setFormData((prevData) => ({
				...prevData,
				username: storedUsername,
			}));
		}
	}, []);

	const submitFlagMutation = useMutation(async () => {
		const response = await fetch(`${SERVER_URL}submit-flag/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			// Display success notification
			const data = await response.json();
			console.log("data", data);
			const score = data.score;
			toast.success(`Flag! ${score} points`);
			localStorage.setItem("ctfUsername", formData.username);
		} else {
			// Handle specific error states and display appropriate error messages
			const data = await response.json();
			if (response.status === 400) {
				toast.error(data.error || "Failed to submit flag");
			} else {
				toast.error("An unexpected error occurred");
			}
		}

		return response.json();
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        if(!(formData.username.length > 0) || !(formData.flag.length > 0)){
            toast.error("Please fill all fields");
            return
        }

		submitFlagMutation.mutate();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="min-h-screen padding-inline bg-clr-gdg-green-100/10 rounded-md shadow-md flex items-center justify-center">
			<div className="max-w-2xl mt-10 mx-auto shadow-md py-12 px-8">
				<h1 className="font-semibold text-fs-h4 mb-4">Submit Flag</h1>
				<p className="mb-8">
					You have gotten a flag, submit it here and earn points!!
				</p>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Username"
						name="username"
						value={formData.username}
						onChange={handleChange}
						disabled={localStorage.getItem("ctfUsername") !== null}
						className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-clr-gdg-green"
					/>
					<input
						type="text"
						placeholder="Flag"
						name="flag"
						value={formData.flag}
						onChange={handleChange}
						className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-clr-gdg-green"
					/>
					<button
						type="submit"
						disabled={submitFlagMutation.isLoading}
						className={`w-full p-3 bg-clr-gdg-green text-white rounded-md hover:bg-clr-gdg-green-600 ${
							submitFlagMutation.isLoading
								? "opacity-50 cursor-not-allowed"
								: ""
						}`}>
						{submitFlagMutation.isLoading ? "Submitting..." : "Submit Flag"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SubmitFlag;
