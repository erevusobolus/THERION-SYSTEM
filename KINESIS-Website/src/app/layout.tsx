import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '../../components/layout/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'KINESIS - Professional Leadership Development',
        template: '%s | KINESIS'
    },
    description: 'Transform your team through emotional intelligence, clear communication, and confident decision-making. Expert coaching with Danai Leventakou - specialist in learning sciences, psychology, and somatics.',
    keywords: [
        'leadership development',
        'team coaching',
        'emotional intelligence',
        'communication training',
        'decision making',
        'psychology',
        'somatics',
        'learning sciences',
        'professional development',
        'team transformation'
    ],
    authors: [{ name: 'Danai Leventakou', url: 'https://kinesisnow.com' }],
    creator: 'Danai Leventakou',
    publisher: 'KINESIS',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://kinesisnow.com'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['fr_FR'],
        url: 'https://kinesisnow.com',
        siteName: 'KINESIS',
        title: 'KINESIS - Professional Leadership Development',
        description: 'Transform your team through emotional intelligence, clear communication, and confident decision-making.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'KINESIS - Professional Leadership Development',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KINESIS - Professional Leadership Development',
        description: 'Transform your team through emotional intelligence, clear communication, and confident decision-making.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#0f172a" />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            </head>
            <body className={`${inter.className} antialiased bg-slate-950 text-slate-100`}>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    )
}