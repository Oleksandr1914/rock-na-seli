import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Ysabeau } from 'next/font/google'
import { Providers } from '@/store/provider'

const ysabeau = Ysabeau({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Rock-na-seli',
  description: 'Фестиваль живої музики Рок на селі',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={ysabeau.className}>
        <Header />
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  )
}
