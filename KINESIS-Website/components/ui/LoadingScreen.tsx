'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Zap, Sparkles } from 'lucide-react'

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0)
    const [loadingPhase, setLoadingPhase] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    const phases = [
        { icon: Brain, text: "Initializing Leadership Intelligence", color: "from-blue-500 to-cyan-500" },
        { icon: Zap, text: "Loading Emotional Intelligence Tools", color: "from-cyan-500 to-blue-600" },
        { icon: Sparkles, text: "Preparing Transformation Experience", color: "from-blue-600 to-purple-600" }
    ]

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval)
                    setIsComplete(true)
                    return 100
                }
                return prev + 2
            })
        }, 50)

        const phaseInterval = setInterval(() => {
            setLoadingPhase((prev) => (prev + 1) % phases.length)
        }, 1500)

        return () => {
            clearInterval(progressInterval)
            clearInterval(phaseInterval)
        }
    }, [phases.length])

    const currentPhase = phases[loadingPhase]

    if (isComplete) {
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 z-50 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 mb-6">
                            <Sparkles className="w-10 h-10 text-white animate-pulse" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Ready to Transform</h2>
                        <p className="text-slate-400">Welcome to KinesisNow</p>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        )
    }

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 z-50 flex items-center justify-center overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-slate-500 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <div className="text-center relative z-10 max-w-md mx-auto px-6">
                {/* Brand Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-700 rounded-2xl flex items-center justify-center shadow-2xl">
                            <span className="text-white font-black text-2xl">K</span>
                        </div>
                        <div className="text-left">
                            <div className="text-3xl font-black text-white">
                                KINESIS<span className="text-slate-400">NOW</span>
                            </div>
                            <div className="text-sm text-slate-400 font-medium">Leadership Development</div>
                        </div>
                    </div>
                </motion.div>

                {/* Loading Phase Animation */}
                <motion.div
                    key={loadingPhase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${currentPhase.color} rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 mb-4`}>
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                                scale: { duration: 1, repeat: Infinity }
                            }}
                        >
                            <currentPhase.icon className="w-10 h-10 text-white" />
                        </motion.div>
                    </div>

                    <motion.h2
                        className="text-xl font-semibold text-white mb-2"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {currentPhase.text}
                    </motion.h2>
                </motion.div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800/50 rounded-full h-2 mb-4 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                </div>

                {/* Progress Percentage */}
                <motion.div
                    className="text-slate-400 text-sm font-medium mb-6"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    {progress}% Complete
                </motion.div>

                {/* Loading Dots */}
                <div className="flex items-center justify-center space-x-2">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            className="w-2 h-2 bg-slate-500 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: dot * 0.2,
                            }}
                        />
                    ))}
                </div>

                {/* Inspirational Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-8 text-center"
                >
                    <blockquote className="text-slate-400 italic text-sm">
                        "The best way to predict the future is to create it through emotional intelligence."
                    </blockquote>
                    <cite className="text-slate-500 text-xs mt-2 block">— Leadership Wisdom</cite>
                </motion.div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-slate-900/20 pointer-events-none"></div>
        </div>
    )
}

export default LoadingScreen