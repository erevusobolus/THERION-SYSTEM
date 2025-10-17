// Global type declarations
declare global {
  interface Window {
    gameboy: {
      // Original methods
      playHover: () => void
      playClick: () => void
      playSuccess: () => void
      playError: () => void
      playTransition: () => void
      playModal: () => void
      playSound: (type: string) => void
      context: AudioContext | null
      
      // Extended GameboySFX methods
      playBeep: (frequency: number, duration: number, waveType: string) => Promise<void>
      playModalOpen: () => Promise<void>
      playModalClose: () => Promise<void>
      playNotification: () => Promise<void>
      toggleSound: () => boolean
      setVolume: (volume: number) => void
      isEnabled: boolean
      volume: number
    }
  }
}

export {}