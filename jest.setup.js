import '@testing-library/jest-dom'
import React from 'react'

// Mock window.matchMedia - only if window exists (browser environment)
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
}

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
  const actualReact = jest.requireActual('react')
  return {
    motion: {
      create: (Component) => {
        // Return a functional component that wraps the original component
        const MotionWrapper = actualReact.forwardRef((props, ref) => {
          return actualReact.createElement(Component, { ...props, ref })
        })
        MotionWrapper.displayName = `Motion(${Component.displayName || Component.name || 'Component'})`
        return MotionWrapper
      },
      div: ({ children, ...props }) => actualReact.createElement('div', props, children),
      section: ({ children, ...props }) => actualReact.createElement('section', props, children),
      header: ({ children, ...props }) => actualReact.createElement('header', props, children),
      nav: ({ children, ...props }) => actualReact.createElement('nav', props, children),
      footer: ({ children, ...props }) => actualReact.createElement('footer', props, children),
      button: ({ children, ...props }) => actualReact.createElement('button', props, children),
      span: ({ children, ...props }) => actualReact.createElement('span', props, children),
      img: ({ children, ...props }) => actualReact.createElement('img', props, children),
      a: ({ children, ...props }) => actualReact.createElement('a', props, children),
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
