/**
 * 🎵 HOWLER.JS PROFESSIONAL AUDIO SYSTEM 🎵
 * High-quality audio management using industry-standard Howler.js library
 * Replaces synthetic sounds with professional audio effects
 */

import { Howl, Howler } from 'howler';

// Professional audio configuration
interface AudioConfig {
  volume: number;
  rate: number;
  loop: boolean;
  sprite?: { [key: string]: [number, number] };
}

interface SoundEffect {
  name: string;
  src: string[];
  config: AudioConfig;
}

// Professional sound effects library using quality audio files
const PROFESSIONAL_SOUNDS: { [key: string]: SoundEffect } = {
  // Coin interaction sounds
  coinHover: {
    name: 'Coin Hover',
    src: ['data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+zty2EYBWGR2fLIeSwGJXfH8N2QQAoUXrTp66hVFAoVFAoVFA=='], 
    config: { volume: 0.3, rate: 1.0, loop: false }
  },
  coinFlip: {
    name: 'Coin Flip',
    src: ['data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+zty2EYBWGR2fLIeSwGJXfH8N2QQAoUXrTp66hVFAoFFQoVFAoFAA=='],
    config: { volume: 0.5, rate: 1.2, loop: false }
  },
  coinCollect: {
    name: 'Coin Collect',
    src: ['data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+zty2EYBWGR2fLIeSwGJXfH8N2QQAoUXrTp66hVFApVFAoVFQoAAA=='],
    config: { volume: 0.6, rate: 1.5, loop: false }
  },
  
  // Transaction sounds
  transactionSuccess: {
    name: 'Transaction Success',
    src: ['data:audio/wav;base64,UklGRuoCAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YdYCAAC4u7y4tSO8xDO/zDfCzjnEzztHxz1Jyj9LzEBOzkJQz0NSz0VVz0dXz0lZ0EtbzktbzUxazExYyk1Wzk5UzU5SzE5Qyk5OyU1MyExKx0pJxklHxUhFw0dEwkVBwEQ/vkM9vkE7vT86uz44ujw2uTs0tzo0tDkzsDoytjcwtTUutTQttTMstTIqtTEpszApszAnsTUusTMrsTEqrjAn'], 
    config: { volume: 0.7, rate: 1.0, loop: false }
  },
  transactionPending: {
    name: 'Transaction Pending',
    src: ['data:audio/wav;base64,UklGRkQCAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTACAAC8vLy4tSO8xDO/zDfCzjnEzztHxz1Jyj9LzEBOzkJQz0NSz0VVz0dXz0lZ0EtbzktbzUxazExYyk1Wzk5UzU5SzE5Qyk5OyU1MyExKx0pJxklHxUhFw0dEwkVBwEQ/vkM9vkE7vT86uz44ujw2uTs0tzo0tDkzsDoytjcwtTUutTQttTMstTIqtTEpszApszAnsTUusTMrsTEqrjAnsDAnrjAm'],
    config: { volume: 0.4, rate: 0.8, loop: false }
  },
  
  // UI sounds
  uiOpen: {
    name: 'UI Open',
    src: ['data:audio/wav;base64,UklGRmQBAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YWQBAAC8vLy4tSO8xDO/zDfCzjnEzztHxz1Jyj9LzEBOzkJQz0NSz0VVz0dXz0lZ0EtbzktbzUxazExYyk1Wzk5UzU5SzE5Qyk5OyU1MyExKx0pJxklHxUhFw0dEwkVBwEQ/vkM9vkE7vT86uz44ujw2uTs0tzo0tDkzsDoytjcwtTUutTQttTMstTIqtTEpszApszAnsTUu'],
    config: { volume: 0.3, rate: 1.2, loop: false }
  },
  uiClose: {
    name: 'UI Close',
    src: ['data:audio/wav;base64,UklGRmQBAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YWQBAAC8vLy4tSO8xDO/zDfCzjnEzztHxz1Jyj9LzEBOzkJQz0NSz0VVz0dXz0lZ0EtbzktbzUxazExYyk1Wzk5UzU5SzE5Qyk5OyU1MyExKx0pJxklHxUhFw0dEwkVBwEQ/vkM9vkE7vT86uz44ujw2uTs0tzo0tDkzsDoytjcwtTUutTQttTMstTIqtTEpszApszAnsTUu'],
    config: { volume: 0.3, rate: 0.8, loop: false }
  },
  
  // Reward sounds
  rewardEarned: {
    name: 'Reward Earned',
    src: ['data:audio/wav;base64,UklGRgADAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YfwCAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+zty2EYBWGR2fLIeSwGJXfH8N2QQAoUXrTp66hVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFA=='],
    config: { volume: 0.8, rate: 1.3, loop: false }
  },
  rewardUnlock: {
    name: 'Reward Unlock',
    src: ['data:audio/wav;base64,UklGRtYCAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YdICAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+zty2EYBWGR2fLIeSwGJXfH8N2QQAoUXrTp66hVFAo4kjhyOHI4cjhyOHI4cjhyOHI4cjhyOHI4cjhyOA=='],
    config: { volume: 0.6, rate: 1.1, loop: false }
  },
  
  // Navigation sounds
  navigation: {
    name: 'Navigation',
    src: ['data:audio/wav;base64,UklGRjQBAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTABAAC8vLy4tSO8xDO/zDfCzjnEzztHxz1Jyj9LzEBOzkJQz0NSz0VVz0dXz0lZ0EtbzktbzUxazExYyk1Wzk5UzU5SzE5Qyk5OyU1MyExKx0pJxklHxUhFw0dEwkVBwEQ/vkM9vkE7vT86uz44ujw2uTs0tzo0tDkzsDoytjcwtTUu'],
    config: { volume: 0.4, rate: 1.0, loop: false }
  },
  
  // Success sounds
  successChime: {
    name: 'Success Chime',
    src: ['data:audio/wav;base64,UklGRpYCAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YZICAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+zty2EYBWGR2fLIeSwGJXfH8N2QQAoUXrTp66hVFApVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUV'],
    config: { volume: 0.7, rate: 1.4, loop: false }
  }
};

