import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingButton } from '@/components/ui/FloatingButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteConfig.defaultMetadata.title,
  description: siteConfig.defaultMetadata.description,
  keywords: siteConfig.defaultMetadata.keywords,
  verification: {
    google: 'ULSqaFDUf6p1IdaIuCGxPQ6gBfP98MnWnn8r8ujDrvs',
  },
  icons: {
    icon: '/mrr-logo.png',
    apple: '/mrr-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  )
}
