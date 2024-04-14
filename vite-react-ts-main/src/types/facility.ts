export type Facility = {
	id: number;
	number: number;
	defaultRate: number;
	upgrades: number;
};

export type FacilityState = {
	cursols: Facility;
	grandmas: Facility;
	fields: Facility;
	factories: Facility;
	labolatories: Facility;
	mines: Facility;
};

export type FacilityAction = {
	buyCursol: () => void;
	buyGrandma: () => void;
	buyField: () => void;
	buyFactory: () => void;
	buyLabolatory: () => void;
	buyMine: () => void;
};
