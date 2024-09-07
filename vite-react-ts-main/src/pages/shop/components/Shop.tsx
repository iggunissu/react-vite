import React from 'react';
import { useFacilityStore } from '../../../stores';
import { FacilityEnum } from '@/enum';
import { Button } from '@mui/material';

type ShopProps = {
	id: FacilityEnum;
	name: string;
	count: number;
};

export const Shop: React.FC<ShopProps> = ({ id, name, count }) => {
	const buyFacility = useFacilityStore((state) => state.buyFacility);
	const buy = () => {
		buyFacility(id);
	};
	return (
		<>
			<Button variant="outlined" onClick={buy}>
				{name}の数 : {count}個
			</Button>
		</>
	);
};
export default Shop;
