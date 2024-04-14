import React from 'react';
import { useFacilityStore } from '../../../stores';

export const FactoryShop = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '7%',
		width: '100%',
		top: '61%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '16pt',
		textAlign: 'right',
		opacity: 1
	};

	const factories = useFacilityStore((state) => state.factories);
	const buyFactory = useFacilityStore((state) => state.buyFactory);
	return (
		<>
			<button style={countStyle} onClick={buyFactory}>
				工場の数 : <br />
				{factories.number}個
			</button>
		</>
	);
};
export default FactoryShop;
