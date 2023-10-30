import { createTheme } from '@mui/material';
import { AppTheme } from 'theme';

const { palette } = createTheme();
const defaultLight = createTheme({
  palette: {
    mode: 'light',
  },
});
const defaultDark = createTheme({
  palette: {
    mode: 'dark',
  },
});
export const theme: AppTheme = {
  dark: {
    palette: {
      ...defaultDark.palette,
      background: {
        default: '#0E1116',
        paper: '#020409',
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
      },
      upvote: palette.augmentColor({
        color: {
          main: '#66bb6a',
          contrastText: 'rgba(0,0,0,0.87)',
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: '#f44336',
          contrastText: '#fff',
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: '##010409',
          contrastText: 'white',
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: '##010409',
          contrastText: 'white',
        },
      }),
    },
  },
  light: {
    palette: {
      ...defaultLight.palette,
      upvote: palette.augmentColor({
        color: {
          main: '#2e7d32',
          contrastText: '#32009a',
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: '#d32f2f',
          contrastText: '#fff',
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: '#fff',
          contrastText: '#black',
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: '#fff',
          contrastText: '#black',
        },
      }),
    },
  },
};
