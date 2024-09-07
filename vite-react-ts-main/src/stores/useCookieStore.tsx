import { create } from 'zustand';
import { useFacilityStore } from './useFacilityStore';

export type CookieState = {
	cookie: number;
	click: number;
	clickRate: number;
	increaseRate: number;
};

export type CookieAction = {
	pushCookie: () => void;
	clickCookie: () => void;
	increaseCookie: () => void;
	changeRate: (newValue: number) => void;
	rateUpdate: (id: number) => void;
};

export type CookieStore = CookieState & CookieAction;

export const useCookieStore = create<CookieStore>((set) => ({
	cookie: 100,
	click: 0,
	clickRate: 1,
	increaseRate: 0,
	pushCookie: () =>
		set((state) => {
			state.clickCookie();
			return { click: state.click + 1 };
		}),
	clickCookie: () =>
		set((state) => {
			return { cookie: state.cookie + state.clickRate };
		}),
	increaseCookie: () =>
		set((state) => {
			return { cookie: state.cookie + state.increaseRate / 1000 };
		}),
	changeRate: (newValue: number) =>
		set((state) => {
			return { clickRate: state.clickRate + newValue };
		}),
	rateUpdate: (id: number) =>
		set((state) => {
			const facilities = useFacilityStore.getState().facilities;
			const facility = facilities[id];
			return {
				increaseRate: state.increaseRate + facility.defaultRate,
				cookie: state.cookie - (1.15 ^ facility.number) * facility.cost
			};
		})
}));
