'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * Animated section that appears when visible in viewport
 * Provides methodical animation control
 */
export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  return (
    <motion.section
      ref={elementRef}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.section>
  )
}

interface AnimatedGridProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

/**
 * Animated grid with staggered children animation
 */
export function AnimatedGrid({ children, className = '', staggerDelay = 150 }: AnimatedGridProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  })

  const childrenArray = Array.isArray(children) ? children : [children]

  return (
    <div ref={elementRef} className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0, 
            scale: 1 
          } : { 
            opacity: 0, 
            y: 40, 
            scale: 0.95 
          }}
          transition={{ 
            duration: 0.6,
            delay: isVisible ? (index * staggerDelay) / 1000 : 0,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  hoverEffects?: boolean
}

/**
 * Individual animated card component
 */
export function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0, 
  hoverEffects = true 
}: AnimatedCardProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px'
  })

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0 
      } : { 
        opacity: 0, 
        y: 50, 
        rotateX: -15 
      }}
      transition={{ 
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={hoverEffects ? { 
        scale: 1.05, 
        y: -8,
        rotateY: 5,
        transition: { duration: 0.3 }
      } : undefined}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}