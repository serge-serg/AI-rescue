import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './tooltip.css'
import './sidebar.css'
import './classes.css'
import './media.css'
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
          {/* <Link className="hidden xl:block absolute" href="/lets-connect" style={{ top: '1rem', right: '5vw', fontWeight: 600 }}>
            Let&apos;s Connect
          </Link> */}
          <Navigation />
          <main className="max-w-[1200px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}