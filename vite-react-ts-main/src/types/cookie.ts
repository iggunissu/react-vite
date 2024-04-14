export type CookieState = {
	cookie: number;
	click: number;
	clickRate: number;
};

export type CookieAction = {
	pushCookie: () => void;
	increaseCookie: () => void;
	changeRate: (newValue: number) => void;
};
