import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Auto Playground',
  description: 'Virtual Exploration Platform for SDV Applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