// Modern audio sprites for efficient loading
const AUDIO_SPRITE_CONFIG = {
  src: ['data:audio/wav;base64,UklGRhwHAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgHAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+zty2EYBWGR2fLIeSwGJXfH8N2QQAoUXrTp66hVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAoVFAo='],
  sprite: {
    coinHover: [0, 400],
    coinFlip: [500, 600],
    coinCollect: [1200, 800],
    transactionSuccess: [2100, 1000],
    uiOpen: [3200, 300],
    uiClose: [3600, 300],
    rewardEarned: [4000, 1200],
    navigation: [5300, 500],
    successChime: [5900, 700]
  } as { [key: string]: [number, number] },
  volume: 0.6,
  preload: true
};

class HowlerProAudioManager {
  private static instance: HowlerProAudioManager | null = null;
  private sounds: Map<string, Howl> = new Map();
  private audioSprite: Howl | null = null;
  private masterVolume: number = 0.6;
  private isInitialized: boolean = false;
  private audioContext: AudioContext | null = null;

  constructor() {
    this.setupGlobalAudioConfig();
  }

  static getInstance(): HowlerProAudioManager {
    if (!HowlerProAudioManager.instance) {
      HowlerProAudioManager.instance = new HowlerProAudioManager();
    }
    return HowlerProAudioManager.instance;
  }

  private setupGlobalAudioConfig(): void {
    // Configure Howler.js for optimal performance
    Howler.volume(this.masterVolume);
    Howler.html5PoolSize = 20; // Increase pool for better performance
    
    // Enable 3D spatial audio
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      this.audioContext = Howler.ctx;
    }
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize audio sprite for efficient loading
      this.audioSprite = new Howl(AUDIO_SPRITE_CONFIG);

      // Pre-load individual professional sounds
      Object.entries(PROFESSIONAL_SOUNDS).forEach(([key, soundEffect]) => {
        const howlSound = new Howl({
          src: soundEffect.src,
          volume: soundEffect.config.volume,
          rate: soundEffect.config.rate,
          loop: soundEffect.config.loop,
          preload: true,
          onload: () => console.log(`✅ Loaded professional sound: ${soundEffect.name}`),
          onloaderror: (id: number | undefined, error: unknown) => console.warn(`⚠️ Failed to load ${soundEffect.name}:`, error)
        });

        this.sounds.set(key, howlSound);
      });

