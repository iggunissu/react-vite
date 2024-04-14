import { create } from 'zustand';
import { FacilityState, FacilityAction } from '../types';

export type FacilityStore = FacilityState & FacilityAction;

export const useFacilityStore = create<FacilityStore>((set) => ({
	cursols: {
		id: 1,
		number: 0,
		defaultRate: 0.1,
		upgrades: 1
	},
	grandmas: {
		id: 2,
		number: 0,
		defaultRate: 1,
		upgrades: 1
	},
	fields: {
		id: 3,
		number: 0,
		defaultRate: 8,
		upgrades: 1
	},
	factories: {
		id: 4,
		number: 0,
		defaultRate: 47,
		upgrades: 1
	},
	labolatories: {
		id: 5,
		number: 0,
		defaultRate: 260,
		upgrades: 1
	},
	mines: {
		id: 6,
		number: 0,
		defaultRate: 0,
		upgrades: 1
	},
	buyCursol: () =>
		set((state) => {
			return {
				cursols: {
					...state.cursols,
					number: state.cursols.number + 1
				}
			};
		}),
	buyGrandma: () =>
		set((state) => {
			return {
				grandmas: {
					...state.grandmas,
					number: state.grandmas.number + 1
				}
			};
		}),
	buyField: () =>
		set((state) => {
			return {
				fields: {
					...state.fields,
					number: state.fields.number + 1
				}
			};
		}),
	buyFactory: () =>
		set((state) => {
			return {
				factories: {
					...state.factories,
					number: state.factories.number + 1
				}
			};
		}),
	buyLabolatory: () =>
		set((state) => {
			return {
				labolatories: {
					...state.labolatories,
					number: state.labolatories.number + 1
				}
			};
		}),
	buyMine: () =>
		set((state) => {
			return {
				mines: {
					...state.mines,
					number: state.mines.number + 1
				}
			};
		})
}));
