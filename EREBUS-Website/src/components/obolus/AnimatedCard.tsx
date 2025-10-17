'use client'

import { memo, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface AnimatedCardProps {
  variant?: 'default' | 'glass' | 'gradient' | 'ancient' | 'gaming'
  icon?: LucideIcon
  iconColor?: string
  iconBg?: string
  title?: string | ReactNode
  description?: string | ReactNode
  children?: ReactNode
  className?: string
  hover3d?: boolean
  glowEffect?: boolean
  borderColor?: string
  animated?: boolean
  delay?: string
}

const AnimatedCard = memo(({
  variant = 'default',
  icon: Icon,
  iconColor = 'text-white',
  iconBg = 'from-purple-500 to-purple-600',
  title,
  description,
  children,
  className = '',
  hover3d = true,
  glowEffect = true,
  borderColor = 'border-purple-500/30 hover:border-purple-400/50',
  animated = true,
  delay = '0s'
}: AnimatedCardProps) => {
  
  const cardVariants = {
    default: 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg',
    glass: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg',
    gradient: 'bg-gradient-to-br from-purple-900/40 to-purple-800/30',
    ancient: 'bg-gradient-to-br from-amber-900/40 to-amber-800/30',
    gaming: 'bg-gradient-to-br from-blue-900/40 to-blue-800/30'
  }

  const baseClasses = `
    relative group rounded-3xl p-8 border transition-all duration-500
    ${cardVariants[variant]}
    ${borderColor}
    ${hover3d ? 'transform hover:scale-105' : ''}
    ${animated ? 'animate-fade-in-up' : ''}
    ${className}
  `

  return (
    <div 
      className={baseClasses}
      style={{ animationDelay: delay }}
    >
      {/* Glow Effect */}
      {glowEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      )}
      
      {/* Card Content */}
      <div className="relative">
        {/* Icon Section */}
        {Icon && (
          <div className={`w-16 h-16 bg-gradient-to-br ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30 ${animated ? 'animate-scale-in' : ''}`}>
            <Icon className={`w-8 h-8 ${iconColor}`} />
          </div>
        )}

        {/* Title */}
        {title && (
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
            {description}
          </p>
        )}

        {/* Custom Children */}
        {children}
      </div>
    </div>
  )
})

AnimatedCard.displayName = 'AnimatedCard'

export default AnimatedCard