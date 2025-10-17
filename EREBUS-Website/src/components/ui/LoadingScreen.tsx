'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showCinematic, setShowCinematic] = useState(true)

  const phases = [
    { text: "Preparing your digital experience", duration: 600 },
    { text: "Loading innovative solutions", duration: 500 },
    { text: "Connecting creative networks", duration: 500 },
    { text: "Initializing professional tools", duration: 450 },
    { text: "Optimizing performance systems", duration: 400 },
    { text: "Welcome to EREVUS", duration: 350 }
  ]

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden'
    
    let progressInterval: NodeJS.Timeout
    let phaseTimeout: NodeJS.Timeout

    const startLoading = () => {
      // Start immediately with smooth progress
      setProgress(1)
      
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            setTimeout(() => {
              setShowCinematic(false)
              setTimeout(() => {
                setIsLoading(false)
                // Restore scrolling when loading completes
                document.body.style.overflow = 'unset'
              }, 300)
            }, 200)
            return 100
          }
          // Smooth, consistent progress
          return Math.min(prev + 1.5, 100)
        })
      }, 45)
    }

    const cyclePhases = (index: number) => {
      if (index < phases.length) {
        setCurrentPhase(index)
        phaseTimeout = setTimeout(() => cyclePhases(index + 1), phases[index].duration)
      }
    }

    // Start immediately
    startLoading()
    cyclePhases(0)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(phaseTimeout)
      // Cleanup: restore scrolling if component unmounts
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-gray-950 to-black flex items-center justify-center overflow-hidden"
      >
        {/* Cinematic Background Effects */}
        <div className="absolute inset-0">
          {/* Subtle Matrix Effect */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-slate-400 to-transparent"
                style={{
                  left: `${Math.random() * 100}%`,
                  height: `${Math.random() * 200 + 100}px`,
                }}
                animate={{
                  y: ['-100%', '100vh'],
                  opacity: [0, 0.6, 0],
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

          {/* Gentle Particles */}
          <div className="absolute inset-0 opacity-60">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-slate-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Gentle Background Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-slate-600/10 to-slate-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-slate-500/10 to-slate-700/10 rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center space-y-12 px-6 max-w-4xl">
          {showCinematic && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-16"
            >
              {/* Epic Logo Entrance */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative mb-8"
              >
                {/* Static Energy Ring */}
                <motion.div
                  className="absolute rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: 'radial-gradient(circle, rgba(148,163,184,0.3) 0%, transparent 70%)',
                    width: '200px',
                    height: '200px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
                
                {/* Logo Container - No Spinning */}
                <motion.div
                  className="relative w-40 h-40 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Static Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-600/20 rounded-full blur-xl" />
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-700/30 to-slate-900/30 rounded-full backdrop-blur-sm border border-slate-500/30 flex items-center justify-center">
                    <Image 
                      src="/erevus-logo.png" 
                      alt="EREVUS" 
                      width={120} 
                      height={120} 
                      className="drop-shadow-2xl"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Epic Brand Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  EREVUS
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-slate-300 font-medium tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Professional Digital Solutions
                </motion.p>
              </motion.div>
            </motion.div>
          )}

          {/* Ultra Progress System */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Smooth Progress Bar */}
            <div className="relative">
              <div className="w-96 max-w-full mx-auto bg-slate-900/50 rounded-full h-3 overflow-hidden border border-slate-600/50 backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </div>
              
              {/* Clean Progress Percentage */}
              <motion.div
                className="mt-4 text-slate-200 font-black text-3xl font-mono"
                animate={{ opacity: 1 }}
              >
                {progress.toFixed(0)}%
              </motion.div>
            </div>

            {/* Smooth Phase Text */}
            <motion.div
              className="space-y-2"
            >
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-slate-300 font-bold text-lg md:text-xl tracking-wide"
              >
                {phases[currentPhase]?.text}
              </motion.div>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto rounded-full opacity-60" />
            </motion.div>
          </motion.div>

          {/* Elite Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-slate-400 font-medium text-sm tracking-widest"
          >
            CRAFTING EXCEPTIONAL EXPERIENCES
          </motion.div>
        </div>

        {/* Corner Elements */}
        <div className="absolute top-6 left-6 text-slate-600 font-mono text-xs tracking-widest">
          THERION_INIT
        </div>
        <div className="absolute top-6 right-6 text-slate-600 font-mono text-xs tracking-widest">
          v2.0.25
        </div>
        <div className="absolute bottom-6 left-6 text-slate-600 font-mono text-xs tracking-widest">
          QUANTUM_READY
        </div>
        <div className="absolute bottom-6 right-6 text-slate-600 font-mono text-xs tracking-widest">
          EREVUS_SYS
        </div>
      </motion.div>
    </AnimatePresence>
  )
}