import Cookies from "js-cookie";

export function addCookie(
	name: string,
	value: string,
	opts?: Cookies.CookieAttributes
) {
	Cookies.set(name, value, opts);
}

export function getCookieValue(name: string) {
	return Cookies.get(name);
}

export function getAllCookies() {
	return Cookies.get();
}

export function deleteCookie(name: string, opts?: Cookies.CookieAttributes) {
	Cookies.remove(name, opts);
}
