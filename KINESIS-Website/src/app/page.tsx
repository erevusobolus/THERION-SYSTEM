'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import components to optimize loading
const Header = dynamic(() => import('../../components/layout/Header'), {
    ssr: true,
    loading: () => (
        <div className="h-20 bg-slate-950/90 backdrop-blur-lg animate-pulse" />
    )
})

const LoadingScreen = dynamic(() => import('../../components/ui/LoadingScreen'), {
    ssr: false
})

const Hero = dynamic(() => import('../../components/sections/Hero'), {
    ssr: true,
    loading: () => (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950 animate-pulse" />
    )
})

const About = dynamic(() => import('../../components/sections/About'), {
    ssr: false,
    loading: () => (
        <div className="py-24 bg-slate-950 animate-pulse" />
    )
})

const Workshops = dynamic(() => import('../../components/sections/Workshops'), {
    ssr: false,
    loading: () => (
        <div className="py-24 bg-slate-950 animate-pulse" />
    )
})

const TeamCoaching = dynamic(() => import('../../components/sections/TeamCoaching'), {
    ssr: false,
    loading: () => (
        <div className="py-24 bg-slate-950 animate-pulse" />
    )
})

const Contact = dynamic(() => import('../../components/sections/Contact'), {
    ssr: false,
    loading: () => (
        <div className="py-24 bg-slate-950 animate-pulse" />
    )
})

const Footer = dynamic(() => import('../../components/layout/Footer'), {
    ssr: true,
    loading: () => (
        <div className="h-96 bg-slate-900 animate-pulse" />
    )
})

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadProgress, setLoadProgress] = useState(0)

    useEffect(() => {
        // Simulate loading progress
        const loadingTimer = setInterval(() => {
            setLoadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(loadingTimer)
                    setTimeout(() => setIsLoading(false), 500)
                    return 100
                }
                return prev + Math.random() * 15
            })
        }, 150)

        // Ensure loading completes within reasonable time
        const maxLoadingTimer = setTimeout(() => {
            setLoadProgress(100)
            setTimeout(() => setIsLoading(false), 500)
        }, 3000)

        return () => {
            clearInterval(loadingTimer)
            clearTimeout(maxLoadingTimer)
        }
    }, [])

    if (isLoading) {
        return <LoadingScreen progress={loadProgress} />
    }

    return (
        <main className="min-h-screen bg-slate-950 overflow-x-hidden">
            {/* Header Navigation */}
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Workshops Section */}
            <Workshops />

            {/* Team Coaching Section */}
            <TeamCoaching />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </main>
    )
}