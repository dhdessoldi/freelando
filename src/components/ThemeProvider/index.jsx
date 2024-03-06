import {ThemeProvider} from "@emotion/react";

const theme = {
  colors: {
    white: '#F5F5F5',
    warning: '',
    focus: '',
    primary: {
      a: '#5754ED',
      b: '',
      c: '',
    },
    secondary: {
      a: '#EBEAF9',
      b: '',
      c: '',
    },
    neutral: {
      a: '#373737',
      b: '',
      c: '',
      d: '',
    },
    dark: {
      a: '',
      b: '',
    }
  },
  sizes: {
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px',
  },
  fontFamily: "'Monteserrat', sans-serif",
}

export const Theme = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}