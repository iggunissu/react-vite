import React from 'react';
import { useCountStore } from '../../../stores';

export const IncreaseButton = () => {
	const increaseCount = useCountStore((state) => state.increaseCount);
	return (
		<>
			<button onClick={increaseCount}>Increase</button>
		</>
	);
};
export default IncreaseButton;
