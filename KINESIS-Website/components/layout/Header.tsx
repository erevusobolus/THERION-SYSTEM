'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Users, BookOpen, MessageCircle, Phone, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [currentLang, setCurrentLang] = useState('EN')

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigationItems = [
        { href: '/', label: 'Home', icon: Users },
        { href: '/workshops', label: 'Workshops', icon: BookOpen },
        { href: '/coaching', label: 'Team Coaching', icon: MessageCircle },
        { href: '/about', label: 'About', icon: Users },
        { href: '/contact', label: 'Contact', icon: Phone },
    ]

    const languages = [
        { code: 'EN', label: 'English' },
        { code: 'FR', label: 'Français' }
    ]

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-slate-900/20'
                    : 'bg-transparent'
                }`}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    {/* Professional Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-slate-500/30 transition-all duration-300">
                                    <span className="text-white font-black text-lg sm:text-xl">K</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-xl font-black text-white group-hover:text-slate-300 transition-colors">
                                    KINESIS<span className="text-slate-400">NOW</span>
                                </div>
                                <div className="text-xs text-slate-400 font-medium">Leadership Development</div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navigationItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="group relative px-4 py-2 rounded-lg text-slate-300 hover:text-white transition-all duration-300 flex items-center space-x-2"
                                >
                                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">{item.label}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700/0 via-slate-600/30 to-slate-700/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Language Selector & CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative group">
                            <button className="flex items-center space-x-1 px-3 py-2 text-slate-300 hover:text-white transition-colors">
                                <Globe className="w-4 h-4" />
                                <span className="text-sm font-medium">{currentLang}</span>
                                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            <div className="absolute top-full right-0 mt-1 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setCurrentLang(lang.code)}
                                        className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Professional CTA */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-slate-500/30"
                            >
                                Book Session
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl mt-4 mb-4 shadow-2xl">
                                <div className="px-4 py-6 space-y-3">
                                    {navigationItems.map((item, index) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-300"
                                            >
                                                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                <span className="font-medium">{item.label}</span>
                                            </Link>
                                        </motion.div>
                                    ))}

                                    {/* Mobile Language Selector */}
                                    <div className="border-t border-slate-700/50 pt-3 mt-3">
                                        <div className="px-4 py-2 text-slate-400 text-sm font-medium">Language</div>
                                        <div className="flex space-x-2">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => setCurrentLang(lang.code)}
                                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentLang === lang.code
                                                            ? 'bg-slate-600 text-white'
                                                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                                                        }`}
                                                >
                                                    {lang.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mobile CTA */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        className="pt-3"
                                    >
                                        <Link
                                            href="/contact"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block w-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                                        >
                                            Book Session
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    )
}

export default Header