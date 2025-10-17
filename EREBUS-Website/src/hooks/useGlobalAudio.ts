'use client'

import { useEffect } from 'react'
import { howlerProAudio } from '@/utils/howler-pro-audio'

/**
 * Global Audio Manager Hook
 * Ensures professional Howler.js audio system is loaded and ready on every page
 */
export function useGlobalAudio() {
  useEffect(() => {
    // Initialize audio on every page load
    const initializeAudio = async () => {
      
      // Handle first user interaction for audio context
      const handleFirstInteraction = async () => {
        await howlerProAudio.initialize()
        // Play a subtle initialization sound
        setTimeout(() => {
          howlerProAudio.playCoinCollect()
        }, 100)
      }

      // Set up listeners for first interaction
      const addInteractionListeners = () => {
        const events = ['click', 'touchstart', 'keydown']
        events.forEach(event => {
          document.addEventListener(event, handleFirstInteraction, { once: true })
        })
      }

      addInteractionListeners()

      // Cleanup function
      return () => {
        const events = ['click', 'touchstart', 'keydown']
        events.forEach(event => {
          document.removeEventListener(event, handleFirstInteraction)
        })
      }
    }

    const cleanup = initializeAudio()
    return () => {
      cleanup.then(cleanupFn => cleanupFn?.())
    }
  }, [])
}

/**
 * Page Transition Audio Hook
 * Handles audio feedback for page transitions using Howler.js
 */
export function usePageTransitionAudio() {

  const playNavigationStart = () => {
    howlerProAudio.playCoinHover()
  }

  const playNavigationComplete = () => {
    howlerProAudio.playCoinCollect()
  }

  const playNavigationError = () => {
    howlerProAudio.playCoinHover()
  }

  return {
    playNavigationStart,
    playNavigationComplete,
    playNavigationError
  }
}