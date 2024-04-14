import React from 'react';
import { useFacilityStore } from '../../../stores';

export const Factories = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '15%',
		width: '100%',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '24pt',
		textAlign: 'right'
	};

	const factories = useFacilityStore((state) => state.factories);
	return (
		<>
			<div style={countStyle}>
				工場の数 : <br />
				{factories.number}個
			</div>
		</>
	);
};
export default Factories;
