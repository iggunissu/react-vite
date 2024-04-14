import React from 'react';
import cookieIcon from '../../../assets/cookie.svg';
import { useCookieStore } from '../../../stores';

export const CookieClick = () => {
	const pushCount = useCookieStore((state) => state.pushCookie);

	const push = () => pushCount();

	const coockieStyle: React.CSSProperties = {
		borderRadius: 0,
		border: 0,
		padding: 0,
		backgroundColor: '#FFFFFF',
		cursor: 'pointer',
		opacity: 1,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	};
	return (
		<>
			<button onClick={push} style={coockieStyle}>
				<img src={cookieIcon} width={300} height={300} />
			</button>
		</>
	);
};
export default CookieClick;