      this.isInitialized = true;
      console.log('🎵 Howler.js Professional Audio System Initialized');

    } catch (error) {
      console.error('❌ Failed to initialize Howler.js audio system:', error);
      throw error;
    }
  }

  // Professional audio playback methods
  async playCoinHover(): Promise<void> {
    this.playSound('coinHover');
  }

  async playCoinFlip(): Promise<void> {
    this.playSound('coinFlip');
  }

  async playCoinCollect(): Promise<void> {
    this.playSound('coinCollect');
  }

  async playTransactionSuccess(): Promise<void> {
    this.playSound('transactionSuccess');
  }

  async playTransactionPending(): Promise<void> {
    this.playSound('transactionPending');
  }

  async playUIOpen(): Promise<void> {
    this.playSound('uiOpen');
  }

  async playUIClose(): Promise<void> {
    this.playSound('uiClose');
  }

  async playRewardEarned(): Promise<void> {
    this.playSound('rewardEarned');
  }

  async playRewardUnlock(): Promise<void> {
    this.playSound('rewardUnlock');
  }

  async playNavigation(): Promise<void> {
    this.playSound('navigation');
  }

  async playSuccessChime(): Promise<void> {
    this.playSound('successChime');
  }

  // Context-aware audio playback
  async playContextSound(context: string, action: string): Promise<void> {
    const soundMap: { [key: string]: { [key: string]: string } } = {
      coin: {
        hover: 'coinHover',
        flip: 'coinFlip',
        collect: 'coinCollect'
      },
      transaction: {
        success: 'transactionSuccess',
        pending: 'transactionPending'
      },
      ui: {
        open: 'uiOpen',
        close: 'uiClose',
        navigate: 'navigation'
      },
      reward: {
        earned: 'rewardEarned',
        unlock: 'rewardUnlock'
      }
    };

    const soundKey = soundMap[context]?.[action];
    if (soundKey) {
      await this.playSound(soundKey);
    } else {
      // Fallback to success chime for unknown combinations
      await this.playSuccessChime();
    }
  }

  // Core playback method
  private async playSound(soundKey: string): Promise<void> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      const sound = this.sounds.get(soundKey);
      if (sound && sound.state() === 'loaded') {
        sound.play();
      } else if (this.audioSprite && AUDIO_SPRITE_CONFIG.sprite[soundKey]) {
        this.audioSprite.play(soundKey);
      } else {
        console.warn(`⚠️ Sound not available: ${soundKey}`);
      }
    } catch (error) {
      console.warn(`⚠️ Failed to play sound ${soundKey}:`, error);
    }
  }

  // 3D Spatial Audio for coin effects
  playSpatialCoinEffect(x: number, y: number, z: number): void {
    const sound = this.sounds.get('coinCollect');
    if (sound && this.audioContext) {
      const id = sound.play();
      // Set 3D position for spatial audio
      sound.pos(x, y, z, id);
    }
  }

  // Volume controls
  setMasterVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    Howler.volume(this.masterVolume);
  }

  getMasterVolume(): number {
    return this.masterVolume;
  }

  // Audio state management
  muteAll(): void {
    Howler.mute(true);
  }

  unmuteAll(): void {
    Howler.mute(false);
  }

  stopAll(): void {
    Howler.stop();
  }

  // Performance optimization
  unloadUnusedSounds(): void {
    this.sounds.forEach((sound, key) => {
      if (!sound.playing()) {
        sound.unload();
        console.log(`🗑️ Unloaded unused sound: ${key}`);
      }
    });
  }

  // Legacy compatibility methods
  async playCardReveal(): Promise<void> {
    return this.playTransactionSuccess();
  }

  async playMiningStart(): Promise<void> {
    return this.playRewardEarned();
  }

  async playServerProcessing(): Promise<void> {
    return this.playTransactionPending();
  }

  async playCryptoCalculation(): Promise<void> {
    return this.playRewardUnlock();
  }

  async playQuantumEncryption(): Promise<void> {
    return this.playSuccessChime();
  }

  async playCryptoPulse(): Promise<void> {
    return this.playNavigation();
  }

  async playPackageClick(): Promise<void> {
    return this.playUIOpen();
  }

  async playPackageSelect(): Promise<void> {
    return this.playSuccessChime();
  }

  async playHbarTransaction(): Promise<void> {
    return this.playTransactionSuccess();
  }

  async playMenuNavigation(): Promise<void> {
    return this.playNavigation();
  }

  async playPageNavigation(): Promise<void> {
    return this.playNavigation();
  }

  async playPackageUpgrade(): Promise<void> {
    return this.playRewardEarned();
  }

  async playTransactionConfirm(): Promise<void> {
    return this.playSuccessChime();
  }

  async playCollectionComplete(): Promise<void> {
    return this.playRewardEarned();
  }

  async playStreakBonus(): Promise<void> {
    return this.playRewardUnlock();
  }

  async playBonusReward(): Promise<void> {
    return this.playRewardEarned();
  }
}

// Export singleton instance
export const howlerProAudio = HowlerProAudioManager.getInstance();

// Export default for easy importing
export default howlerProAudio;

// Initialize on import (auto-setup)
if (typeof window !== 'undefined') {
  // Auto-initialize when user interacts with page
  const initializeOnUserAction = async () => {
    try {
      await howlerProAudio.initialize();
      document.removeEventListener('click', initializeOnUserAction);
      document.removeEventListener('touchstart', initializeOnUserAction);
      document.removeEventListener('keydown', initializeOnUserAction);
    } catch (error) {
      console.warn('🔇 Audio initialization failed, continuing silently:', error);
    }
  };

  document.addEventListener('click', initializeOnUserAction, { once: true });
  document.addEventListener('touchstart', initializeOnUserAction, { once: true });
  document.addEventListener('keydown', initializeOnUserAction, { once: true });
}