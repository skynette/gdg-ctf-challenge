export const flags = {
	very_easy_fl4g: "very_easy_fl4g",
	a_very_easy_fl4g: "a_very_easy_fl4g",
	hidden_fl4g: "hidden_fl4g",
	easy_fl4g: "easy_fl4g",
	another_easy_fl4g: "another_easy_fl4g",
	whisper_fl4g: "whisper_fl4g",
	top_secret_fl4g: "top_secret_fl4g",
	medium_fl4g: "medium_fl4g",
	moonlight_fl4g: "moonlight_fl4g",
	secret_code_fl4g: "secret_code_fl4g",
	medium_hard_fl4g: "medium_hard_fl4g",
	cipher_fl4g: "cipher_fl4g",
	thunderstorm_fl4g: "thunderstorm_fl4g",
	hard_fl4g: "hard_fl4g",
	another_hard_fl4g: "another_hard_fl4g",
	encrypted_fl4g: "encrypted_fl4g",
	sphinx_fl4g: "sphinx_fl4g",
	phantom_fl4g: "phantom_fl4g",
	tricky_fl4g: "tricky_fl4g",
	shadow_fl4g: "shadow_fl4g",
	firestorm_fl4g: "firestorm_fl4g",
	ninja_fl4g: "ninja_fl4g",
	super_hard_fl4g: "super_hard_fl4g",
	encrypted_message_fl4g: "encrypted_message_fl4g",
	mind_bender_fl4g: "mind_bender_fl4g",
	nebula_fl4g: "nebula_fl4g",
	jigsaw_fl4g: "jigsaw_fl4g",
	quantum_fl4g: "quantum_fl4g",
	ultra_hard_fl4g: "ultra_hard_fl4g",
	enigma_fl4g: "enigma_fl4g",
	avalanche_fl4g: "avalanche_fl4g",
	galaxy_fl4g: "galaxy_fl4g",
	complex_fl4g: "complex_fl4g",
	xXx_unbreakable_fl4g_xXx: "xXx_unbreakable_fl4g_xXx",
};

export const SERVER_URL =
	(import.meta.env.VITE_SERVER_URL as string) || "http://127.0.0.1:8000";

export const GAME_STATUS_QUERY_KEY = "game-status";

export const USER_QUERY_KEY = "current-user";

export const codersData = [
	{
		name: "Joshua Hassan",
		avatarSrc:
			"https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with actual image path
		github: "https://github.com/skynette/",
		twitter: "https://twitter.com/cut3josh",
		whatsapp: "https://wa.me/08182336574", // replace with actual WhatsApp number
	},
	{
		name: "Dave",
		avatarSrc: "/assets/dave.jpg", // replace with actual image path
		github: "https://github.com/d-a-ve",
		twitter: "https://twitter.com/kvng__dave",
		whatsapp: "https://wa.me/8068937291", // replace with actual WhatsApp number
	},
	// Add more coders as needed
];

export const EVENTS_PICTURES: { url: string; flag?: string }[] = [
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701516739/dev%20fes/1_x3w9ul.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517039/dev%20fes/2_yj55hs.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517064/dev%20fes/3_som4aw.jpg",
		flag: flags.quantum_fl4g,
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517064/dev%20fes/3_som4aw.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517480/dev%20fes/7_f9n1x2.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517492/dev%20fes/5_ywofjh.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517503/dev%20fes/4_sgv1zg.jpg",
		flag: flags.xXx_unbreakable_fl4g_xXx,
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517526/dev%20fes/6_dqjqrv.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517963/dev%20fes/11_bfbxgw.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517964/dev%20fes/10_fyfzox.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517964/dev%20fes/10_fyfzox.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517976/dev%20fes/12_tx54jv.jpg",
		flag: flags.firestorm_fl4g,
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517996/dev%20fes/13_cvaazr.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701517996/dev%20fes/14_i5tf9y.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518043/dev%20fes/9_rxvsre.jpg",
		flag: flags.very_easy_fl4g,
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518071/dev%20fes/8_qjary7.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518594/dev%20fes/15_va1g3w.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518648/dev%20fes/16_rpasrk.jpg",
		flag: flags.avalanche_fl4g,
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518677/dev%20fes/20_kxlzmt.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518680/dev%20fes/18_tqknu2.jpg",
		flag: flags.jigsaw_fl4g,
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518681/dev%20fes/19_dqwbgl.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518686/dev%20fes/17_ac0xqh.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701518695/dev%20fes/21_riqmaf.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701519106/dev%20fes/24_pbxp9m.jpg",
		flag: flags.enigma_fl4g,
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701519111/dev%20fes/22_oc7y0k.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701519118/dev%20fes/27_rtdbji.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701519125/dev%20fes/25_ktz2pe.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701519130/dev%20fes/26_uwkuy5.jpg",
	},
	{
		url: "https://res.cloudinary.com/skycoder/image/upload/v1701519130/dev%20fes/23_gmvd4n.jpg",
		flag: flags.tricky_fl4g,
	},
];

/**
 * Cookies options keys and values
 *
 * @property {number | Date | undefined} expires
 * @property {string | undefined} path
 * @property {string | undefined} domain
 * @property {boolean | undefined} secure
 * @property {"strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined} sameSite
 */

export const USER_COOKIES_OPTS = {
	expires: 3,
	path: "/",
	domain: import.meta.env.PROD ? "gdg-benin.vercel.app" : "localhost",
	secure: import.meta.env.PROD,
	sameSite: "lax" as const,
};

export const USER_COOKIES_NAME = "__devfest_24_user";
export const USER_TOKEN_COOKIES_NAME = "__devfest_24_user_token";
