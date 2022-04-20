import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../global/theme';
import GlobalStyles from '../global/styles';
import Head from 'next/head';
import { DynamicHeaderComponent } from '../components';

function ProxityStudiosApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Proxity Studios</title>
      </Head>

      <GlobalStyles />

      {/* getLayout(); */}
      <DynamicHeaderComponent /> 
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default ProxityStudiosApp;