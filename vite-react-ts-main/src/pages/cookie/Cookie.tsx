import { Box, Stack } from '@mui/material';
import { CookieClick, CookieCount, Cursols } from '.';

export const Cookie = () => {
	return (
		<>
			<Stack
				alignItems="center"
				direction={'column'}
				justifyContent={'space-evenly'}
				height={'80vh'}>
				<Box>
					<CookieCount />
				</Box>
				<Box>
					<CookieClick />
				</Box>
				<Box>
					<Cursols />
				</Box>
			</Stack>
		</>
	);
};
export default Cookie;
