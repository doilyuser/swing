import './globals.css'
import type { Metadata } from 'next'
import { Finger_Paint, Poppins } from 'next/font/google'

//export const fingerPaint = Finger_Paint({ weight: ['400'], subsets: ['latin'] })
export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  title: 'Swing',
  description: "A quiz app for NZ's 2023 election",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
