'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Globe, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerSections = [
        {
            title: 'Services',
            links: [
                { href: '/workshops', label: 'Emotional Intelligence' },
                { href: '/workshops', label: 'Decision Making' },
                { href: '/workshops', label: 'Communication Under Pressure' },
                { href: '/coaching', label: 'Team Coaching' },
                { href: '/coaching', label: 'Metamorphosis Program' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { href: '/about', label: 'About Danai' },
                { href: '/success-stories', label: 'Success Stories' },
                { href: '/resources', label: 'EQ Toolkit' },
                { href: '/blog', label: 'Insights & Articles' },
                { href: '/faq', label: 'FAQ' }
            ]
        },
        {
            title: 'Connect',
            links: [
                { href: '/contact', label: 'Get In Touch' },
                { href: '/booking', label: 'Book a Session' },
                { href: '/newsletter', label: 'Newsletter' },
                { href: '/community', label: 'Community' }
            ]
        }
    ]

    return (
        <footer className="relative bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 text-white overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148,163,184,0.3) 1px, transparent 0)`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-black text-xl">K</span>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-white">
                                    KINESIS<span className="text-slate-400">NOW</span>
                                </div>
                                <div className="text-sm text-slate-400 font-medium">Leadership Development</div>
                            </div>
                        </div>

                        {/* Mission Statement */}
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Transforming teams through emotional intelligence, practical workshops, and personalized coaching.
                            Based in France, serving globally.
                        </p>

                        {/* Location & Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm text-slate-400">
                                <MapPin className="w-4 h-4 text-slate-500" />
                                <span>Based in France</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-slate-400">
                                <Globe className="w-4 h-4 text-slate-500" />
                                <span>In-person & Online Sessions</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-slate-400">
                                <Mail className="w-4 h-4 text-slate-500" />
                                <Link href="mailto:danaileventakou@kinesisnow.com" className="hover:text-white transition-colors">
                                    danaileventakou@kinesisnow.com
                                </Link>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://www.linkedin.com/in/danai-leventakou/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                            >
                                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Footer Links */}
                    {footerSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-white text-sm transition-colors duration-300 block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Signup Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-slate-800"
                >
                    <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-2xl p-6 lg:p-8 border border-slate-700/50">
                        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
                            <div className="mb-4 lg:mb-0">
                                <h3 className="text-xl font-semibold text-white mb-2">Get Your Free EQ Toolkit</h3>
                                <p className="text-slate-300 text-sm">
                                    Sign up for our newsletter and receive practical emotional intelligence tools and insights.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                                />
                                <button className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-slate-500/30">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
                >
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                        <span>© {currentYear} KinesisNow. All rights reserved.</span>
                        <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                        <span>Made with passion for leadership development</span>
                    </div>

                    <div className="flex items-center space-x-6 text-sm">
                        <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-400">EN / FR</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 opacity-20"></div>
        </footer>
    )
}

export default Footer