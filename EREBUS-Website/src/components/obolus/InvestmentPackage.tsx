'use client'

import { memo, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import AnimatedCard from './AnimatedCard'

interface PackageFeature {
  label: string
  value: string
  highlighted?: boolean
}

interface InvestmentPackageProps {
  icon: LucideIcon
  iconColor?: string
  iconBg?: string
  title: string
  description: string | ReactNode
  features: PackageFeature[]
  badge?: string
  badgeColor?: string
  recommended?: boolean
  variant?: 'default' | 'ancient' | 'premium'
  className?: string
  animated?: boolean
  delay?: string
}

const InvestmentPackage = memo(({
  icon: Icon,
  iconColor = 'text-white',
  iconBg = 'from-amber-500 to-amber-600',
  title,
  description,
  features,
  badge,
  badgeColor = 'from-amber-900/40 to-amber-800/30 border-amber-500/30',
  recommended = false,
  variant = 'default',
  className = '',
  animated = true,
  delay = '0s'
}: InvestmentPackageProps) => {
  
  const variantStyles = {
    default: 'border-purple-500/30',
    ancient: 'border-amber-500/40',
    premium: 'border-gradient-to-r from-amber-500 to-purple-500'
  }

  return (
    <div className={`relative ${className}`}>
      {/* Recommended Badge */}
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-amber-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            RECOMMENDED
          </div>
        </div>
      )}

      <AnimatedCard
        variant={variant === 'ancient' ? 'ancient' : 'glass'}
        borderColor={variantStyles[variant]}
        animated={animated}
        delay={delay}
        className="h-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`w-20 h-20 bg-gradient-to-br ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30`}>
            <Icon className={`w-10 h-10 ${iconColor}`} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-r ${badgeColor} rounded-xl p-4 border ${animated ? 'animate-slide-in-left' : ''}`}
              style={{ animationDelay: `${parseFloat(delay) + index * 0.1}s` }}
            >
              <div className="flex justify-between items-center">
                <span className={`${variant === 'ancient' ? 'text-amber-200' : 'text-purple-200'}`}>
                  {feature.label}:
                </span>
                <span className={`font-bold ${feature.highlighted ? 'text-amber-400' : variant === 'ancient' ? 'text-amber-400' : 'text-purple-400'}`}>
                  {feature.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Badge */}
        {badge && (
          <div className={`bg-gradient-to-r ${badgeColor} rounded-xl p-4 border mt-6`}>
            <div className="text-center">
              <div className={`text-2xl font-black mb-1 ${variant === 'ancient' ? 'text-amber-400' : 'text-purple-400'}`}>
                {badge}
              </div>
              <div className={`text-sm ${variant === 'ancient' ? 'text-amber-300' : 'text-purple-300'}`}>
                Investment Type
              </div>
            </div>
          </div>
        )}
      </AnimatedCard>
    </div>
  )
})

InvestmentPackage.displayName = 'InvestmentPackage'

export default InvestmentPackage