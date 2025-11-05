import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ओशोच्या विचार - Osho\'s Wisdom',
  description: 'ओशोच्या १०० विचारांचे पुस्तक',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mr">
      <body>{children}</body>
    </html>
  )
}
