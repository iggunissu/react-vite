import { Box } from '@mui/material';
import React from 'react';

type FacilityProps = {
	name: string;
	count: number;
};

export const Facility: React.FC<FacilityProps> = ({ name, count }) => {
	return (
		<>
			<Box minHeight={80} alignContent={'center'}>
				{name}の数 : {count}個
			</Box>
		</>
	);
};
export default Facility;
