import '@testing-library/jest-dom'
import React from 'react'

// Polyfill pour React.act avec React 19
if (!React.act) {
  React.act = (callback) => {
    const result = callback()
    if (result && typeof result.then === 'function') {
      return result
    }
    return Promise.resolve(result)
  }
}

// Mock framer-motion for tests - pass through components without animation
jest.mock('framer-motion', () => {
  const React = require('react')
  return {
    motion: {
      create: (Component) => Component, // Just return the component without animation
      div: 'div',
      section: 'section',
      header: 'header',
      nav: 'nav',
      footer: 'footer',
      button: 'button',
      span: 'span',
      img: 'img',
      a: 'a',
    },
    AnimatePresence: ({ children }) => children,
    useAnimation: () => ({
      start: jest.fn(),
      stop: jest.fn(),
    }),
  }
})

// Mock MUI theme and media queries
jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material')
  return {
    ...actual,
    useTheme: () => ({
      breakpoints: {
        down: () => false,
        up: () => true,
        between: () => false,
      },
      palette: {
        mode: 'light',
        primary: { main: '#1976d2' },
        secondary: { main: '#dc004e' },
      },
    }),
    useMediaQuery: () => false,
  }
})

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}))

// Suppress console warnings in tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('ReactDOMTestUtils.act') ||
        args[0].includes('Not implemented: HTMLFormElement.prototype.requestSubmit') ||
        args[0].includes('useLayoutEffect'))
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
