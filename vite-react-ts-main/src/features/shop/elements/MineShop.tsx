import React from 'react';
import { useFacilityStore } from '../../../stores';

export const MineShop = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '7%',
		width: '100%',
		top: '68%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '16pt',
		textAlign: 'right',
		opacity: 1
	};

	const mines = useFacilityStore((state) => state.mines);
	const buyMine = useFacilityStore((state) => state.buyMine);
	return (
		<>
			<button style={countStyle} onClick={buyMine}>
				鉱山の数 : <br />
				{mines.number}個
			</button>
		</>
	);
};
export default MineShop;
