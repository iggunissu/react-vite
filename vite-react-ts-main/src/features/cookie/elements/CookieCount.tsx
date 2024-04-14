import React from 'react';
import { useCookieStore } from '../../../stores';

export const CookieCount = () => {
	const countStyle: React.CSSProperties = {
		position: 'absolute',
		width: 'max-content',
		top: '20%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		fontSize: '24pt'
	};

	const coockie = useCookieStore((state) => state.cookie);
	return (
		<>
			<div style={countStyle}>
				クッキーの数 : <br />
				{coockie}
			</div>
		</>
	);
};
export default CookieCount;
