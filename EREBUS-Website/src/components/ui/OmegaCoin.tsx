'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { howlerProAudio } from '@/utils/howler-pro-audio' // Professional Howler.js audio

interface OmegaCoinProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  className?: string
  animated?: boolean
  onClick?: () => void
  onHover?: () => void
  collectible?: boolean
  flipOnClick?: boolean
  coinVariant?: 'standard' | 'premium' | 'rare' | 'legendary'
  collectionEffect?: 'disappear' | 'shrink' | 'explode' | 'float'
  showValue?: boolean
  decorative?: boolean
  symbol?: string // New: custom symbol display
  isCorrect?: boolean // New: indicates if this is a correct coin or bomb
}

export default function OmegaCoin({ 
  size = 'medium', 
  className = '', 
  animated = true,
  onClick,
  onHover,
  collectible = false,
  flipOnClick = true,
  coinVariant = 'standard',
  collectionEffect = 'disappear',
  showValue = false,
  decorative = false,
  symbol = 'Ω',
  isCorrect = true
}: OmegaCoinProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotationPhase, setRotationPhase] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [isCollected, setIsCollected] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const coinRef = useRef<HTMLDivElement>(null)
  const soundManager = howlerProAudio // Professional Howler.js audio system

  // Size configurations
  const sizeConfig = {
    small: { 
      width: 'w-16 h-16', 
      omega: 'text-3xl', 
      innerGlow: 'w-12 h-12',
      outerGlow: 'w-20 h-20',
      valueSize: '10px'
    },
    medium: { 
      width: 'w-24 h-24', 
      omega: 'text-4xl', 
      innerGlow: 'w-20 h-20',
      outerGlow: 'w-32 h-32',
      valueSize: '12px'
    },
    large: { 
      width: 'w-32 h-32', 
      omega: 'text-6xl', 
      innerGlow: 'w-28 h-28',
      outerGlow: 'w-40 h-40',
      valueSize: '14px'
    },
    xlarge: { 
      width: 'w-48 h-48', 
      omega: 'text-8xl', 
      innerGlow: 'w-44 h-44',
      outerGlow: 'w-56 h-56',
      valueSize: '16px'
    }
  }

  const config = sizeConfig[size]

  // Coin variant configurations for different rarities
  const variantConfig = {
    standard: {
      gradient: 'from-slate-300 via-slate-100 to-slate-300',
      innerGradient: 'from-slate-200 via-white to-slate-200',
      glow: 'shadow-amber-400/30',
      omegaColor: 'text-slate-700',
      rarity: 'Common',
      particles: 0,
      glowColors: '#cbd5e1, #94a3b8, #64748b, #475569',
      shadowColor: 'rgba(100, 116, 139, 0.3)',
      valueColor: '#64748b',
      value: 1
    },
    premium: {
      gradient: 'from-amber-400 via-amber-200 to-amber-400',
      innerGradient: 'from-amber-300 via-amber-100 to-amber-300',
      glow: 'shadow-amber-500/50',
      omegaColor: 'text-amber-800',
      rarity: 'Premium',
      particles: 3,
      glowColors: '#fbbf24, #f59e0b, #d97706, #b45309',
      shadowColor: 'rgba(245, 158, 11, 0.5)',
      valueColor: '#d97706',
      value: 5
    },
    rare: {
      gradient: 'from-purple-400 via-purple-200 to-purple-400',
      innerGradient: 'from-purple-300 via-purple-100 to-purple-300',
      glow: 'shadow-purple-500/60',
      omegaColor: 'text-purple-800',
      rarity: 'Rare',
      particles: 6,
      glowColors: '#a855f7, #8b5cf6, #7c3aed, #6d28d9',
      shadowColor: 'rgba(139, 92, 246, 0.6)',
      valueColor: '#7c3aed',
      value: 25
    },
    legendary: {
      gradient: 'from-amber-400 via-purple-400 to-amber-400',
      innerGradient: 'from-amber-300 via-purple-200 to-amber-300',
      glow: 'shadow-purple-600/70',
      omegaColor: 'text-purple-900',
      rarity: 'Legendary',
      particles: 12,
      glowColors: '#fbbf24, #a855f7, #3b82f6, #10b981',
      shadowColor: 'rgba(168, 85, 247, 0.8)',
      valueColor: '#6d28d9',
      value: 100
    }
  }

  const variant = variantConfig[coinVariant]

  // Enhanced click handler with 3D flip and collection effects
  const handleCoinClick = async () => {
    if (isCollected) return

    // Context-aware sound selection
    if (collectible) {
      await soundManager.playContextSound('coin', 'collect')
    } else if (flipOnClick) {
      await soundManager.playContextSound('coin', 'flip')
    } else {
      await soundManager.playContextSound('coin', 'click')
    }

    // Start flip animation
    if (flipOnClick) {
      setIsFlipping(true)
      
      // Create particle effect
      if (collectible) {
        setShowParticles(true)
        
        // Trigger collection after flip
        setTimeout(() => {
          setIsCollected(true)
          
          // Hide particles after collection
          setTimeout(() => {
            setShowParticles(false)
          }, 1000)
        }, 600) // Wait for flip to complete
      }
    }

    // Call the original onClick handler
    if (onClick) {
      onClick()
    }

    // Reset flip state
    setTimeout(() => {
      setIsFlipping(false)
    }, 1200)
  }

  // Enhanced hover handler
  const handleCoinHover = async () => {
    if (isCollected) return
    setIsHovered(true)
    
    // Context-aware hover sound
    await soundManager.playContextSound('coin', 'hover')
    
    if (onHover) {
      onHover()
    }
  }

  // Continuous rotation animation for pearl effect
  useEffect(() => {
    if (!animated) return
    
    const interval = setInterval(() => {
      setRotationPhase(prev => (prev + 1) % 360)
    }, 50) // 20fps for smooth animation

    return () => clearInterval(interval)
  }, [animated])

  // Auto-collection for demo purposes (remove in production)
  useEffect(() => {
    if (collectible && coinVariant === 'legendary') {
      const timer = setTimeout(() => {
        // Legendary coins auto-sparkle after 3 seconds
        setShowParticles(true)
        setTimeout(() => setShowParticles(false), 2000)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [collectible, coinVariant])

  return (
    <AnimatePresence>
      {!isCollected && (
        <motion.div 
          ref={coinRef}
          className={`relative flex items-center justify-center ${className}`}
          onMouseEnter={handleCoinHover}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleCoinClick}
          initial={{ opacity: 1, scale: 1 }}
          exit={
            collectionEffect === 'disappear' ? { opacity: 0, scale: 0.5, y: -20 } :
            collectionEffect === 'shrink' ? { scale: 0, opacity: 0 } :
            collectionEffect === 'explode' ? { scale: 2, opacity: 0, rotate: 360 } :
            collectionEffect === 'float' ? { y: -100, opacity: 0, scale: 1.2 } :
            { opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Particle Effects for Collection */}
          <AnimatePresence>
            {showParticles && (
              <div className="absolute inset-0 pointer-events-none z-50">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full ${
                      coinVariant === 'legendary' ? 'bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400' :
                      coinVariant === 'rare' ? 'bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-400' :
                      coinVariant === 'premium' ? 'bg-gradient-to-r from-amber-400 via-amber-600 to-orange-400' :
                      'bg-gradient-to-r from-slate-400 via-slate-600 to-gray-400'
                    }`}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      filter: 'drop-shadow(0 0 6px currentColor)',
                      zIndex: 100
                    }}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [1, 0.8, 0],
                      x: Math.cos(i * 30 * Math.PI / 180) * (40 + Math.random() * 20),
                      y: Math.sin(i * 30 * Math.PI / 180) * (40 + Math.random() * 20),
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.08,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Enhanced Outer Glow Effect with Multiple Layers */}
          <motion.div
            className={`absolute ${config.outerGlow} rounded-full`}
            style={{
              background: `
                radial-gradient(circle at 50% 50%, ${variant.glowColors}),
                conic-gradient(from ${rotationPhase}deg, ${variant.glowColors})
              `,
              filter: 'blur(8px)',
              zIndex: 1
            }}
            animate={{
              scale: isHovered ? 1.4 : 1.2,
              opacity: isHovered ? 0.8 : 0.4,
              rotate: animated ? rotationPhase : 0
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Secondary Glow Layer */}
          <motion.div
            className={`absolute ${config.outerGlow} rounded-full`}
            style={{
              background: `conic-gradient(from ${-rotationPhase}deg, ${variant.glowColors})`,
              filter: 'blur(4px)',
              zIndex: 2
            }}
            animate={{
              scale: isHovered ? 1.3 : 1.1,
              opacity: isHovered ? 0.6 : 0.3,
              rotate: animated ? -rotationPhase * 0.5 : 0
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Main Coin Body with Enhanced 3D Effects */}
          <motion.div
            className={`relative ${config.width} rounded-full shadow-2xl cursor-pointer overflow-hidden`}
            style={{
              background: `
                radial-gradient(ellipse at 25% 25%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
                radial-gradient(ellipse at 75% 75%, rgba(0, 0, 0, 0.3) 0%, transparent 50%),
                conic-gradient(from ${rotationPhase * 0.5}deg, ${variant.gradient}),
                linear-gradient(145deg, ${variant.innerGradient})
              `,
              boxShadow: `
                inset 0 0 0 4px rgba(251, 191, 36, 0.6),
                inset 0 12px 24px rgba(255, 255, 255, 0.8),
                inset 0 -12px 24px rgba(0, 0, 0, 0.6),
                inset 0 0 48px rgba(148, 163, 184, 0.4),
                0 16px 64px rgba(0, 0, 0, 0.7),
                0 0 0 3px rgba(251, 191, 36, 0.4),
                0 8px 16px rgba(0, 0, 0, 0.4),
                0 0 32px ${variant.shadowColor}
              `,
              border: '3px solid rgba(203, 213, 225, 0.9)',
              transformStyle: 'preserve-3d',
              zIndex: 10
            }}
            animate={{
              scale: isHovered ? 1.08 : 1,
              rotateY: isFlipping ? [0, 180, 360] : (isHovered ? 20 : 0),
              rotateX: isFlipping ? [0, 25, 0] : (isHovered ? 5 : 0),
              z: isHovered ? 100 : 0
            }}
            transition={{ 
              type: isFlipping ? "tween" : "spring", 
              stiffness: 300, 
              damping: 20,
              duration: isFlipping ? 1.4 : undefined
            }}
            whileHover={{ 
              scale: 1.12,
              rotateY: 25,
              rotateX: 8,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.92,
              rotateY: 380,
              transition: { duration: 0.8 }
            }}
          >
            {/* Enhanced Inner Pearl Shimmer Effect */}
            <motion.div
              className={`absolute inset-3 rounded-full`}
              style={{
                background: `
                  conic-gradient(from ${rotationPhase * 3}deg, 
                    transparent 0deg, rgba(255, 255, 255, 0.95) 20deg, 
                    transparent 40deg, rgba(251, 191, 36, 0.8) 80deg,
                    transparent 120deg, rgba(255, 255, 255, 0.95) 160deg,
                    transparent 200deg, rgba(251, 191, 36, 0.8) 260deg,
                    transparent 300deg, rgba(255, 255, 255, 0.95) 340deg,
                    transparent 360deg)
                `,
                borderRadius: '50%',
                zIndex: 5
              }}
              animate={{
                opacity: isHovered ? 0.8 : 0.5,
                scale: isHovered ? 1.05 : 1
              }}
            />

            {/* Premium Coin Edge Ridges */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  conic-gradient(from 0deg, 
                    transparent 0deg, rgba(0, 0, 0, 0.15) 1deg, transparent 2deg,
                    transparent 4deg, rgba(0, 0, 0, 0.15) 5deg, transparent 6deg,
                    transparent 8deg, rgba(0, 0, 0, 0.15) 9deg, transparent 10deg,
                    transparent 12deg, rgba(0, 0, 0, 0.15) 13deg, transparent 14deg,
                    transparent 16deg, rgba(0, 0, 0, 0.15) 17deg, transparent 18deg)
                `,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'repeat',
                zIndex: 6
              }}
            />

            {/* Enhanced Symbol with Better Positioning - Support for custom symbols */}
            <motion.div 
              className={`absolute inset-0 flex items-center justify-center font-bold ${config.omega} ${variant.omegaColor} font-orbitron`}
              style={{
                textShadow: isCorrect ? `
                  0 3px 6px rgba(0, 0, 0, 0.4),
                  0 0 12px rgba(255, 255, 255, 0.7),
                  0 0 24px rgba(251, 191, 36, 0.4),
                  0 0 36px ${variant.shadowColor}
                ` : `
                  0 3px 6px rgba(0, 0, 0, 0.4),
                  0 0 12px rgba(255, 50, 50, 0.9),
                  0 0 24px rgba(255, 0, 0, 0.6),
                  0 0 36px rgba(220, 38, 38, 0.8)
                `,
                transform: 'translateZ(50px)',
                zIndex: 20,
                color: isCorrect ? undefined : '#ef4444' // Red color for bomb coins
              }}
              animate={{
                scale: isHovered ? 1.15 : 1,
                rotateY: isFlipping ? [0, 180, 360] : 0,
                textShadow: isHovered ? (isCorrect ? [
                  `0 3px 6px rgba(0, 0, 0, 0.4), 0 0 16px rgba(255, 255, 255, 0.9), 0 0 32px rgba(251, 191, 36, 0.6), 0 0 48px ${variant.shadowColor}`,
                  `0 3px 6px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 255, 255, 0.7), 0 0 24px rgba(251, 191, 36, 0.4), 0 0 36px ${variant.shadowColor}`
                ] : [
                  `0 3px 6px rgba(0, 0, 0, 0.4), 0 0 16px rgba(255, 50, 50, 0.9), 0 0 32px rgba(255, 0, 0, 0.8), 0 0 48px rgba(220, 38, 38, 1)`,
                  `0 3px 6px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 50, 50, 0.9), 0 0 24px rgba(255, 0, 0, 0.6), 0 0 36px rgba(220, 38, 38, 0.8)`
                ]) : (isCorrect ? `0 3px 6px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 255, 255, 0.7), 0 0 24px rgba(251, 191, 36, 0.4), 0 0 36px ${variant.shadowColor}` : `0 3px 6px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 50, 50, 0.9), 0 0 24px rgba(255, 0, 0, 0.6), 0 0 36px rgba(220, 38, 38, 0.8)`)
              }}
              transition={{ duration: 0.3 }}
            >
              {symbol}
            </motion.div>

            {/* Enhanced Rarity Badge for Special Variants - Only show when not decorative */}
            {coinVariant !== 'standard' && !decorative && (
              <motion.div 
                className="absolute -top-3 -right-3 px-3 py-1.5 text-xs font-bold rounded-full border-2"
                style={{
                  background: coinVariant === 'legendary' ? 'linear-gradient(135deg, #fbbf24, #a855f7, #3b82f6)' :
                             coinVariant === 'rare' ? 'linear-gradient(135deg, #a855f7, #8b5cf6, #6366f1)' :
                             'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
                  color: 'white',
                  fontSize: '9px',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.9)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  zIndex: 25
                }}
                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {variant.rarity.toUpperCase()}
              </motion.div>
            )}

            {/* Enhanced Value Display - Only show when needed */}
            {(showValue || collectible) && (
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold font-orbitron pointer-events-none"
                style={{
                  color: variant.valueColor,
                  textShadow: `
                    0 1px 3px rgba(0, 0, 0, 0.8),
                    0 0 8px rgba(255, 255, 255, 0.6),
                    0 0 16px ${variant.shadowColor}
                  `,
                  fontSize: config.valueSize,
                  zIndex: 30
                }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ delay: 0.5, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.15,
                  textShadow: `
                    0 1px 3px rgba(0, 0, 0, 0.8),
                    0 0 12px rgba(255, 255, 255, 0.8),
                    0 0 24px ${variant.shadowColor}
                  `
                }}
              >
                Ω{variant.value}
              </motion.div>
            )}

            {/* Premium Coin Surface Texture */}
            <div 
              className="absolute inset-1 rounded-full"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
                  radial-gradient(ellipse at 70% 80%, rgba(0, 0, 0, 0.2) 0%, transparent 50%),
                  repeating-conic-gradient(from 0deg at 50% 50%,
                    transparent 0deg,
                    rgba(255, 255, 255, 0.1) 0.5deg,
                    transparent 1deg,
                    transparent 5deg
                  )
                `,
                borderRadius: '50%',
                opacity: 0.6,
                zIndex: 8
              }}
            />

            {/* Enhanced 3D Depth Shadow */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  radial-gradient(ellipse at 40% 30%, transparent 30%, rgba(0, 0, 0, 0.3) 70%),
                  linear-gradient(45deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%)
                `,
                borderRadius: '50%',
                zIndex: 2
              }}
            />

            {/* Final Protective Glass Effect */}
            <motion.div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.3) 0%, 
                    transparent 30%, 
                    transparent 70%, 
                    rgba(255, 255, 255, 0.1) 100%
                  )
                `,
                borderRadius: '50%',
                zIndex: 50
              }}
              animate={{
                opacity: isHovered ? 0.8 : 0.5
              }}
            />
          </motion.div>

          {/* Floating Energy Particles (for rare+ coins) - Better positioning - Only show when not decorative */}
          {variant.particles > 0 && !decorative && (
            <>
              {[...Array(variant.particles)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full opacity-60 pointer-events-none ${
                    coinVariant === 'legendary' ? 'bg-gradient-to-r from-amber-400 to-purple-400' :
                    coinVariant === 'rare' ? 'bg-purple-400' :
                    'bg-amber-400'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    zIndex: 100
                  }}
                  animate={{
                    x: [0, Math.cos((rotationPhase + i * (360/variant.particles)) * Math.PI / 180) * 35],
                    y: [0, Math.sin((rotationPhase + i * (360/variant.particles)) * Math.PI / 180) * 35],
                    opacity: [0.6, 0.2, 0.6],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}