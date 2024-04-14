import React from 'react';
import { useFacilityStore } from '../../../stores';

export const Mines = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '15%',
		width: '100%',
		top: '65%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '24pt',
		textAlign: 'right'
	};

	const mines = useFacilityStore((state) => state.mines);
	return (
		<>
			<div style={countStyle}>
				鉱山の数 : <br />
				{mines.number}個
			</div>
		</>
	);
};
export default Mines;
