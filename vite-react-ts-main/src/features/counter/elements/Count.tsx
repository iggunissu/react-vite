import React from 'react';
import { useCountStore } from '../../../stores';

export const Count = () => {
	const count = useCountStore((state) => state.count);
	return (
		<>
			<h2>count: {count}</h2>
		</>
	);
};
export default Count;
