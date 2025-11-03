'use client'

import SessionProvider from '@/app/components/SessionProvider'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
