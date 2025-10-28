export const colors = {
  primary: {
    darkGreen: '#2F4F4F',
    beige: '#F5F5DC',
    brown: '#8B4513',
    white: '#FFFFFF',
  },
  semantic: {
    background: '#F5F5DC',
    surface: '#FFFFFF',
    text: '#2F4F4F',
    accent: '#8B4513',
    border: '#8B4513',
  },
} as const

export const typography = {
  fontFamily: {
    heading: 'var(--font-montserrat), sans-serif',
    body: 'var(--font-lora), serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
} as const

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
} as const

export const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const

export const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
} as const

export const shadows = {
  sm: '0 1px 2px 0 rgba(47, 79, 79, 0.05)',
  md: '0 4px 6px -1px rgba(47, 79, 79, 0.1)',
  lg: '0 10px 15px -3px rgba(47, 79, 79, 0.1)',
  xl: '0 20px 25px -5px rgba(47, 79, 79, 0.1)',
} as const

export const transitions = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const
