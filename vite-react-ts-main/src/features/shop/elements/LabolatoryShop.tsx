import React from 'react';
import { useFacilityStore } from '../../../stores';

export const LabolatoryShop = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '7%',
		width: '100%',
		top: '75%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '16pt',
		textAlign: 'right',
		opacity: 1
	};

	const labolatories = useFacilityStore((state) => state.labolatories);
	const buyLabolatory = useFacilityStore((state) => state.buyLabolatory);
	return (
		<>
			<button style={countStyle} onClick={buyLabolatory}>
				研究所の数 : <br />
				{labolatories.number}個
			</button>
		</>
	);
};
export default LabolatoryShop;
