import { create } from 'zustand';
import { Count } from '../types/count';

export const useCountStore = create<Count>((set) => ({
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
