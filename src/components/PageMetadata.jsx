import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMetadata } from '../pageMetadata';

export default function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPageMetadata(pathname);
    if (!page) return;

    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', page.canonical);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', page.canonical);
  }, [pathname]);

  return null;
}
