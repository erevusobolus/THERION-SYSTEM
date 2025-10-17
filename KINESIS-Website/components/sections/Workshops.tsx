'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Brain,
    Target,
    MessageCircle,
    Users,
    Clock,
    Award,
    CheckCircle,
    ArrowRight,
    Calendar,
    MapPin,
    Globe,
    BookOpen,
    Zap,
    Heart,
    Eye,
    Lightbulb,
    UserCheck,
    Briefcase,
    Star,
    PlayCircle
} from 'lucide-react'

const Workshops = () => {
    const [activeWorkshop, setActiveWorkshop] = useState<number | null>(null)

    const workshops = [
        {
            id: 1,
            icon: Brain,
            title: "Emotional Intelligence",
            subtitle: "Transform workplace relationships through EQ mastery",
            description: "Develop authentic self-awareness, emotional regulation, and empathetic leadership skills that create lasting positive change in your professional relationships.",
            duration: "2 days intensive",
            participants: "8-12 professionals",
            format: ["In-person", "Online", "Hybrid"],
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-500/10 to-cyan-500/10",
            borderColor: "border-blue-500/30",
            features: [
                "Self-awareness and emotional mapping",
                "Regulation techniques for high-pressure situations",
                "Empathy-building and perspective-taking",
                "Conflict resolution through emotional intelligence",
                "Building emotionally intelligent teams",
                "Practical tools for daily application"
            ],
            outcomes: [
                "90% improvement in team communication",
                "Reduced workplace stress and burnout",
                "Enhanced leadership presence and authenticity",
                "Better decision-making under pressure"
            ],
            testimonial: {
                text: "This workshop fundamentally changed how I approach leadership. The practical tools for emotional regulation have been game-changing.",
                author: "Sarah M., Product Director"
            }
        },
        {
            id: 2,
            icon: Target,
            title: "Decision Making",
            subtitle: "Clear decisions under pressure with confidence",
            description: "Master systematic approaches to complex decision-making, balancing analytical thinking with intuitive wisdom while managing uncertainty and time constraints.",
            duration: "1.5 days intensive",
            participants: "6-10 leaders",
            format: ["Executive workshops", "Team sessions"],
            color: "from-cyan-500 to-blue-600",
            bgColor: "from-cyan-500/10 to-blue-600/10",
            borderColor: "border-cyan-500/30",
            features: [
                "Decision-making frameworks and methodologies",
                "Managing cognitive biases and mental shortcuts",
                "Balancing data-driven and intuitive approaches",
                "Stakeholder alignment and buy-in strategies",
                "Risk assessment and scenario planning",
                "Implementing decisions with confidence"
            ],
            outcomes: [
                "Faster, more confident decision-making",
                "Improved strategic thinking capabilities",
                "Better risk management and planning",
                "Enhanced stakeholder communication"
            ],
            testimonial: {
                text: "The decision frameworks we learned have streamlined our entire strategic planning process. Absolutely transformational.",
                author: "Marcus R., CEO"
            }
        },
        {
            id: 3,
            icon: MessageCircle,
            title: "Communication",
            subtitle: "Confident, calm communication in any situation",
            description: "Develop powerful communication skills that build trust, influence positively, and create meaningful connections across all professional contexts.",
            duration: "2 days comprehensive",
            participants: "8-15 professionals",
            format: ["Workshop series", "Masterclasses"],
            color: "from-blue-600 to-purple-600",
            bgColor: "from-blue-600/10 to-purple-600/10",
            borderColor: "border-blue-600/30",
            features: [
                "Authentic presence and confident delivery",
                "Active listening and empathetic responses",
                "Difficult conversations and feedback skills",
                "Presentation mastery and storytelling",
                "Cross-cultural and remote communication",
                "Building rapport and trust quickly"
            ],
            outcomes: [
                "Increased confidence in public speaking",
                "More effective team meetings and presentations",
                "Improved client and stakeholder relationships",
                "Better conflict resolution abilities"
            ],
            testimonial: {
                text: "My communication skills have transformed completely. I now lead meetings with confidence and handle difficult conversations with ease.",
                author: "Elena K., Operations Manager"
            }
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-gray-950 to-slate-950 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148,163,184,0.3) 1px, transparent 0)`,
                    backgroundSize: '60px 60px'
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
                        <BookOpen className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-200 font-bold text-sm sm:text-base">PROFESSIONAL DEVELOPMENT WORKSHOPS</span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                            PRACTICAL
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            WORKSHOPS
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-medium">
                        Transform your team's capabilities through <span className="text-blue-400 font-semibold">evidence-based workshops</span>
                        that combine emotional intelligence, practical psychology, and <span className="text-cyan-400 font-semibold">collaborative reflection</span>
                        for measurable, lasting results.
                    </motion.p>
                </motion.div>

                {/* Workshops Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid lg:grid-cols-3 gap-8 mb-16"
                >
                    {workshops.map((workshop, index) => (
                        <motion.div
                            key={workshop.id}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`relative group cursor-pointer`}
                            onMouseEnter={() => setActiveWorkshop(workshop.id)}
                            onMouseLeave={() => setActiveWorkshop(null)}
                        >
                            <div className={`relative bg-gradient-to-br ${workshop.bgColor} backdrop-blur-sm border-2 ${workshop.borderColor} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden h-full`}>

                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${workshop.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                                {/* Header */}
                                <div className="relative z-10 mb-6">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${workshop.color} rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <workshop.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                        {workshop.title}
                                    </h3>

                                    <p className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                                        {workshop.subtitle}
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="relative z-10 mb-6">
                                    <p className="text-slate-300 leading-relaxed text-sm mb-4">
                                        {workshop.description}
                                    </p>
                                </div>

                                {/* Workshop Details */}
                                <div className="relative z-10 space-y-3 mb-6">
                                    <div className="flex items-center space-x-3 text-sm">
                                        <Clock className="w-4 h-4 text-slate-400" />
                                        <span className="text-slate-300 font-medium">{workshop.duration}</span>
                                    </div>

                                    <div className="flex items-center space-x-3 text-sm">
                                        <Users className="w-4 h-4 text-slate-400" />
                                        <span className="text-slate-300 font-medium">{workshop.participants}</span>
                                    </div>

                                    <div className="flex items-start space-x-3 text-sm">
                                        <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                                        <div className="flex flex-wrap gap-2">
                                            {workshop.format.map((format, idx) => (
                                                <span key={idx} className="bg-slate-700/50 border border-slate-600/50 rounded-full px-3 py-1 text-slate-300 text-xs font-medium">
                                                    {format}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Key Features Preview */}
                                <div className="relative z-10 mb-6">
                                    <h4 className="text-white font-semibold mb-3 text-sm">Key Focus Areas:</h4>
                                    <div className="space-y-2">
                                        {workshop.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-2 text-xs">
                                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                                <span className="text-slate-300">{feature}</span>
                                            </div>
                                        ))}
                                        {workshop.features.length > 3 && (
                                            <div className="text-slate-400 text-xs font-medium">
                                                +{workshop.features.length - 3} more areas covered
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="relative z-10">
                                    <Link
                                        href={`/workshops/${workshop.title.toLowerCase().replace(' ', '-')}`}
                                        className={`group/btn w-full bg-gradient-to-r ${workshop.color} hover:from-opacity-90 hover:to-opacity-90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105`}
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        <span>LEARN MORE</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-4 right-4 w-6 h-6 bg-slate-700/30 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-60 transition-opacity">
                                    <Star className="w-3 h-3 text-slate-400" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Detailed Workshop Info - Appears on Hover */}
                <AnimatePresence>
                    {activeWorkshop && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.4 }}
                            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl mb-16"
                        >
                            {(() => {
                                const workshop = workshops.find(w => w.id === activeWorkshop)
                                if (!workshop) return null

                                return (
                                    <div className="grid lg:grid-cols-2 gap-8">

                                        {/* Left Column - Features & Outcomes */}
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-4 flex items-center space-x-2">
                                                    <Lightbulb className="w-5 h-5 text-blue-400" />
                                                    <span>What You'll Master</span>
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-3">
                                                    {workshop.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2 text-sm">
                                                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-300">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-4 flex items-center space-x-2">
                                                    <Award className="w-5 h-5 text-cyan-400" />
                                                    <span>Expected Outcomes</span>
                                                </h4>
                                                <div className="space-y-3">
                                                    {workshop.outcomes.map((outcome, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2 text-sm">
                                                            <Target className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-300 font-medium">{outcome}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column - Testimonial & CTA */}
                                        <div className="space-y-6">
                                            <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 border border-slate-600/50 rounded-2xl p-6">
                                                <div className="flex items-start space-x-3 mb-4">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                        <UserCheck className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <h5 className="text-white font-semibold text-sm mb-1">Client Success</h5>
                                                        <div className="flex space-x-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <blockquote className="text-slate-300 text-sm italic mb-3 leading-relaxed">
                                                    "{workshop.testimonial.text}"
                                                </blockquote>
                                                <cite className="text-slate-400 text-xs font-medium">— {workshop.testimonial.author}</cite>
                                            </div>

                                            <div className="space-y-4">
                                                <Link
                                                    href="/contact"
                                                    className="w-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:scale-105"
                                                >
                                                    <Calendar className="w-5 h-5" />
                                                    <span>SCHEDULE CONSULTATION</span>
                                                    <ArrowRight className="w-5 h-5" />
                                                </Link>

                                                <Link
                                                    href="/workshops"
                                                    className="w-full border-2 border-slate-500 hover:bg-slate-500/10 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3"
                                                >
                                                    <PlayCircle className="w-5 h-5" />
                                                    <span>VIEW ALL WORKSHOPS</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Team's Capabilities?
                        </h3>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Each workshop is customized to your organization's specific needs and challenges.
                            Let's discuss how we can create lasting positive change together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>GET STARTED</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/about"
                                className="border-2 border-slate-500 hover:bg-slate-500/10 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
                            >
                                <Eye className="w-5 h-5" />
                                <span>LEARN MORE</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Workshops