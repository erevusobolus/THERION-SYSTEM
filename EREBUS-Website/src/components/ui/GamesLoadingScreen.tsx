'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Trophy, Zap, Star, Sparkles, Coins, Swords } from 'lucide-react'

interface GamesLoadingScreenProps {
  onLoadingComplete?: () => void
}

export default function GamesLoadingScreen({ onLoadingComplete }: GamesLoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showCinematic, setShowCinematic] = useState(true)

  const gamingPhases = useMemo(() => [
    { text: "Initializing Gaming Engine", duration: 600, icon: Gamepad2 },
    { text: "Loading Epic Adventures", duration: 500, icon: Swords },
    { text: "Preparing Legendary Rewards", duration: 500, icon: Coins },
    { text: "Activating Achievement Systems", duration: 450, icon: Trophy },
    { text: "Powering Victory Mechanics", duration: 400, icon: Zap },
    { text: "Welcome to Gaming Paradise", duration: 350, icon: Star }
  ], [])

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden'
    
    let progressInterval: NodeJS.Timeout
    let phaseTimeout: NodeJS.Timeout

    const startLoading = () => {
      setProgress(1)
      
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            setTimeout(() => {
              setShowCinematic(false)
              setTimeout(() => {
                setIsLoading(false)
                document.body.style.overflow = 'unset'
                onLoadingComplete?.()
              }, 300)
            }, 200)
            return 100
          }
          return Math.min(prev + 1.8, 100)
        })
      }, 40)
    }

    const cyclePhases = (index: number) => {
      if (index < gamingPhases.length) {
        setCurrentPhase(index)
        phaseTimeout = setTimeout(() => cyclePhases(index + 1), gamingPhases[index].duration)
      }
    }

    startLoading()
    cyclePhases(0)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(phaseTimeout)
      document.body.style.overflow = 'unset'
    }
  }, [onLoadingComplete, gamingPhases])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-gray-950 to-black flex items-center justify-center overflow-hidden"
      >
        {/* Epic Gaming Background Effects */}
        <div className="absolute inset-0">
          {/* Gaming Matrix Effect */}
          <div className="absolute inset-0 opacity-15">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-orange-400 to-transparent"
                style={{
                  left: `${(i * 3.33)}%`,
                  height: `${Math.random() * 300 + 200}px`,
                }}
                animate={{
                  y: ['-100%', '100vh'],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'linear'
                }}
              />
            ))}
          </div>

          {/* Gaming Particles */}
          <div className="absolute inset-0 opacity-60">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Gaming Background Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-amber-500/20 to-orange-700/20 rounded-full blur-3xl" />
        </div>

        {/* Main Gaming Content */}
        <div className="relative z-10 text-center space-y-12 px-6 max-w-4xl">
          {showCinematic && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-16"
            >
              {/* Epic Gaming Logo Entrance */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative mb-8"
              >
                {/* Gaming Energy Ring */}
                <motion.div
                  className="absolute rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: 'radial-gradient(circle, rgba(251,146,60,0.4) 0%, transparent 70%)',
                    width: '250px',
                    height: '250px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
                
                {/* Gaming Logo Container */}
                <motion.div
                  className="relative w-48 h-48 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gaming Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-amber-600/30 rounded-full blur-xl" />
                  
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-700/40 to-slate-900/40 rounded-full backdrop-blur-sm border border-orange-500/40 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotateY: [0, 180, 360]
                      }}
                      transition={{ 
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotateY: { duration: 8, repeat: Infinity, ease: "linear" }
                      }}
                      className="text-orange-400"
                    >
                      <Gamepad2 size={80} className="drop-shadow-2xl" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Epic Gaming Brand Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  GAMES
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-orange-300 font-medium tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Epic Adventures Await
                </motion.p>
              </motion.div>
            </motion.div>
          )}

          {/* Premium Gaming Progress System */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Gaming Progress Bar */}
            <div className="relative">
              <div className="w-96 max-w-full mx-auto bg-slate-900/50 rounded-full h-4 overflow-hidden border border-orange-500/50 backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 rounded-full shadow-lg relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Gaming Progress Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
              
              {/* Gaming Progress Percentage */}
              <motion.div
                className="mt-4 text-orange-300 font-black text-3xl font-mono"
                animate={{ opacity: 1 }}
              >
                {progress.toFixed(0)}%
              </motion.div>
            </div>

            {/* Gaming Phase Text with Icons */}
            <motion.div className="space-y-4">
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center space-x-4"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                  }}
                  className="text-orange-400"
                >
                  {gamingPhases[currentPhase] && (() => {
                    const IconComponent = gamingPhases[currentPhase].icon;
                    return <IconComponent size={24} />;
                  })()}
                </motion.div>
                <div className="text-orange-300 font-bold text-lg md:text-xl tracking-wide">
                  {gamingPhases[currentPhase]?.text}
                </div>
              </motion.div>
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto rounded-full opacity-70" />
            </motion.div>
          </motion.div>

          {/* Epic Gaming Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-orange-400/80 font-medium text-sm tracking-widest flex items-center justify-center space-x-2"
          >
            <Sparkles size={16} />
            <span>LEGENDARY GAMING EXPERIENCES</span>
            <Sparkles size={16} />
          </motion.div>
        </div>

        {/* Gaming Corner Elements */}
        <div className="absolute top-6 left-6 text-orange-600/70 font-mono text-xs tracking-widest">
          GAMING_ENGINE
        </div>
        <div className="absolute top-6 right-6 text-orange-600/70 font-mono text-xs tracking-widest">
          v3.0.EPIC
        </div>
        <div className="absolute bottom-6 left-6 text-orange-600/70 font-mono text-xs tracking-widest">
          ACHIEVEMENT_READY
        </div>
        <div className="absolute bottom-6 right-6 text-orange-600/70 font-mono text-xs tracking-widest">
          EREVUS_GAMES
        </div>
      </motion.div>
    </AnimatePresence>
  )
}