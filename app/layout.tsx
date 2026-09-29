import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import './globals.css'

const heading = Montserrat({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-heading' })
const body = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-body' })

const title = 'Curatte · The affiliate rails for AI agents'
const description =
  'Every affiliate network, every deal and every product in one place, so any AI agent can curate from it and get paid when a shopper buys.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.curatte.com'),
  title,
  description,
  openGraph: { title, description, url: 'https://www.curatte.com', siteName: 'Curatte', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary', title, description },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
