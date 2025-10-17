'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { howlerProAudio } from '@/utils/howler-pro-audio' // Professional Howler.js audio
import { useAdaptiveQuality } from '@/hooks/useAdaptiveQuality'
import { 
  Swords, MousePointer, MapPin, Gamepad2, ArrowRight, Star, Trophy, Users, Crown, Globe, CheckCircle, Play, Smartphone, Monitor,
  Zap, Shield, Target, Brain, Rocket, Cpu, Eye, Sparkles, Diamond, Calendar
} from 'lucide-react'
import GamesLoadingScreen from '@/components/ui/GamesLoadingScreen'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

interface Game {
  id: number
  title: string
  subtitle: string
  status: string
  statusColor: string
  description: string
  longDescription: string
  features: string[]
  techSpecs: string[]
  platforms: string[]
  genre: string
  players: string
  releaseDate: string
  icon: React.ComponentType<{ className?: string }>
  theme: string
  gradient: string
  screenshots: string[]
  achievements: number
  playerBase: string
}

interface TechFeature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details: string[]
  color: string
}

const featuredGames: Game[] = [
  {
    id: 1,
    title: "EREVUS: GLADIATOR ARENA",
    subtitle: "PvP Combat Mastery",
    status: "85% COMPLETE",
    statusColor: "bg-orange-500",
    description: "Enter the digital Colosseum where tactical prowess meets lightning-fast reflexes in the ultimate PvP experience.",
    longDescription: "EREVUS Gladiator Arena represents the pinnacle of competitive gaming, combining strategic depth with intense real-time combat. Players craft unique gladiator builds, master complex combat mechanics, and rise through ranked tournaments to claim eternal glory. With Hedera blockchain integration using HTS tokens, every victory earns real rewards.",
    features: [
      "Real-time PvP Combat System",
      "Strategic Character Building", 
      "Ranked Tournament Progression",
      "Live Spectator Mode with Betting",
      "HTS Token & NFT Integration",
      "Cross-platform Competitive Play"
    ],
    techSpecs: [
      "60 FPS Optimized Combat",
      "Sub-200ms Latency Networking", 
      "Hedera HTS Token Integration",
      "Advanced Anti-cheat Systems"
    ],
    platforms: ["Web", "Mobile", "Desktop"],
    genre: "Action/Strategy",
    players: "1v1, Tournament Brackets",
    releaseDate: "Q1 2026",
    icon: Swords,
    theme: "from-red-600 to-orange-600",
    gradient: "from-red-500/20 to-orange-500/20",
    screenshots: ["arena1.jpg", "arena2.jpg", "arena3.jpg"],
    achievements: 47,
    playerBase: "In Development"
  },
  {
    id: 2,
    title: "THERION CLICKER EMPIRE", 
    subtitle: "Exponential Progression",
    status: "90% COMPLETE",
    statusColor: "bg-green-500",
    description: "Build a digital empire through strategic automation, exponential growth mechanics, and AI-enhanced progression systems.",
    longDescription: "THERION Clicker Empire revolutionizes the idle gaming genre with sophisticated automation systems, Hedera blockchain economies, and AI-driven optimization. Players build vast digital empires, unlock advanced technologies, and participate in a persistent global economy powered by HBAR liquidity pools.",
    features: [
      "Exponential Growth Mechanics",
      "Advanced Automation Systems",
      "Prestige & Ascension Trees",
      "Global Competition Leaderboards",
      "HBAR Liquidity Pool Integration",
      "AI-Optimized Progression Paths"
    ],
    techSpecs: [
      "Real-time Global Synchronization",
      "Advanced Save State Management",
      "Hedera HTS Token Economy", 
      "AI Progression Optimization"
    ],
    platforms: ["Web", "Mobile"],
    genre: "Idle/Strategy",
    players: "Single Player + Global Events",
    releaseDate: "Q2 2026",
    icon: MousePointer,
    theme: "from-purple-600 to-pink-600",
    gradient: "from-purple-500/20 to-pink-500/20",
    screenshots: ["clicker1.jpg", "clicker2.jpg", "clicker3.jpg"],
    achievements: 156,
    playerBase: "In Development"
  },
  {
    id: 3,
    title: "REALITY HUNTER AR",
    subtitle: "Augmented World Exploration", 
    status: "75% COMPLETE",
    statusColor: "bg-orange-500",
    description: "Explore the real world augmented with digital creatures, treasures, and social gameplay experiences.",
    longDescription: "Reality Hunter AR transforms the physical world into an expansive gaming universe. Using advanced AR technology, players discover digital creatures, collect rare HTS token-based treasures, and participate in location-based events. The game creates persistent AR experiences that blend seamlessly with reality.",
    features: [
      "Advanced AR Integration",
      "Location-based Gameplay",
      "Social Exploration & Teams",
      "Collectible HTS Token Creatures",
      "Real-world Event Integration",
      "Cross-platform AR Sharing"
    ],
    techSpecs: [
      "Advanced AR Tracking",
      "GPS-based World Persistence",
      "Social AR Multiplayer",
      "HTS Token Creature Generation"
    ],
    platforms: ["Mobile", "AR Glasses"],
    genre: "AR/Adventure",
    players: "Massive Multiplayer",
    releaseDate: "Q3 2026",
    icon: MapPin,
    theme: "from-green-600 to-emerald-600",
    gradient: "from-green-500/20 to-emerald-500/20",
    screenshots: ["ar1.jpg", "ar2.jpg", "ar3.jpg"],
    achievements: 89,
    playerBase: "In Development"
  },
  {
    id: 4,
    title: "INFINITE WORLDS 3D",
    subtitle: "Procedural Universe",
    status: "80% COMPLETE",
    statusColor: "bg-orange-500",
    description: "Infinite universes generated through advanced AI algorithms, offering endless exploration and world-building possibilities.",
    longDescription: "Infinite Worlds 3D leverages cutting-edge procedural generation and AI systems to create truly infinite gaming universes. Each world is unique, persistent, and evolving. Players can explore, mine resources, build civilizations, and discover secrets in worlds that continue generating content indefinitely. All assets can be converted to physical merchandise through our 3D printing partnerships.",
    features: [
      "Infinite Procedural Generation",
      "3D World Exploration",
      "Advanced Resource Systems",
      "Civilization Building",
      "AI-Driven Content Creation",
      "Physical Merchandise Integration"
    ],
    techSpecs: [
      "AI-Powered World Generation",
      "Infinite Terrain Streaming",
      "Advanced Physics Simulation",
      "3D Model Export for Merchandise"
    ],
    platforms: ["Desktop", "VR", "Cloud"],
    genre: "Sandbox/Exploration",
    players: "Single & Multiplayer Worlds",
    releaseDate: "Q4 2026",
    icon: Globe,
    theme: "from-blue-600 to-cyan-600",
    gradient: "from-blue-500/20 to-cyan-500/20",
    screenshots: ["worlds1.jpg", "worlds2.jpg", "worlds3.jpg"],
    achievements: 234,
    playerBase: "In Development"
  }
]

