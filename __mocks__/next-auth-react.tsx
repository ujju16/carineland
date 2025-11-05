import React from 'react'

export const useSession = jest.fn(() => ({
  data: null,
  status: 'unauthenticated',
  update: jest.fn(),
}))

export const signIn = jest.fn()
export const signOut = jest.fn()

export const SessionProvider = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)
