import React from 'react';
import {
	CursolShop,
	FactoryShop,
	FieldShop,
	GrandmaShop,
	LabolatoryShop,
	MineShop
} from '../elements';

export const Shops = () => {
	const main: React.CSSProperties = {};
	return (
		<>
			<div style={main}>
				<CursolShop />
				<GrandmaShop />
				<FieldShop />
				<FactoryShop />
				<MineShop />
				<LabolatoryShop />
			</div>
		</>
	);
};
export default Shops;
