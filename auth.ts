import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Nom d'utilisateur", type: 'text' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
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
})
