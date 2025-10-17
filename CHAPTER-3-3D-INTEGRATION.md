# 🎨 CHAPTER 3: ADVANCED FEATURES & 3D INTEGRATION
*"Creating Immersive Web Experiences"*

---

## 🎯 **LEARNING OBJECTIVES**

By the end of this chapter, you will:
- ✅ Master Three.js integration with Next.js and React
- ✅ Create interactive 3D scenes and animations  
- ✅ Implement WebGL performance optimization techniques
- ✅ Build responsive 3D components that work across devices
- ✅ Add multimedia integration and progressive web app features
- ✅ Create smooth animations and micro-interactions

---

## 📋 **PRE-SESSION CHECKLIST**

### **Prerequisites from Chapter 2:**
- [ ] Complete Next.js website with navigation and pages
- [ ] TypeScript components working correctly
- [ ] Development server running smoothly
- [ ] All basic functionality tested

### **Environment Verification:**
```bash
# Navigate to your project
cd my-therion-website

# Verify current structure
npm run dev
# Should show your multi-page website at localhost:3000
```

---

## 🚀 **PART 1: THREE.JS SETUP & INTEGRATION (15 minutes)**

### **Install Three.js Dependencies:**

```bash
# Core Three.js packages
npm install three @types/three

# React Three Fiber (React integration)
npm install @react-three/fiber @react-three/drei

# Additional utilities
npm install @react-three/postprocessing leva

# Optional: 3D model loaders
npm install @react-three/gltf-loader
```

### **Create 3D Component Structure:**

#### **1. Basic 3D Scene Component (src/components/3d/Scene3D.tsx):**
```tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'

interface Scene3DProps {
  children?: React.ReactNode
  className?: string
}

const Scene3D: React.FC<Scene3DProps> = ({ children, className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 75,
          near: 0.1,
          far: 1000 
        }}
        shadows
        dpr={[1, 2]} // Device pixel ratio for performance
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Environment and Controls */}
        <Environment preset="sunset" />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        {/* Contact Shadows for realism */}
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={1.5}
          far={0.8}
        />
        
        {/* 3D Content */}
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D
```

#### **2. Animated 3D Cube (src/components/3d/AnimatedCube.tsx):**
```tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface AnimatedCubeProps {
  position?: [number, number, number]
  color?: string
  scale?: number
}

const AnimatedCube: React.FC<AnimatedCubeProps> = ({ 
  position = [0, 0, 0], 
  color = '#4F46E5',
  scale = 1 
}) => {
  const meshRef = useRef<Mesh>(null!)

  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the cube
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  )
}

export default AnimatedCube
```

#### **3. Interactive 3D Sphere (src/components/3d/InteractiveSphere.tsx):**
```tsx
'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface InteractiveSphereProps {
  position?: [number, number, number]
}

const InteractiveSphere: React.FC<InteractiveSphereProps> = ({ 
  position = [2, 0, 0] 
}) => {
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y += delta * 0.5
      
      // Scale animation based on interaction
      const targetScale = hovered ? 1.2 : 1
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale } as any, 0.1)
      
      // Color shift animation
      const time = state.clock.elapsedTime
      meshRef.current.material.color.setHSL(
        (time * 0.1) % 1,
        0.7,
        clicked ? 0.8 : 0.6
      )
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  )
}

export default InteractiveSphere
```

---

## 🌐 **PART 2: INTEGRATION WITH EXISTING PAGES (15 minutes)**

### **Update Homepage with 3D Hero Section:**

#### **Enhanced Homepage (src/app/page.tsx):**
```tsx
import dynamic from 'next/dynamic'
import { ArrowRight, Play, Star } from 'lucide-react'

// Dynamic import to prevent SSR issues with Three.js
const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse rounded-2xl" />
  )
})

const AnimatedCube = dynamic(() => import('@/components/3d/AnimatedCube'), { ssr: false })
const InteractiveSphere = dynamic(() => import('@/components/3d/InteractiveSphere'), { ssr: false })

export default function Home() {
  return (
    <>
      {/* 3D Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Welcome to the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Future</span>
              <br />of Web Development
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Experience the power of AI-enhanced development with stunning 3D visuals, 
              lightning-fast performance, and modern TypeScript architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">5.0 Rating</div>
              </div>
            </div>
          </div>
          
          {/* 3D Scene */}
          <div className="relative h-96 lg:h-[500px]">
            <Scene3D className="rounded-2xl shadow-2xl">
              <AnimatedCube position={[-1, 0, 0]} color="#4F46E5" />
              <InteractiveSphere position={[1, 0, 0]} />
            </Scene3D>
            
            {/* Floating indicators */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-700 shadow-lg">
              ✨ Interactive 3D Elements
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-700 shadow-lg">
              🎮 Click & Drag to Explore
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-blue-600">THERION</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology meets exceptional user experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Enhanced Development",
                description: "Leverage artificial intelligence to write better code faster",
                icon: "🤖"
              },
              {
                title: "3D Web Experiences",
                description: "Stunning three-dimensional interfaces that captivate users",
                icon: "🎨"
              },
              {
                title: "TypeScript Excellence",
                description: "Type-safe development for bulletproof applications",
                icon: "⚡"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

---

## 🎬 **PART 3: ADVANCED ANIMATIONS & INTERACTIONS (15 minutes)**

### **Scroll-Based 3D Animations:**

#### **Scroll-Animated 3D Component (src/components/3d/ScrollAnimated3D.tsx):**
```tsx
'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Group } from 'three'

