import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Currate - AI-Powered Curation & Aggregation Platform',
  description: 'Experience the future of intelligent curation with Geter.ai and advanced coupon aggregation. Transforming how businesses discover and leverage opportunities.',
  keywords: 'AI, curation, aggregation, Geter.ai, coupons, intelligent automation, business solutions',
  authors: [{ name: 'Currate' }],
  openGraph: {
    title: 'Currate - AI-Powered Curation & Aggregation Platform',
    description: 'Experience the future of intelligent curation with Geter.ai and advanced coupon aggregation.',
    url: 'https://currate.ai',
    siteName: 'Currate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Currate - AI-Powered Curation & Aggregation Platform',
    description: 'Experience the future of intelligent curation with Geter.ai and advanced coupon aggregation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}