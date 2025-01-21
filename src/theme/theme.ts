import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1400px',
          },
        },
      },
    },
  },
});

export default theme;
