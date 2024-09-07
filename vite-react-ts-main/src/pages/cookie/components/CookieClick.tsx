import cookieIcon from '../../../assets/cookie.svg';
import { useCookieStore } from '../../../stores';
import IconButton from '@mui/material/IconButton';

export const CookieClick = () => {
	const pushCount = useCookieStore((state) => state.pushCookie);

	return (
		<>
			<IconButton onClick={pushCount}>
				<img src={cookieIcon} width={400} height={400} />
			</IconButton>
		</>
	);
};
export default CookieClick;
