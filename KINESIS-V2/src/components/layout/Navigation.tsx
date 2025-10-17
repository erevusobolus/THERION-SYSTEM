'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Menu,
    X,
    ChevronDown,
    Globe,
    Calendar,
    MessageCircle,
    Users,
    BookOpen,
    User,
    Mail,
    Phone,
    MapPin,
    Sparkles
} from 'lucide-react'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigationItems = [
        { href: '#home', label: 'Home', icon: Users },
        { href: '#workshops', label: 'Workshops', icon: BookOpen },
        { href: '#coaching', label: 'Coaching', icon: Users },
        { href: '#about', label: 'About', icon: User },
        { href: '#contact', label: 'Contact', icon: MessageCircle },
    ]

    const handleNavClick = (href: string, label: string) => {
        setActiveSection(label.toLowerCase())
        setIsOpen(false)

        if (href.startsWith('#')) {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-2xl'
                        : 'bg-transparent'
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-3 group cursor-pointer"
                        >
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <span className="text-white font-black text-xl">K</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-2 h-2 text-white" />
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                                    KINESIS
                                </h1>
                                <p className="text-xs text-slate-400 font-medium tracking-wide">
                                    LEADERSHIP DEVELOPMENT
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navigationItems.map((item) => (
                                <motion.button
                                    key={item.label}
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavClick(item.href, item.label)}
                                    className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center space-x-2 group relative ${activeSection === item.label.toLowerCase()
                                            ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 shadow-lg'
                                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                                        }`}
                                >
                                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    <span>{item.label}</span>
                                    {activeSection === item.label.toLowerCase() && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/30"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavClick('#contact', 'contact')}
                                className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl btn-hover"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>BOOK SESSION</span>
                            </motion.button>

                            {/* Language Selector */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl px-3 py-2.5 transition-all duration-300 cursor-pointer"
                            >
                                <Globe className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-300 text-sm font-medium">EN</span>
                                <ChevronDown className="w-3 h-3 text-slate-400" />
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-xl flex items-center justify-center transition-all duration-300"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-5 h-5 text-white" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-5 h-5 text-white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 h-full w-80 max-w-sm bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border-l border-slate-800/50 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col h-full">

                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                                            <span className="text-white font-black text-lg">K</span>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-white">KINESIS</h2>
                                            <p className="text-xs text-slate-400">LEADERSHIP DEVELOPMENT</p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center"
                                    >
                                        <X className="w-4 h-4 text-slate-400" />
                                    </motion.button>
                                </div>

                                {/* Navigation Items */}
                                <div className="flex-1 px-6 py-6 space-y-2">
                                    {navigationItems.map((item, index) => (
                                        <motion.button
                                            key={item.label}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            whileHover={{ x: 10, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleNavClick(item.href, item.label)}
                                            className={`w-full flex items-center space-x-3 p-4 rounded-xl font-semibold transition-all duration-300 group ${activeSection === item.label.toLowerCase()
                                                    ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30'
                                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                                                }`}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${activeSection === item.label.toLowerCase()
                                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                                    : 'bg-slate-700/50 group-hover:bg-slate-600/50'
                                                }`}>
                                                <item.icon className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-lg">{item.label}</span>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Bottom Actions */}
                                <div className="p-6 border-t border-slate-800/50 space-y-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleNavClick('#contact', 'contact')}
                                        className="w-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg btn-hover"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        <span>BOOK A SESSION</span>
                                    </motion.button>

                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center space-x-2 text-slate-400">
                                            <Globe className="w-4 h-4" />
                                            <span>Language</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs font-semibold">EN</button>
                                            <button className="px-3 py-1 bg-slate-700 text-slate-300 hover:bg-slate-600 rounded-lg text-xs font-semibold transition-colors">FR</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation