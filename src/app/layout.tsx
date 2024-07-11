import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/AuthProvider'
import { Toaster } from 'sonner'
import { UserSessionProvider } from '@/context/UserSessionProvider'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Clon messenger | chat en tiempo real',
  description: 'Clon de la aplicación la pagina web messenger de facebook #meta'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <UserSessionProvider>
          <AuthProvider>
            <Toaster position='top-center' richColors />
            {children}
          </AuthProvider>
        </UserSessionProvider>
      </body>
    </html>
  )
}
