import { useFacilityStore } from '@/stores';
import { Shop } from './components';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const Shops = () => {
	const facilities = useFacilityStore((state) => state.facilities);
	return (
		<>
			<Grid2 container>
				{Object.keys(facilities).map((key) => (
					<Grid2 key={key} xs={12}>
						<Shop
							key={key}
							name={facilities[Number(key)].name}
							count={facilities[Number(key)].number}
							id={Number(key)}
						/>
					</Grid2>
				))}
			</Grid2>
		</>
	);
};
export default Shops;
