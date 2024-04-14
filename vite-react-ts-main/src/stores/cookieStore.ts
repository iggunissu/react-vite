import { create } from 'zustand';
import { CookieState, CookieAction } from '../types';

export type CookieStore = CookieState & CookieAction;

export const useCookieStore = create<CookieStore>((set) => ({
	cookie: 123456789123,
	click: 0,
	clickRate: 1,
	pushCookie: () =>
		set((state) => {
			state.increaseCookie();
			return { click: state.click + 1 };
		}),
	increaseCookie: () =>
		set((state) => {
			return { cookie: state.cookie + state.clickRate };
		}),
	changeRate: (newValue: number) =>
		set((state) => {
			return { clickRate: state.clickRate + newValue };
		})
}));
