import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { ModalText } from "../components/Modal";
import { PageLoader } from "../components/PageLoader";
import { TimeIntervalFlag } from "../components/TimeIntervalFlag";
import { SERVER_URL, flags } from "../components/constants";
import { useGameStatus } from "../hooks/useGameStatus";
import { useUser } from "../hooks/useUser";

interface SubmitFlagForm {
	username: string;
	flag: string;
}

const SubmitFlag: React.FC = () => {
	const [formData, setFormData] = useState<SubmitFlagForm>({
		username: "",
		flag: "",
	});
	const { data: gameStatus } = useGameStatus();
	const { data: user, isLoading: fetchingUser } = useUser();

	useEffect(() => {
		if (!user) return;

		if (!user.username) return;

		const username = user.username;

		setFormData((prev) => ({ ...prev, username }));
	}, [user]);

	const submitFlagMutation = useMutation(async () => {
		if (!user || !user.token) return;

		const response = await fetch(`${SERVER_URL}submit-flag/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ flag: formData.flag, token: user.token }),
		});
		const data = await response.json();

		if (response.ok) {
			// Display success notification
			const score = data.score;
			toast.success(`Flag! ${score} points`);
			setFormData((prev) => ({ ...prev, flag: "" }));
		} else {
			// Handle specific error states and display appropriate error messages
			if (response.status === 400) {
				toast.error(data.error || "Failed to submit flag");
			} else {
				toast.error("An unexpected error occurred");
			}
		}

		return data;
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!(formData.username.length > 0) || !(formData.flag.length > 0)) {
			toast.error("Please fill all fields");
			return;
		}

		if (!user || !user.token) {
			toast.error("Something went wrong. Please register your username again.");
			return;
		}

		submitFlagMutation.mutate();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	if (!user || fetchingUser) return <PageLoader />;

	return (
		<div className="min-h-[calc(100vh_-_72px)] padding-inline bg-clr-gdg-green-100/10 rounded-md shadow-md flex items-center justify-center">
			<div className="max-w-xl w-full mt-10 mx-auto shadow-md py-12 px-8">
				<h1 className="font-semibold text-fs-h4 mb-4">Submit Flag</h1>
				<p className="mb-8">
					You have gotten a {""}{" "}
					<ModalText
						className=""
						qrCodeSVG={<img src="./hardest.svg" alt="" />}>
						Flag
					</ModalText>
					, submit it here and earn points!!
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
						disabled={!gameStatus?.game_started || submitFlagMutation.isLoading}
						className="w-full p-3 bg-clr-gdg-green text-white rounded-md hover:bg-clr-gdg-green-600 disabled:opacity-50 disabled:cursor-not-allowed">
						{submitFlagMutation.isLoading ? "Submitting..." : "Submit Flag"}
					</button>
				</form>
			</div>
			<div className="absolute top-1/3 left-4">
				<TimeIntervalFlag durationInMins={3} flag={flags.top_secret_fl4g} />
			</div>
			<div className="absolute bottom-24 left-1/2">
				<TimeIntervalFlag durationInMins={5} flag={flags.super_hard_fl4g} />
			</div>
		</div>
	);
};

export default SubmitFlag;
