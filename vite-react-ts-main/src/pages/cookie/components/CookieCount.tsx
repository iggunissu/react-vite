import { useCookieStore } from '../../../stores';
import { Box } from '@mui/material';
import { useAutoIncreaseCookie } from '@/hooks';

export const CookieCount = () => {
	const cookie = useCookieStore((state) => state.cookie);
	useAutoIncreaseCookie();

	return (
		<>
			<Box sx={{ fontSize: '24px' }}>
				クッキーの数 : <br />
				{cookie < 10000 ? cookie.toFixed(3) : cookie.toFixed(1)}
			</Box>
		</>
	);
};
export default CookieCount;
