'use client'

import { memo } from 'react'

interface BackgroundPattern {
  backgroundImage: string
  backgroundSize: string
}

interface OwlConfig {
  size: string
  position: string
  colors: string
  delay: string
}

interface BackgroundConfig {
  patterns: BackgroundPattern
  coins?: BackgroundPattern
  owls?: OwlConfig[]
  columns?: BackgroundPattern
}

interface AnimatedBackgroundProps {
  variant?: 'ancient-greek' | 'treasury' | 'gaming' | 'hardware' | 'tokenomics'
  className?: string
}

const AnimatedBackground = memo(({ variant = 'ancient-greek', className = '' }: AnimatedBackgroundProps) => {
  const backgroundVariants: Record<string, BackgroundConfig> = {
    'ancient-greek': {
      patterns: {
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(147,51,234,0.6) 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, rgba(168,85,247,0.4) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(139,69,19,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '120px 120px, 80px 80px, 60px 60px'
      },
      coins: {
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(251,191,36,0.8) 12px, transparent 12px),
          radial-gradient(circle at 80% 20%, rgba(168,85,247,0.6) 8px, transparent 8px),
          radial-gradient(circle at 60% 60%, rgba(251,191,36,0.4) 6px, transparent 6px)
        `,
        backgroundSize: '200px 200px, 150px 150px, 100px 100px'
      },
      owls: [
        { size: 'w-32 h-32', position: 'top-20 left-10', colors: 'from-amber-400/40 to-amber-600/40', delay: '0s' },
        { size: 'w-24 h-24', position: 'top-40 right-20', colors: 'from-purple-400/40 to-purple-600/40', delay: '3s' }
      ]
    },
    'treasury': {
      patterns: {
        backgroundImage: `
          radial-gradient(circle at 30% 40%, rgba(251,191,36,0.4) 2px, transparent 2px),
          radial-gradient(circle at 70% 60%, rgba(147,51,234,0.3) 1px, transparent 1px),
          radial-gradient(circle at 50% 20%, rgba(139,69,19,0.2) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 80px 80px, 60px 60px'
      },
      coins: {
        backgroundImage: `
          radial-gradient(circle at 25% 75%, rgba(251,191,36,0.6) 10px, transparent 10px),
          radial-gradient(circle at 75% 25%, rgba(168,85,247,0.4) 6px, transparent 6px)
        `,
        backgroundSize: '180px 180px, 120px 120px'
      }
    },
    'gaming': {
      patterns: {
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(255,193,7,0.3) 2px, transparent 2px),
          radial-gradient(circle at 80% 70%, rgba(147,51,234,0.4) 2px, transparent 2px),
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 120px 120px, 60px 60px'
      },
      columns: {
        backgroundImage: `
          linear-gradient(90deg, rgba(255,193,7,0.1) 1px, transparent 1px),
          linear-gradient(0deg, rgba(255,193,7,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '150px 150px, 80px 80px'
      }
    },
    'hardware': {
      patterns: {
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(34,197,94,0.4) 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, rgba(59,130,246,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 70px 70px'
      }
    },
    'tokenomics': {
      patterns: {
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(239,68,68,0.4) 1px, transparent 1px),
          radial-gradient(circle at 80% 70%, rgba(245,158,11,0.4) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px, 120px 120px'
      }
    }
  }

  const config = backgroundVariants[variant]

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Main Pattern Layer */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0" 
          style={{
            ...config.patterns,
            animation: 'float 25s ease-in-out infinite'
          }}
        />
      </div>

      {/* Column Patterns (for gaming variant) */}
      {config.columns && (
        <div className="absolute inset-0 opacity-15">
          <div 
            className="absolute inset-0" 
            style={config.columns}
          />
        </div>
      )}

      {/* Floating Owl Shadows (for ancient-greek variant) */}
      {config.owls?.map((owl, index) => (
        <div key={index} className={`absolute ${owl.position} ${owl.size} opacity-10`}>
          <div 
            className={`w-full h-full rounded-full bg-gradient-to-br ${owl.colors} animate-pulse`} 
            style={{ animationDelay: owl.delay }}
          />
        </div>
      ))}

      {/* Ancient Coins Pattern */}
      {config.coins && (
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              ...config.coins,
              animation: 'float 30s ease-in-out infinite reverse'
            }}
          />
        </div>
      )}

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/20 via-purple-400/15 to-transparent rounded-full blur-3xl animate-pulse opacity-60" />
      <div 
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/20 via-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse opacity-50" 
        style={{ animationDelay: '3s' }}
      />
    </div>
  )
})

AnimatedBackground.displayName = 'AnimatedBackground'

export default AnimatedBackground