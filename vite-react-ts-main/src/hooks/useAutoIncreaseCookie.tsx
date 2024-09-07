import { useCookieStore } from '@/stores';
import { useEffect } from 'react';

export const useAutoIncreaseCookie = () => {
	const increaseCookie = useCookieStore((state) => state.increaseCookie);

	useEffect(() => {
		const interval = setInterval(() => {
			// 1ミリ秒ごとにクッキーを増やす
			increaseCookie();
		}, 1);

		// コンポーネントがアンマウントされた時にクリーンアップする
		return () => clearInterval(interval);
	}, []);
};

export default useAutoIncreaseCookie;
