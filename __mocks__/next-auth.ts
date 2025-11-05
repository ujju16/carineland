export const handlers = {
  GET: jest.fn(),
  POST: jest.fn(),
}

export const auth = jest.fn()
export const signIn = jest.fn()
export const signOut = jest.fn()

export default jest.fn(() => ({
  providers: [],
  callbacks: {},
}))
