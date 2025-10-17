'use client'

import React from 'react'
import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900">
            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <Hero />

            {/* Coming Soon Sections */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 py-24 text-center"
            >
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-3xl p-12 shadow-2xl">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                More Sections Coming Soon
                            </span>
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            We're building an incredible experience with workshops, coaching programs,
                            about section, and contact forms. Stay tuned for the complete transformation!
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Workshops</h3>
                                <p className="text-slate-400 text-sm">Interactive learning experiences</p>
                            </div>
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Team Coaching</h3>
                                <p className="text-slate-400 text-sm">Metamorphosis transformation program</p>
                            </div>
                            <div className="glass rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">About Danai</h3>
                                <p className="text-slate-400 text-sm">Professional expertise and background</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    )
}