const techFeatures: TechFeature[] = [
  {
    icon: Brain,
    title: "THERION AI Engine",
    description: "Advanced AI systems powering intelligent gameplay, procedural content, and player experience optimization.",
    details: [
      "Dynamic difficulty adjustment",
      "Intelligent matchmaking systems",
      "Procedural content generation",
      "Player behavior analysis and optimization"
    ],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Hedera Blockchain Integration",
    description: "Built on Hedera Hashgraph with HTS token service and HBAR-based liquidity pools for secure gaming economies.",
    details: [
      "Hedera HTS token integration",
      "HBAR liquidity pool mechanics", 
      "Fast and secure transactions",
      "Cross-game asset portability"
    ],
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Zap,
    title: "Cross-Platform Engine",
    description: "Unified gaming engine ensuring consistent experiences across web, mobile, desktop, and emerging platforms.",
    details: [
      "60+ FPS on all platforms",
      "Cloud save synchronization",
      "Cross-platform multiplayer",
      "Adaptive UI scaling"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Physical Merchandise Integration",
    description: "Convert 3D game models into physical merchandise including figurines, prototypes, and custom products.",
    details: [
      "3D model to figurine conversion",
      "Mass production partnerships",
      "Prototype development services",
      "Custom merchandise solutions"
    ],
    color: "from-green-500 to-emerald-500"
  }
]

export default function GamesPage() {
  const [gameboySFXReady, setGameboySFXReady] = useState(false);
  const soundManager = howlerProAudio // Professional Howler.js audio system
  const [showSpecialEffects, setShowSpecialEffects] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Adaptive quality management for mobile optimization
  const { qualitySettings, deviceCapabilities, frameRate, getOptimizedClasses, getAnimationProps } = useAdaptiveQuality()

  // Handle invalid clicks on non-interactive elements (like OBOLUS)
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
  };

  // Professional audio initialization like OBOLUS/THERION
  const initializeProfessionalAudio = useCallback(async () => {
    try {
      await soundManager.initialize()
      console.log('🎵 Professional Howler.js audio system ready for GAMES!')
      setGameboySFXReady(true)
    } catch (error) {
      console.warn('🔇 Audio initialization failed, continuing silently:', error)
      setGameboySFXReady(true) // Continue without audio
    }
  }, [soundManager]);

  const playProfessionalSFX = useCallback(async (type: string) => {
    if (!gameboySFXReady || !soundManager) return;
    
    try {
      switch(type) {
        case 'hover':
          await soundManager.playCoinHover();
          break;
        case 'click':
        case 'select':
          await soundManager.playCoinFlip();
          break;
        case 'action':
          await soundManager.playSuccessChime();
          break;
        case 'powerup':
          await soundManager.playQuantumEncryption();
          break;
        case 'success':
          await soundManager.playRewardEarned();
          break;
        case 'error':
          await soundManager.playUIClose();
          break;
        default:
          await soundManager.playCoinHover();
      }
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  }, [gameboySFXReady, soundManager]);

  useEffect(() => {
    // Initialize professional audio system like OBOLUS/THERION
    const initializePageSystems = async () => {
      await initializeProfessionalAudio();
      
      // Add first interaction handlers for premium UX
      const handleFirstInteraction = async () => {
        await initializeProfessionalAudio();
        document.body.classList.add('games-page-loaded');
        await soundManager.playSuccessChime();
        
        // Enable special effects after first interaction
        setTimeout(() => setShowSpecialEffects(true), 1000);
      };

      document.addEventListener('click', handleFirstInteraction, { once: true });
      document.addEventListener('touchstart', handleFirstInteraction, { once: true });
      
      return () => {
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.body.classList.remove('games-page-loaded');
      };
    };
    
    initializePageSystems();
  }, [initializeProfessionalAudio, soundManager]);

  // Handle loading screen completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {/* Premium Games Loading Screen */}
      {isLoading && (
        <GamesLoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      
      <motion.main 
        className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onClick={handleInvalidClick}
        onAnimationComplete={() => {
          // Play subtle page ready sound when main content appears
          setTimeout(() => soundManager.playSuccessChime(), 500)
        }}
      >
        <Header />
        
        {/* Performance Monitor (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed top-20 right-4 z-50 bg-black/80 text-white p-2 rounded text-xs font-mono">
            <div>FPS: {frameRate}</div>
            <div>Device: {deviceCapabilities?.isMobile ? 'Mobile' : 'Desktop'}</div>
            <div>Quality: {qualitySettings.prefersHighPerformance ? 'Performance' : 'Quality'}</div>
            <div>Animations: {qualitySettings.reducedMotion ? 'Reduced' : 'Full'}</div>
          </div>
        )}
      
      {/* Premium Games Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 8 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              y: [0, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 10 }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ repeat: Infinity, duration: 12 }}
          ></motion.div>
        </div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + Math.random() * 3,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              {i % 3 === 0 ? (
                <Diamond className="w-3 h-3 text-orange-400/40" />
              ) : i % 3 === 1 ? (
                <Sparkles className="w-3 h-3 text-purple-400/40" />
              ) : (
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60" />
              )}
            </motion.div>
          ))}
          
          {/* Gaming Icons Floating */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`icon-${i}`}
              className="absolute"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 15, -15, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            >
              {i === 0 && <Gamepad2 className="w-6 h-6 text-orange-400/30" />}
              {i === 1 && <Crown className="w-6 h-6 text-yellow-400/30" />}
              {i === 2 && <Trophy className="w-6 h-6 text-amber-400/30" />}
              {i === 3 && <Target className="w-6 h-6 text-red-400/30" />}
              {i === 4 && <Swords className="w-6 h-6 text-purple-400/30" />}
              {i === 5 && <Shield className="w-6 h-6 text-blue-400/30" />}
              {i === 6 && <Brain className="w-6 h-6 text-green-400/30" />}
              {i === 7 && <Rocket className="w-6 h-6 text-cyan-400/30" />}
            </motion.div>
          ))}
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-10">
            <motion.div 
              className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-600/20 to-purple-600/20 border border-orange-500/30 rounded-full px-8 py-4 backdrop-blur-sm relative overflow-hidden cursor-pointer select-none"
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -5px rgba(251, 146, 60, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => playProfessionalSFX('hover')}
              onClick={() => playProfessionalSFX('select')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 animate-pulse"></div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <Gamepad2 className="w-8 h-8 text-orange-400" />
              </motion.div>
              <span className="text-orange-300 font-bold text-xl font-erevus-display relative z-10">EREVUS GAMING UNIVERSE</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Sparkles className="w-6 h-6 text-purple-400" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className={getOptimizedClasses(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-erevus-display mb-8 cursor-pointer select-none px-4 sm:px-0",
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-erevus-display mb-6 cursor-pointer select-none px-2 sm:px-0",
                "text-2xl sm:text-3xl md:text-4xl font-black leading-tight font-erevus-display mb-4 cursor-pointer select-none px-2"
              )}
              {...getAnimationProps({
                initial: { opacity: 0, scale: 0.5 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true, amount: 0.3 },
                transition: { duration: 1, delay: 0.2, ease: "easeOut" }
              })}
              whileHover={!qualitySettings.reducedMotion ? { 
                scale: 1.02,
                textShadow: qualitySettings.shadows ? "0 0 40px rgba(251, 146, 60, 0.9)" : "none"
              } : {}}
              whileTap={!qualitySettings.reducedMotion ? { scale: 0.98 } : {}}
              onMouseEnter={() => playProfessionalSFX('powerup')}
              onClick={() => playProfessionalSFX('success')}
            >
              <motion.span 
                className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-4 break-words"
                animate={qualitySettings.gradientAnimations ? { 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                } : {}}
                transition={qualitySettings.gradientAnimations ? { 
                  repeat: Infinity, 
                  duration: 5 * qualitySettings.animationDuration 
                } : {}}
                style={{ backgroundSize: "200% auto" }}
              >
                Premium Gaming
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent break-words"
                animate={qualitySettings.gradientAnimations ? { 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                } : {}}
                transition={qualitySettings.gradientAnimations ? { 
                  repeat: Infinity, 
                  duration: 5 * qualitySettings.animationDuration, 
                  delay: 0.5 
                } : {}}
                style={{ backgroundSize: "200% auto" }}
              >
                Experiences
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto font-erevus-body mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Crafting next-generation games with innovative technology, engaging mechanics, and immersive worlds.
              Each project focuses on player experience, community building, and thoughtful design. 
              Explore our current development progress and join our growing gaming community.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={!qualitySettings.reducedMotion ? { scale: 1.05, y: -2 } : {}}
                whileTap={!qualitySettings.reducedMotion ? { scale: 0.98 } : {}}
              >
                <Link
                  href="#featured-games"
                  className={getOptimizedClasses(
                    "group bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl shadow-orange-500/40 hover:shadow-amber-500/50 font-erevus-body relative overflow-hidden",
                    "group bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl shadow-orange-500/30 font-erevus-body relative overflow-hidden",
                    "group bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg font-erevus-body"
                  )}
                  onMouseEnter={() => playProfessionalSFX('hover')}
                  onClick={() => playProfessionalSFX('action')}
                >
                  {qualitySettings.complexBackgrounds && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  )}
                  <Play className="w-7 h-7 relative z-10" />
                  <span className="relative z-10">View Our Games</span>
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform relative z-10" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group border-2 border-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-purple-400 hover:text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-3 font-erevus-body relative overflow-hidden"
                  onMouseEnter={() => playProfessionalSFX('hover')}
                  onClick={() => playProfessionalSFX('select')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <Users className="w-7 h-7 relative z-10" />
                  <span className="relative z-10">Get Involved</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Special Interactive Floating Coins */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`special-coin-${i}`}
                className="absolute pointer-events-auto cursor-pointer"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${30 + Math.random() * 40}%`,
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ 
                  opacity: showSpecialEffects ? [0, 0.7, 0] : 0,
                  scale: showSpecialEffects ? [0, 1, 0] : 0,
                  rotate: [0, 360],
                  y: [0, -50, -100]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8 + Math.random() * 4,
                  delay: Math.random() * 10,
                  ease: "easeOut",
                }}
                whileHover={{ 
                  scale: 1.5,
                  opacity: 1,
                  rotate: 720,
                  transition: { duration: 0.3 }
                }}
                onClick={() => {
                  playProfessionalSFX('powerup');
                  // Add special click effect
                }}
                onMouseEnter={() => playProfessionalSFX('hover')}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-full shadow-lg shadow-amber-500/50 border-2 border-yellow-300/50 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full animate-pulse" />
                </div>
              </motion.div>
            ))}
            
            {/* Premium Floating Gaming Icons */}
            {showSpecialEffects && [...Array(12)].map((_, i) => (
              <motion.div
                key={`premium-icon-${i}`}
                className="absolute pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.6, 0.1],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8 + Math.random() * 6,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              >
                {i % 6 === 0 && <Diamond className="w-4 h-4 text-cyan-400/40" />}
                {i % 6 === 1 && <Crown className="w-4 h-4 text-yellow-400/40" />}
                {i % 6 === 2 && <Trophy className="w-4 h-4 text-amber-400/40" />}
                {i % 6 === 3 && <Sparkles className="w-4 h-4 text-purple-400/40" />}
                {i % 6 === 4 && <Target className="w-4 h-4 text-red-400/40" />}
                {i % 6 === 5 && <Rocket className="w-4 h-4 text-blue-400/40" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Showcase */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden section-transition">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-black mb-8 font-erevus-display cursor-pointer select-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 30px rgba(251, 146, 60, 0.8)"
              }}
              onMouseEnter={() => playProfessionalSFX('hover')}
              onClick={() => playProfessionalSFX('powerup')}
            >
              <span className="bg-gradient-to-r from-white via-orange-300 to-purple-300 bg-clip-text text-transparent">Featured</span> 
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Gaming Experiences</span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-erevus-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Revolutionary games that push the boundaries of technology, creativity, and player engagement
            </motion.p>
          </div>

          <div className="space-y-16">
            {featuredGames.map((game, index) => (
              <motion.div 
                key={game.id} 
                className={`group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-xl border border-gray-700/50 hover:border-orange-400/60 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-6 shadow-2xl hover:shadow-orange-500/30 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)",
                  scale: 1.02,
                  y: -24,
                }}
                onMouseEnter={() => playProfessionalSFX('hover')}
                onClick={() => playProfessionalSFX('click')}
              >
                {/* Enhanced Animated Background Elements */}
                <div className="absolute inset-0 opacity-40">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    style={{ backgroundSize: "200% auto" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
                    animate={{ 
                      backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                    }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                    style={{ backgroundSize: "200% auto" }}
                  />
                  
                  {/* Corner Accents */}
                  <motion.div 
                    className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-400/40 rounded-tr"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/40 rounded-bl"
                    animate={{ opacity: [0.8, 0.3, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>

                {/* Status Badge */}
                <motion.div 
                  className="absolute top-6 right-6 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className={`${game.statusColor} text-white px-4 py-2 rounded-lg text-sm font-bold font-erevus-body flex items-center space-x-2 shadow-xl`}>
                    <motion.div 
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    ></motion.div>
                    <span>{game.status}</span>
                  </div>
                </motion.div>

                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 p-10 pt-16">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Game Content */}
                    <div className="space-y-8">
                      {/* Game Header */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <motion.div 
                            className={`w-20 h-20 bg-gradient-to-br ${game.theme} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl relative overflow-hidden`}
                            whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <game.icon className="w-10 h-10 text-white relative z-10" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300 font-erevus-display">
                                {game.title}
                              </h3>
                            </div>
                            <p className="text-xl text-orange-400 font-semibold font-erevus-body">{game.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    
                    {/* Game Description */}
                    <div className="space-y-4">
                      <p className="text-xl text-gray-300 leading-relaxed font-erevus-body">{game.description}</p>
                      <p className="text-gray-400 leading-relaxed font-erevus-body">{game.longDescription}</p>
                    </div>
                    
                    {/* Game Details Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-white flex items-center space-x-2 font-erevus-display">
                          <Star className="w-5 h-5 text-orange-400" />
                          <span>Key Features</span>
                        </h4>
                        <div className="space-y-2">
                          {game.features.slice(0, 3).map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex} 
                              className="flex items-center space-x-3"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm font-erevus-body">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-white flex items-center space-x-2 font-erevus-display">
                          <Cpu className="w-5 h-5 text-blue-400" />
                          <span>Technical Specs</span>
                        </h4>
                        <div className="space-y-2">
                          {game.techSpecs.map((spec, specIndex) => (
                            <motion.div 
                              key={specIndex} 
                              className="flex items-center space-x-3"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Zap className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm font-erevus-body">{spec}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Progress Display System */}
                    <div className="pt-6 border-t border-gray-600/30">
                      <div className="space-y-6">
                        {/* Development Progress */}
                        <motion.div 
                          className="space-y-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold text-white flex items-center space-x-2 font-erevus-display">
                              <Trophy className="w-5 h-5 text-orange-400" />
                              <span>Development Progress</span>
                            </h4>
                            <motion.div 
                              className={`px-3 py-1 rounded-full text-sm font-bold ${game.statusColor} backdrop-blur-sm font-erevus-body`}
                              animate={{ 
                                scale: [1, 1.05, 1],
                                opacity: [0.8, 1, 0.8]
                              }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              {game.status}
                            </motion.div>
                          </div>
                          
                          <div className="relative">
                            <div className="w-full bg-gray-800/80 rounded-full h-4 overflow-hidden backdrop-blur-sm border border-gray-700/50">
                              <motion.div 
                                className={`h-full bg-gradient-to-r ${game.theme} relative overflow-hidden`}
                                initial={{ width: "0%" }}
                                animate={{ 
                                  width: game.status.includes('90%') ? "90%" : 
                                         game.status.includes('80%') ? "80%" : 
                                         game.status.includes('75%') ? "75%" : "85%" 
                                }}
                                transition={{ duration: 2, delay: index * 0.3, ease: "easeOut" }}
                              >
                                {/* Animated Shine Effect */}
                                <motion.div 
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                  style={{ width: "50%" }}
                                />
                                
                                {/* Pulse Effect */}
                                <motion.div 
                                  className="absolute inset-0 bg-white/20"
                                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                                  transition={{ repeat: Infinity, duration: 2 }}
                                />
                              </motion.div>
                            </div>
                            
                            {/* Progress Percentage */}
                            <motion.div 
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white bg-black/60 rounded px-2 py-1 font-erevus-body"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.3 + 1.5 }}
                            >
                              {game.status.includes('90%') ? "90%" : 
                               game.status.includes('80%') ? "80%" : 
                               game.status.includes('75%') ? "75%" : "85%"}
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Enhanced Game Statistics - Vertical Stack */}
                        <motion.div 
                          className="space-y-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.7 }}
                        >
                          {/* Genre Display */}
                          <motion.div 
                            className="bg-gradient-to-r from-orange-600/25 to-amber-600/25 backdrop-blur-sm rounded-lg p-4 border border-orange-500/40 text-center group hover:border-orange-400/70 hover:from-orange-600/35 hover:to-amber-600/35 transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 5 }}
                            onMouseEnter={() => playProfessionalSFX('hover')}
                          >
                            <div className="flex items-center space-x-3">
                              <motion.div 
                                className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                              >
                                <Gamepad2 className="w-5 h-5 text-white" />
                              </motion.div>
                              <div className="flex-1 text-left">
                                <div className="text-lg font-bold text-orange-300 font-erevus-display">{game.genre}</div>
                                <div className="text-sm text-orange-400/80 font-erevus-body">Genre</div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Release Timeline */}
                          <motion.div 
                            className="bg-gradient-to-r from-green-600/25 to-emerald-600/25 backdrop-blur-sm rounded-lg p-4 border border-green-500/40 text-center group hover:border-green-400/70 hover:from-green-600/35 hover:to-emerald-600/35 transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 5 }}
                            onMouseEnter={() => playProfessionalSFX('hover')}
                          >
                            <div className="flex items-center space-x-3">
                              <motion.div 
                                className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  opacity: [0.8, 1, 0.8]
                                }}
                                transition={{ repeat: Infinity, duration: 2 }}
                              >
                                <Calendar className="w-5 h-5 text-white" />
                              </motion.div>
                              <div className="flex-1 text-left">
                                <div className="text-lg font-bold text-green-300 font-erevus-display">{game.releaseDate}</div>
                                <div className="text-sm text-green-400/80 font-erevus-body">Release</div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Player Base */}
                          <motion.div 
                            className="bg-gradient-to-r from-purple-600/25 to-pink-600/25 backdrop-blur-sm rounded-lg p-4 border border-purple-500/40 text-center group hover:border-purple-400/70 hover:from-purple-600/35 hover:to-pink-600/35 transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 5 }}
                            onMouseEnter={() => playProfessionalSFX('hover')}
                          >
                            <div className="flex items-center space-x-3">
                              <motion.div 
                                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg"
                                animate={{ 
                                  rotate: [0, 180, 360],
                                }}
                                transition={{ repeat: Infinity, duration: 6 }}
                              >
                                <Users className="w-5 h-5 text-white" />
                              </motion.div>
                              <div className="flex-1 text-left">
                                <div className="text-lg font-bold text-purple-300 font-erevus-display">{game.playerBase}</div>
                                <div className="text-sm text-purple-400/80 font-erevus-body">Players</div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Game Visual */}
                  <div className="space-y-6">
                    {/* Enhanced Game Preview */}
                    <motion.div 
                      className={`relative bg-gradient-to-br ${game.gradient} backdrop-blur-sm rounded-lg p-8 border border-gray-600/30 group-hover:border-orange-400/50 transition-all duration-500 overflow-hidden`}
                      whileHover={{ scale: 1.03, rotateY: 2 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {/* Animated Background Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-blue-500/10"
                        animate={{ 
                          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                        }}
                        transition={{ repeat: Infinity, duration: 8 }}
                        style={{ backgroundSize: "400% 400%" }}
                      />
                      
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden group">
                        {/* Multiple Gradient Layers */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20"
                          animate={{ opacity: [0.2, 0.4, 0.2] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 to-cyan-500/15"
                          animate={{ opacity: [0.4, 0.2, 0.4] }}
                          transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                        />
                        
                        {/* Floating Elements */}
                        <motion.div 
                          className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <motion.div 
                          className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 0.4, 0.8]
                          }}
                          transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                        />
                        
                        <motion.div 
                          className="relative z-10 text-center space-y-6"
                          whileHover={{ scale: 1.08, y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                          >
                            <game.icon className="w-20 h-20 text-white mx-auto opacity-80 drop-shadow-lg" />
                          </motion.div>
                          <motion.div 
                            className="text-white font-bold text-xl font-erevus-display"
                            animate={{ opacity: [0.9, 1, 0.9] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            Game Preview
                          </motion.div>
                          <motion.div 
                            className="text-gray-300 font-erevus-body bg-black/20 rounded-lg px-4 py-2 backdrop-blur-sm"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            Interactive Gameplay Experience
                          </motion.div>
                        </motion.div>
                        
                        {/* Corner Decorations */}
                        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-orange-400/60 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400/60 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Platform Icons */}
                    <div className="flex items-center justify-center flex-wrap gap-4">
                      {game.platforms.map((platform, platformIndex) => (
                        <motion.div 
                          key={platformIndex} 
                          className="flex items-center space-x-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm rounded-lg px-5 py-3 border border-gray-600/30 hover:border-orange-400/40 group"
                          whileHover={{ 
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.3)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => playProfessionalSFX('hover')}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0, transition: { delay: platformIndex * 0.1 } }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay: platformIndex * 0.5 }}
                          >
                            {platform === 'Web' && <Globe className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />}
                            {platform === 'Mobile' && <Smartphone className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" />}
                            {platform === 'Desktop' && <Monitor className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />}
                            {platform === 'VR' && <Eye className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />}
                            {platform === 'AR Glasses' && <Eye className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />}
                            {platform === 'Cloud' && <Globe className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" />}
                          </motion.div>
                          <span className="text-gray-300 font-medium font-erevus-body group-hover:text-white transition-colors">
                            {platform}
                          </span>
                          
                          {/* Subtle glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{ 
                              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            style={{ backgroundSize: "200% auto" }}
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Link
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 font-erevus-body"
                        onMouseEnter={() => playProfessionalSFX('select')}
                        onClick={() => playProfessionalSFX('action')}
                      >
                        <Play className="w-5 h-5" />
                        <span>Request Beta Access</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming Technology Engine */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-black mb-8 font-erevus-display cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => playProfessionalSFX('hover')}
              onClick={() => playProfessionalSFX('powerup')}
            >
              <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">Gaming</span> 
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Technology Engine</span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-erevus-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cutting-edge technology stack powering next-generation gaming experiences with unparalleled performance and innovation
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {techFeatures.map((tech, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-10 border border-gray-600/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => playProfessionalSFX('hover')}
              >
                <div className="relative z-10">
                  {/* Tech Header */}
                  <div className="flex items-start space-x-6 mb-8">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl`}
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <tech.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 mb-4 font-erevus-display">
                        {tech.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed font-erevus-body">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tech Details */}
                  <div className="space-y-4">
                    {tech.details.map((detail, detailIndex) => (
                      <motion.div 
                        key={detailIndex} 
                        className="flex items-start space-x-4 cursor-pointer rounded-lg p-2 hover:bg-white/5 transition-colors"
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => playProfessionalSFX('select')}
                        onClick={() => playProfessionalSFX('action')}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            delay: detailIndex * 0.2
                          }}
                        />
                        <span className="text-gray-300 leading-relaxed font-erevus-body hover:text-white transition-colors">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Gaming Community */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-5xl font-black mb-8 font-erevus-display"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-orange-300 to-purple-300 bg-clip-text text-transparent">Join Our Gaming</span> 
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Development Journey</span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-erevus-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Be part of the next generation of gaming development. Get early access to our games in development, 
              join our community, and help shape the future of digital entertainment with physical merchandise integration.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl text-center block"
                onMouseEnter={() => playProfessionalSFX('hover')}
                onClick={() => playProfessionalSFX('powerup')}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Play className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors font-erevus-display">Development Access</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-erevus-body">Get exclusive access to our games in development (75-95% complete) and provide feedback</p>
                <div className="flex items-center justify-center space-x-2 text-orange-400 group-hover:text-orange-300">
                  <span className="font-semibold font-erevus-body">Request Access</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/team"
                className="group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl text-center block"
                onMouseEnter={() => playProfessionalSFX('hover')}
                onClick={() => playProfessionalSFX('select')}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors font-erevus-display">Join Development</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-erevus-body">Contribute to game development and earn fractional ownership based on your contributions</p>
                <div className="flex items-center justify-center space-x-2 text-purple-400 group-hover:text-purple-300">
                  <span className="font-semibold font-erevus-body">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl text-center block"
                onMouseEnter={() => playProfessionalSFX('hover')}
                onClick={() => playProfessionalSFX('action')}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Trophy className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors font-erevus-display">Physical Merchandise</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-erevus-body">Convert 3D game models to figurines, prototypes, and custom physical products</p>
                <div className="flex items-center justify-center space-x-2 text-blue-400 group-hover:text-blue-300">
                  <span className="font-semibold font-erevus-body">Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      </motion.main>
    </AnimatePresence>
  )
}
