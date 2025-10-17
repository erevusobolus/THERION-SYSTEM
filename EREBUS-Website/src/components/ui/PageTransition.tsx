'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useNavigation } from '@/contexts/NavigationContext'

interface PageTransitionProps {
  children: React.ReactNode
}

/**
 * Advanced Page Transition System with Animated Unloading
 * Provides smooth unloading/loading with audio feedback
 * Handles interruptions and animated element cleanup
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const [pageKey, setPageKey] = useState(0)
  const pathname = usePathname()
  const { isNavigating, isUnloading, navigationProgress } = useNavigation()

  // Reset page key when pathname changes
  useEffect(() => {
    setPageKey(prev => prev + 1)
  }, [pathname])

  // Animated element unloading variants
  const unloadingVariants = {
    initial: { opacity: 1, scale: 1, y: 0 },
    unloading: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -40,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  return (
    <>
      {/* Main Page Content with Animated Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pageKey}
          variants={pageVariants}
          initial="initial"
          animate={isUnloading ? "exit" : "animate"}
          exit="exit"
          className="min-h-screen"
        >
          {/* Apply unloading animation to page elements when interrupting */}
          <motion.div
            variants={unloadingVariants}
            animate={isUnloading ? "unloading" : "initial"}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation Loading Overlay */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-950/85 flex flex-col items-center justify-center"
          >
            {/* Animated Loading Spinner */}
            <div className="relative">
              <motion.div
                className="w-20 h-20 border-4 border-amber-500/20 border-t-amber-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 w-12 h-12 border-2 border-amber-300/20 border-t-amber-300 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Dynamic Progress Bar */}
            <div className="mt-8 w-80 h-3 bg-slate-800 rounded-full overflow-hidden shadow-lg">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-blue-500 relative"
                initial={{ width: 0 }}
                animate={{ width: `${navigationProgress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* Loading Status */}
            <motion.div
              className="mt-6 text-center"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-slate-300 font-erevus-body text-lg">
                {isUnloading ? "Unloading current page..." : "Loading next page..."}
              </p>
              <p className="text-slate-400 text-sm mt-1">
                {Math.round(navigationProgress)}% complete
              </p>
            </motion.div>

            {/* Interruption Notice */}
            {isUnloading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-lg"
              >
                <p className="text-amber-300 text-sm font-erevus-body">
                  ⚡ Navigation interrupted - cleaning up animations
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global click handler for navigation */}
      <div
        onClick={(e) => {
          const target = e.target as HTMLElement
          const link = target.closest('a[href]') as HTMLAnchorElement
          
          if (link && link.href && !link.href.startsWith('http')) {
            e.preventDefault()
            const href = new URL(link.href).pathname
            if (href !== pathname) {
              // Navigation will be handled by NavigationContext
              console.log('Navigation intercepted:', href)
            }
          }
        }}
        className="contents"
      />
    </>
  )
}