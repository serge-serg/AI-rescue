import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Super AI Challenge',
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
        <div className="container w-full">
          <Navigation />
          <main className=" md:w-3/5 max-w-[1200px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}