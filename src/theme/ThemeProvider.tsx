import { CssBaseline, useMediaQuery } from '@mui/material';
import { GlobalStyles } from '@mui/styled-engine';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { color as ThemeColors } from './index';

type MyThemeProviderProps = {
  children?: ReactNode;
};

export const ThemeContext = createContext({
  currentColorMode: 'light' as 'light' | 'dark',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: (mode: 'light' | 'dark') => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  shuffleColorTheme: () => {},
});

export default function CustomThemeProvider(props: MyThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const [theme, setTheme] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      currentColorMode: mode,
      toggleColorMode: (mode: 'light' | 'dark') => {
        setMode(mode);
      },
      shuffleColorTheme: () => {
        setTheme((prevTheme) => ((prevTheme + 1) % 4) as 0 | 1 | 2 | 3);
      },
    }),
    [mode],
  );

  const _theme = useMemo(
    () => createTheme(ThemeColors[theme][mode] as ThemeOptions),
    [mode, theme],
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={_theme}>
        <GlobalStyles styles={{}} />
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
