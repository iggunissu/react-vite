import { FacilityEnum } from '@/enum';
import { Facility, SaveButton } from './components';
import { useFacilityStore } from '@/stores';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const FacilitiesLayout = () => {
	const facilities = useFacilityStore((state) => state.facilities);
	const filteredFacilities = facilities.filter(
		(facility) => facility.id !== FacilityEnum.Cursor
	);
	return (
		<>
			<Grid2 container>
				<Grid2 xs={12}>
					<SaveButton />
				</Grid2>
				{filteredFacilities.map((item) => (
					<Grid2 key={item.name} xs={12}>
						<Facility key={item.name} name={item.name} count={item.number} />
					</Grid2>
				))}
			</Grid2>
		</>
	);
};
export default FacilitiesLayout;
