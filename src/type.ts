export type GameStatusType = {
	game_started: boolean;
	start_time: string;
	end_time: string | null;
	duration: string | null;
};

export type UserType = {
	username: string;
	token: string;
};

export type ErrorType = {
	error: string;
};
