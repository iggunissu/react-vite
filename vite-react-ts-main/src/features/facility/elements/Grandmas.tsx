import React from 'react';
import { useFacilityStore } from '../../../stores';

export const Grandmas = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		height: '15%',
		width: '100%',
		top: '20%',
		left: '50%',
		transform: 'translate(-50%, 0%)',
		fontSize: '24pt',
		textAlign: 'right'
	};

	const grandmas = useFacilityStore((state) => state.grandmas);
	return (
		<>
			<div style={countStyle}>
				おばあちゃんの人数 : <br />
				{grandmas.number}人
			</div>
		</>
	);
};
export default Grandmas;
