import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Cookie, FacilitiesLayout, Shops } from './pages';
import { useFacilityStore } from './stores';
import { useEffect } from 'react';

export function App() {
	const getData = useFacilityStore((state) => state.getFacilities);
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Grid2 container>
				<Grid2 xs={3}>
					<Cookie />
				</Grid2>
				<Grid2 xs={6}>
					<FacilitiesLayout />
				</Grid2>
				<Grid2 xs={3}>
					<Shops />
				</Grid2>
			</Grid2>
		</>
	);
}

export default App;
