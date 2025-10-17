'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Code, Gamepad2, Rocket, Shield, Users, 
  CheckCircle, Star, ArrowRight, Brain, 
  Coins, MessageSquare,
  Calculator
} from 'lucide-react'
import Link from 'next/link'

const serviceCategories = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Complete web and mobile solutions with modern technologies",
    features: [
      "React/Next.js Frontend Development",
      "Node.js/Express Backend Systems", 
      "Database Design & Optimization",
      "Cloud Deployment & DevOps",
      "Mobile App Development",
      "E-commerce Solutions"
    ],
    startingPrice: "$5,000",
    deliveryTime: "4-8 weeks",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Custom gaming experiences from concept to deployment",
    features: [
      "2D/3D Game Development",
      "Multiplayer Systems",
      "Web3 Gaming Integration",
      "Unity Engine Expertise",
      "Game Monetization",
      "Cross-Platform Deployment"
    ],
    startingPrice: "$15,000",
    deliveryTime: "8-16 weeks",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Brain,
    title: "THERION AI Solutions",
    description: "Cutting-edge AI tools and automation systems",
    features: [
      "AI-Powered Content Generation",
      "2D to 3D Conversion",
      "Automated Workflow Systems",
      "Custom AI Model Training",
      "Business Process Automation",
      "Intelligent Data Analysis"
    ],
    startingPrice: "$3,000",
    deliveryTime: "2-6 weeks",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Coins,
    title: "Web3 & Blockchain",
    description: "Cryptocurrency and blockchain solutions",
    features: [
      "Smart Contract Development",
      "Token Creation & Management",
      "DeFi Platform Development",
      "NFT Marketplace Creation",
      "Wallet Integration",
      "Blockchain Consulting"
    ],
    startingPrice: "$8,000",
    deliveryTime: "6-12 weeks",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Digital Marketing",
    description: "High-conversion marketing campaigns and brand building",
    features: [
      "Performance Marketing Campaigns",
      "Social Media Management",
      "Content Creation & Strategy",
      "SEO & SEM Optimization",
      "Brand Identity Design",
      "Conversion Rate Optimization"
    ],
    startingPrice: "$2,000",
    deliveryTime: "2-4 weeks",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Business Consulting",
    description: "Strategic guidance and operational optimization",
    features: [
      "Business Strategy Development",
      "Technology Consulting",
      "Process Optimization",
      "Legal & Compliance Support",
      "Financial Planning",
      "Team Building & Training"
    ],
    startingPrice: "$1,500",
    deliveryTime: "1-3 weeks",
    color: "from-indigo-500 to-blue-500"
  }
]

const testimonials = [
  {
    name: "Alex Chen",
    company: "TechStart Ventures",
    role: "CEO",
    content: "EREVUS delivered our entire platform 40% faster than our previous agency, with better quality and half the cost.",
    rating: 5,
    project: "Full-Stack SaaS Platform"
  },
  {
    name: "Maria Rodriguez",
    company: "GameForge Studios",
    role: "Creative Director", 
    content: "Their game development team created something beyond our expectations. The Web3 integration was seamless.",
    rating: 5,
    project: "Multiplayer Web3 Game"
  },
  {
    name: "David Kim",
    company: "AutoFlow Inc",
    role: "CTO",
    content: "The AI automation they built saved us 60 hours per week. ROI was achieved within the first month.",
    rating: 5,
    project: "AI Business Automation"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your requirements, goals, and technical needs"
  },
  {
    step: "02", 
    title: "Planning & Design",
    description: "Detailed project roadmap with timelines, milestones, and deliverables"
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with regular updates and quality assurance"
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Launch, optimization, and ongoing maintenance support"
  }
]

