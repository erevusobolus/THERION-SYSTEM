'use client'

import { memo, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import AnimatedCard from './AnimatedCard'

interface FeatureItem {
  icon: LucideIcon
  iconColor?: string
  iconBg?: string
  title: string
  description: string | ReactNode
  badge?: string
  badgeColor?: string
  delay?: string
}

interface FeatureGridProps {
  features: FeatureItem[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'glass' | 'gradient' | 'ancient' | 'gaming'
  className?: string
  animated?: boolean
}

const FeatureGrid = memo(({
  features,
  columns = 3,
  variant = 'default',
  className = '',
  animated = true
}: FeatureGridProps) => {
  
  const gridClasses = {
    2: 'grid md:grid-cols-2 gap-8',
    3: 'grid lg:grid-cols-3 gap-8',
    4: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8'
  }

  return (
    <div className={`${gridClasses[columns]} ${className}`}>
      {features.map((feature, index) => (
        <AnimatedCard
          key={index}
          variant={variant}
          icon={feature.icon}
          iconColor={feature.iconColor}
          iconBg={feature.iconBg}
          title={feature.title}
          description={feature.description}
          animated={animated}
          delay={`${index * 0.1}s`}
        >
          {/* Custom Badge */}
          {feature.badge && (
            <div className={`bg-gradient-to-r ${feature.badgeColor || 'from-purple-900/40 to-purple-800/30'} rounded-xl p-4 border border-purple-500/20 mt-4`}>
              <div className="text-center">
                <div className="text-2xl font-black text-purple-400 mb-1">{feature.badge}</div>
                <div className="text-purple-300 text-sm">Featured</div>
              </div>
            </div>
          )}
        </AnimatedCard>
      ))}
    </div>
  )
})

FeatureGrid.displayName = 'FeatureGrid'

export default FeatureGrid