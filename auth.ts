import NextAuth, { type User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: "Nom d'utilisateur", type: 'text' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      authorize: async (credentials): Promise<User | null> => {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: 'admin@carineland.fr',
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: async ({ session, token }) => {
      if (session?.user && token.id) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
})
