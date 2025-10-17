'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GeometricAvatarProps {
  animal: string
  element: string
  size?: number
  className?: string
}

const GeometricAvatar: React.FC<GeometricAvatarProps> = ({ 
  animal, 
  element, 
  size = 120, 
  className = "" 
}) => {
  
  const getElementColors = (element: string) => {
    switch (element) {
      case 'fire':
        return { primary: '#F97316', secondary: '#DC2626', accent: '#FCD34D' }
      case 'water':
        return { primary: '#0EA5E9', secondary: '#1E40AF', accent: '#7DD3FC' }
      case 'earth':
        return { primary: '#84CC16', secondary: '#166534', accent: '#BEF264' }
      case 'air':
        return { primary: '#8B5CF6', secondary: '#5B21B6', accent: '#C4B5FD' }
      case 'metal':
        return { primary: '#64748B', secondary: '#1E293B', accent: '#CBD5E1' }
      default:
        return { primary: '#6366F1', secondary: '#4338CA', accent: '#A5B4FC' }
    }
  }

  const colors = getElementColors(element)

  const getAnimalPath = (animal: string) => {
    switch (animal) {
      case 'wolf':
        return (
          <>
            {/* Wolf head outline */}
            <path 
              d="M20 40 L40 20 L60 40 L55 60 L25 60 Z" 
              fill={colors.primary} 
              stroke={colors.secondary} 
              strokeWidth="2"
            />
            {/* Ears */}
            <path d="M25 25 L35 15 L30 35 Z" fill={colors.secondary} />
            <path d="M55 25 L45 15 L50 35 Z" fill={colors.secondary} />
            {/* Eyes */}
            <circle cx="35" cy="35" r="3" fill={colors.accent} />
            <circle cx="45" cy="35" r="3" fill={colors.accent} />
            {/* Nose */}
            <path d="M40 45 L37 48 L43 48 Z" fill={colors.secondary} />
          </>
        )
      
      case 'owl':
        return (
          <>
            {/* Owl body */}
            <ellipse cx="40" cy="45" rx="20" ry="25" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            {/* Head */}
            <circle cx="40" cy="30" r="18" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            {/* Eye circles */}
            <circle cx="35" cy="28" r="8" fill={colors.accent} stroke={colors.secondary} strokeWidth="1" />
            <circle cx="45" cy="28" r="8" fill={colors.accent} stroke={colors.secondary} strokeWidth="1" />
            {/* Pupils */}
            <circle cx="35" cy="28" r="4" fill={colors.secondary} />
            <circle cx="45" cy="28" r="4" fill={colors.secondary} />
            {/* Beak */}
            <path d="M40 35 L37 38 L43 38 Z" fill={colors.secondary} />
            {/* Ear tufts */}
            <path d="M25 20 L28 15 L32 22 Z" fill={colors.secondary} />
            <path d="M55 20 L52 15 L48 22 Z" fill={colors.secondary} />
          </>
        )
      
      case 'fox':
        return (
          <>
            {/* Fox head */}
            <ellipse cx="40" cy="40" rx="15" ry="18" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            {/* Pointed ears */}
            <path d="M30 30 L35 15 L40 30 Z" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            <path d="M50 30 L45 15 L40 30 Z" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            {/* Inner ears */}
            <path d="M32 27 L35 20 L38 27 Z" fill={colors.accent} />
            <path d="M48 27 L45 20 L42 27 Z" fill={colors.accent} />
            {/* Eyes */}
            <ellipse cx="35" cy="38" rx="2" ry="3" fill={colors.secondary} />
            <ellipse cx="45" cy="38" rx="2" ry="3" fill={colors.secondary} />
            {/* Snout */}
            <ellipse cx="40" cy="48" rx="8" ry="6" fill={colors.accent} stroke={colors.secondary} strokeWidth="1" />
            {/* Nose */}
            <ellipse cx="40" cy="46" rx="2" ry="1" fill={colors.secondary} />
          </>
        )
      
      case 'deer':
        return (
          <>
            {/* Deer head */}
            <ellipse cx="40" cy="45" rx="12" ry="15" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            {/* Antlers */}
            <path d="M35 25 L30 15 M35 25 L32 18 M35 25 L38 18" stroke={colors.secondary} strokeWidth="2" fill="none" />
            <path d="M45 25 L50 15 M45 25 L48 18 M45 25 L42 18" stroke={colors.secondary} strokeWidth="2" fill="none" />
            {/* Ears */}
            <ellipse cx="32" cy="35" rx="4" ry="8" fill={colors.accent} stroke={colors.secondary} strokeWidth="1" />
            <ellipse cx="48" cy="35" rx="4" ry="8" fill={colors.accent} stroke={colors.secondary} strokeWidth="1" />
            {/* Eyes */}
            <circle cx="37" cy="42" r="2" fill={colors.secondary} />
            <circle cx="43" cy="42" r="2" fill={colors.secondary} />
            {/* Nose */}
            <ellipse cx="40" cy="50" rx="3" ry="2" fill={colors.secondary} />
          </>
        )
      
      case 'bear':
        return (
          <>
            {/* Bear head */}
            <circle cx="40" cy="40" r="18" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            {/* Ears */}
            <circle cx="30" cy="28" r="8" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            <circle cx="50" cy="28" r="8" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            {/* Inner ears */}
            <circle cx="30" cy="28" r="4" fill={colors.accent} />
            <circle cx="50" cy="28" r="4" fill={colors.accent} />
            {/* Eyes */}
            <circle cx="35" cy="38" r="3" fill={colors.secondary} />
            <circle cx="45" cy="38" r="3" fill={colors.secondary} />
            {/* Snout */}
            <ellipse cx="40" cy="48" rx="6" ry="4" fill={colors.accent} stroke={colors.secondary} strokeWidth="1" />
            {/* Nose */}
            <ellipse cx="40" cy="46" rx="2" ry="1" fill={colors.secondary} />
          </>
        )
      
      case 'elephant':
        return (
          <>
            {/* Elephant head */}
            <ellipse cx="40" cy="35" rx="16" ry="12" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
            {/* Ears */}
            <ellipse cx="25" cy="35" rx="8" ry="12" fill={colors.accent} stroke={colors.secondary} strokeWidth="2" />
            <ellipse cx="55" cy="35" rx="8" ry="12" fill={colors.accent} stroke={colors.secondary} strokeWidth="2" />
            {/* Eyes */}
            <circle cx="35" cy="32" r="2" fill={colors.secondary} />
            <circle cx="45" cy="32" r="2" fill={colors.secondary} />
            {/* Trunk */}
            <path 
              d="M40 47 Q38 55 42 60 Q44 55 40 47" 
              fill={colors.primary} 
              stroke={colors.secondary} 
              strokeWidth="2"
            />
          </>
        )
      
      default:
        return (
          <circle cx="40" cy="40" r="20" fill={colors.primary} stroke={colors.secondary} strokeWidth="2" />
        )
    }
  }

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        className="drop-shadow-lg"
      >
        {/* Background circle with element gradient */}
        <defs>
          <radialGradient id={`gradient-${animal}-${element}`} cx="50%" cy="30%">
            <stop offset="0%" stopColor={colors.accent} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0.8" />
          </radialGradient>
        </defs>
        
        <circle 
          cx="40" 
          cy="40" 
          r="38" 
          fill={`url(#gradient-${animal}-${element})`}
          stroke={colors.secondary}
          strokeWidth="2"
        />
        
        {/* Animal shape */}
        <g transform="translate(0, 5)">
          {getAnimalPath(animal)}
        </g>
        
        {/* Element symbol in corner */}
        <g transform="translate(60, 60)">
          {element === 'fire' && (
            <path d="M0 10 Q5 0 10 5 Q8 8 5 10 Q2 8 0 10" fill={colors.accent} />
          )}
          {element === 'water' && (
            <path d="M5 0 Q8 3 10 8 Q5 10 0 8 Q2 3 5 0" fill={colors.accent} />
          )}
          {element === 'earth' && (
            <rect x="2" y="2" width="6" height="6" fill={colors.accent} />
          )}
          {element === 'air' && (
            <path d="M0 5 L10 5 M2 2 L8 2 M2 8 L8 8" stroke={colors.accent} strokeWidth="1" />
          )}
          {element === 'metal' && (
            <polygon points="5,1 9,4 7,9 3,9 1,4" fill={colors.accent} />
          )}
        </g>
      </svg>
    </motion.div>
  )
}

export default GeometricAvatar