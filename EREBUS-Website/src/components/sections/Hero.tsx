'use client'

import { ArrowRight, Users, Lightbulb, TrendingUp, Shield, Zap, Target, Crown, Rocket, Gem } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4.5 }}
    >
      {/* Hero Section - Sophisticated Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 overflow-hidden section-transition">
        {/* Subtle Dynamic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 md:w-96 md:h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Refined grid pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-[90vh]">
            
            {/* Left Column - Refined Business Value */}
            <div className="space-y-6 lg:space-y-10 text-center lg:text-left">
              {/* Sophisticated Business Badge */}
              <div className="inline-flex items-center space-x-2 sm:space-x-3 card-premium rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-xl animate-fade-in-up">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 animate-pulse" />
                <span className="text-sm sm:text-lg font-bold text-slate-200 font-erevus-body">Collaborative Force</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-ping"></div>
              </div>

              {/* Refined Headlines */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight break-words animate-fade-in-up animation-delay-200">
                  <span className="block bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-2xl font-erevus-display animate-glow-pulse">EREVUS</span>
                  <span className="block bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 bg-clip-text text-transparent animate-pulse font-erevus-display">CLUSTER</span>
                </h1>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 break-words animate-fade-in-left animation-delay-400 font-erevus-heading">
                    <span className="text-slate-400 font-bold bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent animate-glow-pulse">"EREVUS CLUSTER - Joining Forces to Solve Problems, Make Products, and Build Connections."</span>
                  </p>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 break-words animate-fade-in-right animation-delay-600 font-erevus-body">
                    We unite visionary creators, developers, and entrepreneurs under one powerful ecosystem, amplifying individual talents through collaborative innovation, shared resources, cutting-edge technology, and strategic partnerships that transform ambitious ideas into reality.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-8 text-sm sm:text-base lg:text-lg animate-slide-in-bottom animation-delay-800">
                    <div className="flex items-center space-x-2 card-premium rounded-full px-4 py-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-400 animate-pulse" />
                      <span className="text-slate-200 font-semibold font-erevus-mono">Collaborative Network</span>
                    </div>
                    <div className="flex items-center space-x-2 card-premium rounded-full px-4 py-2">
                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-400 animate-pulse" />
                      <span className="text-slate-200 font-semibold font-erevus-mono">Problem Solving</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refined Business Value Statement */}
              <div className="relative animate-fade-in-up animation-delay-1000">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-slate-400 to-slate-600 animate-pulse"></div>
                <blockquote className="pl-4 sm:pl-6 lg:pl-8 py-4 sm:py-6 card-premium rounded-r-xl shadow-xl">
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-200 font-medium italic leading-relaxed break-words font-erevus-body">
                    "EREVUS CLUSTER transforms ambitious businesses through custom game development, advanced AI automation systems, cryptocurrency solutions, and elite workforce training that delivers measurable ROI within 90 days."
                  </p>
                  <footer className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-slate-400 font-semibold font-erevus-mono">— EREVUS Professional Services</footer>
                </blockquote>
              </div>

              {/* Sophisticated Business CTAs */}
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 animate-slide-in-bottom animation-delay-1200">
                <Link
                  href="/contact"
                  className="group relative bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 text-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-lg lg:text-xl transition-all duration-500 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-slate-500/30 transform hover:scale-105 hover:-translate-y-1 border border-slate-600/30 font-erevus-heading"
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-pulse" />
                  <span className="break-words">JOIN THE CLUSTER</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-400/0 via-slate-300/10 to-slate-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                
                <Link
                  href="/services"
                  className="group border-2 border-slate-500 hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-500 text-slate-300 hover:text-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-lg lg:text-xl transition-all duration-500 flex items-center justify-center space-x-2 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm shadow-lg hover:shadow-slate-500/20 card-premium font-erevus-heading"
                >
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:animate-pulse" />
                  <span className="break-words">EXPLORE SOLUTIONS</span>
                </Link>
              </div>

              {/* Refined Stats Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 border-t border-slate-700/50 animate-fade-in-up animation-delay-1400">
                <div className="text-center card-premium rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform duration-300">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent mb-1 animate-pulse break-words font-erevus-display">FORCE</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium font-erevus-mono">Multiplier</div>
                </div>
                <div className="text-center card-premium rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform duration-300">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent mb-1 animate-pulse break-words font-erevus-display">SHARED</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium font-erevus-mono">Contracts</div>
                </div>
                <div className="text-center card-premium rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform duration-300">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent mb-1 animate-pulse break-words font-erevus-display">GROWING</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium font-erevus-mono">Network</div>
                </div>
              </div>
            </div>

            {/* Right Column - PREMIUM ENHANCED VISUAL */}
            <div className="order-first lg:order-last mt-8 lg:mt-0 animate-fade-in-right animation-delay-600">
              <div className="relative">
                {/* Sophisticated Multi-layer Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-2xl sm:rounded-3xl blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 via-transparent to-slate-600/20 rounded-2xl sm:rounded-3xl blur-2xl animate-pulse animation-delay-2000"></div>
                
                <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-slate-600/50 shadow-2xl backdrop-blur-lg hover:border-slate-500/70 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 card-premium overflow-hidden">
                  {/* Mesmerizing Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 via-transparent to-slate-600/10 rounded-2xl sm:rounded-3xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-500/50 to-transparent"></div>
                  
                  <div className="relative text-center space-y-4 sm:space-y-6 lg:space-y-8">
                    {/* Logo with Quantum Glow */}
                    <div className="relative animate-fade-in-up animation-delay-800">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-500/30 via-slate-400/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
                      <Image 
                        src="/erevus-logo.png" 
                        alt="EREVUS Logo" 
                        width={120} 
                        height={120} 
                        className="relative mx-auto drop-shadow-2xl sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[240px] xl:h-[240px] hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                      {/* Elite Title */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-300/20 to-slate-400/20 blur-lg rounded-lg"></div>
                        <h3 className="relative text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent break-words animate-fade-in-up animation-delay-1000 font-erevus-display tracking-wide">
                          EREVUS ECOSYSTEM
                        </h3>
                      </div>
                      
                      {/* Revolutionary Description */}
                      <div className="relative">
                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed break-words animate-fade-in-up animation-delay-1200 font-erevus-body max-w-2xl mx-auto">
                          <span className="font-bold text-slate-200 bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">THERION CLAN</span> elite training programs, cutting-edge AI automation tools, exclusive research initiatives, premium enterprise contracts, and <span className="font-bold text-slate-200 bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">OBOLUS</span> cryptocurrency integration - the world's most advanced creative economy platform driving sustainable wealth generation through intelligence amplification.
                        </p>
                      </div>
                      
                      {/* Elite Feature Cards */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 animate-slide-in-bottom animation-delay-1400">
                        {/* THERION CLAN Card - Enhanced */}
                        <div className="group card-premium rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:scale-105 transition-all duration-500 relative overflow-hidden border border-slate-600/30">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-slate-400/0 via-slate-400/60 to-slate-400/0"></div>
                          
                          <div className="relative">
                            <div className="relative mb-2 sm:mb-3">
                              <div className="absolute inset-0 bg-slate-400/20 rounded-lg blur-sm group-hover:bg-slate-400/30 transition-colors duration-300"></div>
                              <Gem className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-slate-400 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                            <div className="text-slate-300 font-bold text-xs sm:text-sm lg:text-base xl:text-lg break-words font-erevus-display">THERION CLAN</div>
                            <div className="text-slate-500 text-xs sm:text-sm font-erevus-mono">Elite Training & Tools</div>
                          </div>
                        </div>

                        {/* THERION TOOLS Card - Enhanced */}
                        <div className="group card-premium rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 hover:scale-105 transition-all duration-500 relative overflow-hidden border border-slate-600/30">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-slate-500/0 via-slate-500/60 to-slate-500/0"></div>
                          
                          <div className="relative">
                            <div className="relative mb-2 sm:mb-3">
                              <div className="absolute inset-0 bg-slate-500/20 rounded-lg blur-sm group-hover:bg-slate-500/30 transition-colors duration-300"></div>
                              <Zap className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-slate-500 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
                            </div>
                            <div className="text-slate-300 font-bold text-xs sm:text-sm lg:text-base xl:text-lg break-words font-erevus-display">THERION TOOLS</div>
                            <div className="text-slate-500 text-xs sm:text-sm font-erevus-mono">AI Automation & Research</div>
                          </div>
                        </div>
                      </div>

                      {/* Elite Revenue Showcase */}
                      <div className="relative mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-700/50">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent"></div>
                        <div className="text-center space-y-2 animate-fade-in-up animation-delay-1600">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent font-erevus-display">
                            $250K+ ANNUAL
                          </div>
                          <div className="text-xs sm:text-sm text-slate-400 font-erevus-mono tracking-wider">
                            VERIFIED CREATIVE ECONOMY REVENUE
                          </div>
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

      {/* Customer Network Section - Sophisticated Enhanced Carousel Categories */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden section-transition">
        {/* Refined Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148,163,184,0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Sophisticated background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-40 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-600/20 to-slate-500/20 border border-slate-500/40 rounded-full px-3 sm:px-4 lg:px-6 py-2 mb-4 sm:mb-6 lg:mb-8 backdrop-blur-lg shadow-2xl shadow-slate-500/20 animate-fade-in-up">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-slate-300 animate-pulse" />
              <span className="text-slate-300 font-semibold text-xs sm:text-sm lg:text-base bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent break-words font-erevus-mono">PROVEN BUSINESS RESULTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 lg:mb-8 break-words animate-fade-in-up animation-delay-200">
              <span className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent font-erevus-display animate-glow-pulse">EREVUS CLUSTER</span> 
              <span className="block bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent font-erevus-display">POWER</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed break-words animate-fade-in-up animation-delay-400 font-erevus-body">
              <span className="text-slate-400 font-bold bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent">THERION CLAN</span> training & tools, collective B2B contracts, game development, and <span className="text-slate-300 font-bold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">OBOLUS stablecoin</span> - generating <span className="text-slate-200 font-bold bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent animate-pulse">$250K+ annual revenue</span> in the creative economy.
            </p>
          </div>

          <style jsx>{`
            @keyframes slideLeftSeamless {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            
            @keyframes slideRightSeamless {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            
            @keyframes fadeInScale {
              from {
                opacity: 0;
                transform: scale(0.9) translateY(20px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
            
            .carousel-container {
              animation: fadeInScale 0.8s ease-out forwards;
              opacity: 0;
            }
            
            .carousel-container:nth-child(1) { animation-delay: 0.2s; }
            .carousel-container:nth-child(2) { animation-delay: 0.4s; }
            .carousel-container:nth-child(3) { animation-delay: 0.6s; }
            .carousel-container:nth-child(4) { animation-delay: 0.8s; }
            
            .carousel-track {
              display: flex;
              animation: 40s linear infinite;
              width: 200%;
              will-change: transform;
            }
            
            .carousel-left .carousel-track {
              animation-name: slideLeftSeamless;
            }
            
            .carousel-right .carousel-track {
              animation-name: slideRightSeamless;
            }
            
            .carousel-card {
              flex-shrink: 0;
              width: 280px;
              margin-right: 16px;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            @media (min-width: 640px) {
              .carousel-card {
                width: 300px;
                margin-right: 20px;
              }
            }
            
            @media (min-width: 1024px) {
              .carousel-card {
                width: 320px;
                margin-right: 24px;
              }
            }
            
            .carousel-card:hover {
              transform: translateY(-8px) scale(1.02);
              filter: brightness(1.1);
            }
            
            .carousel-container:hover .carousel-track {
              animation-play-state: paused;
            }
            
            .badge-unique {
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.3);
              transition: all 0.3s ease;
            }
            
            .carousel-card:hover .badge-unique {
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.25));
              border-color: rgba(255, 255, 255, 0.5);
              transform: scale(1.05);
            }
          `}</style>

          <div className="space-y-12 lg:space-y-16">
            {/* B2B CONTRACT SERVICES - SOPHISTICATED THERION CLAN PARTNERSHIPS */}
            <div className="carousel-container">
              <div className="mb-6 lg:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                    ⚖️
                  </div>
                  <span>THERION LEGAL & COMPLIANCE</span>
                </h3>
                <p className="text-slate-400 text-base sm:text-lg">Navigate law, copyrights, trademarks, accounting, and financial compliance with expert guidance</p>
              </div>
              
              <div className="carousel-left overflow-hidden">
                <div className="carousel-track">
                  {[
                    // First set of cards
                    {
                      title: 'Legal Compliance Training',
                      description: 'Comprehensive education on business law, contracts, liability protection, and regulatory compliance for entrepreneurs',
                      badge: 'LEGAL FOUNDATION',
                      icon: '⚖️',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'IP & Trademark Protection',
                      description: 'Copyright registration, trademark filing, intellectual property strategy, and brand protection guidance',
                      badge: 'IP PROTECTION',
                      icon: '🛡️',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Financial Compliance Systems',
                      description: 'Accounting setup, tax strategy, bookkeeping systems, and financial reporting for business compliance',
                      badge: 'FINANCIAL CLARITY',
                      icon: '📊',
                      color: 'from-slate-700 via-slate-800 to-slate-900'
                    },
                    {
                      title: 'Business Structure Consulting',
                      description: 'LLC formation, corporate structure, business registration, and legal entity optimization guidance',
                      badge: 'STRUCTURE SETUP',
                      icon: '🏛️',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Contract & Agreement Drafting',
                      description: 'Professional contract templates, service agreements, partnership contracts, and legal document preparation',
                      badge: 'SECURE AGREEMENTS',
                      icon: '📋',
                      color: 'from-slate-800 via-slate-700 to-slate-900'
                    },
                    {
                      title: 'Regulatory Compliance Advisory',
                      description: 'Navigate industry regulations, licensing requirements, data protection laws, and compliance frameworks',
                      badge: 'STAY COMPLIANT',
                      icon: '⚖️',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    // Duplicate set for seamless looping
                    {
                      title: 'IP & Trademark Protection',
                      description: 'Copyright registration, trademark filing, intellectual property strategy, and brand protection guidance',
                      badge: 'IP PROTECTION',
                      icon: '🛡️',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Financial Compliance Systems',
                      description: 'Accounting setup, tax strategy, bookkeeping systems, and financial reporting for business compliance',
                      badge: 'FINANCIAL CLARITY',
                      icon: '�',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'Business Structure Consulting',
                      description: 'LLC formation, corporate structure, business registration, and legal entity optimization guidance',
                      badge: 'STRUCTURE SETUP',
                      icon: '�️',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Contract & Agreement Drafting',
                      description: 'Professional contract templates, service agreements, partnership contracts, and legal document preparation',
                      badge: 'SECURE AGREEMENTS',
                      icon: '📋',
                      color: 'from-slate-800 via-slate-700 to-slate-900'
                    },
                    {
                      title: 'Regulatory Compliance Advisory',
                      description: 'Navigate industry regulations, licensing requirements, data protection laws, and compliance frameworks',
                      badge: 'STAY COMPLIANT',
                      icon: '⚖️',
                      color: 'from-slate-700 via-slate-800 to-slate-600'
                    }
                  ].map((card, index) => (
                    <div
                      key={index}
                      className={`carousel-card relative rounded-2xl p-6 bg-gradient-to-br ${card.color} text-white shadow-lg border border-white/10`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{card.icon}</div>
                        <span className="badge-unique text-xs font-bold px-3 py-1 rounded-full text-white whitespace-nowrap">
                          {card.badge}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-3 leading-tight">{card.title}</h4>
                      <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* THERION CLAN TRAINING PROGRAMS */}
            <div className="carousel-container">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-200 mb-4 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mr-4">
                    🎓
                  </div>
                  THERION CLAN Elite Training
                </h3>
                <p className="text-slate-400 text-lg">Master-level education and THERION tools mastery for creative dominance</p>
              </div>
              
              <div className="carousel-right overflow-hidden">
                <div className="carousel-track">
                  {[
                    // First set of cards
                    {
                      title: 'THERION Tools & Resources',
                      description: 'Elite training on THERION systems, automation tools, and intelligent business solutions exclusive to THERION CLAN members',
                      badge: 'MASTER THERION TOOLS',
                      icon: '🤖',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'THERION CLAN Seminars',
                      description: 'Exclusive seminars from THERION CLAN masters sharing elite knowledge, advanced techniques, and industry dominance strategies',
                      badge: 'JOIN THE ELITE',
                      icon: '🎯',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Creative Development',
                      description: 'Hands-on training in creative media production, design principles, and modern workflows',
                      badge: 'CREATE PROFESSIONALLY',
                      icon: '🎨',
                      color: 'from-slate-800 via-slate-700 to-slate-900'
                    },
                    {
                      title: 'Technical Skills',
                      description: 'Programming, development frameworks, and technical expertise for career advancement',
                      badge: 'BUILD YOUR SKILLS',
                      icon: '💻',
                      color: 'from-slate-700 via-slate-800 to-slate-900'
                    },
                    {
                      title: 'Business Training',
                      description: 'Entrepreneurship, project management, and business development for creative professionals',
                      badge: 'GROW YOUR BUSINESS',
                      icon: '📈',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Industry Networking',
                      description: 'Professional connections, collaboration opportunities, and career development support',
                      badge: 'EXPAND YOUR NETWORK',
                      icon: '�',
                      color: 'from-slate-700 via-slate-800 to-slate-600'
                    },
                    // Duplicate set for seamless looping
                    {
                      title: 'AI Tools & Resources',
                      description: 'Professional training on cutting-edge AI tools, automation systems, and intelligent business solutions',
                      badge: 'MASTER AI TOOLS',
                      icon: '🤖',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Expert Seminars',
                      description: 'Industry experts sharing professional knowledge, best practices, and advanced techniques',
                      badge: 'LEARN FROM EXPERTS',
                      icon: '🎯',
                      color: 'from-slate-800 via-slate-600 to-slate-700'
                    },
                    {
                      title: 'Creative Development',
                      description: 'iOS, Android, and cross-platform specialists building modern mobile applications',
                      badge: 'BUILD FOR EVERYONE',
                      icon: '📱',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'Software Development Agencies',
                      description: 'Full-stack teams creating enterprise applications with scalable architectures',
                      badge: 'SCALE YOUR IDEAS',
                      icon: '🏗️',
                      color: 'from-slate-600 via-slate-800 to-slate-700'
                    },
                    {
                      title: 'Cloud Solutions Providers',
                      description: 'AWS, Azure, GCP specialists implementing scalable cloud infrastructure solutions',
                      badge: 'REACH THE CLOUD',
                      icon: '☁️',
                      color: 'from-slate-800 via-slate-700 to-slate-600'
                    },
                    {
                      title: 'Technical Consultancies',
                      description: 'Technology advisors providing architecture guidance and development strategy optimization',
                      badge: 'GET EXPERT ADVICE',
                      icon: '🧠',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    }
                  ].map((card, index) => (
                    <div
                      key={index}
                      className={`carousel-card relative rounded-2xl p-6 bg-gradient-to-br ${card.color} text-white shadow-lg border border-white/10`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{card.icon}</div>
                        <span className="badge-unique text-xs font-bold px-3 py-1 rounded-full text-white whitespace-nowrap">
                          {card.badge}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-3 leading-tight">{card.title}</h4>
                      <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* THERION GAME DEVELOPMENT STUDIO */}
            <div className="carousel-container">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-200 mb-4 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mr-4">
                    🎮
                  </div>
                  THERION Game Development
                </h3>
                <p className="text-slate-400 text-lg">Elite game development through THERION CLAN expertise and innovation</p>
              </div>
              
              <div className="carousel-left overflow-hidden">
                <div className="carousel-track">
                  {[
                    // First set of cards
                    {
                      title: 'Custom Game Development',
                      description: 'Full-cycle game development from concept to launch across PC, mobile, and console platforms',
                      badge: 'BUILD YOUR GAME',
                      icon: '🕹️',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'Interactive Experiences',
                      description: 'VR/AR applications, interactive installations, and immersive digital experiences',
                      badge: 'IMMERSE PLAYERS',
                      icon: '🥽',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Game Engine Expertise',
                      description: 'Unity, Unreal Engine, and custom engine development for optimized performance',
                      badge: 'POWER YOUR GAME',
                      icon: '⚙️',
                      color: 'from-slate-800 via-slate-700 to-slate-900'
                    },
                    {
                      title: 'Multiplayer Systems',
                      description: 'Real-time multiplayer, networking solutions, and scalable game backend infrastructure',
                      badge: 'CONNECT PLAYERS',
                      icon: '🌐',
                      color: 'from-slate-700 via-slate-800 to-slate-900'
                    },
                    {
                      title: 'Game Art & Animation',
                      description: '2D/3D art, character design, animation, and visual effects for stunning game visuals',
                      badge: 'CREATE BEAUTY',
                      icon: '🎨',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Gamification Solutions',
                      description: 'Transform business applications with game mechanics, engagement systems, and rewards',
                      badge: 'MAKE IT ENGAGING',
                      icon: '🏆',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    // Duplicate set for seamless looping
                    {
                      title: 'Custom Game Development',
                      description: 'Full-cycle game development from concept to launch across PC, mobile, and console platforms',
                      badge: 'BUILD YOUR GAME',
                      icon: '🕹️',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'Interactive Experiences',
                      description: 'VR/AR applications, interactive installations, and immersive digital experiences',
                      badge: 'IMMERSE PLAYERS',
                      icon: '🥽',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Game Engine Expertise',
                      description: 'Unity, Unreal Engine, and custom engine development for optimized performance',
                      badge: 'POWER YOUR GAME',
                      icon: '⚙️',
                      color: 'from-slate-800 via-slate-700 to-slate-900'
                    },
                    {
                      title: 'Multiplayer Systems',
                      description: 'Real-time multiplayer, networking solutions, and scalable game backend infrastructure',
                      badge: 'CONNECT PLAYERS',
                      icon: '🌐',
                      color: 'from-amber-500 via-yellow-600 to-orange-700'
                    }
                  ].map((card, index) => (
                    <div
                      key={index}
                      className={`carousel-card relative rounded-2xl p-6 bg-gradient-to-br ${card.color} text-white shadow-lg border border-white/10`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{card.icon}</div>
                        <span className="badge-unique text-xs font-bold px-3 py-1 rounded-full text-white whitespace-nowrap">
                          {card.badge}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-3 leading-tight">{card.title}</h4>
                      <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* THERION CRYPTO INNOVATION */}
            <div className="carousel-container">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-200 mb-4 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mr-4">
                    ₿
                  </div>
                  OBOLUS Cryptocurrency Services
                </h3>
                <p className="text-slate-400 text-lg">Professional cryptocurrency education, OBOLUS stablecoin solutions, and blockchain integration services</p>
              </div>
              
              <div className="carousel-right overflow-hidden">
                <div className="carousel-track">
                  {[
                    // First set of cards
                    {
                      title: 'EREVUS Token',
                      description: 'Our native cryptocurrency powering the ecosystem with utility, rewards, and governance features',
                      badge: 'OWN THE FUTURE',
                      icon: '🪙',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Blockchain Development',
                      description: 'Smart contracts, DeFi applications, and decentralized solutions built on modern blockchains',
                      badge: 'BUILD ON CHAIN',
                      icon: '⛓️',
                      color: 'from-slate-700 via-slate-800 to-slate-600'
                    },
                    {
                      title: 'NFT Marketplace',
                      description: 'Digital collectibles, gaming assets, and creative works tokenized for true ownership',
                      badge: 'COLLECT DIGITAL',
                      icon: '🖼️',
                      color: 'from-slate-800 via-slate-700 to-slate-900'
                    },
                    {
                      title: 'DeFi Solutions',
                      description: 'Decentralized finance protocols, yield farming, and innovative financial instruments',
                      badge: 'EARN REWARDS',
                      icon: '💰',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'Web3 Integration',
                      description: 'Seamless blockchain integration for existing applications and new decentralized platforms',
                      badge: 'BRIDGE TO WEB3',
                      icon: '🌐',
                      color: 'from-slate-600 via-slate-800 to-slate-700'
                    },
                    {
                      title: 'Crypto Consulting',
                      description: 'Strategic guidance for blockchain adoption, tokenomics design, and crypto business models',
                      badge: 'STRATEGIZE CRYPTO',
                      icon: '�',
                      color: 'from-slate-800 via-slate-600 to-slate-700'
                    },
                    // Duplicate set for seamless looping
                    {
                      title: 'EREVUS Token',
                      description: 'Our native cryptocurrency powering the ecosystem with utility, rewards, and governance features',
                      badge: 'OWN THE FUTURE',
                      icon: '🪙',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Blockchain Development',
                      description: 'Smart contracts, DeFi applications, and decentralized solutions built on modern blockchains',
                      badge: 'BUILD ON CHAIN',
                      icon: '⛓️',
                      color: 'from-slate-700 via-slate-800 to-slate-600'
                    },
                    {
                      title: 'NFT Marketplace',
                      description: 'Digital collectibles, gaming assets, and creative works tokenized for true ownership',
                      badge: 'COLLECT DIGITAL',
                      icon: '🖼️',
                      color: 'from-slate-800 via-slate-700 to-slate-900'
                    },
                    {
                      title: 'DeFi Solutions',
                      description: 'Decentralized finance protocols, yield farming, and innovative financial instruments',
                      badge: 'EARN REWARDS',
                      icon: '�',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'Quality Management Teams',
                      description: 'QA specialists ensuring product excellence through testing strategies and quality frameworks',
                      badge: 'ENSURE QUALITY',
                      icon: '✅',
                      color: 'from-slate-600 via-slate-800 to-slate-700'
                    },
                    {
                      title: 'Product Management Teams',
                      description: 'Product experts driving innovation with user research and strategic roadmap planning',
                      badge: 'PLAN YOUR PRODUCT',
                      icon: '🚀',
                      color: 'from-slate-800 via-slate-700 to-slate-600'
                    },
                    {
                      title: 'Agile Development Teams',
                      description: 'Scrum masters and agile coaches optimizing team velocity with modern frameworks',
                      badge: 'ADAPT QUICKLY',
                      icon: '🔄',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    }
                  ].map((card, index) => (
                    <div
                      key={index}
                      className={`carousel-card relative rounded-2xl p-6 bg-gradient-to-br ${card.color} text-white shadow-lg border border-white/10`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{card.icon}</div>
                        <span className="badge-unique text-xs font-bold px-3 py-1 rounded-full text-white whitespace-nowrap">
                          {card.badge}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-3 leading-tight">{card.title}</h4>
                      <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CREATIVE & PRODUCTION */}
            <div className="carousel-container">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4">
                    🎨
                  </div>
                  Creative & Production
                </h3>
                <p className="text-gray-400 text-lg">From digital design to physical manufacturing and brand development</p>
              </div>
              
              <div className="carousel-left overflow-hidden">
                <div className="carousel-track">
                  {[
                    // First set of cards
                    {
                      title: 'Creative Studios',
                      description: 'Design studios enhancing creative output with cutting-edge AI tools and professional seminars',
                      badge: 'UNLOCK YOUR CREATIVITY',
                      icon: '🎭',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'Advertising Agencies',
                      description: 'Full-service agencies revolutionizing campaigns with AI-powered creative tools',
                      badge: 'TELL YOUR STORY',
                      icon: '📢',
                      color: 'from-slate-600 via-slate-800 to-slate-700'
                    },
                    {
                      title: 'Physical Prototyping Labs',
                      description: 'Hardware creators developing tangible products with 3D printing and rapid prototyping',
                      badge: 'BUILD YOUR PROTOTYPE',
                      icon: '🔧',
                      color: 'from-slate-800 via-slate-600 to-slate-700'
                    },
                    {
                      title: 'Brand Consultancies',
                      description: 'Brand experts building powerful identities with strategic insights and design excellence',
                      badge: 'GROW YOUR BRAND',
                      icon: '💎',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Merchandise Production',
                      description: 'Manufacturing specialists creating branded products and promotional materials',
                      badge: 'MAKE IT REAL',
                      icon: '🏭',
                      color: 'from-slate-700 via-slate-800 to-slate-600'
                    },
                    {
                      title: 'Product Design Studios',
                      description: 'Industrial designers creating functional products with user-centered design principles',
                      badge: 'DESIGN FOR USERS',
                      icon: '📐',
                      color: 'from-slate-800 via-slate-600 to-slate-700'
                    },
                    // Duplicate set for seamless looping
                    {
                      title: 'Creative Studios',
                      description: 'Design studios enhancing creative output with cutting-edge AI tools and professional seminars',
                      badge: 'UNLOCK YOUR CREATIVITY',
                      icon: '🎭',
                      color: 'from-slate-700 via-slate-600 to-slate-800'
                    },
                    {
                      title: 'Advertising Agencies',
                      description: 'Full-service agencies revolutionizing campaigns with AI-powered creative tools',
                      badge: 'TELL YOUR STORY',
                      icon: '📢',
                      color: 'from-slate-600 via-slate-800 to-slate-700'
                    },
                    {
                      title: 'Physical Prototyping Labs',
                      description: 'Hardware creators developing tangible products with 3D printing and rapid prototyping',
                      badge: 'BUILD YOUR PROTOTYPE',
                      icon: '🔧',
                      color: 'from-slate-800 via-slate-600 to-slate-700'
                    },
                    {
                      title: 'Brand Consultancies',
                      description: 'Brand experts building powerful identities with strategic insights and design excellence',
                      badge: 'GROW YOUR BRAND',
                      icon: '💎',
                      color: 'from-slate-600 via-slate-700 to-slate-800'
                    },
                    {
                      title: 'Merchandise Production',
                      description: 'Manufacturing specialists creating branded products and promotional materials',
                      badge: 'MAKE IT REAL',
                      icon: '🏭',
                      color: 'from-slate-700 via-slate-800 to-slate-600'
                    },
                    {
                      title: 'Product Design Studios',
                      description: 'Industrial designers creating functional products with user-centered design principles',
                      badge: 'DESIGN FOR USERS',
                      icon: '📐',
                      color: 'from-slate-800 via-slate-600 to-slate-700'
                    }
                  ].map((card, index) => (
                    <div
                      key={index}
                      className={`carousel-card relative rounded-2xl p-6 bg-gradient-to-br ${card.color} text-white shadow-lg border border-white/10`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{card.icon}</div>
                        <span className="badge-unique text-xs font-bold px-3 py-1 rounded-full text-white whitespace-nowrap">
                          {card.badge}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-3 leading-tight">{card.title}</h4>
                      <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Mission Section */}
      <section className="py-24 bg-erevus-black relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-800/15"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <motion.div 
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-600/20 via-slate-500/10 to-transparent border border-slate-400/30 rounded-full px-8 py-3 shadow-lg shadow-slate-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(100, 116, 139, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="w-6 h-6 text-slate-300" />
                  </motion.div>
                  <span className="text-slate-200 font-bold text-lg tracking-wide">OUR MISSION</span>
                  <motion.div
                    className="w-2 h-2 bg-slate-400 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.h2 
                  className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our Strategy
                </motion.h2>
                
                <motion.blockquote 
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 rounded-full"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="pl-8 sm:pl-10 py-6 sm:py-8 bg-gradient-to-r from-slate-700/20 via-slate-600/10 to-transparent rounded-r-3xl border border-slate-500/20 backdrop-blur-sm group-hover:border-slate-400/40 transition-all duration-500 shadow-lg shadow-slate-600/10"
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(100, 116, 139, 0.2)",
                      background: "linear-gradient(to right, rgba(100, 116, 139, 0.25), rgba(100, 116, 139, 0.15), transparent)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-xl sm:text-2xl lg:text-3xl text-white font-bold italic leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      "We carefully choose meaningful partnerships - collaborating with talented creators, passionate learners, and visionary clients building products that genuinely improve people's lives. Quality over quantity in everything we do."
                    </motion.p>
                    <motion.footer 
                      className="mt-4 sm:mt-6 text-lg sm:text-xl text-slate-300 font-bold flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <span>— EREVUS Partnership Philosophy</span>
                      <motion.div
                        className="w-2 h-2 bg-slate-400 rounded-full"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </motion.footer>
                  </motion.div>
                </motion.blockquote>
              </div>
              
              <motion.div 
                className="space-y-6 sm:space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  What We Bring to Partnerships
                </motion.h3>
                <div className="grid gap-4 sm:gap-6">
                  {[
                    'Ethical project evaluation and meaningful collaboration opportunities',
                    'Professional legal support and transparent financial frameworks',
                    'Fair revenue sharing and sustainable growth partnerships',
                    'Responsible AI tools and ethical Web3 development practices',
                    'Comprehensive mentorship and skill development programs'
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-4 sm:space-x-5 group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02, 
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div 
                        className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex-shrink-0 shadow-lg"
                        whileHover={{ 
                          scale: 1.5,
                          boxShadow: "0 0 20px rgba(148, 163, 184, 0.6)",
                          background: "linear-gradient(to right, rgba(148, 163, 184, 0.8), rgba(100, 116, 139, 0.8))"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span 
                        className="text-slate-300 text-lg sm:text-xl group-hover:text-white transition-colors font-medium"
                        whileHover={{ letterSpacing: "0.025em" }}
                        transition={{ duration: 0.2 }}
                      >
                        {benefit}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 rounded-3xl p-10 border border-slate-600/30 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 30px 60px rgba(100, 116, 139, 0.2)",
                  border: "1px solid rgba(148, 163, 184, 0.5)"
                }}
              >
                <motion.h3 
                  className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Network Strategy
                </motion.h3>
                <div className="space-y-8">
                  <motion.div 
                    className="flex items-start space-x-6 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 10,
                        boxShadow: "0 10px 25px rgba(100, 116, 139, 0.4)" 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Crown className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-bold text-white mb-3 text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        Selective Quality Standards
                      </motion.h4>
                      <motion.p 
                        className="text-slate-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                      >
                        We only collaborate with projects we genuinely believe in - those with long-lasting value, positive social impact, and ethical foundations. No pump-and-dump schemes or harmful ventures.
                      </motion.p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-6 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 10,
                        boxShadow: "0 10px 25px rgba(100, 116, 139, 0.4)" 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Gem className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-bold text-white mb-3 text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                      >
                        Mutual Success Partnership
                      </motion.h4>
                      <motion.p 
                        className="text-slate-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                      >
                        True collaboration where everyone wins based on real contributions and results. We believe in shared success, not extractive relationships or exploitative practices.
                      </motion.p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-6 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 10,
                        boxShadow: "0 10px 25px rgba(100, 116, 139, 0.4)" 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-bold text-white mb-3 text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                      >
                        Ethical Professional Network
                      </motion.h4>
                      <motion.p 
                        className="text-slate-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        viewport={{ once: true }}
                      >
                        Building genuine relationships between talented people who care about creating meaningful, lasting value. We prioritize integrity and positive impact over quick profits.
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FUTURE VISION Section - Retro-Tech LED Glass Aesthetic */}
      <section className="py-32 bg-gradient-to-br from-slate-950 via-gray-950 to-black relative overflow-hidden">
        {/* Enhanced Atmospheric Background */}
        <div className="absolute inset-0">
          {/* Animated LED Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
                linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px),
                radial-gradient(circle at 25% 25%, rgba(34,197,94,0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(168,85,247,0.1) 0%, transparent 50%)
              `,
              backgroundSize: '60px 60px, 60px 60px, 800px 800px, 600px 600px',
              animation: 'pulse 8s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Retro Scanning Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(59,130,246,0.1) 2px,
                rgba(59,130,246,0.1) 4px
              )`,
              animation: 'scan 12s linear infinite'
            }}></div>
          </div>

          {/* Deep Space Glow Effects */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/20 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-radial from-orange-500/15 via-orange-500/5 to-transparent rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-green-500/10 via-green-500/3 to-transparent rounded-full blur-3xl animate-pulse animation-delay-8000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Enhanced Header with Retro-Tech Badge */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Retro-Tech Badge with LED Glow */}
            <motion.div 
              className="inline-flex items-center space-x-3 relative mb-12"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* LED Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-md animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-slate-900/90 via-gray-900/90 to-slate-900/90 border-2 border-cyan-400/50 rounded-full px-8 py-4 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-6 h-6 text-cyan-400 drop-shadow-lg drop-shadow-cyan-400/50" />
                  </motion.div>
                  <span className="text-cyan-300 font-bold text-lg tracking-widest font-mono bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    // FUTURE VISION
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Epic Title with Holographic Effect */}
            <motion.h2 
              className="text-7xl md:text-8xl font-black mb-12 font-erevus-display tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent blur-sm">
                  Future Vision
                </span>
                <span className="relative bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Future Vision
                </span>
              </span>
            </motion.h2>

            {/* Enhanced Quote with Retro Styling */}
            <motion.div 
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 via-gray-900/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl">
                {/* LED Accent Lines */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
                
                <blockquote className="text-2xl md:text-3xl text-slate-200 italic leading-relaxed font-light relative">
                  <span className="text-cyan-400 text-4xl font-mono absolute -top-2 -left-4">"</span>
                  <span className="bg-gradient-to-r from-slate-200 via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                    Our vision is building a sustainable ecosystem where innovation creates lasting value. We focus on developing exceptional talent through proven methodologies, empowering individuals to contribute meaningfully while growing professionally and financially together.
                  </span>
                  <span className="text-cyan-400 text-4xl font-mono absolute -bottom-6 -right-4">"</span>
                </blockquote>
              </div>
            </motion.div>
          </motion.div>

          {/* Retro-Tech Glass Panels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* IP Portfolio - Blue LED Theme */}
            <motion.div 
              className="group perspective-1000"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative p-8 h-full"
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* LED Back-lighting Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-600/20 rounded-3xl blur-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glass Panel */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/60 via-gray-900/40 to-slate-900/60 backdrop-blur-xl border-2 border-blue-400/30 rounded-3xl overflow-hidden">
                  {/* Internal LED Grid */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.3) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  {/* LED Strip Borders */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-pulse animation-delay-2000"></div>
                  
                  <div className="relative p-8 text-center h-full flex flex-col">
                    {/* Retro Icon Container */}
                    <motion.div 
                      className="relative mb-8 mx-auto"
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* LED Glow Behind Icon */}
                      <div className="absolute inset-0 bg-blue-500/40 rounded-2xl blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Glass Icon Panel */}
                      <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center border border-blue-400/50 backdrop-blur-sm">
                        {/* Internal LED Pattern */}
                        <div className="absolute inset-2 border border-blue-300/20 rounded-xl"></div>
                        <Shield className="w-14 h-14 text-blue-300 drop-shadow-lg relative z-10" />
                        
                        {/* Corner LED Indicators */}
                        <div className="absolute top-1 left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-1000"></div>
                        <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
                        <div className="absolute bottom-1 right-1 w-2 h-2 bg-cyan-300 rounded-full animate-pulse animation-delay-3000"></div>
                      </div>
                    </motion.div>

                    {/* Enhanced Typography */}
                    <h3 className="text-3xl font-bold mb-6 font-erevus-heading tracking-wide bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      IP Portfolio
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed flex-grow font-erevus-body">
                      Building a comprehensive portfolio of <span className="text-blue-300 font-medium">intellectual properties</span> across gaming, Web3, and digital entertainment with <span className="text-cyan-300 font-medium">blockchain-secured</span> asset management.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* AI Excellence - Orange LED Theme */}
            <motion.div 
              className="group perspective-1000"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative p-8 h-full"
                whileHover={{ rotateY: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* LED Back-lighting Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-yellow-500/10 to-orange-600/20 rounded-3xl blur-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glass Panel */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/60 via-gray-900/40 to-slate-900/60 backdrop-blur-xl border-2 border-orange-400/30 rounded-3xl overflow-hidden">
                  {/* Internal LED Grid */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(249,115,22,0.3) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  {/* LED Strip Borders */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80 animate-pulse animation-delay-2000"></div>
                  
                  <div className="relative p-8 text-center h-full flex flex-col">
                    {/* Retro Icon Container */}
                    <motion.div 
                      className="relative mb-8 mx-auto"
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* LED Glow Behind Icon */}
                      <div className="absolute inset-0 bg-orange-500/40 rounded-2xl blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Glass Icon Panel */}
                      <div className="relative w-28 h-28 bg-gradient-to-br from-orange-500/30 via-yellow-500/20 to-orange-600/30 rounded-2xl flex items-center justify-center border border-orange-400/50 backdrop-blur-sm">
                        {/* Internal LED Pattern */}
                        <div className="absolute inset-2 border border-orange-300/20 rounded-xl"></div>
                        <Zap className="w-14 h-14 text-orange-300 drop-shadow-lg relative z-10" />
                        
                        {/* Corner LED Indicators */}
                        <div className="absolute top-1 left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse animation-delay-1000"></div>
                        <div className="absolute bottom-1 left-1 w-2 h-2 bg-orange-300 rounded-full animate-pulse animation-delay-2000"></div>
                        <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-300 rounded-full animate-pulse animation-delay-3000"></div>
                      </div>
                    </motion.div>

                    {/* Enhanced Typography */}
                    <h3 className="text-3xl font-bold mb-6 font-erevus-heading tracking-wide bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      AI EXCELLENCE
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed flex-grow font-erevus-body">
                      Leveraging advanced <span className="text-orange-300 font-medium">AI consciousness</span> and Web3 development tools for enhanced efficiency and <span className="text-yellow-300 font-medium">quantum-scale</span> collaborative growth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Network Contributors - Green LED Theme */}
            <motion.div 
              className="group perspective-1000"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative p-8 h-full"
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* LED Back-lighting Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-green-600/20 rounded-3xl blur-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glass Panel */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/60 via-gray-900/40 to-slate-900/60 backdrop-blur-xl border-2 border-green-400/30 rounded-3xl overflow-hidden">
                  {/* Internal LED Grid */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34,197,94,0.3) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  {/* LED Strip Borders */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-80 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80 animate-pulse animation-delay-2000"></div>
                  
                  <div className="relative p-8 text-center h-full flex flex-col">
                    {/* Retro Icon Container */}
                    <motion.div 
                      className="relative mb-8 mx-auto"
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* LED Glow Behind Icon */}
                      <div className="absolute inset-0 bg-green-500/40 rounded-2xl blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Glass Icon Panel */}
                      <div className="relative w-28 h-28 bg-gradient-to-br from-green-500/30 via-emerald-500/20 to-green-600/30 rounded-2xl flex items-center justify-center border border-green-400/50 backdrop-blur-sm">
                        {/* Internal LED Pattern */}
                        <div className="absolute inset-2 border border-green-300/20 rounded-xl"></div>
                        <Users className="w-14 h-14 text-green-300 drop-shadow-lg relative z-10" />
                        
                        {/* Corner LED Indicators */}
                        <div className="absolute top-1 left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse animation-delay-1000"></div>
                        <div className="absolute bottom-1 left-1 w-2 h-2 bg-green-300 rounded-full animate-pulse animation-delay-2000"></div>
                        <div className="absolute bottom-1 right-1 w-2 h-2 bg-emerald-300 rounded-full animate-pulse animation-delay-3000"></div>
                      </div>
                    </motion.div>

                    {/* Enhanced Typography */}
                    <h3 className="text-3xl font-bold mb-6 font-erevus-heading tracking-wide bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                      Network Contributors
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed flex-grow font-erevus-body">
                      Transforming talented individuals into <span className="text-green-300 font-medium">valuable contributors</span> through structured OKRs and <span className="text-emerald-300 font-medium">proven systems</span> with quantum-enhanced performance tracking.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Custom CSS for additional effects */}
        <style jsx>{`
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
          }
          
          .perspective-1000 {
            perspective: 1000px;
          }
          
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-3000 {
            animation-delay: 3s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          
          .animation-delay-8000 {
            animation-delay: 8s;
          }
        `}</style>
      </section>
    </motion.div>
  )
}