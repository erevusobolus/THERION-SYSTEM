'use client'

import React, { createContext, useContext, useState, useCallback, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { howlerProAudio } from '@/utils/howler-pro-audio'

interface NavigationContextType {
  isNavigating: boolean
  isUnloading: boolean
  navigationProgress: number
  navigate: (href: string) => void
  currentPath: string
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

interface NavigationProviderProps {
  children: React.ReactNode
}

/**
 * Navigation Context Provider
 * Manages global navigation state and animated transitions
 */
export function NavigationProvider({ children }: NavigationProviderProps) {
  const [isNavigating, setIsNavigating] = useState(false)
  const [isUnloading, setIsUnloading] = useState(false)
  const [navigationProgress, setNavigationProgress] = useState(0)
  const router = useRouter()
  const pathname = usePathname()
  const navigationTimeoutRef = useRef<NodeJS.Timeout>()
  const progressIntervalRef = useRef<NodeJS.Timeout>()

  const performNavigation = useCallback((href: string) => {
    setIsNavigating(true)
    setIsUnloading(false)
    setNavigationProgress(0)
    howlerProAudio.playCoinFlip() // Navigation start sound

    // Animated progress simulation
    progressIntervalRef.current = setInterval(() => {
      setNavigationProgress(prev => {
        if (prev >= 85) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
          return 85
        }
        return prev + Math.random() * 8 + 2
      })
    }, 120)

    // Realistic loading time with completion
    navigationTimeoutRef.current = setTimeout(() => {
      setNavigationProgress(100)
      howlerProAudio.playCoinCollect() // Navigation complete sound
      
      setTimeout(() => {
        router.push(href)
        // Reset state after navigation
        setTimeout(() => {
          setIsNavigating(false)
          setIsUnloading(false)
          setNavigationProgress(0)
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
        }, 100)
      }, 300)
    }, 1000)
  }, [router])

  const navigate = useCallback((href: string) => {
    // Prevent navigation to same page
    if (href === pathname) return

    // If already navigating, trigger animated unloading first
    if (isNavigating) {
      setIsUnloading(true)
      howlerProAudio.playCoinHover() // Navigation interruption sound
      
      // Clear existing timers
      if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
      
      // Wait for unload animation, then proceed
      setTimeout(() => {
        performNavigation(href)
      }, 600)
    } else {
      performNavigation(href)
    }
  }, [pathname, isNavigating, performNavigation])

  const contextValue: NavigationContextType = {
    isNavigating,
    isUnloading,
    navigationProgress,
    navigate,
    currentPath: pathname
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  )
}

/**
 * Custom hook to use navigation context
 */
export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}

/**
 * Enhanced Link Component with Animated Navigation
 */
interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function AnimatedLink({ href, children, className, onClick }: AnimatedLinkProps) {
  const { navigate } = useNavigation()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.()
    navigate(href)
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}