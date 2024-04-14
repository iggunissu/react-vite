import React from 'react';
import { useFacilityStore } from '../../../stores';

export const GrandmaShop = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '7%',
		width: '100%',
		top: '47%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '16pt',
		textAlign: 'right',
		opacity: 1
	};

	const grandmas = useFacilityStore((state) => state.grandmas);
	const buyGrandma = useFacilityStore((state) => state.buyGrandma);
	return (
		<>
			<button style={countStyle} onClick={buyGrandma}>
				おばあちゃんの人数 : <br />
				{grandmas.number}人
			</button>
		</>
	);
};
export default GrandmaShop;