interface ScrollAnimated3DProps {
  children: React.ReactNode
}

const ScrollAnimated3D: React.FC<ScrollAnimated3DProps> = ({ children }) => {
  const groupRef = useRef<Group>(null!)
  const { viewport } = useThree()
  
  useEffect(() => {
    const handleScroll = () => {
      if (groupRef.current) {
        const scrollY = window.scrollY
        const maxScroll = document.body.scrollHeight - window.innerHeight
        const scrollProgress = scrollY / maxScroll
        
        // Rotate based on scroll
        groupRef.current.rotation.y = scrollProgress * Math.PI * 2
        groupRef.current.position.y = -scrollProgress * 2
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useFrame((state) => {
    if (groupRef.current) {
      // Additional floating animation
      groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })
  
  return <group ref={groupRef}>{children}</group>
}

export default ScrollAnimated3D
```

### **Particle System Component:**

#### **Particle System (src/components/3d/ParticleSystem.tsx):**
```tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointsMaterial, BufferGeometry, BufferAttribute } from 'three'

interface ParticleSystemProps {
  count?: number
  color?: string
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  count = 1000, 
  color = '#4F46E5' 
}) => {
  const pointsRef = useRef<Points>(null!)
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    
    return positions
  }, [count])
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={color} sizeAttenuation />
    </points>
  )
}

export default ParticleSystem
```

---

## 🎵 **PART 4: MULTIMEDIA INTEGRATION (10 minutes)**

### **Audio Integration Component:**

#### **3D Audio Component (src/components/3d/Audio3D.tsx):**
```tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import { PositionalAudio } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { AudioLoader, PositionalAudio as ThreePositionalAudio } from 'three'

interface Audio3DProps {
  url: string
  position?: [number, number, number]
  distance?: number
  volume?: number
}

const Audio3D: React.FC<Audio3DProps> = ({
  url,
  position = [0, 0, 0],
  distance = 5,
  volume = 0.5
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<ThreePositionalAudio>(null!)
  
  // Load audio file
  const buffer = useLoader(AudioLoader, url)
  
  useEffect(() => {
    if (audioRef.current && buffer) {
      audioRef.current.setBuffer(buffer)
      audioRef.current.setRefDistance(distance)
      audioRef.current.setVolume(volume)
    }
  }, [buffer, distance, volume])
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  
  return (
    <group position={position}>
      <PositionalAudio ref={audioRef} url={url} distance={distance} />
      <mesh onClick={togglePlay}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color={isPlaying ? '#10B981' : '#6B7280'} 
          emissive={isPlaying ? '#065F46' : '#000000'}
        />
      </mesh>
    </group>
  )
}

export default Audio3D
```

### **Video Texture Component:**

#### **3D Video Display (src/components/3d/VideoTexture.tsx):**
```tsx
'use client'

import { useRef, useEffect, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { VideoTexture } from 'three'

interface VideoTextureProps {
  src: string
  position?: [number, number, number]
  scale?: [number, number, number]
}

const VideoTextureComponent: React.FC<VideoTextureProps> = ({
  src,
  position = [0, 0, 0],
  scale = [2, 1.125, 1]
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [video, setVideo] = useState<HTMLVideoElement>()
  const [videoTexture, setVideoTexture] = useState<VideoTexture>()
  
  useEffect(() => {
    const vid = document.createElement('video')
    vid.src = src
    vid.crossOrigin = 'anonymous'
    vid.loop = true
    vid.muted = true
    vid.play()
    
    const texture = new VideoTexture(vid)
    
    setVideo(vid)
    setVideoTexture(texture)
    
    return () => {
      vid.pause()
      vid.src = ''
      texture.dispose()
    }
  }, [src])
  
  useFrame(() => {
    if (videoTexture) {
      videoTexture.needsUpdate = true
    }
  })
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[2, 1.125]} />
      <meshBasicMaterial map={videoTexture} transparent />
    </mesh>
  )
}

export default VideoTextureComponent
```

---

## 🚀 **PART 5: PROGRESSIVE WEB APP FEATURES (15 minutes)**

### **PWA Configuration:**

#### **Service Worker (public/sw.js):**
```javascript
const CACHE_NAME = 'therion-website-v1'
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/static/js/bundle.js',
  '/static/css/main.css',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})
