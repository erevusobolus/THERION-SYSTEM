'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OmegaCoin from './OmegaCoin'
import { howlerProAudio } from '@/utils/howler-pro-audio' // Professional Howler.js audio

interface CoinGeneratorProps {
  maxCoins?: number
  spawnRate?: number
  varietyEnabled?: boolean
  collectibleMode?: boolean
  startHidden?: boolean // New: control if game starts hidden
  className?: string
}

interface GeneratedCoin {
  id: string
  variant: 'standard' | 'premium' | 'rare' | 'legendary'
  size: 'small' | 'medium' | 'large'
  position: { x: number, y: number }
  soundContext: 'collection' | 'reward' | 'transaction'
  collectionEffect: 'disappear' | 'shrink' | 'explode' | 'float'
  isCollected: boolean
  isCorrect: boolean // New: true for Omega coins, false for bomb coins
  symbol: string // New: 'Ω' for correct, other letters for bombs
  spawnTime: number // New: track when coin was spawned for timeout
}

export default function CoinGenerator({
  maxCoins = 8,  // Reduced from 12 to prevent crashes
  spawnRate = 4000,  // Increased from 3000 for safer spawning
  varietyEnabled = true,
  collectibleMode = true,
  startHidden = false, // New: control if game starts hidden
  className = ''
}: CoinGeneratorProps) {
  const [coins, setCoins] = useState<GeneratedCoin[]>([])
  const [totalCollected, setTotalCollected] = useState(0)
  const [score, setScore] = useState(0) // New: game score system
  const [collectionStreak, setCollectionStreak] = useState(0)
  const [lastSpawnTime, setLastSpawnTime] = useState(0) // Rate limiting
  const [maxCoinsReached, setMaxCoinsReached] = useState(false) // Safety flag
  const [isMobile, setIsMobile] = useState(false) // New: mobile detection
  const [isGameFocused, setIsGameFocused] = useState(false) // New: mobile focus state
  const [gameStarted, setGameStarted] = useState(!startHidden) // New: game start state - controlled by startHidden prop
  const gameContainerRef = useRef<HTMLDivElement>(null) // New: container reference
  const soundManager = howlerProAudio // Professional Howler.js audio system

  // Safety constants to prevent browser crashes
  const ABSOLUTE_MAX_COINS = 15 // Hard limit that cannot be exceeded
  const MIN_SPAWN_INTERVAL = 2000 // Minimum time between spawns (2 seconds)
  const MAX_BONUS_COINS = 2 // Reduced bonus coins from legendary collection
  const COIN_TIMEOUT = 5000 // 5 seconds before coins disappear if not collected
  const SCORE_CORRECT = 1 // Score for collecting correct Omega coins
  const SCORE_PENALTY = -10 // Score penalty for clicking bomb coins
  
  // Bomb coin symbols (non-Omega letters)
  const BOMB_SYMBOLS = useMemo(() => ['Ψ', 'Φ', 'Θ', 'Σ', 'Π', 'Λ', 'Γ', 'Δ', 'Ξ', 'Χ'], [])
  
  // Mobile detection effect
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                           window.innerWidth <= 768
      setIsMobile(isMobileDevice)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Start game function
  const startGame = useCallback(() => {
    setGameStarted(true)
    setScore(0)
    setTotalCollected(0)
    setCollectionStreak(0)
    setCoins([])
    setMaxCoinsReached(false)
    
    // Play start sound
    soundManager.playContextSound('UI', 'click').catch(console.error)
  }, [soundManager])
  
  // Mobile auto-focus handler
  const handleGameInteraction = useCallback(() => {
    if (isMobile && !isGameFocused) {
      setIsGameFocused(true)
      if (gameContainerRef.current) {
        gameContainerRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'center'
        })
      }
    }
    
    // Start the game if not started
    if (!gameStarted) {
      startGame()
    }
  }, [isMobile, isGameFocused, gameStarted, startGame])
  
  // Coin timeout cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prevCoins => {
        const now = Date.now()
        const validCoins = prevCoins.filter(coin => {
          if (coin.isCollected) return false
          if (now - coin.spawnTime > COIN_TIMEOUT) {
            // Coin timed out - apply penalty if it was a correct coin
            if (coin.isCorrect) {
              setScore(prev => Math.max(0, prev - 1)) // Small penalty for missing correct coins
            }
            return false
          }
          return true
        })
        return validCoins
      })
    }, 1000) // Check every second
    
    return () => clearInterval(interval)
  }, [])

  // Rarity distribution weights
  const rarityWeights = useMemo(() => ({
    standard: 50,    // 50% chance
    premium: 30,     // 30% chance
    rare: 15,        // 15% chance
    legendary: 5     // 5% chance
  }), [])

  // Generate random coin variant based on rarity weights
  const generateCoinVariant = useCallback((): 'standard' | 'premium' | 'rare' | 'legendary' => {
    if (!varietyEnabled) return 'standard'
    
    const random = Math.random() * 100
    let cumulative = 0
    
    for (const [variant, weight] of Object.entries(rarityWeights)) {
      cumulative += weight
      if (random <= cumulative) {
        return variant as 'standard' | 'premium' | 'rare' | 'legendary'
      }
    }
    return 'standard'
  }, [varietyEnabled, rarityWeights])

  // Generate random position that doesn't overlap with existing coins
  const generatePosition = (existingCoins: GeneratedCoin[]): { x: number, y: number } => {
    let attempts = 0
    let position: { x: number, y: number }
    
    do {
      position = {
        x: Math.random() * 80 + 10, // 10% to 90% of container width
        y: Math.random() * 80 + 10  // 10% to 90% of container height
      }
      attempts++
    } while (
      attempts < 10 && 
      existingCoins.some(coin => 
        Math.abs(coin.position.x - position.x) < 15 && 
        Math.abs(coin.position.y - position.y) < 15
      )
    )
    
    return position
  }

  // Generate collection effect based on coin variant
  const getCollectionEffect = (variant: string): 'disappear' | 'shrink' | 'explode' | 'float' => {
    switch (variant) {
      case 'legendary': return 'explode'
      case 'rare': return 'float'
      case 'premium': return 'shrink'
      default: return 'disappear'
    }
  }

  // Generate sound context based on coin variant
  const getSoundContext = (variant: string): 'collection' | 'reward' | 'transaction' => {
    switch (variant) {
      case 'legendary': return 'reward'
      case 'rare': return 'reward'
      case 'premium': return 'transaction'
      default: return 'collection'
    }
  }

  // Generate coin size based on variant
  const getCoinSize = (variant: string): 'small' | 'medium' | 'large' => {
    switch (variant) {
      case 'legendary': return 'large'
      case 'rare': return 'medium'
      case 'premium': return 'medium'
      default: return 'small'
    }
  }

  // Spawn new coin with safety checks
  const spawnCoin = useCallback(() => {
    const currentTime = Date.now()
    
    // Safety checks to prevent browser crashes
    if (coins.length >= ABSOLUTE_MAX_COINS) {
      console.warn('🚨 Absolute max coins reached, preventing spawn to avoid browser crash')
      setMaxCoinsReached(true)
      return
    }
    
    if (coins.length >= maxCoins) {
      return
    }
    
    // Rate limiting to prevent too frequent spawning
    if (currentTime - lastSpawnTime < MIN_SPAWN_INTERVAL) {
      return
    }
    
    const variant = generateCoinVariant()
    
    // Determine if this is a correct coin (80% chance) or bomb coin (20% chance)
    const isCorrectCoin = Math.random() > 0.2
    const symbol = isCorrectCoin ? 'Ω' : BOMB_SYMBOLS[Math.floor(Math.random() * BOMB_SYMBOLS.length)]
    
    const newCoin: GeneratedCoin = {
      id: `coin-${Date.now()}-${Math.random()}`,
      variant,
      size: getCoinSize(variant),
      position: generatePosition(coins),
      soundContext: getSoundContext(variant),
      collectionEffect: getCollectionEffect(variant),
      isCollected: false,
      isCorrect: isCorrectCoin,
      symbol: symbol,
      spawnTime: currentTime
    }
    
    setCoins(prev => [...prev, newCoin])
    setLastSpawnTime(currentTime)
    setMaxCoinsReached(false)
    
    // Play spawn sound for rare+ coins
    if (variant === 'rare' || variant === 'legendary') {
      soundManager.playContextSound('reward', 'unlock')
    }
  }, [coins, maxCoins, lastSpawnTime, generateCoinVariant, soundManager, ABSOLUTE_MAX_COINS, MIN_SPAWN_INTERVAL, BOMB_SYMBOLS])

  // Handle coin collection with enhanced scoring system
  const handleCoinCollect = async (coinId: string) => {
    handleGameInteraction() // Trigger mobile focus
    
    const coin = coins.find(c => c.id === coinId)
    if (!coin || coin.isCollected) return
    
    // Mark coin as collected
    setCoins(prev => 
      prev.map(c => 
        c.id === coinId ? { ...c, isCollected: true } : c
      )
    )
    
    // Score calculation based on coin type
    if (coin.isCorrect) {
      // Correct Omega coin - add points
      setScore(prev => prev + SCORE_CORRECT)
      setTotalCollected(prev => prev + 1)
      setCollectionStreak(prev => prev + 1)
      
      // Play collection sound based on variant
      await soundManager.playContextSound(coin.soundContext, 'collect')
      
      // Bonus effects for rare coins with safety limits
      if (coin.variant === 'legendary' && coins.length < maxCoins - MAX_BONUS_COINS) {
        await soundManager.playContextSound('reward', 'earned')
        
        // Spawn limited bonus coins for legendary collection
        setTimeout(() => {
          for (let i = 0; i < MAX_BONUS_COINS; i++) {
            setTimeout(() => {
              // Double-check we're still under limits before spawning
              if (coins.length < ABSOLUTE_MAX_COINS - 1) {
                spawnCoin()
              }
            }, i * 400) // Increased delay between bonus spawns
          }
        }, 1200) // Increased initial delay
      } else if (coin.variant === 'rare' && coins.length < maxCoins - 1) {
        // Increase spawn rate temporarily with safety check
        setTimeout(() => {
          if (coins.length < ABSOLUTE_MAX_COINS - 1) {
            spawnCoin()
          }
        }, 800) // Increased delay
      }
    } else {
      // Bomb coin - apply penalty and explosion effect
      setScore(prev => Math.max(0, prev + SCORE_PENALTY)) // Prevent negative scores
      setCollectionStreak(0) // Reset streak on bomb click
      
      // Play explosion sound
      await soundManager.playContextSound('warning', 'alert')
      
      // Create explosion visual effect (could be enhanced with particles)
      // For now, just play a different collection effect
    }
    
    // Remove coin after collection animation
    setTimeout(() => {
      setCoins(prev => prev.filter(c => c.id !== coinId))
    }, 1200) // Slightly increased cleanup time
  }

  // Auto-spawn coins at intervals
  useEffect(() => {
    if (!collectibleMode || !gameStarted) return
    
    const interval = setInterval(() => {
      spawnCoin()
    }, spawnRate)
    
    return () => clearInterval(interval)
  }, [spawnCoin, spawnRate, collectibleMode, gameStarted])

  // Initial coin spawn
  useEffect(() => {
    if (collectibleMode && gameStarted && coins.length === 0) {
      // Spawn initial coins
      for (let i = 0; i < Math.min(3, maxCoins); i++) {
        setTimeout(() => spawnCoin(), i * 500)
      }
    }
  }, [collectibleMode, gameStarted, coins.length, maxCoins, spawnCoin])

  return (
    <div 
      ref={gameContainerRef}
      className={`relative w-full h-full ${className} bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden ${
        isMobile && isGameFocused ? 
          'fixed inset-0 z-[9999] !h-screen !w-screen !rounded-none !border-none bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 
          ''
      }`}
      onClick={handleGameInteraction}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Collection Stats Panel with Score */}
      {collectibleMode && (
        <motion.div 
          className={`absolute top-4 right-4 z-50 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-xl px-6 py-4 text-white border border-slate-600/50 shadow-2xl ${isMobile ? 'scale-90' : ''}`}
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: isMobile ? 0.9 : 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: isMobile ? 0.95 : 1.05, y: -2 }}
        >
          {/* Score Display */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">🎯</span>
              </div>
              <div>
                <div className="text-lg font-bold text-green-300 font-orbitron">{score}</div>
                <div className="text-xs text-green-400/80 font-semibold">Score</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">Ω</span>
            </div>
            <div>
              <div className="text-lg font-bold text-amber-300 font-orbitron">{totalCollected}</div>
              <div className="text-xs text-amber-400/80 font-semibold">Collected</div>
            </div>
          </div>
          
          {collectionStreak > 1 && (
            <motion.div 
              className="mt-2 pt-2 border-t border-slate-600/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-orange-300">
                  🔥 {collectionStreak} Streak
                </span>
              </div>
            </motion.div>
          )}
          
          {maxCoinsReached && (
            <motion.div 
              className="mt-2 pt-2 border-t border-red-600/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs text-red-400 font-semibold">
                ⚠️ Max coins reached
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Game Instructions Panel - Enhanced for mobile */}
      {collectibleMode && (totalCollected === 0 || (isMobile && !isGameFocused)) && (
        <motion.div 
          className={`absolute top-4 left-4 z-40 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-900/90 backdrop-blur-xl rounded-xl px-6 py-4 text-white border border-blue-600/50 shadow-2xl ${isMobile ? 'max-w-72' : 'max-w-64'}`}
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -20 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <span className="text-white font-bold text-xl">🎮</span>
            </div>
            <h4 className="text-sm font-bold text-blue-300 mb-2 font-orbitron">
              {isMobile ? 'Mobile Omega Game' : 'Interactive Demo'}
            </h4>
            <p className="text-xs text-blue-200/90 leading-relaxed mb-2">
              {isMobile ? 
                'Tap to enter focus mode! Collect Ω coins (+1), avoid other symbols (-10). Coins disappear in 5 seconds!' :
                'Click Ω coins to collect them (+1 point)! Avoid other symbols (-10 points). Legendary coins give bonus spawns.'
              }
            </p>
            {isMobile && !isGameFocused && (
              <div className="text-xs text-cyan-300 font-bold animate-pulse">
                📱 Tap anywhere to start!
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Generated Coins with Enhanced Animations */}
      <AnimatePresence>
        {coins.map((coin) => (
          <motion.div
            key={coin.id}
            className="absolute pointer-events-auto"
            style={{
              left: `${coin.position.x}%`,
              top: `${coin.position.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: coin.variant === 'legendary' ? 30 : coin.variant === 'rare' ? 25 : 20
            }}
            initial={{ 
              opacity: 0, 
              scale: 0, 
              rotate: -180,
              y: -50 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: coin.collectionEffect === 'explode' ? 1.5 : 0,
              rotate: coin.collectionEffect === 'explode' ? 360 : 180,
              y: coin.collectionEffect === 'float' ? -100 : 0
            }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
          >
            {/* Coin Glow Effect */}
            <motion.div
              className={`absolute inset-0 rounded-full blur-lg opacity-50 ${
                coin.variant === 'legendary' ? 'bg-gradient-to-r from-amber-400 to-purple-600' :
                coin.variant === 'rare' ? 'bg-purple-500' :
                coin.variant === 'premium' ? 'bg-amber-500' :
                'bg-slate-400'
              }`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <OmegaCoin
              size={coin.size}
              coinVariant={coin.variant}
              collectible={false}
              flipOnClick={true}
              collectionEffect={coin.collectionEffect}
              animated={true}
              showValue={false}
              decorative={true}
              symbol={coin.symbol}
              isCorrect={coin.isCorrect}
              onClick={() => handleCoinCollect(coin.id)}
              className="relative z-10 hover:z-20 transition-all duration-300 cursor-pointer"
            />
            
            {/* Rarity indicators removed for cleaner game experience */}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Enhanced Legendary Coin Alert - Mobile Optimized */}
      <AnimatePresence>
        {coins.some(coin => coin.variant === 'legendary' && !coin.isCollected) && (
          <motion.div
            className={`absolute ${isMobile ? 'top-16 left-1/2 transform -translate-x-1/2' : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} z-50 pointer-events-none`}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.div 
              className={`bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 text-white ${isMobile ? 'px-4 py-2' : 'px-8 py-4'} rounded-2xl shadow-2xl border-2 border-white/20`}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(251, 146, 60, 0.5)',
                  '0 0 40px rgba(251, 146, 60, 0.8)',
                  '0 0 20px rgba(251, 146, 60, 0.5)'
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="text-center">
                <motion.div 
                  className={`${isMobile ? 'text-sm' : 'text-2xl'} font-black font-orbitron mb-1`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  ✨ LEGENDARY ✨
                </motion.div>
                <div className={`${isMobile ? 'text-xs' : 'text-sm'} font-semibold opacity-90`}>
                  {isMobile ? 'Bonus Spawns!' : 'Click for Bonus Spawns!'}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Collection Streak Celebration - Mobile Optimized */}
      <AnimatePresence>
        {collectionStreak > 0 && collectionStreak % 5 === 0 && (
          <motion.div
            className={`absolute ${isMobile ? 'bottom-20 left-1/2 transform -translate-x-1/2' : 'bottom-6 left-1/2 transform -translate-x-1/2'} z-50 pointer-events-none`}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <motion.div 
              className={`bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white ${isMobile ? 'px-4 py-2' : 'px-10 py-6'} rounded-2xl shadow-2xl border-2 border-white/30`}
              animate={{
                rotate: [0, -2, 2, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 0.8, repeat: 3 }}
            >
              <div className="text-center">
                <motion.div 
                  className={`${isMobile ? 'text-lg' : 'text-3xl'} font-black font-orbitron mb-1`}
                  animate={{ 
                    textShadow: [
                      '0 0 5px rgba(255, 255, 255, 0.5)',
                      '0 0 10px rgba(255, 255, 255, 0.8)',
                      '0 0 5px rgba(255, 255, 255, 0.5)'
                    ]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🔥 {collectionStreak} STREAK! 🔥
                </motion.div>
                <div className={`${isMobile ? 'text-sm' : 'text-lg'} font-bold opacity-90`}>
                  {isMobile ? 'Great Collection!' : 'Amazing Collection Spree!'}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coin Spawn Preview Effect */}
      <AnimatePresence>
        {coins.length === 0 && collectibleMode && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-center text-slate-400"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1, 0.95]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-6xl mb-4">Ω</div>
              <div className="text-lg font-semibold font-orbitron">
                Coins spawning...
              </div>
              <div className="text-sm opacity-70 mt-2">
                Get ready to collect!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Start Game Overlay - Hidden by default */}
      <AnimatePresence>
        {collectibleMode && !gameStarted && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-center text-white p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-blue-900/50 border border-blue-600/30 shadow-2xl max-w-sm"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  textShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.5)',
                    '0 0 20px rgba(59, 130, 246, 0.8)', 
                    '0 0 10px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎮
              </motion.div>
              <div className="text-2xl font-bold font-orbitron mb-3 text-blue-300">
                OMEGA CLICKER GAME
              </div>
              <div className="text-sm opacity-80 mb-6 leading-relaxed">
                Collect <span className="text-amber-400 font-bold">Ω coins</span> (+1 point)<br />
                Avoid <span className="text-red-400 font-bold">bomb symbols</span> (-10 points)<br />
                Coins disappear in 5 seconds!
              </div>
              <motion.button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl border border-white/20 shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={startGame}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 START GAME
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}