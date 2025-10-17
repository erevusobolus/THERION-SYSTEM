import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kinesis - Professional Leadership Development | Danai Leventakou',
    description: 'Transform your team through emotional intelligence, decision-making, and communication excellence. Professional workshops and coaching by Danai Leventakou, specialist in learning sciences, psychology, and somatics.',
    keywords: [
        'leadership development',
        'emotional intelligence training',
        'team coaching',
        'professional development',
        'communication skills',
        'decision making',
        'workplace training',
        'Danai Leventakou',
        'France',
        'Lyon'
    ],
    authors: [{ name: 'Danai Leventakou', url: 'https://kinesisnow.com' }],
    creator: 'Danai Leventakou',
    publisher: 'Kinesis',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://kinesisnow.com',
        siteName: 'Kinesis',
        title: 'Kinesis - Professional Leadership Development',
        description: 'Transform your team through emotional intelligence, decision-making, and communication excellence.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Kinesis - Professional Leadership Development',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kinesis - Professional Leadership Development',
        description: 'Transform your team through emotional intelligence, decision-making, and communication excellence.',
        images: ['/og-image.jpg'],
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
                <meta name="msapplication-TileColor" content="#0f172a" />
            </head>
            <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900`}>
                {children}
            </body>
        </html>
    )
}