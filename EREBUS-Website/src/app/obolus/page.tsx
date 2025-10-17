'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ObolusLoadingScreen from '@/components/ui/ObolusLoadingScreen'
import OmegaCoin from '@/components/ui/OmegaCoin'
import CoinGenerator from '@/components/ui/CoinGenerator'
import { AnimatedSection, AnimatedGrid, AnimatedCard } from '@/components/ui/AnimatedComponents'
import { howlerProAudio } from '@/utils/howler-pro-audio' // Professional Howler.js audio
import { Coins, Shield, Users, ArrowRight, PieChart, Flame, Lock, Trophy, Target, Gamepad2, Building, TrendingUp, Eye, Cpu, Pickaxe, HandCoins, Sparkles, UserCheck, Gift, Play, Percent, Wallet, Timer } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ObolusPage() {
  const soundManager = howlerProAudio // Professional Howler.js audio system
  const [showCoinDemo, setShowCoinDemo] = useState(false)

  // Initialize sound manager and animation on component mount
  useEffect(() => {
    // Initialize professional audio system
    const initializeAudio = async () => {
      try {
        await soundManager.initialize()
        console.log('🎵 Professional Howler.js audio system ready!')
      } catch (error) {
        console.warn('🔇 Audio initialization failed, continuing silently:', error)
      }
    }

    // Resume audio context for user interaction
    const handleFirstInteraction = async () => {
      await initializeAudio()
      // Start ambient animations and play subtle entry sound
      document.body.classList.add('obolus-page-loaded')
      await soundManager.playQuantumEncryption()
    }

    // Add click listener for first user interaction
    document.addEventListener('click', handleFirstInteraction, { once: true })
    document.addEventListener('touchstart', handleFirstInteraction, { once: true })

    // Add subtle scroll sound effects for enhanced immersion
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(async () => {
        // Subtle ambient crypto pulse on scroll pause
        await soundManager.playCryptoPulse()
      }, 1000) // Only after user stops scrolling for 1 second
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Show coin demo after 3 seconds
    const demoTimer = setTimeout(() => {
      setShowCoinDemo(true)
    }, 3000)

    return () => {
      clearTimeout(scrollTimeout)
      clearTimeout(demoTimer)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
      document.body.classList.remove('obolus-page-loaded')
    }
  }, [soundManager])

  // Handle invalid clicks on non-interactive elements
  const handleInvalidClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    // Only trigger on non-interactive elements (divs, text, etc.)
    if (!target.closest('button, a, input, [role="button"], [data-interactive]')) {
      event.preventDefault()
      await soundManager.playUIClose()
      // Add visual feedback
      target.classList.add('invalid-click-feedback')
      setTimeout(() => target.classList.remove('invalid-click-feedback'), 300)
    }
  }

  return (
    <>
      <ObolusLoadingScreen />
      <motion.main 
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        onClick={handleInvalidClick}
        onAnimationComplete={() => {
          // Play subtle page ready sound when main content appears
          setTimeout(() => soundManager.playSuccessChime(), 500)
        }}
      >
        <Header />
        
        {/* Hero Section - Homepage Style */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 overflow-hidden section-transition">
          {/* Sophisticated Dynamic Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 md:w-96 md:h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
          </div>
          
          {/* Refined grid pattern overlay */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.2) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-[90vh]">
              
              {/* Left Column - Refined Business Value */}
              <div className="space-y-6 lg:space-y-10 text-center lg:text-left">
                {/* Sophisticated Business Badge */}
                <div className="inline-flex items-center space-x-2 sm:space-x-3 card-premium rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-xl animate-fade-in-up">
                  <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-pulse" />
                  <span className="text-sm sm:text-lg font-bold text-amber-200 font-erevus-body">HBAR-Backed Stablecoin</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-ping"></div>
                </div>

                {/* Refined Headlines */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight break-words animate-fade-in-up animation-delay-200 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                      data-interactive="true"
                      onMouseEnter={() => soundManager.playSuccessChime()}
                      onClick={() => soundManager.playHbarTransaction()}
                    >
                      <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl font-erevus-display animate-glow-pulse">OBOLUS</span>
                      <span className="block bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent animate-pulse font-erevus-display">Powers Everything</span>
                    </h1>
                    
                    {/* Animated Omega Coin */}
                    <div className="animate-fade-in-up animation-delay-400">
                      <OmegaCoin 
                        size="large"
                        animated={true}
                        onHover={() => soundManager.playCoinHover()}
                        onClick={() => soundManager.playSuccessChime()}
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-amber-300 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 break-words animate-fade-in-left animation-delay-400 font-erevus-heading">
                      <span className="text-amber-400 font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent animate-glow-pulse">&ldquo;The HBAR-Backed Stablecoin&rdquo;</span>
                    </p>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 break-words animate-fade-in-right animation-delay-600 font-erevus-body">
                      OBOLUS is an HBAR-backed stablecoin that generates real revenue through business operations while maintaining stable value tied to HBAR.
                    </p>
                  </div>
                </div>

                {/* Refined Business Value Statement */}
                <div 
                  className="relative animate-fade-in-up animation-delay-1000 cursor-pointer hover:scale-[1.01] transition-transform duration-300"
                  data-interactive="true"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playQuantumEncryption()}
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600 animate-pulse"></div>
                  <blockquote className="pl-4 sm:pl-6 lg:pl-8 py-4 sm:py-6 card-premium rounded-r-xl shadow-xl">
                    <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium italic leading-relaxed break-words font-erevus-body">
                      &ldquo;A stable digital currency backed by HBAR that generates value through business operations while maintaining price stability.&rdquo;
                    </p>
                    <footer className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-amber-400 font-semibold font-erevus-mono">— OBOLUS Token Economics</footer>
                  </blockquote>
                </div>

                {/* Sophisticated Business CTAs */}
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 animate-slide-in-bottom animation-delay-1200">
                  <Link
                    href="/contact"
                    data-interactive="true"
                    onMouseEnter={() => soundManager.playCoinHover()}
                    onClick={() => soundManager.playPackageClick()}
                    className="group relative bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-500 hover:to-amber-600 text-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-lg lg:text-xl transition-all duration-500 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105 hover:-translate-y-1 border border-amber-600/30 font-erevus-heading"
                  >
                    <HandCoins className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-pulse" />
                    <span className="break-words">START EARNING NOW</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/10 to-amber-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                  
                  <Link
                    href="#investment-packages"
                    data-interactive="true"
                    onMouseEnter={() => soundManager.playCoinHover()}
                    onClick={() => soundManager.playNavigation()}
                    className="group border-2 border-amber-500 hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-500 text-amber-300 hover:text-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-lg lg:text-xl transition-all duration-500 flex items-center justify-center space-x-2 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-amber-500/20 card-premium font-erevus-heading"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:animate-pulse" />
                    <span className="break-words">VIEW INVESTMENT PACKAGES</span>
                  </Link>
                  
                  {/* Interactive Coin Demo Toggle Button */}
                  <button
                    onClick={() => {
                      setShowCoinDemo(!showCoinDemo);
                      soundManager.playContextSound('ui', showCoinDemo ? 'close' : 'open');
                    }}
                    onMouseEnter={() => soundManager.playContextSound('coin', 'hover')}
                    className="group relative bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-500 hover:to-purple-600 text-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-lg lg:text-xl transition-all duration-500 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 hover:-translate-y-1 border border-purple-600/30 font-erevus-heading"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-pulse" />
                    <span className="break-words">
                      {showCoinDemo ? 'HIDE COIN DEMO' : 'EXPERIENCE INTERACTIVE COINS'}
                    </span>
                    <Coins className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-180 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-300/10 to-purple-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>

              {/* Right Column - PREMIUM ENHANCED VISUAL */}
              <div className="order-first lg:order-last mt-8 lg:mt-0 animate-fade-in-right animation-delay-600">
                <div className="relative">
                  {/* Floating Omega Coin */}
                  <div className="absolute -top-6 -right-6 z-20 animate-bounce">
                    <OmegaCoin 
                      size="medium"
                      animated={true}
                      onHover={() => soundManager.playCoinHover()}
                      onClick={() => soundManager.playHbarTransaction()}
                      className="hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Sophisticated Multi-layer Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-purple-500/30 rounded-2xl sm:rounded-3xl blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700/20 via-transparent to-purple-600/20 rounded-2xl sm:rounded-3xl blur-2xl animate-pulse animation-delay-2000"></div>
                  
                  <div 
                    className="relative bg-gradient-to-br from-slate-900/95 via-amber-900/10 to-slate-900/95 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-amber-600/50 shadow-2xl backdrop-blur-lg hover:border-amber-500/70 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 card-premium overflow-hidden cursor-pointer"
                    data-interactive="true"
                    onMouseEnter={() => soundManager.playCoinHover()}
                    onClick={() => soundManager.playHbarTransaction()}
                  >
                    {/* Mesmerizing Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-700/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                    
                    <div className="relative text-center space-y-4 sm:space-y-6 lg:space-y-8">
                      {/* Logo with Quantum Glow */}
                      <div className="relative animate-fade-in-up animation-delay-800">
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 via-amber-400/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-purple-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
                        <div 
                          className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500 cursor-pointer"
                          onMouseEnter={() => soundManager.playSuccessChime()}
                          onClick={() => soundManager.playHbarTransaction()}
                        >
                          <Coins className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 text-white drop-shadow-lg animate-pulse" />
                        </div>
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                        {/* Elite Title */}
                        <div className="relative flex items-center justify-center gap-3 lg:gap-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-amber-400/20 blur-lg rounded-lg"></div>
                          <h3 className="relative text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent break-words animate-fade-in-up animation-delay-1000 font-erevus-display tracking-wide">
                            OBOLUS ECOSYSTEM
                          </h3>
                          <div className="animate-fade-in-up animation-delay-1200">
                            <OmegaCoin 
                              size="medium"
                              animated={true}
                              onHover={() => soundManager.playCoinHover()}
                              onClick={() => soundManager.playQuantumEncryption()}
                              className="hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        
                        {/* Revolutionary Description */}
                        <div className="relative">
                          <p className="text-slate-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed break-words animate-fade-in-up animation-delay-1200 font-erevus-body max-w-2xl mx-auto">
                            <span className="font-bold text-amber-200 bg-gradient-to-r from-amber-200 to-amber-300 bg-clip-text text-transparent">HBAR-backed stablecoin</span> that maintains stable value while generating revenue through gaming tournaments, GPU mining operations, and AI datacenter infrastructure - creating the world&apos;s first productive stablecoin with <span className="font-bold text-amber-200 bg-gradient-to-r from-amber-200 to-amber-300 bg-clip-text text-transparent">guaranteed value backing</span> and 11 HBAR per token exit liquidity.
                          </p>
                        </div>
                        
                        {/* Elite Feature Cards */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 animate-slide-in-bottom animation-delay-1400">
                          {/* Gaming Platform Card */}
                          <div 
                            className="group card-premium rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:scale-105 transition-all duration-500 relative overflow-hidden border border-purple-600/30 cursor-pointer crypto-card"
                            data-interactive="true"
                            onMouseEnter={() => soundManager.playCoinHover()}
                            onClick={() => soundManager.playCardReveal()}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400/60 to-purple-400/0"></div>
                            
                            <div className="relative">
                              <div className="relative mb-2 sm:mb-3">
                                <div className="absolute inset-0 bg-purple-400/20 rounded-lg blur-sm group-hover:bg-purple-400/30 transition-colors duration-300"></div>
                                <Gamepad2 className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-400 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                              </div>
                              <div className="text-slate-300 font-bold text-xs sm:text-sm lg:text-base xl:text-lg break-words font-erevus-display">Gaming Platform</div>
                              <div className="text-purple-400 text-xs sm:text-sm font-erevus-mono">Premium gaming experiences</div>
                            </div>
                          </div>

                          {/* GPU Mining Card */}
                          <div 
                            className="group card-premium rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:scale-105 transition-all duration-500 relative overflow-hidden border border-amber-600/30 cursor-pointer crypto-card"
                            data-interactive="true"
                            onMouseEnter={() => soundManager.playCoinHover()}
                            onClick={() => soundManager.playMiningStart()}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-amber-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/60 to-amber-500/0"></div>
                            
                            <div className="relative">
                              <div className="relative mb-2 sm:mb-3">
                                <div className="absolute inset-0 bg-amber-500/20 rounded-lg blur-sm group-hover:bg-amber-500/30 transition-colors duration-300"></div>
                                <Pickaxe className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-amber-500 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                              </div>
                              <div className="text-slate-300 font-bold text-xs sm:text-sm lg:text-base xl:text-lg break-words font-erevus-display">GPU Mining</div>
                              <div className="text-amber-400 text-xs sm:text-sm font-erevus-mono">Investment packages</div>
                            </div>
                          </div>

                          {/* AI Datacenter Card */}
                          <div 
                            className="group card-premium rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:scale-105 transition-all duration-500 relative overflow-hidden border border-blue-600/30 cursor-pointer crypto-card datacenter-grid"
                            data-interactive="true"
                            onMouseEnter={() => soundManager.playCoinHover()}
                            onClick={() => soundManager.playUIOpen()}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/60 to-blue-500/0"></div>
                            
                            <div className="relative">
                              <div className="relative mb-2 sm:mb-3">
                                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm group-hover:bg-blue-500/30 transition-colors duration-300"></div>
                                <Cpu className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-500 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                              </div>
                              <div className="text-slate-300 font-bold text-xs sm:text-sm lg:text-base xl:text-lg break-words font-erevus-display">AI Datacenter</div>
                              <div className="text-blue-400 text-xs sm:text-sm font-erevus-mono">Native compute infrastructure</div>
                            </div>
                          </div>

                          {/* Auto Rewards Card */}
                          <div 
                            className="group card-premium rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:scale-105 transition-all duration-500 relative overflow-hidden border border-green-600/30 cursor-pointer"
                            onMouseEnter={() => soundManager.playCoinHover()}
                            onClick={() => soundManager.playHbarTransaction()}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/0 via-green-500/60 to-green-500/0"></div>
                            
                            <div className="relative">
                              <div className="relative mb-2 sm:mb-3">
                                <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-sm group-hover:bg-green-500/30 transition-colors duration-300"></div>
                                <HandCoins className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-500 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                              </div>
                              <div className="text-slate-300 font-bold text-xs sm:text-sm lg:text-base xl:text-lg break-words font-erevus-display">Auto Rewards</div>
                              <div className="text-green-400 text-xs sm:text-sm font-erevus-mono">All holders earn automatically</div>
                            </div>
                          </div>
                        </div>

                        {/* Elite Revenue Showcase */}
                        <div className="relative mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-amber-700/50">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                          <div className="text-center space-y-2">
                            <div className="text-amber-400 font-bold text-sm sm:text-base lg:text-lg font-erevus-display">HBAR-Backed Stablecoin</div>
                            <div className="text-slate-400 text-xs sm:text-sm font-erevus-mono">HBAR-backed stablecoin with guaranteed 11 HBAR per token exit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INTERACTIVE COIN SHOWCASE SECTION ===== */}
        {showCoinDemo && (
          <AnimatedSection className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-amber-900/10 to-purple-900/20"></div>
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-12 lg:mb-16">
                <motion.div
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600/20 to-purple-600/20 rounded-full px-6 py-3 mb-6 border border-amber-500/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-300 font-bold">Interactive Coin Experience</span>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </motion.div>
                
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-300 via-amber-400 to-purple-400 bg-clip-text text-transparent mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Experience OBOLUS Varieties
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Click coins to see 3D flip animations, collect different rarities, and hear professional sound effects
                </motion.p>
              </div>

              {/* Coin Varieties Showcase */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {/* Standard Coin */}
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
                    <OmegaCoin
                      size="large"
                      coinVariant="standard"
                      flipOnClick={true}
                      animated={true}
                      onHover={() => soundManager.playContextSound('coin', 'hover')}
                      onClick={() => soundManager.playContextSound('coin', 'flip')}
                      className="mx-auto mb-4"
                      decorative={true}
                      showValue={false}
                    />
                    <h3 className="text-slate-300 font-bold text-lg">Standard</h3>
                    <p className="text-slate-400 text-sm">Common OBOLUS coin</p>
                  </div>
                </motion.div>

                {/* Premium Coin */}
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <div className="bg-amber-900/20 rounded-2xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300">
                    <OmegaCoin
                      size="large"
                      coinVariant="premium"
                      flipOnClick={true}
                      animated={true}
                      onHover={() => soundManager.playContextSound('coin', 'hover')}
                      onClick={() => soundManager.playContextSound('transaction', 'success')}
                      className="mx-auto mb-4"
                      decorative={true}
                      showValue={false}
                    />
                    <h3 className="text-amber-300 font-bold text-lg">Premium</h3>
                    <p className="text-amber-400 text-sm">Enhanced value coin</p>
                  </div>
                </motion.div>

                {/* Rare Coin */}
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300">
                    <OmegaCoin
                      size="large"
                      coinVariant="rare"
                      flipOnClick={true}
                      animated={true}
                      onHover={() => soundManager.playContextSound('coin', 'hover')}
                      onClick={() => soundManager.playContextSound('reward', 'unlock')}
                      className="mx-auto mb-4"
                      decorative={true}
                      showValue={false}
                    />
                    <h3 className="text-purple-300 font-bold text-lg">Rare</h3>
                    <p className="text-purple-400 text-sm">Special edition coin</p>
                  </div>
                </motion.div>

                {/* Legendary Coin */}
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="bg-gradient-to-br from-amber-900/20 to-purple-900/20 rounded-2xl p-6 border border-purple-600/50 hover:border-purple-400/70 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-purple-400/5 animate-pulse"></div>
                    <OmegaCoin
                      size="large"
                      coinVariant="legendary"
                      flipOnClick={true}
                      animated={true}
                      onHover={() => soundManager.playContextSound('coin', 'hover')}
                      onClick={() => soundManager.playContextSound('reward', 'earned')}
                      className="mx-auto mb-4 relative z-10"
                      decorative={true}
                      showValue={false}
                    />
                    <h3 className="text-purple-200 font-bold text-lg">Legendary</h3>
                    <p className="text-purple-300 text-sm">Ultra-rare masterpiece</p>
                  </div>
                </motion.div>
              </div>

              {/* Interactive Demo Area */}
              <motion.div 
                className="relative bg-slate-900/30 rounded-3xl p-8 border border-amber-500/20 backdrop-blur-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30">
                    <span className="text-white font-bold text-2xl">Ω</span>
                  </div>
                  <h3 className="text-3xl font-bold text-amber-300 mb-4 font-erevus-display">Interactive OBOLUS Showcase</h3>
                  <p className="text-slate-300 text-lg leading-relaxed font-erevus-body max-w-2xl mx-auto">
                    Experience the premium OBOLUS token collection system with 3D animations, 
                    rarity-based spawning, and immersive audio design. Click coins to collect them 
                    and discover legendary variants with special bonus effects.
                  </p>
                </div>
                
                {/* Enhanced Demo Coin Generator */}
                <div className="relative h-80 rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 shadow-2xl">
                  <CoinGenerator
                    maxCoins={8}
                    spawnRate={3500}
                    varietyEnabled={true}
                    collectibleMode={true}
                    startHidden={true}
                    className="w-full h-full"
                  />
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50">
                    <h4 className="text-xl font-bold text-amber-300 mb-3 font-erevus-display">🎮 Interactive Features</h4>
                    <ul className="space-y-2 text-slate-300 font-erevus-body">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span>3D coin flips with physics-based animations</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Rarity system: Standard, Premium, Rare, Legendary</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Collection streaks and bonus spawn mechanics</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Smart collision detection and positioning</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50">
                    <h4 className="text-xl font-bold text-cyan-300 mb-3 font-erevus-display">🎵 Audio Design</h4>
                    <ul className="space-y-2 text-slate-300 font-erevus-body">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span>Context-aware sound effects using Howler.js</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Rarity-based audio feedback systems</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Collection chimes and legendary coin alerts</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Spatial audio positioning and 3D effects</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30">
                    <p className="text-amber-200 font-semibold font-erevus-body">
                      💡 <strong>Pro Tip:</strong> Listen for unique audio cues when legendary coins spawn. 
                      They provide bonus spawns and special collection effects!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        )}

        {/* DATACENTER Investment Opportunities - Enhanced with Methodical Animations */}
        <AnimatedSection 
          className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-900"
          delay={200}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="investment-packages">
            <AnimatedCard delay={400} className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-amber-500/30 to-blue-600/30 border border-amber-500/50 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 mb-6 sm:mb-8 backdrop-blur-lg">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-400 animate-pulse" />
                <span className="text-sm sm:text-base lg:text-lg font-bold text-amber-200 font-erevus-body">DATACENTER</span>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 font-erevus-display text-responsive-enhanced">
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Investment Opportunities
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto font-erevus-body text-responsive-enhanced">
                Invest in our native GPU datacenter operations, AI compute infrastructure, and mining packages that serve our customers and their clients.
              </p>
            </AnimatedCard>
            
            <AnimatedGrid className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16" staggerDelay={200}>
              {/* GPU Mining Investment */}
              <div 
                className="relative group animate-fade-in-up animation-delay-600 cursor-pointer"
                data-interactive="true"
                onMouseEnter={() => soundManager.playCoinHover()}
                onClick={() => soundManager.playMiningStart()}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    RECOMMENDED
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-900/20 via-amber-800/10 to-amber-900/20 rounded-2xl p-8 border border-amber-500/40 shadow-2xl backdrop-blur-lg hover:border-amber-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Pickaxe className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-amber-300 mb-4 font-erevus-display">GPU Mining Investment</h3>
                    <p className="text-amber-200 text-lg leading-relaxed font-erevus-body">GPU mining operations with professional management and returns</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/30 rounded-xl p-4 border border-amber-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-200 font-erevus-mono">Hardware:</span>
                        <span className="font-bold text-amber-400 font-erevus-body">Professional GPUs</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/30 rounded-xl p-4 border border-amber-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-200 font-erevus-mono">Management:</span>
                        <span className="font-bold text-amber-400 font-erevus-body">Full Service</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/30 rounded-xl p-4 border border-amber-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-200 font-erevus-mono">Returns:</span>
                        <span className="font-bold text-amber-400 font-erevus-body">OBOLUS + HBAR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Compute Infrastructure */}
              <div 
                className="relative group animate-fade-in-up animation-delay-800 cursor-pointer"
                data-interactive="true"
                onMouseEnter={() => soundManager.playCoinHover()}
                onClick={() => soundManager.playServerProcessing()}
              >
                <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-900/20 rounded-2xl p-8 border border-blue-500/40 shadow-2xl backdrop-blur-lg hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-300 mb-4 font-erevus-display">AI Compute Infrastructure</h3>
                    <p className="text-blue-200 text-lg leading-relaxed font-erevus-body">AI datacenter infrastructure serving customers with compute resources</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/30 rounded-xl p-4 border border-blue-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200 font-erevus-mono">Purpose:</span>
                        <span className="font-bold text-blue-400 font-erevus-body">AI Compute</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/30 rounded-xl p-4 border border-blue-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200 font-erevus-mono">Clients:</span>
                        <span className="font-bold text-blue-400 font-erevus-body">Our Customers</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/30 rounded-xl p-4 border border-blue-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200 font-erevus-mono">Revenue Share:</span>
                        <span className="font-bold text-blue-400 font-erevus-body">Via OBOLUS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPU Subsidization */}
              <div 
                className="relative group animate-fade-in-up animation-delay-1000 cursor-pointer"
                data-interactive="true"
                onMouseEnter={() => soundManager.playCoinHover()}
                onClick={() => soundManager.playCryptoCalculation()}
              >
                <div className="bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-purple-900/20 rounded-2xl p-8 border border-purple-500/40 shadow-2xl backdrop-blur-lg hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-purple-300 mb-4 font-erevus-display">GPU Subsidization</h3>
                    <p className="text-purple-200 text-lg leading-relaxed font-erevus-body">OBOLUS subsidizes GPU compute through token economics</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/30 rounded-xl p-4 border border-purple-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 font-erevus-mono">Method:</span>
                        <span className="font-bold text-purple-400 font-erevus-body">Token Economics</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/30 rounded-xl p-4 border border-purple-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 font-erevus-mono">Benefits:</span>
                        <span className="font-bold text-purple-400 font-erevus-body">Reduced Costs</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/30 rounded-xl p-4 border border-purple-500/30">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 font-erevus-mono">For:</span>
                        <span className="font-bold text-purple-400 font-erevus-body">Customer Clients</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedGrid>

            {/* Why Invest in OBOLUS Infrastructure */}
            <div className="bg-gradient-to-r from-amber-900/30 to-purple-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-amber-500/50 animate-fade-in-up animation-delay-1200">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 font-erevus-display">
                <span className="bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
                  Why Invest in OBOLUS Infrastructure
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 text-center max-w-4xl mx-auto font-erevus-body">
                Revolutionary token that generates revenue from multiple sources - gaming, mining, AI compute, and subsidization - with automatic distribution to all holders.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div 
                  className="text-center group animate-fade-in-up animation-delay-600 cursor-pointer"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playCardReveal()}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-amber-500/30">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-amber-300 mb-3 font-erevus-display">Multiple Revenue</h4>
                  <p className="text-amber-200 font-erevus-body">Gaming, Mining, AI all generate returns.</p>
                </div>
                
                <div 
                  className="text-center group animate-fade-in-up animation-delay-800 cursor-pointer"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playCardReveal()}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/30">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-300 mb-3 font-erevus-display">Customer Benefits</h4>
                  <p className="text-purple-200 font-erevus-body">Subsidized compute for customers and clients.</p>
                </div>
                
                <div 
                  className="text-center group animate-fade-in-up animation-delay-1000 cursor-pointer"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playServerProcessing()}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-blue-500/30">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-300 mb-3 font-erevus-display">Native Datacenter</h4>
                  <p className="text-blue-200 font-erevus-body">Own infrastructure maximizes control and profits.</p>
                </div>
                
                <div 
                  className="text-center group animate-fade-in-up animation-delay-1200 cursor-pointer"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playPackageClick()}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-green-500/30">
                    <HandCoins className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-300 mb-3 font-erevus-display">Auto Distribution</h4>
                  <p className="text-green-200 font-erevus-body">All holders earn from every revenue stream.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* STAKING MECHANICS - Detailed Explanation */}
        <section className="py-32 bg-gradient-to-br from-indigo-950 via-purple-950/50 to-indigo-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500/30 to-purple-600/30 border border-indigo-500/50 rounded-full px-8 py-4 mb-8 backdrop-blur-lg animate-fade-in-up">
                <Lock className="w-6 h-6 text-indigo-400 animate-pulse" />
                <span className="text-lg font-bold text-indigo-200 font-erevus-body">STAKING MECHANICS</span>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 font-erevus-display animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  How Staking Works
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto font-erevus-body animate-fade-in-up animation-delay-400">
                OBOLUS holders earn automatic rewards through our innovative staking mechanism that distributes revenue from all business operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Staking Process */}
              <div className="bg-gradient-to-br from-indigo-900/30 via-indigo-800/20 to-purple-900/30 rounded-3xl p-10 border border-indigo-500/40 shadow-2xl backdrop-blur-lg animate-fade-in-up animation-delay-600">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/30">
                    <Coins className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-indigo-300 mb-4 font-erevus-display">Automatic Staking</h3>
                  <p className="text-indigo-200 text-lg leading-relaxed font-erevus-body">
                    No lock periods, no manual staking required. Simply hold OBOLUS in your wallet and earn automatically.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-indigo-900/40 border border-indigo-500/30 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <h4 className="text-xl font-bold text-indigo-300 font-erevus-display flex items-center gap-3">
                        Hold OBOLUS
                        <OmegaCoin 
                          size="small"
                          animated={true}
                          onHover={() => soundManager.playCoinHover()}
                          onClick={() => soundManager.playSuccessChime()}
                        />
                      </h4>
                    </div>
                    <p className="text-indigo-200 font-erevus-body">Purchase and hold OBOLUS tokens in any compatible wallet.</p>
                  </div>

                  <div className="bg-indigo-900/40 border border-indigo-500/30 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <h4 className="text-xl font-bold text-purple-300 font-erevus-display">Earn Automatically</h4>
                    </div>
                    <p className="text-purple-200 font-erevus-body">Receive proportional rewards from all revenue streams without any action required.</p>
                  </div>

                  <div className="bg-indigo-900/40 border border-indigo-500/30 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <h4 className="text-xl font-bold text-green-300 font-erevus-display">Claim Rewards</h4>
                    </div>
                    <p className="text-green-200 font-erevus-body">Rewards distributed directly to your wallet as HBAR on a regular schedule.</p>
                  </div>
                </div>
              </div>

              {/* Revenue Sources & Distribution */}
              <div className="bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-indigo-900/30 rounded-3xl p-10 border border-purple-500/40 shadow-2xl backdrop-blur-lg animate-fade-in-up animation-delay-800">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30">
                    <PieChart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-purple-300 mb-4 font-erevus-display">Revenue Distribution</h3>
                  <p className="text-purple-200 text-lg leading-relaxed font-erevus-body">
                    All business revenue flows to OBOLUS holders proportionally based on their holdings.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-900/40 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-bold font-erevus-mono">GPU Mining</span>
                      <span className="text-purple-400 font-bold font-erevus-mono">35%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full w-[35%]"></div>
                    </div>
                  </div>

                  <div className="bg-purple-900/40 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-300 font-bold font-erevus-mono">AI Compute</span>
                      <span className="text-blue-400 font-bold font-erevus-mono">30%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full w-[30%]"></div>
                    </div>
                  </div>

                  <div className="bg-purple-900/40 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-yellow-300 font-bold font-erevus-mono">Gaming Revenue</span>
                      <span className="text-yellow-400 font-bold font-erevus-mono">20%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full w-[20%]"></div>
                    </div>
                  </div>

                  <div className="bg-purple-900/40 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-300 font-bold font-erevus-mono">Services & Other</span>
                      <span className="text-green-400 font-bold font-erevus-mono">15%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full w-[15%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Staking Benefits */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-3xl p-12 border border-indigo-500/50 animate-fade-in-up animation-delay-1000">
              <h3 className="text-4xl font-bold text-center mb-8 font-erevus-display">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Staking Benefits
                </span>
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div 
                  className="text-center group cursor-pointer"
                  data-interactive="true"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playSuccessChime()}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-indigo-500/30">
                    <Timer className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-indigo-300 mb-4 font-erevus-display">No Lock Periods</h4>
                  <p className="text-indigo-200 font-erevus-body">Trade your OBOLUS freely while earning rewards. No commitment required.</p>
                </div>
                
                <div 
                  className="text-center group cursor-pointer"
                  data-interactive="true"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playCryptoCalculation()}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/30">
                    <Percent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-purple-300 mb-4 font-erevus-display">Proportional Rewards</h4>
                  <p className="text-purple-200 font-erevus-body">Earn based on your percentage of total OBOLUS supply held.</p>
                </div>
                
                <div 
                  className="text-center group cursor-pointer"
                  data-interactive="true"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playHbarTransaction()}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-green-500/30">
                    <Wallet className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-300 mb-4 font-erevus-display">HBAR Payments</h4>
                  <p className="text-green-200 font-erevus-body">Receive rewards in HBAR for immediate liquidity and utility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EQUITY LOCK & BURN MECHANISM */}
        <section className="py-32 bg-gradient-to-br from-cyan-950 via-blue-950/50 to-cyan-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 border border-cyan-500/50 rounded-full px-8 py-4 mb-8 backdrop-blur-lg animate-fade-in-up">
                <Lock className="w-6 h-6 text-cyan-400 animate-pulse" />
                <span className="text-lg font-bold text-cyan-200 font-erevus-body">EQUITY LOCK MECHANISM</span>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 font-erevus-display animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Smart Contract Equity
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto font-erevus-body animate-fade-in-up animation-delay-400">
                OBOLUS maintains balance through locked equity tokens in smart contracts and automatic buyback-burn mechanisms that exclude treasury from circulation calculations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Locked Equity System */}
              <div 
                className="bg-gradient-to-br from-cyan-900/30 via-cyan-800/20 to-blue-900/30 rounded-3xl p-10 border border-cyan-500/40 shadow-2xl backdrop-blur-lg animate-fade-in-up animation-delay-600 cursor-pointer hover:border-cyan-400/60 transition-all duration-500"
                data-interactive="true"
                onMouseEnter={() => soundManager.playQuantumEncryption()}
                onClick={() => soundManager.playServerProcessing()}
              >
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/30">
                    <Lock className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-cyan-300 mb-4 font-erevus-display">Locked Equity Tokens</h3>
                  <p className="text-cyan-200 text-lg leading-relaxed font-erevus-body">
                    Cluster and partner equity tokens are locked in smart contracts, preventing liquidation and ensuring proportional balance.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-cyan-900/40 border border-cyan-500/30 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-cyan-300 font-erevus-display">Smart Contract Lock</h4>
                    </div>
                    <p className="text-cyan-200 font-erevus-body">Equity tokens are locked in smart contracts that prevent liquidation, ensuring they cannot be sold on the market.</p>
                  </div>

                  <div className="bg-cyan-900/40 border border-cyan-500/30 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Timer className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-300 font-erevus-display">Condition-Based Expiry</h4>
                    </div>
                    <p className="text-blue-200 font-erevus-body">Smart contracts expire only when specific milestones are achieved - revenue targets, development goals, or governance decisions.</p>
                  </div>

                  <div className="bg-cyan-900/40 border border-cyan-500/30 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Percent className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-green-300 font-erevus-display">Proportional Rewards</h4>
                    </div>
                    <p className="text-green-200 font-erevus-body">Locked tokens still earn proportional rewards from revenue streams, maintaining incentive alignment without market impact.</p>
                  </div>
                </div>
              </div>

              {/* Buyback & Burn System */}
              <div 
                className="bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-cyan-900/30 rounded-3xl p-10 border border-blue-500/40 shadow-2xl backdrop-blur-lg animate-fade-in-up animation-delay-800 cursor-pointer hover:border-blue-400/60 transition-all duration-500"
                data-interactive="true"
                onMouseEnter={() => soundManager.playCoinHover()}
                onClick={() => soundManager.playCryptoCalculation()}
              >
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30">
                    <Flame className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-300 mb-4 font-erevus-display">Buyback & Burn</h3>
                  <p className="text-blue-200 text-lg leading-relaxed font-erevus-body">
                    Automatic buyback and burn mechanism maintains token scarcity and proportional balance when tokens are sold.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-900/40 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-300 font-bold font-erevus-mono">Automatic Buyback</span>
                      <span className="text-blue-400 font-bold font-erevus-mono">On Every Sale</span>
                    </div>
                    <p className="text-blue-200 text-sm font-erevus-body">When someone sells OBOLUS, the protocol automatically buys back tokens from the market</p>
                  </div>

                  <div className="bg-blue-900/40 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-300 font-bold font-erevus-mono">Token Burn</span>
                      <span className="text-red-400 font-bold font-erevus-mono">Immediate</span>
                    </div>
                    <p className="text-red-200 text-sm font-erevus-body">Bought back tokens are immediately burned, permanently removing them from circulation</p>
                  </div>

                  <div className="bg-blue-900/40 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-bold font-erevus-mono">Treasury Exclusion</span>
                      <span className="text-purple-400 font-bold font-erevus-mono">Not Counted</span>
                    </div>
                    <p className="text-purple-200 text-sm font-erevus-body">Treasury tokens are excluded from circulation calculations, maintaining accurate proportions</p>
                  </div>

                  <div className="bg-blue-900/40 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-300 font-bold font-erevus-mono">Balance Maintenance</span>
                      <span className="text-green-400 font-bold font-erevus-mono">50-50 Ratio</span>
                    </div>
                    <p className="text-green-200 text-sm font-erevus-body">Locked equity and circulating supply maintain proportional 50-50 balance automatically</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Circulation vs Treasury */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-3xl p-12 border border-cyan-500/50 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center justify-center gap-4 mb-8">
                <h3 className="text-4xl font-bold text-center font-erevus-display">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Circulation Mechanics
                  </span>
                </h3>
                <div className="animate-fade-in-up animation-delay-1200">
                  <OmegaCoin 
                    size="medium"
                    animated={true}
                    onHover={() => soundManager.playCoinHover()}
                    onClick={() => soundManager.playQuantumEncryption()}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div 
                  className="text-center group cursor-pointer"
                  data-interactive="true"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playSuccessChime()}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-green-500/30">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-300 mb-4 font-erevus-display">Circulating Supply</h4>
                  <p className="text-green-200 font-erevus-body">
                  </p>
                </div>
                
                <div 
                  className="text-center group cursor-pointer"
                  data-interactive="true"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playMiningStart()}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-yellow-500/30">
                    <Coins className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-yellow-300 mb-4 font-erevus-display">Equity Award Tokens</h4>
                  <p className="text-yellow-200 font-erevus-body">
                  </p>
                </div>
                
                <div 
                  className="text-center group cursor-pointer"
                  data-interactive="true"
                  onMouseEnter={() => soundManager.playCoinHover()}
                  onClick={() => soundManager.playCryptoCalculation()}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-red-500/30">
                    <Flame className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-red-300 mb-4 font-erevus-display">Deflationary Pressure</h4>
                  <p className="text-red-200 font-erevus-body">
                    Buyback and burn creates constant deflationary pressure on circulating supply while equity remains locked.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 border border-cyan-500/40 rounded-xl p-8 text-center">
                <h4 className="text-2xl font-bold text-cyan-300 mb-4 font-erevus-display">
                  <span className="flex items-center justify-center space-x-2">
                    <span>🔒</span>
                    <span>Smart Contract Equity</span>
                    <span>🔒</span>
                  </span>
                </h4>
                <p className="text-cyan-200 text-lg font-erevus-body leading-relaxed">
                  Proportional tokens needed for equity awards are locked in smart contracts that prevent liquidation 
                  and expire only when specific conditions are met. Treasury tokens never enter circulation calculations, 
                  and all sales trigger automatic buyback-burn to maintain supply balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GAMING-FIRST Token Utility - Enhanced */}
        <section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/30 to-pink-600/30 border border-purple-500/50 rounded-full px-8 py-4 mb-8 backdrop-blur-lg animate-fade-in-up">
                <Gamepad2 className="w-6 h-6 text-purple-400 animate-pulse" />
                <span className="text-lg font-bold text-purple-200 font-erevus-body">GAMING-FIRST</span>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 font-erevus-display animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Token Utility
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto font-erevus-body animate-fade-in-up animation-delay-400">
                OBOLUS powers a complete gaming ecosystem with winner-takes-all tournaments, battle passes, and reward systems that create real utility beyond speculation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Winner Takes All Tournaments */}
              <div className="bg-gradient-to-br from-yellow-900/20 via-yellow-800/10 to-yellow-900/20 rounded-2xl p-8 border border-yellow-500/40 shadow-2xl backdrop-blur-lg hover:border-yellow-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-600">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-yellow-500/30">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-yellow-300 mb-4 font-erevus-display">Winner Takes All Tournaments</h3>
                  <p className="text-yellow-200 text-lg leading-relaxed font-erevus-body">High-stakes tournaments where winners claim all entry fees.</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/30 rounded-xl p-4 border border-yellow-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-200 font-erevus-mono">Entry Fee:</span>
                      <span className="font-bold text-yellow-400 font-erevus-body">2-10 OBOLUS</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/30 rounded-xl p-4 border border-yellow-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-200 font-erevus-mono">Winner Reward:</span>
                      <span className="font-bold text-yellow-400 font-erevus-body animate-pulse">ALL Entry Fees</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/30 rounded-xl p-4 border border-yellow-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-200 font-erevus-mono">Game Modes:</span>
                      <span className="font-bold text-yellow-400 font-erevus-body">Gladiator, Arena, Boss</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Battle Pass Rewards */}
              <div className="bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-purple-900/20 rounded-2xl p-8 border border-purple-500/40 shadow-2xl backdrop-blur-lg hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-800">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30">
                    <Gift className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-purple-300 mb-4 font-erevus-display">Battle Pass Rewards</h3>
                  <p className="text-purple-200 text-lg leading-relaxed font-erevus-body">Unlock exclusive rewards through gameplay achievements and milestones.</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/30 rounded-xl p-4 border border-purple-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200 font-erevus-mono">Locked Rewards:</span>
                      <span className="font-bold text-purple-400 font-erevus-body">OBOLUS + NFTs</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/30 rounded-xl p-4 border border-purple-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200 font-erevus-mono">Unlock Method:</span>
                      <span className="font-bold text-purple-400 font-erevus-body">Gameplay Only</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/30 rounded-xl p-4 border border-purple-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200 font-erevus-mono">Season Duration:</span>
                      <span className="font-bold text-purple-400 font-erevus-body">3 Months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gaming Utilities Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Watch & Earn */}
              <div className="bg-gradient-to-br from-green-900/20 via-green-800/10 to-green-900/20 rounded-2xl p-8 border border-green-500/40 shadow-xl backdrop-blur-lg hover:border-green-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-1000">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-green-500/30">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-300 mb-3 font-erevus-display">Watch & Earn</h3>
                  <p className="text-green-200 leading-relaxed font-erevus-body">Watch sponsored content to earn HBAR rewards.</p>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 text-center">
                  <span className="text-green-400 font-bold text-lg font-erevus-mono">📺 0.1-1 HBAR Per 30s Ad</span>
                </div>
              </div>

              {/* Referral Rewards */}
              <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-900/20 rounded-2xl p-8 border border-blue-500/40 shadow-xl backdrop-blur-lg hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-1200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/30">
                    <UserCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-3 font-erevus-display">Referral System</h3>
                  <p className="text-blue-200 leading-relaxed font-erevus-body">Invite friends to join the platform and grow the community.</p>
                </div>
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 text-center">
                  <span className="text-blue-400 font-bold text-lg font-erevus-mono">🤝 Community Growth</span>
                </div>
              </div>

              {/* Daily Tasks */}
              <div className="bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-purple-900/20 rounded-2xl p-8 border border-purple-500/40 shadow-xl backdrop-blur-lg hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-1400">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-500/30">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-3 font-erevus-display">Daily Tasks</h3>
                  <p className="text-purple-200 leading-relaxed font-erevus-body">Complete daily challenges for bonus rewards.</p>
                </div>
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 text-center">
                  <span className="text-purple-400 font-bold text-lg font-erevus-mono">⭐ DAILY Bonus Rewards</span>
                </div>
              </div>
            </div>

            {/* Why Gaming-First Matters */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-purple-500/50 animate-fade-in-up animation-delay-1600">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 font-erevus-display">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why Gaming-First Matters
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 text-center max-w-4xl mx-auto font-erevus-body">
                OBOLUS creates real utility through engaging gameplay mechanics that reward skill, community building, and active participation instead of passive speculation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center group animate-fade-in-up animation-delay-600">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-yellow-500/30">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-yellow-300 mb-3 font-erevus-display">Skill-Based</h4>
                  <p className="text-yellow-200 font-erevus-body">Rewards based on gaming skill, not luck.</p>
                </div>
                
                <div className="text-center group animate-fade-in-up animation-delay-800">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-blue-500/30">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-300 mb-3 font-erevus-display">Community</h4>
                  <p className="text-blue-200 font-erevus-body">Referral systems build active player base.</p>
                </div>
                
                <div className="text-center group animate-fade-in-up animation-delay-1000">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/30">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-300 mb-3 font-erevus-display">Progression</h4>
                  <p className="text-purple-200 font-erevus-body">Battle passes unlock through gameplay.</p>
                </div>
                
                <div className="text-center group animate-fade-in-up animation-delay-1200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-green-500/30">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-300 mb-3 font-erevus-display">Real Utility</h4>
                  <p className="text-green-200 font-erevus-body">Tokens have actual purpose in gameplay.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SMART CONTRACT Co-Investment - Enhanced */}
        <section className="py-32 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/30 to-cyan-600/30 border border-blue-500/50 rounded-full px-8 py-4 mb-8 backdrop-blur-lg animate-fade-in-up">
                <Lock className="w-6 h-6 text-blue-400 animate-pulse" />
                <span className="text-lg font-bold text-blue-200 font-erevus-body">SMART CONTRACT</span>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 font-erevus-display animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Co-Investment
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto font-erevus-body animate-fade-in-up animation-delay-400">
                Lock your OBOLUS in smart contracts to fractionally invest in GPU hardware and datacenter infrastructure, earning future profits while preventing speculation through pseudominted token locks.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                {/* Lock OBOLUS Tokens */}
                <div className="bg-gradient-to-br from-red-900/20 via-red-800/10 to-red-900/20 rounded-2xl p-8 border border-red-500/40 shadow-2xl backdrop-blur-lg hover:border-red-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-600">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-red-500/30">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-300 font-erevus-display">Lock OBOLUS Tokens</h3>
                      <div className="bg-red-900/30 border border-red-500/30 rounded-lg px-3 py-1 inline-block mt-1">
                        <span className="text-red-400 font-bold text-sm font-erevus-mono">🔒 LOCKED Anti-Speculation Security</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-red-200 mb-6 font-erevus-body">
                    Lock your OBOLUS tokens in smart contracts as pseudominted tokens. These cannot be sold but represent fractional ownership in hardware investments.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-red-900/30 rounded-lg p-3 border border-red-500/30">
                      <span className="text-red-200 font-erevus-mono">Status:</span>
                      <span className="font-bold text-red-400 font-erevus-body animate-pulse">LOCKED</span>
                    </div>
                    <div className="flex justify-between items-center bg-red-900/30 rounded-lg p-3 border border-red-500/30">
                      <span className="text-red-200 font-erevus-mono">Purpose:</span>
                      <span className="font-bold text-red-400 font-erevus-body">Anti-Speculation Security</span>
                    </div>
                  </div>
                </div>

                {/* Co-Invest in Hardware */}
                <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-900/20 rounded-2xl p-8 border border-blue-500/40 shadow-2xl backdrop-blur-lg hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-800">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-300 font-erevus-display">Co-Invest in Hardware</h3>
                      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg px-3 py-1 inline-block mt-1">
                        <span className="text-blue-400 font-bold text-sm font-erevus-mono">⚡ CO-FUND Hardware Crowdfunding</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-200 mb-6 font-erevus-body">
                    Your locked tokens fund GPU purchases and datacenter infrastructure. Join crowdfunding campaigns for major hardware acquisitions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-blue-900/30 rounded-lg p-3 border border-blue-500/30">
                      <span className="text-blue-200 font-erevus-mono">Type:</span>
                      <span className="font-bold text-blue-400 font-erevus-body animate-pulse">CO-FUND</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-900/30 rounded-lg p-3 border border-blue-500/30">
                      <span className="text-blue-200 font-erevus-mono">Method:</span>
                      <span className="font-bold text-blue-400 font-erevus-body">Hardware Crowdfunding</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Earn Future Profits */}
                <div className="bg-gradient-to-br from-green-900/20 via-green-800/10 to-green-900/20 rounded-2xl p-8 border border-green-500/40 shadow-2xl backdrop-blur-lg hover:border-green-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-1000">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-green-500/30">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-300 font-erevus-display">Earn Future Profits</h3>
                      <div className="bg-green-900/30 border border-green-500/30 rounded-lg px-3 py-1 inline-block mt-1">
                        <span className="text-green-400 font-bold text-sm font-erevus-mono">💰 PROFIT Automatic Distribution</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-green-200 mb-6 font-erevus-body">
                    Receive proportional profits from hardware operations. Smart contracts automatically distribute your share of mining and AI compute revenue.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-green-900/30 rounded-lg p-3 border border-green-500/30">
                      <span className="text-green-200 font-erevus-mono">Rewards:</span>
                      <span className="font-bold text-green-400 font-erevus-body animate-pulse">PROFIT</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-900/30 rounded-lg p-3 border border-green-500/30">
                      <span className="text-green-200 font-erevus-mono">Distribution:</span>
                      <span className="font-bold text-green-400 font-erevus-body">Automatic Distribution</span>
                    </div>
                  </div>
                </div>

                {/* Startup Crowdfunding & Fractional Ownership */}
                <div className="bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-purple-900/20 rounded-2xl p-8 border border-purple-500/40 shadow-2xl backdrop-blur-lg hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up animation-delay-1200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-500/30">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-300 font-erevus-display">Startup Crowdfunding</h3>
                  </div>
                  <p className="text-purple-200 mb-6 font-erevus-body">
                    Fund any startup endeavor at any stage. Our framework supports everything from pre-seed to expansion rounds.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                      <span className="text-purple-200 font-erevus-mono">Gaming Studio Launch:</span>
                      <span className="font-bold text-purple-400 font-erevus-body">Active</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                      <span className="text-purple-200 font-erevus-mono">Web3 Infrastructure:</span>
                      <span className="font-bold text-purple-400 font-erevus-body">Funding</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                      <span className="text-purple-200 font-erevus-mono">AI Platform Seed:</span>
                      <span className="font-bold text-purple-400 font-erevus-body">Planning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Hardware Equity Works */}
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-blue-500/50 animate-fade-in-up animation-delay-1400">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 font-erevus-display">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Hardware Equity Works
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 text-center max-w-4xl mx-auto font-erevus-body">
                Revolutionary approach that transforms tokens from speculation instruments into productive assets generating real returns from hardware operations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center group animate-fade-in-up animation-delay-600">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-red-500/30">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-red-300 mb-3 font-erevus-display">Anti-Speculation</h4>
                  <p className="text-red-200 font-erevus-body">Locked tokens prevent market manipulation and speculation.</p>
                </div>
                
                <div className="text-center group animate-fade-in-up animation-delay-800">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-blue-500/30">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-300 mb-3 font-erevus-display">Real Ownership</h4>
                  <p className="text-blue-200 font-erevus-body">Fractional ownership of physical hardware assets.</p>
                </div>
                
                <div className="text-center group animate-fade-in-up animation-delay-1000">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/30">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-300 mb-3 font-erevus-display">Crowdfunding</h4>
                  <p className="text-purple-200 font-erevus-body">Pool resources for major infrastructure investments.</p>
                </div>
                
                <div className="text-center group animate-fade-in-up animation-delay-1200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-green-500/30">
                    <HandCoins className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-300 mb-3 font-erevus-display">Profit Sharing</h4>
                  <p className="text-green-200 font-erevus-body">Automatic proportional distribution of all profits.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Decorative Omega Coin Pattern Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950"></div>
          
          {/* Floating Omega Coins Pattern */}
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center opacity-40">
              {[...Array(14)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    opacity: 0.9,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${4 + (i % 2)}s`
                  }}
                >
                  <OmegaCoin 
                    size="small"
                    animated={true}
                    coinVariant={i % 4 === 0 ? "premium" : i % 7 === 0 ? "rare" : "standard"}
                    onHover={() => soundManager.playCoinHover()}
                    onClick={() => soundManager.playSuccessChime()}
                    className="hover:scale-110 transition-all duration-300"
                    decorative={true}
                    showValue={false}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Central Hero Omega */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Pulsing Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <OmegaCoin 
                  size="large"
                  animated={true}
                  coinVariant="legendary"
                  onHover={() => soundManager.playHbarTransaction()}
                  onClick={() => soundManager.playQuantumEncryption()}
                  className="relative z-10 hover:scale-105 transition-all duration-500"
                  decorative={true}
                  showValue={false}
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
      </motion.main>
    </>
  )
}