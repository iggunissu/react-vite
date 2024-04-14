import { create } from 'zustand';
import { CountState, CountAction } from '../types';

export type CountStore = CountState & CountAction;

export const useCountStore = create<CountStore>((set) => ({
	count: 0,
	increaseCount: () =>
		set((state) => {
			return { count: state.count + 1 };
		}),
	decreaseCount: () =>
		set((state) => {
			return { count: state.count - 1 };
		}),
	resetCount: () => set({ count: 0 })
}));
