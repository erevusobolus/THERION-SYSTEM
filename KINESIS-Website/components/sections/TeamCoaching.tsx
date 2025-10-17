'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Users,
    Zap,
    Target,
    TrendingUp,
    Clock,
    CheckCircle,
    ArrowRight,
    Calendar,
    Award,
    Briefcase,
    Heart,
    Brain,
    Eye,
    Lightbulb,
    Shield,
    Star,
    MessageSquare,
    BarChart3,
    Compass,
    Sparkles,
    ChevronRight,
    PlayCircle,
    UserCheck,
    Globe
} from 'lucide-react'

const TeamCoaching = () => {
    const [activePhase, setActivePhase] = useState<number | null>(null)

    const phases = [
        {
            id: 1,
            phase: "ASSESSMENT",
            title: "Deep Team Analysis",
            description: "Comprehensive evaluation of team dynamics, individual strengths, and organizational challenges through evidence-based assessment tools.",
            icon: Eye,
            color: "from-blue-500 to-cyan-500",
            duration: "2-3 weeks",
            activities: [
                "360-degree feedback sessions",
                "Team dynamics mapping",
                "Individual coaching assessments",
                "Organizational culture analysis",
                "Goal alignment workshops"
            ],
            outcomes: [
                "Clear understanding of team strengths and gaps",
                "Individual development priorities identified",
                "Customized coaching roadmap created"
            ]
        },
        {
            id: 2,
            phase: "FOUNDATION",
            title: "Building Core Capabilities",
            description: "Establishing fundamental emotional intelligence, communication, and decision-making skills through intensive, practical workshops.",
            icon: Shield,
            color: "from-cyan-500 to-blue-600",
            duration: "4-6 weeks",
            activities: [
                "Emotional intelligence mastery sessions",
                "Communication excellence workshops",
                "Decision-making framework training",
                "Conflict resolution practice",
                "Trust and rapport building exercises"
            ],
            outcomes: [
                "Enhanced emotional awareness and regulation",
                "Improved communication effectiveness",
                "Stronger team cohesion and trust"
            ]
        },
        {
            id: 3,
            phase: "INTEGRATION",
            title: "Applying New Skills",
            description: "Real-world application of learned capabilities with ongoing coaching support and adjustment based on practical challenges and successes.",
            icon: Zap,
            color: "from-blue-600 to-purple-600",
            duration: "6-8 weeks",
            activities: [
                "Real-time coaching during team meetings",
                "Challenge-based learning projects",
                "Peer coaching implementation",
                "Performance feedback and adjustment",
                "Success celebration and recognition"
            ],
            outcomes: [
                "Confident application of new skills",
                "Measurable performance improvements",
                "Self-sustaining team development culture"
            ]
        },
        {
            id: 4,
            phase: "TRANSFORMATION",
            title: "Sustainable Excellence",
            description: "Long-term sustainability planning with embedded systems for continuous growth, measurement, and adaptive improvement.",
            icon: Sparkles,
            color: "from-purple-600 to-blue-500",
            duration: "Ongoing",
            activities: [
                "Performance measurement systems",
                "Continuous improvement processes",
                "Leadership development pathways",
                "Organizational culture optimization",
                "Long-term success planning"
            ],
            outcomes: [
                "Self-managing, high-performance team",
                "Sustainable growth and development",
                "Organization-wide positive impact"
            ]
        }
    ]

    const benefits = [
        {
            icon: TrendingUp,
            title: "Measurable Results",
            description: "90% of teams report significant improvement in performance metrics within 6 months",
            metric: "90%"
        },
        {
            icon: Heart,
            title: "Team Satisfaction",
            description: "Enhanced workplace relationships and reduced stress through emotional intelligence mastery",
            metric: "85%"
        },
        {
            icon: Target,
            title: "Goal Achievement",
            description: "Clear alignment and focused execution leading to consistent goal attainment",
            metric: "78%"
        },
        {
            icon: Shield,
            title: "Retention Rate",
            description: "Improved team stability and reduced turnover through better workplace culture",
            metric: "92%"
        }
    ]

    const testimonials = [
        {
            quote: "The Metamorphosis program transformed not just our team performance, but our entire company culture. The results have been extraordinary.",
            author: "Sarah Chen",
            role: "VP of Operations, TechFlow Solutions",
            company: "TechFlow Solutions",
            results: ["40% improvement in project delivery", "60% reduction in conflicts", "Team satisfaction up 85%"]
        },
        {
            quote: "Danai's approach to team coaching is both deeply practical and profoundly transformative. Our leadership team operates at a completely different level now.",
            author: "Marcus Rodriguez",
            role: "CEO, InnovateX",
            company: "InnovateX",
            results: ["30% increase in revenue", "95% employee satisfaction", "Zero leadership turnover"]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-gray-950 to-slate-950 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Advanced Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-full px-6 py-3 mb-6 shadow-xl">
                        <Users className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-200 font-bold text-sm sm:text-base">TEAM COACHING PROGRAM</span>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                            TEAM
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            METAMORPHOSIS
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-medium mb-8">
                        Comprehensive team transformation through <span className="text-purple-400 font-semibold">systematic coaching</span>,
                        emotional intelligence development, and <span className="text-blue-400 font-semibold">sustainable performance optimization</span>
                        that creates lasting organizational change.
                    </motion.p>

                    {/* Program Overview */}
                    <motion.div variants={itemVariants} className="max-w-5xl mx-auto bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 shadow-2xl">
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mx-auto flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-white font-bold text-lg">12-16 Weeks</h3>
                                <p className="text-slate-400 text-sm">Comprehensive transformation program</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-white font-bold text-lg">5-15 People</h3>
                                <p className="text-slate-400 text-sm">Optimal team size for maximum impact</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl mx-auto flex items-center justify-center">
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-white font-bold text-lg">90% Success</h3>
                                <p className="text-slate-400 text-sm">Measurable performance improvement</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Transformation Phases */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            The <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Four-Phase</span> Journey
                        </h3>
                        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                            A systematic approach to team transformation that builds lasting capabilities and sustainable high performance.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={phase.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setActivePhase(phase.id)}
                                onMouseLeave={() => setActivePhase(null)}
                            >
                                <div className={`relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border-2 border-slate-700/50 rounded-3xl p-6 shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:border-slate-600/70`}>

                                    {/* Background Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                                    {/* Phase Number */}
                                    <div className="relative z-10 text-center mb-4">
                                        <div className="inline-flex items-center justify-center w-8 h-8 bg-slate-700/50 rounded-full text-slate-400 font-bold text-sm mb-2">
                                            {phase.id}
                                        </div>
                                        <div className="text-xs font-bold text-slate-500 tracking-wider">
                                            {phase.phase}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="relative z-10 text-center mb-4">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <phase.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center space-y-3">
                                        <h4 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                                            {phase.title}
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                            {phase.description}
                                        </p>
                                        <div className="flex items-center justify-center space-x-2 text-xs">
                                            <Clock className="w-3 h-3 text-slate-500" />
                                            <span className="text-slate-500 font-medium">{phase.duration}</span>
                                        </div>
                                    </div>

                                    {/* Connecting Arrow (for non-mobile) */}
                                    {index < phases.length - 1 && (
                                        <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                                            <ChevronRight className="w-6 h-6 text-slate-600" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Phase Details - Appears on Hover */}
                <AnimatePresence>
                    {activePhase && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.4 }}
                            className="mb-20 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
                        >
                            {(() => {
                                const phase = phases.find(p => p.id === activePhase)
                                if (!phase) return null

                                return (
                                    <div className="grid lg:grid-cols-2 gap-8">

                                        {/* Left Column - Activities */}
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center`}>
                                                    <phase.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-xl">{phase.title}</h4>
                                                    <p className="text-slate-400 text-sm">Phase {phase.id} • {phase.duration}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="text-white font-semibold text-lg mb-3 flex items-center space-x-2">
                                                    <Briefcase className="w-5 h-5 text-blue-400" />
                                                    <span>Key Activities</span>
                                                </h5>
                                                <div className="space-y-2">
                                                    {phase.activities.map((activity, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2 text-sm">
                                                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-300">{activity}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column - Outcomes */}
                                        <div className="space-y-6">
                                            <div>
                                                <h5 className="text-white font-semibold text-lg mb-3 flex items-center space-x-2">
                                                    <Target className="w-5 h-5 text-cyan-400" />
                                                    <span>Expected Outcomes</span>
                                                </h5>
                                                <div className="space-y-3">
                                                    {phase.outcomes.map((outcome, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2 text-sm">
                                                            <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-300 font-medium">{outcome}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 border border-slate-600/50 rounded-2xl p-6">
                                                <h6 className="text-white font-semibold mb-2 flex items-center space-x-2">
                                                    <Compass className="w-4 h-4 text-purple-400" />
                                                    <span>Success Metrics</span>
                                                </h6>
                                                <p className="text-slate-300 text-sm">
                                                    Each phase includes specific, measurable outcomes that ensure progress and accountability.
                                                    Teams track their development through practical assessments and real-world application.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Benefits & Results */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Proven Results</span>
                        </h3>
                        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                            Organizations that complete the Metamorphosis program consistently achieve exceptional performance improvements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl text-center group cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-black text-white mb-2">{benefit.metric}</div>
                                <h4 className="text-white font-semibold text-lg mb-2">{benefit.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Client Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Client Success Stories</span>
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
                            >
                                <div className="mb-6">
                                    <blockquote className="text-slate-300 text-lg leading-relaxed mb-4 italic">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                                            <UserCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <cite className="text-white font-semibold text-base">{testimonial.author}</cite>
                                            <p className="text-slate-400 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-slate-700/50 pt-6">
                                    <h5 className="text-white font-semibold mb-3 text-sm">Key Results Achieved:</h5>
                                    <div className="space-y-2">
                                        {testimonial.results.map((result, idx) => (
                                            <div key={idx} className="flex items-center space-x-2 text-sm">
                                                <TrendingUp className="w-3 h-3 text-green-400" />
                                                <span className="text-slate-300">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Ready to Begin Your Team's <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Metamorphosis</span>?
                        </h3>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Transform your team into a high-performing, emotionally intelligent, and sustainably successful organization.
                            Let's discuss your specific challenges and design a customized transformation journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:scale-105"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>SCHEDULE CONSULTATION</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/case-studies"
                                className="border-2 border-slate-500 hover:bg-slate-500/10 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
                            >
                                <PlayCircle className="w-5 h-5" />
                                <span>VIEW CASE STUDIES</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TeamCoaching