```

#### **Web App Manifest (public/manifest.json):**
```json
{
  "name": "THERION Website",
  "short_name": "THERION",
  "description": "Professional web development with AI-enhanced workflows and 3D experiences",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4F46E5",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

#### **PWA Integration in Layout (src/app/layout.tsx):**
```tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'THERION Website - Professional Web Development',
    template: '%s | THERION Website'
  },
  description: 'Professional web development with AI-enhanced workflows and stunning 3D experiences',
  keywords: ['Next.js', 'TypeScript', 'Web Development', 'AI', 'THERION', '3D', 'WebGL'],
  authors: [{ name: 'THERION Team' }],
  manifest: '/manifest.json',
  openGraph: {
    title: 'THERION Website',
    description: 'Professional web development with AI-enhanced workflows',
    type: 'website',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THERION Website',
    description: 'Professional web development with AI-enhanced workflows',
    images: ['/og-image.jpg'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'THERION Website',
  },
}

export const viewport: Viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
```

### **Performance Optimization Hooks:**

#### **Custom Performance Hook (src/hooks/usePerformance.ts):**
```typescript
'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fps: number
  memory: number
  isLowEndDevice: boolean
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    isLowEndDevice: false
  })

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measureFPS = () => {
      frameCount++
      const now = performance.now()
      
      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime))
        const memory = (performance as any).memory?.usedJSHeapSize || 0
        const isLowEndDevice = fps < 30 || memory > 100000000 // 100MB

        setMetrics({ fps, memory, isLowEndDevice })
        
        frameCount = 0
        lastTime = now
      }
      
      animationId = requestAnimationFrame(measureFPS)
    }

    animationId = requestAnimationFrame(measureFPS)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return metrics
}
```

---

## ✅ **CHAPTER 3 DELIVERABLES CHECKLIST**

### **3D Integration:**
- [ ] Three.js successfully integrated with Next.js
- [ ] Interactive 3D scenes working on homepage
- [ ] Animated 3D elements responding to user interaction
- [ ] Performance optimized for different devices

### **Advanced Features:**
- [ ] Particle systems and visual effects implemented
- [ ] Scroll-based animations working smoothly
- [ ] Multimedia integration (audio/video) functional
- [ ] Responsive 3D components across devices

### **Progressive Web App:**
- [ ] Service worker configured for offline support
- [ ] Web app manifest created for installability
- [ ] Performance monitoring implemented
- [ ] PWA features tested on mobile devices

### **Code Quality:**
- [ ] TypeScript types for all 3D components
- [ ] Error boundaries for 3D rendering
- [ ] Performance optimization strategies applied
- [ ] Cross-browser compatibility verified

---

## 🎮 **INTERACTIVE DEMONSTRATIONS**

### **Live Testing Scenarios:**

1. **3D Interaction Test:**
   - Click and drag to rotate 3D scene
   - Hover over interactive elements
   - Test on mobile touch devices

2. **Performance Test:**
   - Monitor FPS counter in development
   - Test on different device types
   - Verify graceful degradation on low-end devices

3. **PWA Features Test:**
   - Install app on mobile device
   - Test offline functionality
   - Verify push notifications (if implemented)

---

## 🚀 **CHAPTER 3 HOMEWORK & PREPARATION**

### **Practice Exercises:**
1. **Custom 3D Model**: Import and display a custom 3D model (GLTF format)
2. **Advanced Animations**: Create a 3D product showcase with rotation controls
3. **Performance Optimization**: Implement level-of-detail (LOD) for complex scenes
4. **Mobile Enhancement**: Optimize 3D experience for mobile devices

### **Next Session Prep:**
- **Performance Analysis**: Run Lighthouse audits on your current site
- **Content Preparation**: Gather final content, images, and branding materials
- **Domain Planning**: Consider what domain name you want for deployment
- **Analytics Setup**: Think about what metrics you want to track

---

## 🆘 **TROUBLESHOOTING GUIDE**

### **Common 3D Issues & Solutions:**

**Issue**: Three.js components not rendering
```bash
# Solution: Ensure dynamic imports with ssr: false
const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false })
```

**Issue**: Poor 3D performance on mobile
```tsx
// Solution: Implement device detection and quality adjustment
const isLowEndDevice = usePerformance().isLowEndDevice
const pixelRatio = isLowEndDevice ? 1 : Math.min(window.devicePixelRatio, 2)
```

**Issue**: 3D scene not responsive
```tsx
// Solution: Use Three.js responsive canvas settings
<Canvas
  dpr={[1, 2]}
  camera={{ aspect: window.innerWidth / window.innerHeight }}
  onCreated={({ gl, size, camera }) => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()
  }}
/>
```

---

## 📚 **ADDITIONAL RESOURCES**

### **Documentation:**
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [PWA Guidelines](https://web.dev/progressive-web-apps/)

### **Tools:**
- [Three.js Editor](https://threejs.org/editor/)
- [GLTF Viewer](https://gltf-viewer.donmccurdy.com/)
- [WebGL Performance Tools](https://developer.chrome.com/docs/devtools/rendering/performance/)

---

*🎓 **Outstanding work!** You now have a cutting-edge website with interactive 3D elements, multimedia integration, and PWA capabilities. In Chapter 4, we'll deploy your masterpiece to the world with professional optimization and security measures.*