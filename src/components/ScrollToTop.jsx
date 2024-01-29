import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // useLocationでURLを取得
  const { pathname } = useLocation();

  // useEffectを使用して、URLを取得するたびに、一番上にスクロールする。
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
