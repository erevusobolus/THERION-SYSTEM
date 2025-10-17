// GAMEBOY ADVANCE SINEWAVE SFX SYSTEM
// Professional web-based audio synthesis for retro gaming sounds

class GameboySFX {
  constructor() {
    this.audioContext = null
    this.isEnabled = true
    this.volume = 0.3
    this.init()
  }

  init() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    } catch (error) {
      console.warn('Web Audio API not supported:', error)
      this.isEnabled = false
    }
  }

  // Ensure audio context is running (user interaction required)
  async ensureAudioContext() {
    if (!this.audioContext || !this.isEnabled) return false
    
    if (this.audioContext.state === 'suspended') {
      try {
        await this.audioContext.resume()
      } catch (error) {
        console.warn('Could not resume audio context:', error)
        return false
      }
    }
    return true
  }

  // Generate classic GameBoy-style beep
  async playBeep(frequency = 800, duration = 100, waveType = 'square') {
    if (!(await this.ensureAudioContext())) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)
    
    oscillator.type = waveType
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime)
    
    // Classic GameBoy envelope (quick attack, exponential decay)
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.01)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000)
    
    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + duration / 1000)
  }

  // Button hover sound (high frequency beep)
  async playHover() {
    await this.playBeep(1200, 50, 'square')
  }

  // Button click sound (confirming beep)
  async playClick() {
    await this.playBeep(800, 100, 'square')
    setTimeout(() => this.playBeep(1000, 50, 'square'), 60)
  }

  // Success sound (ascending notes)
  async playSuccess() {
    await this.playBeep(600, 100, 'square')
    setTimeout(() => this.playBeep(800, 100, 'square'), 120)
    setTimeout(() => this.playBeep(1000, 150, 'square'), 250)
  }

  // Error sound (descending buzz)
  async playError() {
    await this.playBeep(400, 200, 'sawtooth')
    setTimeout(() => this.playBeep(300, 200, 'sawtooth'), 100)
  }

  // Page transition sound (sweep)
  async playTransition() {
    if (!(await this.ensureAudioContext())) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)
    
    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.3)
    
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(this.volume * 0.7, this.audioContext.currentTime + 0.05)
    gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.3)
    
    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.3)
  }

  // Modal open sound (rising tone)
  async playModalOpen() {
    await this.playBeep(400, 80, 'sine')
    setTimeout(() => this.playBeep(600, 80, 'sine'), 50)
  }

  // Modal close sound (falling tone)
  async playModalClose() {
    await this.playBeep(600, 80, 'sine')
    setTimeout(() => this.playBeep(400, 80, 'sine'), 50)
  }

  // Notification sound (classic alert)
  async playNotification() {
    await this.playBeep(1000, 100, 'square')
    setTimeout(() => this.playBeep(800, 100, 'square'), 150)
    setTimeout(() => this.playBeep(1000, 100, 'square'), 300)
  }

  // Toggle sound system on/off
  toggleSound() {
    this.isEnabled = !this.isEnabled
    if (this.isEnabled) {
      this.playBeep(800, 100, 'square')
    }
    return this.isEnabled
  }

  // Set volume (0.0 to 1.0)
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume))
  }
}

// Global instance
window.gameboy = new GameboySFX()

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameboySFX
}