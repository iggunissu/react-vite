import React from 'react';
import { useFacilityStore } from '../../../stores';

export const CursolShop = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '7%',
		width: '100%',
		top: '40%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '16pt',
		textAlign: 'right',
		opacity: 1
	};

	const cursols = useFacilityStore((state) => state.cursols);
	const buyCursols = useFacilityStore((state) => state.buyCursol);
	return (
		<>
			<button style={countStyle} onClick={buyCursols}>
				カーソルの数 : <br />
				{cursols.number}個
			</button>
		</>
	);
};
export default CursolShop;
