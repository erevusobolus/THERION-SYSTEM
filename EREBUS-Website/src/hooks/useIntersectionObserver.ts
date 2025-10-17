'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Custom hook for methodical animations based on element visibility
 * Elements animate in when they become visible in the viewport
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else if (!triggerOnce && !hasTriggered) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { elementRef, isVisible }
}

/**
 * Hook for staggered animations - children animate in sequence
 */
export function useStaggeredAnimation(
  childCount: number,
  delayBetween: number = 100
) {
  const [visibleChildren, setVisibleChildren] = useState<number[]>([])
  const { elementRef, isVisible } = useIntersectionObserver()

  useEffect(() => {
    if (isVisible && visibleChildren.length === 0) {
      // Animate children in sequence
      for (let i = 0; i < childCount; i++) {
        setTimeout(() => {
          setVisibleChildren(prev => [...prev, i])
        }, i * delayBetween)
      }
    }
  }, [isVisible, childCount, delayBetween, visibleChildren.length])

  return { elementRef, visibleChildren, isVisible }
}