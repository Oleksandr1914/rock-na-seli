import './globals.css'
import type { Metadata } from 'next'
import { Ysabeau } from 'next/font/google'

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
      <body className={ysabeau.className}>{children}</body>
    </html>
  )
}
