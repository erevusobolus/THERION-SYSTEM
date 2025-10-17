'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    User,
    Award,
    BookOpen,
    Brain,
    Heart,
    Eye,
    Target,
    Users,
    Globe,
    MessageCircle,
    CheckCircle,
    ArrowRight,
    Calendar,
    Star,
    Lightbulb,
    Compass,
    Zap,
    Shield,
    TrendingUp,
    MapPin,
    GraduationCap,
    Briefcase,
    Languages,
    Clock,
    Sparkles
} from 'lucide-react'

const About = () => {
    const [activeExpertise, setActiveExpertise] = useState<number | null>(null)

    const expertiseAreas = [
        {
            id: 1,
            icon: Brain,
            title: "Learning Sciences",
            subtitle: "Evidence-based education and skill development",
            description: "Deep expertise in how adults learn best, combining cognitive science with practical application to create transformative learning experiences that stick.",
            color: "from-blue-500 to-cyan-500",
            details: [
                "Adult learning psychology and motivation",
                "Cognitive load theory and memory optimization",
                "Experiential learning design",
                "Skill transfer and retention strategies",
                "Personalized learning pathways"
            ],
            applications: [
                "Workshop design and facilitation",
                "Training program development",
                "Learning assessment and evaluation",
                "Professional development planning"
            ]
        },
        {
            id: 2,
            icon: Heart,
            title: "Psychology",
            subtitle: "Understanding human behavior and motivation",
            description: "Comprehensive understanding of human psychology, including emotional intelligence, behavioral change, and the psychological factors that drive professional success.",
            color: "from-cyan-500 to-blue-600",
            details: [
                "Emotional intelligence and regulation",
                "Motivation and behavioral change",
                "Cognitive biases in decision-making",
                "Stress management and resilience",
                "Team dynamics and group psychology"
            ],
            applications: [
                "Leadership coaching and development",
                "Team performance optimization",
                "Conflict resolution and mediation",
                "Change management support"
            ]
        },
        {
            id: 3,
            icon: Eye,
            title: "Somatics",
            subtitle: "Body-mind integration for authentic presence",
            description: "Specialized training in somatic practices that integrate physical awareness with emotional intelligence, helping leaders develop authentic presence and confidence.",
            color: "from-blue-600 to-purple-600",
            details: [
                "Embodied leadership and presence",
                "Stress release and nervous system regulation",
                "Body language and nonverbal communication",
                "Mindfulness and awareness practices",
                "Integration of physical and emotional intelligence"
            ],
            applications: [
                "Executive presence coaching",
                "Public speaking and presentation skills",
                "Stress management and wellbeing",
                "Authentic communication development"
            ]
        }
    ]

    const qualifications = [
        {
            category: "Education",
            icon: GraduationCap,
            items: [
                "Master's in Learning Sciences, University of Geneva",
                "Psychology Specialization, Cognitive Development",
                "Somatic Practices Certification",
                "Executive Coaching Credentials"
            ]
        },
        {
            category: "Professional Experience",
            icon: Briefcase,
            items: [
                "10+ years in learning and development",
                "500+ professionals coached globally",
                "50+ organizations served",
                "Leadership roles in educational technology"
            ]
        },
        {
            category: "Specializations",
            icon: Target,
            items: [
                "Emotional Intelligence Training",
                "Decision-Making Frameworks",
                "Communication Excellence",
                "Team Transformation Programs"
            ]
        },
        {
            category: "Languages & Locations",
            icon: Globe,
            items: [
                "Fluent in English and French",
                "Based in Lyon, France",
                "Global online and in-person delivery",
                "Cross-cultural communication expertise"
            ]
        }
    ]

    const values = [
        {
            icon: Lightbulb,
            title: "Evidence-Based Approach",
            description: "Every method and technique is grounded in scientific research and proven effectiveness."
        },
        {
            icon: Heart,
            title: "Authentic Connection",
            description: "Building genuine relationships and trust as the foundation for all learning and growth."
        },
        {
            icon: Target,
            title: "Practical Results",
            description: "Focus on actionable skills and measurable outcomes that create real-world impact."
        },
        {
            icon: Users,
            title: "Collaborative Learning",
            description: "Learning happens best in community, through shared reflection and peer support."
        }
    ]

    const achievements = [
        {
            metric: "500+",
            label: "Professionals Coached",
            description: "Individual and team development"
        },
        {
            metric: "50+",
            label: "Organizations Served",
            description: "From startups to Fortune 500"
        },
        {
            metric: "90%",
            label: "Client Satisfaction",
            description: "Consistently exceptional results"
        },
        {
            metric: "10+",
            label: "Years Experience",
            description: "Deep expertise and proven results"
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

            {/* Professional Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148,163,184,0.4) 1px, transparent 0)`,
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
                        <User className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-200 font-bold text-sm sm:text-base">LEADERSHIP DEVELOPMENT SPECIALIST</span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                            MEET
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                            DANAI LEVENTAKOU
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-medium">
                        <span className="text-blue-400 font-semibold">Learning sciences expert</span> and specialist in
                        <span className="text-cyan-400 font-semibold"> psychology and somatics</span>, dedicated to creating
                        <span className="text-white font-bold"> transformative learning experiences</span> that develop emotional intelligence,
                        clear decision-making, and authentic communication.
                    </motion.p>
                </motion.div>

                {/* Professional Portrait & Introduction */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid lg:grid-cols-5 gap-12 items-center mb-20"
                >

                    {/* Professional Avatar/Image Placeholder */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <div className="relative">
                            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl shadow-2xl p-8 flex items-center justify-center group hover:border-slate-600/70 transition-all duration-500">

                                {/* Professional Avatar */}
                                <div className="text-center space-y-4">
                                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                        <span className="text-white font-black text-4xl">D</span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white">Danai Leventakou</h3>
                                        <p className="text-slate-400 font-medium">Learning & Skills Development Specialist</p>
                                        <div className="flex items-center justify-center space-x-2 text-sm">
                                            <MapPin className="w-4 h-4 text-slate-500" />
                                            <span className="text-slate-500">Lyon, France</span>
                                        </div>
                                    </div>

                                    {/* Expertise Icons */}
                                    <div className="flex justify-center space-x-3 mt-6">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                            <Brain className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                                            <Heart className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                            <Eye className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                                    <Sparkles className="w-3 h-3 text-white" />
                                </div>

                                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                                    <Star className="w-3 h-3 text-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Introduction */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">

                        {/* Mission Statement */}
                        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Compass className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-2">My Mission</h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        To create personalised learning experiences that focus on <span className="text-blue-400 font-medium">reflection</span>,
                                        <span className="text-cyan-400 font-medium"> growth</span>, and <span className="text-white font-semibold">clarity</span>.
                                        I help individuals and teams develop the emotional intelligence and communication skills needed for authentic leadership and sustainable success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Professional Philosophy */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-xl">Professional Philosophy</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {values.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 border border-slate-700/50 rounded-xl p-4 group cursor-pointer"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <value.icon className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <h5 className="text-white font-semibold text-sm mb-1">{value.title}</h5>
                                                <p className="text-slate-400 text-xs leading-relaxed">{value.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="text-center bg-gradient-to-br from-slate-800/30 to-slate-700/30 border border-slate-700/50 rounded-xl p-4 group cursor-pointer"
                                >
                                    <div className="text-2xl font-bold text-white mb-1">{achievement.metric}</div>
                                    <div className="text-slate-300 font-medium text-sm mb-1">{achievement.label}</div>
                                    <div className="text-slate-500 text-xs">{achievement.description}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Expertise Areas */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Areas of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
                        </h3>
                        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                            Three interconnected disciplines that form the foundation of my approach to leadership development and team transformation.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {expertiseAreas.map((area, index) => (
                            <motion.div
                                key={area.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setActiveExpertise(area.id)}
                                onMouseLeave={() => setActiveExpertise(null)}
                            >
                                <div className={`relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border-2 border-slate-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:border-slate-600/70`}>

                                    {/* Background Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                                    {/* Header */}
                                    <div className="relative z-10 mb-6">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <area.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                            {area.title}
                                        </h3>

                                        <p className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                                            {area.subtitle}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="relative z-10 mb-6">
                                        <p className="text-slate-300 leading-relaxed text-sm">
                                            {area.description}
                                        </p>
                                    </div>

                                    {/* Key Details Preview */}
                                    <div className="relative z-10">
                                        <h4 className="text-white font-semibold mb-3 text-sm">Key Focus Areas:</h4>
                                        <div className="space-y-2">
                                            {area.details.slice(0, 3).map((detail, idx) => (
                                                <div key={idx} className="flex items-center space-x-2 text-xs">
                                                    <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                                    <span className="text-slate-300">{detail}</span>
                                                </div>
                                            ))}
                                            {area.details.length > 3 && (
                                                <div className="text-slate-400 text-xs font-medium">
                                                    +{area.details.length - 3} more specializations
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Detailed Expertise - Appears on Hover */}
                <AnimatePresence>
                    {activeExpertise && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.4 }}
                            className="mb-20 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
                        >
                            {(() => {
                                const area = expertiseAreas.find(a => a.id === activeExpertise)
                                if (!area) return null

                                return (
                                    <div className="grid lg:grid-cols-2 gap-8">

                                        {/* Left Column - Details */}
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center`}>
                                                    <area.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-xl">{area.title}</h4>
                                                    <p className="text-slate-400 text-sm">{area.subtitle}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="text-white font-semibold text-lg mb-3 flex items-center space-x-2">
                                                    <BookOpen className="w-5 h-5 text-blue-400" />
                                                    <span>Specialized Knowledge</span>
                                                </h5>
                                                <div className="space-y-2">
                                                    {area.details.map((detail, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2 text-sm">
                                                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-300">{detail}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column - Applications */}
                                        <div className="space-y-6">
                                            <div>
                                                <h5 className="text-white font-semibold text-lg mb-3 flex items-center space-x-2">
                                                    <Target className="w-5 h-5 text-cyan-400" />
                                                    <span>Practical Applications</span>
                                                </h5>
                                                <div className="space-y-3">
                                                    {area.applications.map((application, idx) => (
                                                        <div key={idx} className="flex items-start space-x-2 text-sm">
                                                            <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-300 font-medium">{application}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 border border-slate-600/50 rounded-2xl p-6">
                                                <h6 className="text-white font-semibold mb-2 flex items-center space-x-2">
                                                    <Lightbulb className="w-4 h-4 text-purple-400" />
                                                    <span>Integration Approach</span>
                                                </h6>
                                                <p className="text-slate-300 text-sm">
                                                    I combine insights from {area.title.toLowerCase()} with the other two disciplines to create holistic,
                                                    practical solutions that address the complete person - mind, heart, and body.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Qualifications & Background */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Professional Background</span>
                        </h3>
                        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                            A comprehensive foundation in learning sciences, psychology, and somatics, combined with extensive practical experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {qualifications.map((qualification, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl group"
                            >
                                <div className="text-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <qualification.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-white font-bold text-lg mt-3 mb-2">{qualification.category}</h4>
                                </div>
                                <div className="space-y-2">
                                    {qualification.items.map((item, idx) => (
                                        <div key={idx} className="flex items-start space-x-2 text-sm">
                                            <Star className="w-3 h-3 text-blue-400 flex-shrink-0 mt-1" />
                                            <span className="text-slate-300">{item}</span>
                                        </div>
                                    ))}
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
                            Let's Work Together to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transform Your Team</span>
                        </h3>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Whether you're looking to develop emotional intelligence, improve decision-making, or enhance communication,
                            I'm here to create a personalized learning experience that meets your specific needs and goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:scale-105"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>SCHEDULE A CONVERSATION</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/workshops"
                                className="border-2 border-slate-500 hover:bg-slate-500/10 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
                            >
                                <BookOpen className="w-5 h-5" />
                                <span>EXPLORE WORKSHOPS</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About