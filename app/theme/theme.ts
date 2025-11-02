'use client'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Montserrat, Lora } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
})

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2d5016',
      light: '#4a7c2a',
      dark: '#1a3009',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8b4513',
      light: '#a0673b',
      dark: '#5c2e0a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#faf8f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e20',
      secondary: '#5a6c4d',
    },
    success: {
      main: '#66bb6a',
    },
    info: {
      main: '#42a5f5',
    },
    warning: {
      main: '#ffa726',
    },
    error: {
      main: '#ef5350',
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: lora.style.fontFamily,
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(45, 80, 22, 0.05)',
    '0px 4px 8px rgba(45, 80, 22, 0.08)',
    '0px 6px 12px rgba(45, 80, 22, 0.1)',
    '0px 8px 16px rgba(45, 80, 22, 0.12)',
    '0px 10px 20px rgba(45, 80, 22, 0.14)',
    '0px 12px 24px rgba(45, 80, 22, 0.16)',
    '0px 14px 28px rgba(45, 80, 22, 0.18)',
    '0px 16px 32px rgba(45, 80, 22, 0.2)',
    '0px 18px 36px rgba(45, 80, 22, 0.22)',
    '0px 20px 40px rgba(45, 80, 22, 0.24)',
    '0px 22px 44px rgba(45, 80, 22, 0.26)',
    '0px 24px 48px rgba(45, 80, 22, 0.28)',
    '0px 26px 52px rgba(45, 80, 22, 0.3)',
    '0px 28px 56px rgba(45, 80, 22, 0.32)',
    '0px 30px 60px rgba(45, 80, 22, 0.34)',
    '0px 32px 64px rgba(45, 80, 22, 0.36)',
    '0px 34px 68px rgba(45, 80, 22, 0.38)',
    '0px 36px 72px rgba(45, 80, 22, 0.4)',
    '0px 38px 76px rgba(45, 80, 22, 0.42)',
    '0px 40px 80px rgba(45, 80, 22, 0.44)',
    '0px 42px 84px rgba(45, 80, 22, 0.46)',
    '0px 44px 88px rgba(45, 80, 22, 0.48)',
    '0px 46px 92px rgba(45, 80, 22, 0.5)',
    '0px 48px 96px rgba(45, 80, 22, 0.52)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '10px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(45, 80, 22, 0.2)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 6px 16px rgba(45, 80, 22, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 12px rgba(45, 80, 22, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 8px 24px rgba(45, 80, 22, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 8px rgba(45, 80, 22, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
            '&:hover': {
              background: '#555',
            },
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

theme = responsiveFontSizes(theme)

export { theme }
