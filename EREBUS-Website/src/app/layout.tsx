/**
 * EREVUS Collective Website - Root Layout
 * 
 * Copyright (c) 2025 EREVUS Collective. All rights reserved.
 * 
 * This code is licensed under a custom license that allows educational use
 * with attribution but prohibits commercial use without explicit permission.
 * 
 * For licensing inquiries: erevus.ai@proton.me
 * Original repository: https://github.com/erevus-collective/erevus-website
 * 
 * Educational use welcome with proper attribution.
 * Commercial use requires licensing agreement.
 */

import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'EREVUS CLUSTER - Collaborative Force Network',
  description: 'Joining forces to solve problems, make products, and build connections. Organizing collective efforts under one umbrella for shared success.',
  keywords: ['EREVUS', 'Cluster', 'Collaboration', 'Network', 'Problem Solving', 'Collective Efforts', 'Partnerships'],
  authors: [{ name: 'EREVUS CLUSTER' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  metadataBase: new URL('https://erevus.netlify.app'),
  alternates: {
    canonical: 'https://erevus.netlify.app',
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/erevus-logo.png',
  },
  openGraph: {
    title: 'EREVUS CLUSTER - Collaborative Force Network',
    description: 'Joining forces to solve problems, make products, and build connections. Organizing collective efforts under one umbrella for shared success.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EREVUS CLUSTER',
    images: [
      {
        url: '/erevus-logo.png',
        width: 1200,
        height: 630,
        alt: 'EREVUS CLUSTER - Collaborative Force Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ErevusAi',
    creator: '@ErevusAi',
    title: 'EREVUS CLUSTER - Collaborative Force Network',
    description: 'Joining forces to solve problems, make products, and build connections. Organizing collective efforts under one umbrella for shared success.',
    images: ['/erevus-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script src="/sounds/gameboy-sfx.js" defer></script>
      </head>
      <body className={`${inter.className} bg-erevus-dark text-white antialiased font-erevus-body`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}