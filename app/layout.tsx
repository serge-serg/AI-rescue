import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Rescue',
  description: 'Exploring the future of AI and its implications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Sidebar />
          <main className="flex-grow p-16 max-w-[1200px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}