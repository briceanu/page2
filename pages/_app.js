import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ThemeProvider defalutTheme='system' attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
