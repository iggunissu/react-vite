import React from 'react';
import { Cookie, Facilities } from './features';

export function App() {
	const cookieStyle: React.CSSProperties = {
		width: '20%',
		height: '100%',
		position: 'relative'
	};
	const facilityStyle: React.CSSProperties = {
		width: '50%',
		height: '100%',
		position: 'relative'
	};
	const shopStyle: React.CSSProperties = {
		width: '30%',
		height: '100%',
		position: 'relative'
	};
	const layout: React.CSSProperties = {
		display: 'flex',
		width: 1900,
		height: 900
	};

	return (
		<>
			<div style={layout}>
				<div style={cookieStyle}>
					<Cookie />
				</div>
				<div style={facilityStyle}>
					<Facilities />
				</div>
				<div style={shopStyle}>
					<Cookie />
				</div>
			</div>
		</>
	);
}

export default App;
