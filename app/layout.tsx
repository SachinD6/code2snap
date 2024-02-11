import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Transform Your Code into Stunning Images',
  description: 'Convert your code snippets into visually appealing images. Customize syntax colors, toggle background visibility, and switch between dark and light themes effortlessly.'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gray-950'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
