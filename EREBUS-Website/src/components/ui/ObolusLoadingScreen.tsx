'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Shield, Zap, HandCoins, TrendingUp } from 'lucide-react'
import OmegaCoin from '@/components/ui/OmegaCoin'
export default function ObolusLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showCinematic, setShowCinematic] = useState(true)

  const phases = useMemo(() => [
    { text: "Initializing HBAR blockchain connection", duration: 300, icon: Shield },
    { text: "Loading OBOLUS stablecoin data", duration: 250, icon: 'OmegaCoin' },
    { text: "Connecting to mining networks", duration: 250, icon: Zap },
    { text: "Preparing investment packages", duration: 200, icon: TrendingUp },
    { text: "Securing datacenter resources", duration: 200, icon: HandCoins },
    { text: "Welcome to OBOLUS", duration: 150, icon: Sparkles }
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
              // Removed annoying completion sound
              setShowCinematic(false)
              setTimeout(() => {
                setIsLoading(false)
                document.body.style.overflow = 'unset'
              }, 200)
            }, 100)
            return 100
          }
          return Math.min(prev + 4, 100)
        })
      }, 25)
    }

    const cyclePhases = () => {
      if (currentPhase < phases.length - 1) {
        phaseTimeout = setTimeout(() => {
          // Removed annoying phase transition sounds
          setCurrentPhase(prev => prev + 1)
        }, phases[currentPhase].duration)
      }
    }

    // Removed initial annoying sound

    startLoading()
    cyclePhases()

    return () => {
      clearInterval(progressInterval)
      clearTimeout(phaseTimeout)
      document.body.style.overflow = 'unset'
    }
  }, [currentPhase, phases])

  if (!isLoading) return null

  const CurrentIcon = phases[currentPhase]?.icon || Shield
  const isOmegaCoin = CurrentIcon === 'OmegaCoin'

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl overflow-hidden"
        >
          {/* Amber overlay for OBOLUS branding */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-slate-950/60 to-amber-950/40"></div>
          {/* Animated Background Effects */}
          <div className="absolute inset-0">
            {/* Moving amber particles */}
            <div className="absolute top-20 left-20 w-32 h-32 md:w-48 md:h-48 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 md:w-48 md:h-48 bg-yellow-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            
            {/* OBOLUS Logo Animation */}
            <AnimatePresence mode="wait">
              {showCinematic && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8 sm:mb-12"
                >
                  {/* OBOLUS Omega Coin Visual - PROFESSIONAL */}
                  <div className="relative mb-6 sm:mb-8">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.08, 1]
                      }}
                      transition={{ 
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="flex justify-center"
                    >
                      <OmegaCoin 
                        size="xlarge"
                        animated={true}
                        className="filter drop-shadow-2xl"
                      />
                    </motion.div>
                    
                    {/* Subtle orbital effects */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border border-amber-400/20 rounded-full opacity-30"
                    ></motion.div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-8 border border-amber-300/10 rounded-full opacity-20"
                    ></motion.div>
                  </div>

                  {/* OBOLUS Title */}
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4"
                  >
                    <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-pulse">
                      OBOLUS
                    </span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-sm sm:text-base md:text-lg text-amber-200 font-medium"
                  >
                    HBAR-Backed Stablecoin
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Section */}
            <div className="w-full max-w-md mx-auto space-y-6 sm:space-y-8">
              
              {/* Phase Display */}
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center"
                  >
                    {isOmegaCoin ? (
                      <OmegaCoin size="small" animated={true} className="scale-50" />
                    ) : (
                      <CurrentIcon className="w-4 h-4 text-white" />
                    )}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-amber-300">
                    {phases[currentPhase]?.text}
                  </h3>
                </div>
              </motion.div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-amber-500/20">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-300/50 to-yellow-300/50 animate-pulse"></div>
                  </motion.div>
                </div>
                
                {/* Progress percentage */}
                <div className="flex justify-between items-center mt-2 text-xs sm:text-sm">
                  <span className="text-amber-400 font-medium">Loading...</span>
                  <span className="text-amber-300 font-bold">{Math.round(progress)}%</span>
                </div>
              </div>

              {/* Loading dots */}
              <div className="flex justify-center space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 bg-amber-400 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Bottom branding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="text-xs sm:text-sm text-amber-400/70 font-medium">
                Powered by HBAR • Secured by Blockchain
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}