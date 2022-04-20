import { ThemeProvider } from 'styled-components';
import theme from '.';
import GlobalStyles from '../styles';

const renderTheme = (Element: JSX.Element) => {
     return <ThemeProvider theme={theme}>
          <GlobalStyles />
          {Element}
     </ThemeProvider>
};

export default renderTheme;