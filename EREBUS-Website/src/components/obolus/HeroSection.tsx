'use client'

import { memo, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import AnimatedBackground from './AnimatedBackground'

interface CTAButton {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
  icon?: LucideIcon
}

interface HeroSectionProps {
  badge?: string
  badgeIcon?: LucideIcon
  title: ReactNode
  subtitle?: ReactNode
  description: ReactNode
  ctaButtons?: CTAButton[]
  backgroundVariant?: 'ancient-greek' | 'treasury' | 'gaming' | 'hardware' | 'tokenomics'
  className?: string
  animated?: boolean
}

const HeroSection = memo(({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  description,
  ctaButtons = [],
  backgroundVariant = 'ancient-greek',
  className = '',
  animated = true
}: HeroSectionProps) => {
  return (
    <section className={`relative min-h-screen pt-20 pb-32 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-800 overflow-hidden flex items-center ${className}`}>
      {/* Animated Background */}
      <AnimatedBackground variant={backgroundVariant} />
      
      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="text-center">
          
          {/* Badge */}
          {badge && (
            <div className={`inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/30 to-purple-600/30 border border-amber-500/50 rounded-full px-8 py-4 mb-8 backdrop-blur-lg ${animated ? 'animate-scale-in' : ''}`}>
              {BadgeIcon && <BadgeIcon className="w-6 h-6 text-amber-400" />}
              <span className="text-xl font-bold text-white">{badge}</span>
            </div>
          )}

          {/* Main Title */}
          <h1 className={`text-6xl lg:text-8xl font-black leading-tight mb-8 ${animated ? 'animate-fade-in-up' : ''}`}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2 className={`text-3xl lg:text-4xl font-bold text-amber-400 mb-8 ${animated ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </h2>
          )}

          {/* Description */}
          <div className={`text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12 ${animated ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            {description}
          </div>

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 ${animated ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
              {ctaButtons.map((button, index) => {
                const Icon = button.icon
                const isPrimary = button.variant !== 'secondary'
                
                return (
                  <Link
                    key={index}
                    href={button.href}
                    className={`inline-flex items-center px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 backdrop-blur-lg ${
                      isPrimary
                        ? 'text-white bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 shadow-xl shadow-amber-500/30'
                        : 'text-amber-400 border-2 border-amber-500 hover:bg-amber-500/20'
                    }`}
                  >
                    {Icon && <Icon className="w-6 h-6 mr-3" />}
                    <span>{button.text}</span>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Ancient Coin Animation */}
          <div className={`mt-16 ${animated ? 'animate-bounce-slow' : ''}`} style={{ animationDelay: '1s' }}>
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-4 border-amber-400/30 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 opacity-75 animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-amber-400 font-bold text-lg">OBOL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection