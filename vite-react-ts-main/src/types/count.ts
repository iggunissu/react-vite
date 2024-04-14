export type CountState = {
	count: number;
};

export type CountAction = {
	increaseCount: () => void;
	decreaseCount: () => void;
	resetCount: () => void;
};
