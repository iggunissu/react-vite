import React from 'react';
import { useFacilityStore } from '../../../stores';

export const FieldShop = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '7%',
		width: '100%',
		top: '54%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '16pt',
		textAlign: 'right',
		opacity: 1
	};

	const fields = useFacilityStore((state) => state.fields);
	const buyFields = useFacilityStore((state) => state.buyField);
	return (
		<>
			<button style={countStyle} onClick={buyFields}>
				畑の数 : <br />
				{fields.number}個
			</button>
		</>
	);
};
export default FieldShop;
