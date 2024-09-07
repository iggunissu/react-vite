import React from 'react';
import { useFacilityStore } from '../../../stores';
import { FacilityEnum } from '@/enum';
import { Box } from '@mui/material';

export const Cursor = () => {
	const cursols = useFacilityStore(
		(state) => state.facilities[FacilityEnum.Cursor]
	);
	return (
		<>
			<Box sx={{ textAlign: 'right', fontSize: '24px' }}>
				カーソルの数 : {cursols?.number ?? 0}個
			</Box>
		</>
	);
};
export default Cursor;
