import { useQuery } from "react-query";
import {
	USER_COOKIES_NAME,
	USER_QUERY_KEY,
	USER_TOKEN_COOKIES_NAME,
} from "../components/constants";
import { getCookieValue } from "../utils";

export function useUser() {
	return useQuery(USER_QUERY_KEY, {
		queryFn: () => {
			return {
				username: getCookieValue(USER_COOKIES_NAME),
				token: getCookieValue(USER_TOKEN_COOKIES_NAME),
			};
		},
		retry: 0,
		refetchInterval: 60 * 60 * 1000,
	});
}
