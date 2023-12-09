import type { Metadata } from 'next'
import '../Styles/globals.css'


export const metadata: Metadata = {
  title: 'Bookings.com',
  description: 'Created by Sanket',
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