// Premium Interactive Components
const PricingCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [timeline, setTimeline] = useState('standard')
  const [complexity, setComplexity] = useState('medium')
  
  // Accurate pricing based on EREVUS service catalog
  const basePrices = {
    'full-stack-development': 5000,      // Full-Stack Development
    'game-development': 15000,           // Game Development  
    'therion-ai-solutions': 3000,        // THERION AI Solutions
    'web3-blockchain': 8000,             // Web3 & Blockchain
    'digital-marketing': 2000,           // Digital Marketing
    'business-consulting': 1500          // Business Consulting
  }
  
  const multipliers = {
    timeline: { rush: 1.5, standard: 1, extended: 0.8 },
    complexity: { simple: 0.7, medium: 1, complex: 1.4, enterprise: 2 }
  }
  
  const calculateTotal = () => {
    const baseTotal = selectedServices.reduce((sum, service) => sum + basePrices[service as keyof typeof basePrices], 0)
    return Math.round(baseTotal * multipliers.timeline[timeline as keyof typeof multipliers.timeline] * multipliers.complexity[complexity as keyof typeof multipliers.complexity])
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center font-erevus-display tracking-wide">
        <Calculator className="w-6 h-6 mr-3 text-blue-400" />
        Project Calculator
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-3">Select Services:</label>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(basePrices).map(([key, price]) => {
              const serviceNames = {
                'full-stack-development': 'Full-Stack Development',
                'game-development': 'Game Development',
                'therion-ai-solutions': 'THERION AI Solutions',
                'web3-blockchain': 'Web3 & Blockchain',
                'digital-marketing': 'Digital Marketing',
                'business-consulting': 'Business Consulting'
              }
              
              return (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playHover()
                    }
                  }}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playClick()
                    }
                    setSelectedServices(prev => 
                      prev.includes(key) 
                        ? prev.filter(s => s !== key)
                        : [...prev, key]
                    )
                  }}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                    selectedServices.includes(key)
                      ? 'border-blue-400 bg-blue-400/20 text-white'
                      : 'border-gray-600 hover:border-gray-500 text-gray-300'
                  }`}
                >
                  <div className="text-sm font-medium">{serviceNames[key as keyof typeof serviceNames]}</div>
                  <div className="text-xs text-gray-400">${price.toLocaleString()}</div>
                </motion.button>
              )
            })}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">Timeline:</label>
            <select 
              value={timeline}
              onChange={(e) => {
                if (typeof window !== 'undefined' && window.gameboy) {
                  window.gameboy.playClick()
                }
                setTimeline(e.target.value)
              }}
              onFocus={() => {
                if (typeof window !== 'undefined' && window.gameboy) {
                  window.gameboy.playHover()
                }
              }}
              className="w-full bg-slate-800 border border-gray-600 rounded-lg p-2 text-white"
            >
              <option value="rush">Rush (+50%)</option>
              <option value="standard">Standard</option>
              <option value="extended">Extended (-20%)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Complexity:</label>
            <select 
              value={complexity}
              onChange={(e) => {
                if (typeof window !== 'undefined' && window.gameboy) {
                  window.gameboy.playClick()
                }
                setComplexity(e.target.value)
              }}
              onFocus={() => {
                if (typeof window !== 'undefined' && window.gameboy) {
                  window.gameboy.playHover()
                }
              }}
              className="w-full bg-slate-800 border border-gray-600 rounded-lg p-2 text-white"
            >
              <option value="simple">Simple (-30%)</option>
              <option value="medium">Standard</option>
              <option value="complex">Complex (+40%)</option>
              <option value="enterprise">Enterprise (+100%)</option>
            </select>
          </div>
        </div>
        
        <motion.div
          key={calculateTotal()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/30"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">${calculateTotal().toLocaleString()}</div>
            <div className="text-gray-300 text-sm">Estimated Project Cost</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const InteractiveServiceCard = ({ service, index }: { service: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ 
        y: -10, 
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => {
        setIsHovered(true)
        if (typeof window !== 'undefined' && window.gameboy) {
          window.gameboy.playHover()
        }
      }}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 rounded-3xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating particles effect */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%'
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
      
      <div className="relative z-10">
        {/* Service Header with enhanced animation */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <motion.div 
              className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-2xl`}
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.6 }
              }}
            >
              <service.icon className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <motion.h3 
                className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                animate={{
                  backgroundImage: isHovered 
                    ? 'linear-gradient(to right, #60a5fa, #a855f7)' 
                    : 'linear-gradient(to right, #ffffff, #d1d5db)'
                }}
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-400 mt-1">{service.description}</p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Pricing & Timeline */}
        <motion.div 
          className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-slate-800/70 to-slate-700/70 backdrop-blur-sm rounded-xl border border-slate-600/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <motion.div 
                className="text-2xl font-bold text-green-400"
                whileHover={{ scale: 1.1 }}
              >
                {service.startingPrice}
              </motion.div>
              <div className="text-xs text-gray-400">Starting from</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-400">{service.deliveryTime}</div>
              <div className="text-xs text-gray-400">Delivery</div>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Features List */}
        <div className="space-y-3">
          {service.features.map((feature: string, featureIndex: number) => (
            <motion.div 
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
              className="flex items-center space-x-3"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              </motion.div>
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  const [activeProcessStep, setActiveProcessStep] = useState(0)
  const [showCalculator, setShowCalculator] = useState(false)
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-hidden font-erevus-body">
      <Header />
      
      {/* Premium Loading State */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-blue-400 border-t-transparent rounded-full"
        />
      </motion.div>
      
      {/* Premium Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated background elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </motion.div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight font-erevus-display">
                <motion.span 
                  className="block bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent tracking-tight"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Enterprise-Grade
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent tracking-tight"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Digital Solutions
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-erevus-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Transform your business with cutting-edge technology solutions. From full-stack development to AI integration, 
              we deliver results that drive growth and innovation.
            </motion.p>
            
            {/* Enhanced CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => {
                  if (typeof window !== 'undefined' && window.gameboy) {
                    window.gameboy.playHover()
                  }
                }}
              >
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl shadow-blue-500/40 hover:shadow-purple-500/50 font-erevus-heading tracking-wide"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playClick()
                    }
                  }}
                >
                  <Rocket className="w-6 h-6" />
                  <span>Start Your Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => {
                  if (typeof window !== 'undefined' && window.gameboy) {
                    window.gameboy.playHover()
                  }
                }}
              >
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playClick()
                    }
                    setShowCalculator(!showCalculator)
                  }}
                  className="group border-2 border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 text-orange-400 hover:text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-3 backdrop-blur-sm font-erevus-display tracking-wide"
                >
                  <Calculator className="w-6 h-6" />
                  <span>Price Calculator</span>
                </button>
              </motion.div>
            </motion.div>
            
            {/* Pricing Calculator Modal */}
            <AnimatePresence>
              {showCalculator && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playClick()
                    }
                    setShowCalculator(false)
                  }}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-2xl"
                  >
                    <PricingCalculator />
                    <motion.button
                      className="mt-4 w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl transition-colors"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gameboy) {
                          window.gameboy.playClick()
                        }
                        setShowCalculator(false)
                      }}
                      onMouseEnter={() => {
                        if (typeof window !== 'undefined' && window.gameboy) {
                          window.gameboy.playHover()
                        }
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Close Calculator
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Enhanced Key Stats */}
            {/* Professional Service Promise - No Fake Stats */}
            <motion.div 
              className="mt-16 pt-16 border-t border-gray-600/50 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <motion.div
                className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-4 font-erevus-display">
                  EREVUS Quality Promise
                </h3>
                <p className="text-gray-300 leading-relaxed font-erevus-body max-w-2xl mx-auto">
                  Every project is delivered with enterprise-grade quality standards, thorough testing, 
                  and comprehensive documentation. We focus on creating lasting partnerships through 
                  transparent communication and exceptional results.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Enhanced background effects */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </motion.div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 font-erevus-display tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">Professional</span> 
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-erevus-body">
              Enterprise-grade solutions delivered by our collective of specialists. Each service includes project management, 
              quality assurance, and ongoing support to ensure your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <InteractiveServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6 font-erevus-display tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">Our Proven</span> 
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-erevus-body">
              Structured methodology that ensures quality delivery, transparent communication, and successful project outcomes.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="group relative text-center cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setActiveProcessStep(index)}
              >
                <div className="relative mb-6">
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl transition-all duration-300 ${
                      activeProcessStep === index 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500 scale-110' 
                        : 'bg-gradient-to-br from-slate-700 to-slate-600 group-hover:from-blue-500 group-hover:to-purple-500'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </motion.div>
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                    />
                  )}
                </div>
                <motion.h3 
                  className={`text-xl font-bold mb-3 transition-colors ${
                    activeProcessStep === index ? 'text-blue-400' : 'text-white group-hover:text-blue-400'
                  }`}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 leading-relaxed"
                  animate={{
                    color: activeProcessStep === index ? '#93c5fd' : '#9ca3af'
                  }}
                >
                  {step.description}
                </motion.p>
                
                {/* Step indicator */}
                <motion.div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                    activeProcessStep === index ? 'bg-blue-400 scale-150' : 'bg-transparent'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Interactive Testimonials */}
      {/* CLIENT SUCCESS STORIES SECTION - COMMENTED OUT FOR FUTURE USE */}
      {false && (
        <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">Client</span> 
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-300">Real results from real clients who trusted EREVUS with their vision.</p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="group bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20"
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    {/* Star Rating with Animation */}
                    <motion.div 
                      className="flex items-center space-x-2 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (index * 0.2) + 0.3 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: 180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: (index * 0.2) + (i * 0.1) + 0.5, duration: 0.3 }}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.blockquote 
                      className="text-gray-300 mb-6 leading-relaxed italic text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (index * 0.2) + 0.4 }}
                    >
                      "{testimonial.content}"
                    </motion.blockquote>
                    
                    <motion.div 
                      className="border-t border-slate-600/50 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index * 0.2) + 0.6 }}
                    >
                      <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                      <div className="text-sm text-blue-400 font-medium">{testimonial.role}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                      <motion.div 
                        className="text-xs text-orange-400 mt-2 font-medium px-3 py-1 bg-orange-400/10 rounded-full inline-block"
                        whileHover={{ scale: 1.1 }}
                      >
                        Project: {testimonial.project}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Premium CTA Section with Advanced Effects */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </motion.div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl hover:shadow-orange-500/20"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl font-black mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Ready to Transform
                </motion.span> 
                <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Your Business?</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Join the growing list of successful businesses that have accelerated their growth with EREVUS. 
                Let's discuss your project and create a solution that delivers real results.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl shadow-blue-500/40 hover:shadow-purple-500/50"
                  >
                    <MessageSquare className="w-6 h-6" />
                    <span>Start Your Project</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/team"
                    className="border-2 border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 text-orange-400 hover:text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-3"
                  >
                    <Users className="w-6 h-6" />
                    <span>Meet Our Team</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
