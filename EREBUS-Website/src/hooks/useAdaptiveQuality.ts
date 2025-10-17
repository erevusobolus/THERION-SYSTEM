'use client'

import { useState, useEffect, useCallback } from 'react'

interface QualitySettings {
  // Animation settings
  reducedMotion: boolean
  animationDuration: number
  maxSimultaneousAnimations: number
  
  // Visual settings
  particleCount: number
  gradientAnimations: boolean
  complexBackgrounds: boolean
  shadows: boolean
  blurEffects: boolean
  
  // Performance settings
  frameRateTarget: number
  lazyLoadDistance: number
  prefersHighPerformance: boolean
}

interface DeviceCapabilities {
  isMobile: boolean
  isLowEndDevice: boolean
  connection: string
  cores: number
  memory: number
  pixelRatio: number
  viewportWidth: number
  viewportHeight: number
}

interface AnimationProps {
  initial?: Record<string, unknown>
  animate?: Record<string, unknown>
  transition?: Record<string, unknown>
  [key: string]: unknown
}

interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string
  }
  deviceMemory?: number
}

const DEFAULT_HIGH_QUALITY: QualitySettings = {
  reducedMotion: false,
  animationDuration: 1,
  maxSimultaneousAnimations: 20,
  particleCount: 100,
  gradientAnimations: true,
  complexBackgrounds: true,
  shadows: true,
  blurEffects: true,
  frameRateTarget: 60,
  lazyLoadDistance: 2000,
  prefersHighPerformance: false
}

const MOBILE_OPTIMIZED: QualitySettings = {
  reducedMotion: false,
  animationDuration: 0.6,
  maxSimultaneousAnimations: 8,
  particleCount: 30,
  gradientAnimations: true,
  complexBackgrounds: false,
  shadows: false,
  blurEffects: false,
  frameRateTarget: 60,
  lazyLoadDistance: 1000,
  prefersHighPerformance: true
}

const LOW_END_DEVICE: QualitySettings = {
  reducedMotion: true,
  animationDuration: 0.3,
  maxSimultaneousAnimations: 4,
  particleCount: 10,
  gradientAnimations: false,
  complexBackgrounds: false,
  shadows: false,
  blurEffects: false,
  frameRateTarget: 30,
  lazyLoadDistance: 500,
  prefersHighPerformance: true
}

export function useAdaptiveQuality() {
  const [qualitySettings, setQualitySettings] = useState<QualitySettings>(DEFAULT_HIGH_QUALITY)
  const [deviceCapabilities, setDeviceCapabilities] = useState<DeviceCapabilities | null>(null)
  const [frameRate, setFrameRate] = useState<number>(60)
  const [isOptimizing, setIsOptimizing] = useState(false)

  // Detect device capabilities
  const detectDeviceCapabilities = useCallback((): DeviceCapabilities => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
    const nav = navigator as NavigatorWithConnection
    const connection = nav?.connection?.effectiveType || 'unknown'
    const cores = navigator.hardwareConcurrency || 4
    const memory = nav?.deviceMemory || 4
    const pixelRatio = window.devicePixelRatio || 1
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    const isLowEndDevice = (
      memory < 4 || 
      cores < 4 || 
      connection === 'slow-2g' || 
      connection === '2g' ||
      (isMobile && pixelRatio > 2) ||
      viewportWidth < 375
    )

    return {
      isMobile,
      isLowEndDevice,
      connection,
      cores,
      memory,
      pixelRatio,
      viewportWidth,
      viewportHeight
    }
  }, [])

  // Optimize quality settings based on performance
  const optimizeForPerformance = useCallback(() => {
    if (!deviceCapabilities) return

    let newSettings: QualitySettings

    if (frameRate < 20 || deviceCapabilities.isLowEndDevice) {
      newSettings = { ...LOW_END_DEVICE }
    } else if (deviceCapabilities.isMobile || frameRate < 40) {
      newSettings = { ...MOBILE_OPTIMIZED }
    } else {
      newSettings = { ...DEFAULT_HIGH_QUALITY }
    }

    // Additional mobile-specific optimizations
    if (deviceCapabilities.isMobile) {
      newSettings.animationDuration *= 0.7
      newSettings.maxSimultaneousAnimations = Math.min(newSettings.maxSimultaneousAnimations, 6)
      
      // Reduce effects based on screen size
      if (deviceCapabilities.viewportWidth < 400) {
        newSettings.particleCount = Math.min(newSettings.particleCount, 15)
        newSettings.complexBackgrounds = false
        newSettings.blurEffects = false
      }
    }

    setQualitySettings(newSettings)
  }, [deviceCapabilities, frameRate])

  // Monitor frame rate
  const monitorFrameRate = useCallback(() => {
    let frames = 0
    let lastTime = performance.now()
    
    const measureFPS = () => {
      frames++
      const currentTime = performance.now()
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime))
        setFrameRate(fps)
        
        // Auto-adjust quality based on performance
        if (fps < 30 && !isOptimizing) {
          setIsOptimizing(true)
          optimizeForPerformance()
        } else if (fps > 55 && qualitySettings.prefersHighPerformance) {
          setIsOptimizing(false)
        }
        
        frames = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(measureFPS)
    }
    
    requestAnimationFrame(measureFPS)
  }, [qualitySettings.prefersHighPerformance, isOptimizing, optimizeForPerformance])

  // Initialize and monitor
  useEffect(() => {
    const capabilities = detectDeviceCapabilities()
    setDeviceCapabilities(capabilities)
    
    // Set initial quality based on device
    if (capabilities.isLowEndDevice) {
      setQualitySettings(LOW_END_DEVICE)
    } else if (capabilities.isMobile) {
      setQualitySettings(MOBILE_OPTIMIZED)
    } else {
      setQualitySettings(DEFAULT_HIGH_QUALITY)
    }

    // Start monitoring frame rate
    const timer = setTimeout(() => {
      monitorFrameRate()
    }, 2000) // Wait 2s for page to settle

    return () => clearTimeout(timer)
  }, [detectDeviceCapabilities, monitorFrameRate])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newCapabilities = detectDeviceCapabilities()
      setDeviceCapabilities(newCapabilities)
      optimizeForPerformance()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [detectDeviceCapabilities, optimizeForPerformance])

  // Get CSS classes based on quality settings
  const getOptimizedClasses = useCallback((baseClasses: string, mobileClasses?: string, lowEndClasses?: string) => {
    if (!deviceCapabilities) return baseClasses
    
    if (deviceCapabilities.isLowEndDevice && lowEndClasses) {
      return lowEndClasses
    }
    
    if (deviceCapabilities.isMobile && mobileClasses) {
      return mobileClasses
    }
    
    return baseClasses
  }, [deviceCapabilities])

  // Get animation props based on quality
  const getAnimationProps = useCallback((baseProps: AnimationProps) => {
    if (qualitySettings.reducedMotion) {
      return {
        ...baseProps,
        animate: baseProps.initial,
        transition: { duration: 0 }
      }
    }

    const baseDuration = typeof baseProps.transition?.duration === 'number' ? baseProps.transition.duration : 1

    return {
      ...baseProps,
      transition: {
        ...baseProps.transition,
        duration: baseDuration * qualitySettings.animationDuration
      }
    }
  }, [qualitySettings])

  return {
    qualitySettings,
    deviceCapabilities,
    frameRate,
    isOptimizing,
    getOptimizedClasses,
    getAnimationProps,
    optimizeForPerformance
  }
}