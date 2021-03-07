import React from 'react';
import type { AppProps } from 'next/app';

import '../styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
