'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Mail,
    Phone,
    MapPin,
    Calendar,
    Clock,
    Globe,
    Send,
    CheckCircle,
    User,
    Briefcase,
    MessageSquare,
    Heart,
    Star,
    ArrowRight,
    Languages,
    Coffee,
    Video,
    Users,
    Target
} from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        service: '',
        message: '',
        urgency: 'normal',
        preferredContact: 'email'
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const services = [
        'Emotional Intelligence Workshop',
        'Decision Making Training',
        'Communication Excellence',
        'Team Metamorphosis Program',
        'Executive Coaching',
        'Custom Team Development',
        'Consultation Call'
    ]

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email',
            value: 'hello@kinesisnow.com',
            description: 'Best for detailed inquiries',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Calendar,
            title: 'Book a Call',
            value: 'Schedule directly',
            description: '30-minute consultation',
            color: 'from-cyan-500 to-blue-600'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Lyon, France',
            description: 'In-person & online available',
            color: 'from-blue-600 to-purple-600'
        },
        {
            icon: Globe,
            title: 'Languages',
            value: 'English & French',
            description: 'Bilingual coaching services',
            color: 'from-purple-600 to-blue-500'
        }
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000))
            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                company: '',
                role: '',
                service: '',
                message: '',
                urgency: 'normal',
                preferredContact: 'email'
            })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

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
                <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
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
                        <MessageSquare className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-200 font-bold text-sm sm:text-base">GET IN TOUCH</span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                            LET'S
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                            TRANSFORM
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-medium">
                        Ready to <span className="text-blue-400 font-semibold">elevate your team's performance</span>?
                        Let's discuss how we can create a <span className="text-cyan-400 font-semibold">personalized learning experience</span>
                        that delivers <span className="text-white font-bold">measurable results</span>.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:col-span-1 space-y-8"
                    >

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 shadow-xl group cursor-pointer"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <method.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg mb-1">{method.title}</h3>
                                            <p className="text-blue-400 font-medium text-base mb-2">{method.value}</p>
                                            <p className="text-slate-400 text-sm">{method.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Availability */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 shadow-xl"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-2">Availability</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className="text-slate-300">Mon-Fri: 9:00-18:00 CET</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <span className="text-slate-300">Weekend: By appointment</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span className="text-slate-300">Response within 24 hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 shadow-xl"
                        >
                            <h3 className="text-white font-semibold text-lg mb-4 flex items-center space-x-2">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span>Why Choose Kinesis?</span>
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-400">500+</div>
                                    <div className="text-slate-400 text-xs">Professionals Trained</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-cyan-400">50+</div>
                                    <div className="text-slate-400 text-xs">Organizations</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-400">90%</div>
                                    <div className="text-slate-400 text-xs">Success Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-400">10+</div>
                                    <div className="text-slate-400 text-xs">Years Experience</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-3 flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                        <Send className="w-4 h-4 text-white" />
                                    </div>
                                    <span>Start Your Transformation</span>
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Fill out this form and I'll get back to you within 24 hours with a personalized response
                                    and next steps for your team's development journey.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Personal Information */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                                                placeholder="your.email@company.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Company Information */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-white font-medium mb-2 text-sm">
                                            Company/Organization
                                        </label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                                                placeholder="Your company name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="role" className="block text-white font-medium mb-2 text-sm">
                                            Your Role
                                        </label>
                                        <div className="relative">
                                            <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                                                placeholder="CEO, Manager, HR Director, etc."
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div>
                                    <label htmlFor="service" className="block text-white font-medium mb-2 text-sm">
                                        Service of Interest
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                                    >
                                        <option value="">Select a service...</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none"
                                        placeholder="Tell me about your team's current challenges, goals, and what you're hoping to achieve through coaching and development..."
                                    />
                                </div>

                                {/* Additional Options */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="urgency" className="block text-white font-medium mb-2 text-sm">
                                            Timeline
                                        </label>
                                        <select
                                            id="urgency"
                                            name="urgency"
                                            value={formData.urgency}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                                        >
                                            <option value="flexible">Flexible timeline</option>
                                            <option value="normal">Within 1-2 months</option>
                                            <option value="urgent">Within 2 weeks</option>
                                            <option value="immediate">ASAP</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="preferredContact" className="block text-white font-medium mb-2 text-sm">
                                            Preferred Contact Method
                                        </label>
                                        <select
                                            id="preferredContact"
                                            name="preferredContact"
                                            value={formData.preferredContact}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                                        >
                                            <option value="email">Email</option>
                                            <option value="phone">Phone call</option>
                                            <option value="video">Video call</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl ${isSubmitting
                                                ? 'bg-slate-600 cursor-not-allowed'
                                                : submitStatus === 'success'
                                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                                                    : submitStatus === 'error'
                                                        ? 'bg-gradient-to-r from-red-600 to-red-500'
                                                        : 'bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 transform hover:scale-[1.02]'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending Message...</span>
                                            </>
                                        ) : submitStatus === 'success' ? (
                                            <>
                                                <CheckCircle className="w-5 h-5" />
                                                <span>Message Sent Successfully!</span>
                                            </>
                                        ) : submitStatus === 'error' ? (
                                            <>
                                                <span>Error - Please Try Again</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>SEND MESSAGE</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl"
                                >
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-white font-medium text-sm mb-1">Thank you for reaching out!</p>
                                            <p className="text-slate-300 text-sm">
                                                I've received your message and will respond within 24 hours with personalized next steps
                                                for your team's development journey.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact