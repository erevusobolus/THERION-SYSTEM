'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    Users,
    Brain,
    Target,
    MessageCircle,
    ArrowRight,
    Calendar,
    BookOpen,
    Award,
    Globe,
    Sparkles,
    Zap,
    Heart,
    Eye,
    CheckCircle,
    Star,
    TrendingUp
} from 'lucide-react'

const Hero = () => {
    const [mounted, setMounted] = useState(false)
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

    useEffect(() => {
        setMounted(true)
    }, [])

    const services = [
        {
            icon: Brain,
            title: "Emotional Intelligence",
            subtitle: "Self-awareness & regulation",
            color: "from-blue-500 to-cyan-500",
            description: "Master emotional awareness and create authentic workplace relationships"
        },
        {
            icon: Target,
            title: "Decision Making",
            subtitle: "Clear choices under pressure",
            color: "from-cyan-500 to-blue-600",
            description: "Develop systematic approaches to complex decisions with confidence"
        },
        {
            icon: MessageCircle,
            title: "Communication",
            subtitle: "Confident, calm dialogue",
            color: "from-blue-600 to-purple-600",
            description: "Build trust and influence through authentic, effective communication"
        }
    ]

    const stats = [
        { number: "500+", label: "Professionals Trained", icon: Users },
        { number: "50+", label: "Organizations Served", icon: Award },
        { number: "10+", label: "Years Experience", icon: TrendingUp },
        { number: "90%", label: "Client Satisfaction", icon: Star }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    if (!mounted) return null

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900">

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-40">
                <motion.div
                    style={{ y }}
                    className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148,163,184,0.4) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-slate-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]"
                >

                    {/* Left Column - Content */}
                    <div className="space-y-8 text-center lg:text-left">

                        {/* Professional Badge */}
                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-full px-6 py-3 shadow-xl">
                                <Users className="w-5 h-5 text-slate-400 animate-pulse" />
                                <span className="text-slate-200 font-bold text-sm sm:text-base tracking-wide">
                                    LEADERSHIP DEVELOPMENT SPECIALIST
                                </span>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                            </div>
                        </motion.div>

                        {/* Main Headlines */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
                                <motion.span
                                    className="block bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    TRANSFORM
                                </motion.span>
                                <motion.span
                                    className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    TEAMS
                                </motion.span>
                                <motion.span
                                    className="block text-slate-300 text-3xl sm:text-4xl lg:text-5xl font-bold mt-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    THROUGH EQ
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Value Proposition */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                                <span className="text-blue-400 font-semibold">Practical workshops</span> rooted in emotional intelligence,
                                <span className="text-cyan-400 font-semibold"> shared reflection</span>, and collaborative action that deliver
                                <span className="text-white font-bold"> measurable results</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-sm">
                                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                                    <Globe className="w-4 h-4 text-slate-400" />
                                    <span className="text-slate-300 font-medium">Based in Lyon, France</span>
                                </div>
                                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                                    <MessageCircle className="w-4 h-4 text-slate-400" />
                                    <span className="text-slate-300 font-medium">Online & In-Person</span>
                                </div>
                                <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
                                    <BookOpen className="w-4 h-4 text-slate-400" />
                                    <span className="text-slate-300 font-medium">EN / FR</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Professional Value Statement */}
                        <motion.div variants={itemVariants} className="glass rounded-2xl p-6 shadow-xl">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-2">Expert-Led Development</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Clear communication. Better decisions. Stronger teams. Guided by
                                        <span className="text-blue-400 font-medium"> Danai Leventakou</span>, specialist in learning sciences,
                                        psychology, and somatics with <span className="text-cyan-400 font-medium">10+ years</span> of experience.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-slate-500/30 btn-hover"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>BOOK A SESSION</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group border-2 border-slate-500 hover:bg-slate-500/10 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
                            >
                                <BookOpen className="w-5 h-5" />
                                <span>EXPLORE WORKSHOPS</span>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Column - Interactive Visual */}
                    <motion.div
                        variants={itemVariants}
                        className="relative flex items-center justify-center mt-12 lg:mt-0"
                    >
                        <div className="relative w-full max-w-lg">

                            {/* Central Professional Hub */}
                            <motion.div
                                className="relative z-10"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-full aspect-square glass rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-1000">

                                    {/* Inner Content */}
                                    <div className="h-full flex flex-col items-center justify-center space-y-6 text-center">

                                        {/* Professional Avatar */}
                                        <motion.div
                                            className="relative"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <div className="w-20 h-20 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                                                <span className="text-white font-black text-2xl">D</span>
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                                                <Sparkles className="w-3 h-3 text-white" />
                                            </div>
                                        </motion.div>

                                        {/* Professional Identity */}
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-white">Danai Leventakou</h3>
                                            <p className="text-slate-400 text-sm">Learning & Skills Development</p>
                                            <p className="text-slate-300 text-xs">Psychology • Somatics • Coaching</p>
                                        </div>

                                        {/* Service Icons Grid */}
                                        <div className="grid grid-cols-3 gap-4 w-full">
                                            {services.map((service, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.15, y: -8 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`bg-gradient-to-r ${service.color} p-4 rounded-xl shadow-lg cursor-pointer group`}
                                                >
                                                    <service.icon className="w-6 h-6 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                                    <p className="text-white text-xs font-medium">{service.title}</p>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Professional Quote */}
                                        <blockquote className="text-slate-300 text-sm italic text-center leading-relaxed">
                                            "Creating personalised learning experiences that focus on reflection, growth, and clarity."
                                        </blockquote>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Skill Badges */}
                            <motion.div
                                className="absolute -top-6 -left-6 glass rounded-xl p-3 shadow-lg"
                                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Brain className="w-6 h-6 text-blue-400" />
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-6 -right-6 glass rounded-xl p-3 shadow-lg"
                                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            >
                                <Target className="w-6 h-6 text-cyan-400" />
                            </motion.div>

                            <motion.div
                                className="absolute top-1/2 -left-8 glass rounded-full p-2 shadow-lg"
                                animate={{ x: [0, -5, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <Heart className="w-4 h-4 text-purple-400" />
                            </motion.div>

                            <motion.div
                                className="absolute top-1/2 -right-8 glass rounded-full p-2 shadow-lg"
                                animate={{ x: [0, 5, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                            >
                                <Eye className="w-4 h-4 text-cyan-400" />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Professional Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-20 pt-12 border-t border-slate-800/50"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                                className="text-center group cursor-pointer"
                            >
                                <div className="flex items-center justify-center mb-3">
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:border-slate-500/50 transition-all duration-300">
                                        <stat.icon className="w-6 h-6 text-slate-400 group-hover:text-slate-300 group-hover:scale-110 transition-all duration-300" />
                                    </div>
                                </div>
                                <motion.div
                                    className="text-2xl lg:text-3xl font-bold text-white mb-1"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </section>
    )
}

export default Hero