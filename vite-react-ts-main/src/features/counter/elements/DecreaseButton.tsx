import React from 'react';
import { useCountStore } from '../../../stores';

export const DecreaseButton = () => {
	const decreaseCount = useCountStore((state) => state.decreaseCount);
	return (
		<>
			<button onClick={decreaseCount}>Decrease</button>
		</>
	);
};
export default DecreaseButton;
