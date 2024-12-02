import React from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { PageLoader } from "../components/PageLoader";
import {
	SERVER_URL,
	USER_COOKIES_NAME,
	USER_COOKIES_OPTS,
	USER_QUERY_KEY,
	USER_TOKEN_COOKIES_NAME,
} from "../components/constants";
import { useUser } from "../hooks/useUser";
import { addCookie } from "../utils";

export const UsernamePage = () => {
	const { data: user, isLoading: fetchingUser } = useUser();

	const queryClient = useQueryClient();

	const { mutate: updateUsername, isLoading: updatingUsername } = useMutation(
		async (username) => {
			const response = await fetch(`${SERVER_URL}register/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
				}),
			});
			const data = await response.json();

			if (response.ok) {
				addCookie(USER_COOKIES_NAME, data.username, USER_COOKIES_OPTS);
				addCookie(USER_TOKEN_COOKIES_NAME, data.token, USER_COOKIES_OPTS);

				toast.success(
					`Your username, ${username}, has been set. Enjoy the game.`
				);
			} else {
				if (response.status === 400) {
					toast.error(data.error || "Failed to set usernamer");
				} else {
					toast.error("An unexpected error occurred");
				}
			}

			return queryClient.invalidateQueries(USER_QUERY_KEY);
		}
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const username = e.currentTarget["username"].value;

		if (username.length === 0) {
			toast.error("Please fill password");
			return;
		}

		updateUsername(username);
	};

	if (!user || fetchingUser) return <PageLoader />;

	return (
		<div className="min-h-[calc(100vh_-_72px)] padding-inline bg-clr-gdg-green-100/10 rounded-md shadow-md flex items-center justify-center">
			<div className="max-w-lg w-full mt-10 mx-auto shadow-md py-12 px-8">
				<h1 className="font-semibold text-fs-h6 mb-2">
					Set or update your username here.
				</h1>
				<form onSubmit={handleSubmit} className="space-y-6 pt-3">
					<div className="space-y-3">
						<label htmlFor="username" className="font-medium">
							Username
						</label>
						<input
							name="username"
							className="w-full mb-4 block p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-clr-gdg-green"
							defaultValue={user.username}
						/>
					</div>
					<button
						type="submit"
						disabled={updatingUsername}
						className={`w-full p-3 bg-clr-gdg-green text-white rounded-md hover:bg-clr-gdg-green-600 ${
							updatingUsername ? "opacity-50 cursor-not-allowed" : ""
						}`}>
						{updatingUsername ? "Submitting..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};
