'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, HomeIcon, UserGroupIcon, BriefcaseIcon, CurrencyDollarIcon, CpuChipIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedLink } from '@/contexts/NavigationContext'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserGroupIcon },
  { name: 'Services', href: '/services', icon: BriefcaseIcon },
  { name: 'Team', href: '/team', icon: UserGroupIcon },
  { name: 'Games', href: '/games', icon: CpuChipIcon },
  { name: 'OBOLUS', href: '/obolus', icon: CurrencyDollarIcon },
  { name: 'THERION', href: '/therion', icon: CpuChipIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4.2 }}
      >
        <header className="bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-md border-b border-gray-600/50 sticky top-0 z-50 shadow-2xl shadow-black/50">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 lg:px-6" aria-label="Global">
            {/* Logo - Enhanced */}
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2 sm:space-x-3 group">
                <div className="relative">
                  <Image 
                    src="/erevus-logo.png" 
                    alt="EREVUS Logo" 
                    width={28} 
                    height={28} 
                    className="group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8 drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full blur-sm group-hover:from-blue-500/40 transition-all duration-300"></div>
                </div>
                <span className="text-xl sm:text-2xl font-bold font-erevus-display bg-gradient-to-r from-white via-blue-300 to-orange-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-orange-400 transition-all duration-300">EREVUS</span>
              </Link>
            </div>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
              {navigation.map((item) => (
                <AnimatedLink
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold font-erevus-heading leading-6 transition-all duration-300 px-3 py-2 rounded-lg ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-sm'
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 hover:backdrop-blur-sm hover:border hover:border-gray-600/30'
                  }`}
                >
                  {item.name}
                </AnimatedLink>
              ))}
            </div>

            {/* CTA Button - Enhanced */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <AnimatedLink
                href="/contact"
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white px-4 py-2 xl:px-6 xl:py-3 rounded-lg text-sm font-bold font-erevus-heading transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-blue-500/25 hover:shadow-purple-500/40"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/20 to-blue-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </AnimatedLink>
            </div>

            {/* Mobile menu button - Enhanced */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/70 hover:to-gray-700/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm border border-gray-600/30 hover:border-blue-500/50"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile menu - Enhanced OUTSIDE header container */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[60] lg:hidden">
              {/* Background overlay - Enhanced */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Mobile menu panel - Enhanced */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-gray-900/95 via-slate-900/95 to-gray-900/95 backdrop-blur-lg shadow-2xl border-l border-gray-600/50"
              >
                <div className="flex h-full flex-col p-6">
                  {/* Header - Enhanced */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-600/50">
                    <Link 
                      href="/" 
                      className="group flex items-center space-x-3" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="relative">
                        <Image 
                          src="/erevus-logo.png" 
                          alt="EREVUS Logo" 
                          width={28} 
                          height={28} 
                          className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full blur-sm group-hover:from-blue-500/40 transition-all duration-300"></div>
                      </div>
                      <span className="text-lg font-bold font-erevus-display bg-gradient-to-r from-white via-blue-300 to-orange-300 bg-clip-text text-transparent">EREVUS</span>
                    </Link>
                    <button
                      type="button"
                      className="rounded-xl p-2 text-gray-400 hover:bg-gradient-to-r hover:from-gray-700/70 hover:to-gray-600/70 hover:text-white transition-all duration-300 border border-gray-600/30 hover:border-blue-500/50 backdrop-blur-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Navigation - Enhanced */}
                  <nav className="flex-1 pt-6">
                    <div className="space-y-3">
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <AnimatedLink
                            href={item.href}
                            className={`flex items-center space-x-3 rounded-xl px-4 py-3 text-base font-medium font-erevus-heading transition-all duration-300 ${
                              pathname === item.href
                                ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-400 border border-blue-500/50 backdrop-blur-sm shadow-lg'
                                : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700/70 hover:to-gray-600/70 hover:backdrop-blur-sm hover:border hover:border-gray-600/50'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </AnimatedLink>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-600/50">
                      <AnimatedLink
                        href="/contact"
                        className="group flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white px-4 py-3 rounded-xl text-center font-bold font-erevus-heading transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-purple-500/40"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <EnvelopeIcon className="h-5 w-5" />
                        <span className="relative z-10">Contact Us</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/20 to-blue-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </AnimatedLink>
                    </div>
                  </nav>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Navigation - FIXED CENTERING AND LAYOUT */}
      <AnimatePresence>
        {showFloatingNav && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 left-0 right-0 z-[9999] md:hidden flex justify-center px-4 floating-nav"
          >
            <div className="bg-gradient-to-r from-gray-900/95 via-slate-900/95 to-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-600/50 shadow-2xl px-3 py-2 w-full max-w-sm floating-nav-container mobile-floating-nav">
              <div className="flex items-center justify-between gap-1">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 mobile-nav-item mobile-nav-button ${
                      pathname === item.href
                        ? 'bg-blue-500/30 text-blue-400 border border-blue-500/50 shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50 active:bg-gray-600/50'
                    }`}
                    title={item.name}
                    aria-label={item.name}
                  >
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs mt-1 font-medium leading-none mobile-nav-text truncate max-w-[40px]">{item.name}</span>
                  </Link>
                ))}
                <div className="w-px h-8 bg-gray-600/50 mx-1 flex-shrink-0"></div>
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex flex-col items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 active:bg-gray-600/50 transition-all duration-300 mobile-nav-item mobile-nav-button"
                  title="More"
                  aria-label="Open navigation menu"
                >
                  <Bars3Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs mt-1 font-medium leading-none mobile-nav-text">More</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}