import React from 'react';
import { useFacilityStore } from '../../../stores';

export const Fields = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '15%',
		width: '100%',
		top: '35%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '24pt',
		textAlign: 'right'
	};

	const fields = useFacilityStore((state) => state.fields);
	return (
		<>
			<div style={countStyle}>
				畑の数 : <br />
				{fields.number}個
			</div>
		</>
	);
};
export default Fields;
