import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Simple pass-through render for testing
const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, options)

export * from '@testing-library/react'
export { customRender as render }
