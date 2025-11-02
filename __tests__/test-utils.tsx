import React from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'

// Simple pass-through render for testing
const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  rtlRender(ui, options)

export * from '@testing-library/react'
export { customRender as render }
