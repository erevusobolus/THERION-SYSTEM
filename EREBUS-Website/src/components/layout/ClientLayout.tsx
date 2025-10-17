'use client'

import { useGlobalAudio } from '@/hooks/useGlobalAudio'
import { NavigationProvider } from '@/contexts/NavigationContext'
import PageTransition from '@/components/ui/PageTransition'

interface ClientLayoutProps {
  children: React.ReactNode
}

/**
 * Client-side layout wrapper for global features
 * Handles audio initialization, navigation context, and page transitions
 */
export default function ClientLayout({ children }: ClientLayoutProps) {
  // Initialize global audio system
  useGlobalAudio()

  return (
    <NavigationProvider>
      <PageTransition>
        {children}
      </PageTransition>
    </NavigationProvider>
  )
}