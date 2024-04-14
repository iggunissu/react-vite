import React from 'react';
import { useFacilityStore } from '../../../stores';

export const Labolatories = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '15%',
		width: '100%',
		top: '80%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '24pt',
		textAlign: 'right'
	};

	const labolatories = useFacilityStore((state) => state.labolatories);
	return (
		<>
			<div style={countStyle}>
				研究所の数 : <br />
				{labolatories.number}個
			</div>
		</>
	);
};
export default Labolatories;
