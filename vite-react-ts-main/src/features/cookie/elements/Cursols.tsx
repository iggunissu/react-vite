import React from 'react';
import { useFacilityStore } from '../../../stores';

export const Cursols = () => {
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

	const cursols = useFacilityStore((state) => state.cursols);
	return (
		<>
			<div style={countStyle}>
				カーソルの数 : <br />
				{cursols.number}個
			</div>
		</>
	);
};
export default Cursols;
