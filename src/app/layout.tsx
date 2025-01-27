import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modern Web Base',
  description: 'Modern web geliştirme için başlangıç şablonu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}