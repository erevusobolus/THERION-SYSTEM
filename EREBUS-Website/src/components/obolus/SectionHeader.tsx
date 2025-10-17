'use client'

import { memo, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  icon?: LucideIcon
  iconColor?: string
  badge?: string
  badgeColors?: string
  title: string | ReactNode
  subtitle?: string | ReactNode
  description?: string | ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  animated?: boolean
}

const SectionHeader = memo(({
  icon: Icon,
  iconColor = 'text-purple-400',
  badge,
  badgeColors = 'from-purple-500/30 to-purple-600/20 border-purple-500/40',
  title,
  subtitle,
  description,
  className = 'text-center mb-20',
  titleClassName = 'text-5xl lg:text-7xl font-black text-white leading-tight mb-6',
  subtitleClassName = '',
  descriptionClassName = 'text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed',
  animated = true
}: SectionHeaderProps) => {
  return (
    <div className={`${className} ${animated ? 'animate-fade-in-up' : ''}`}>
      {/* Badge with Icon */}
      {(badge || Icon) && (
        <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${badgeColors} border rounded-full px-8 py-4 mb-8 backdrop-blur-lg ${animated ? 'animate-scale-in' : ''}`}>
          {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
          {badge && <span className="text-xl font-bold text-white">{badge}</span>}
        </div>
      )}
      
      {/* Main Title */}
      <h2 className={titleClassName}>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <h3 className={`${subtitleClassName} mb-6`}>
          {subtitle}
        </h3>
      )}
      
      {/* Description */}
      {description && (
        <p className={descriptionClassName}>
          {description}
        </p>
      )}
    </div>
  )
})

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader