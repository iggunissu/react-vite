import React from 'react';
import { useCountStore } from '../../../stores';

export const ResetButton = () => {
	const resetCount = useCountStore((state) => state.resetCount);
	return (
		<>
			<button onClick={resetCount}>Reset</button>
		</>
	);
};
export default ResetButton;
