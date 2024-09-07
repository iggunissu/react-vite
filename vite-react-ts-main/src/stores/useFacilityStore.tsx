import { Facility } from '@/types';
import { defaultFacilities } from '@/utils';
import { create } from 'zustand';
import { useCookieStore } from './useCookieStore';

export type FacilityState = {
	facilities: Facility[];
};

export type FacilityAction = {
	buyFacility: (id: number) => void;
	getFacilities: () => void;
};

export type FacilityStore = FacilityState & FacilityAction;

export const useFacilityStore = create<FacilityStore>((set) => ({
	facilities: [],
	buyFacility: (id: number) =>
		set((state) => {
			const newFacilities = structuredClone(state.facilities);
			newFacilities[id] = {
				...newFacilities[id],
				number: newFacilities[id].number + 1
			};
			useCookieStore.getState().rateUpdate(id);
			return {
				facilities: newFacilities
			};
		}),
		getFacilities: () => {
			set({facilities: defaultFacilities})
		}
}));
