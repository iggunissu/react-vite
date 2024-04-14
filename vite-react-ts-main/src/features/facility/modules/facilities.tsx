import React from 'react';

import {
	Factories,
	Fields,
	Grandmas,
	Labolatories,
	Mines,
	SaveButton
} from '../elements';

export const Facilities = () => {
	const main: React.CSSProperties = {};
	return (
		<>
			<div style={main}>
				<SaveButton />
				<Grandmas />
				<Fields />
				<Factories />
				<Mines />
				<Labolatories />
			</div>
		</>
	);
};
export default Facilities;
