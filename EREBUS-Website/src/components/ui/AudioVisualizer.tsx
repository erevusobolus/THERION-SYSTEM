'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AudioVisualizerProps {
  isPlaying?: boolean
  className?: string
  variant?: 'dots' | 'bars' | 'wave'
  size?: 'small' | 'medium' | 'large'
}

export default function AudioVisualizer({ 
  isPlaying = false, 
  className = '',
  variant = 'dots',
  size = 'medium'
}: AudioVisualizerProps) {
  const [bars, setBars] = useState<number[]>([])

  // Create animated bars/dots when playing
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setBars(Array.from({ length: variant === 'dots' ? 3 : 5 }, () => Math.random()))
      }, 150)
      return () => clearInterval(interval)
    } else {
      setBars([])
    }
  }, [isPlaying, variant])

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6', 
    large: 'w-8 h-8'
  }

  const barSize = {
    small: { width: 2, maxHeight: 12 },
    medium: { width: 3, maxHeight: 18 },
    large: { width: 4, maxHeight: 24 }
  }

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            className="flex items-center space-x-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {variant === 'dots' ? (
              // Animated dots
              bars.map((intensity, index) => (
                <motion.div
                  key={index}
                  className="rounded-full bg-gradient-to-t from-amber-600 to-amber-400"
                  style={{ 
                    width: Math.max(barSize[size].width, barSize[size].width * 0.7),
                    height: Math.max(barSize[size].width, barSize[size].width * 0.7)
                  }}
                  animate={{
                    scale: [1, 1 + intensity * 0.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                />
              ))
            ) : variant === 'bars' ? (
              // Animated bars
              bars.map((intensity, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-amber-600 to-amber-400 rounded-sm"
                  style={{ 
                    width: barSize[size].width,
                    height: Math.max(4, intensity * barSize[size].maxHeight)
                  }}
                  animate={{
                    height: [
                      Math.max(4, intensity * barSize[size].maxHeight),
                      Math.max(4, Math.random() * barSize[size].maxHeight),
                      Math.max(4, intensity * barSize[size].maxHeight)
                    ]
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))
            ) : (
              // Wave pattern
              <motion.div 
                className="flex items-center space-x-1"
                animate={{ 
                  scaleX: [1, 1.1, 1],
                  scaleY: [1, 0.9, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-1 h-3 bg-gradient-to-t from-amber-600 to-amber-400 rounded-full"
                    animate={{
                      height: [12, 18, 12],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}