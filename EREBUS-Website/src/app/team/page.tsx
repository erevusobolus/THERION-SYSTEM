'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Shield, Users, Code, TrendingUp, ArrowRight, Linkedin, Twitter, 
  Github, Star, CheckCircle, Award, Target, Zap, Crown, Brain, Rocket, Heart,
  MessageSquare, Mail, ChevronDown,
  GraduationCap
} from 'lucide-react'
import Link from 'next/link'

interface TeamMember {
  name: string
  role: string
  title: string
  department?: string
  experience: string
  expertise?: string[]
  bio?: string
  achievements: string[]
  isAvailable?: boolean
  avatar?: string
  element?: string
  skills?: string[]
  votes?: number
  status?: string
  specialty?: string
  description?: string
  image?: string
  gradient?: string
  icon?: React.ComponentType<{ className?: string }>
  quote?: string
  social?: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

const leadership: TeamMember[] = [
  {
    name: 'Angelo',
    role: 'CEO, CTO, Business Strategist',
    title: 'Cluster President',
    specialty: 'Strategic monetization frameworks and media industry revenue optimization across digital entertainment verticals',
    description: 'Focuses on identifying market opportunities and developing sustainable revenue models for digital content creation and gaming projects.',
    image: '/team/angelo.jpg',
    avatar: 'wolf',
    element: 'fire',
    skills: ['Strategic Planning', 'Media Business', 'Web3 Strategy', 'Leadership'],
    achievements: ['$2M+ Revenue Generated', '50+ Projects Delivered', 'Web3 Pioneer'],
    experience: '8+ Years',
    votes: 3,
    status: 'available',
    social: { linkedin: '#', twitter: '#' },
    gradient: 'from-orange-500 to-red-500',
    quote: "Building the future of digital entertainment through strategic innovation."
  },
  {
    name: 'Loizos',
    role: 'CFO, Account Manager',
    title: 'Lead in Finance Fronts',
    specialty: 'Corporate financial architecture, intellectual property management, and strategic public relations leadership',
    description: 'Manages company finances, oversees budget allocation, handles fundraising initiatives, and ensures compliance with financial regulations and intellectual property law.',
    image: '/team/loizos.jpg',
    avatar: 'owl',
    element: 'air',
    skills: ['Financial Management', 'Copyright Protection', 'PR Management', 'Account Management'],
    achievements: ['Financial Expert', 'IP Law Specialist', 'PR Campaigns Leader'],
    experience: '7+ Years',
    votes: 3,
    status: 'available',
    social: { linkedin: '#', github: '#' },
    gradient: 'from-blue-500 to-purple-500',
    quote: "Securing financial success through meticulous planning and strategic foresight."
  },
  {
    name: 'Panos',
    role: 'COO, Assistant Producer',
    title: 'Chief Operating Officer',
    specialty: 'Visual design systems architecture and strategic talent acquisition across technical domains',
    description: 'Oversees daily operations, coordinates visual design work, and manages our recruitment process for new team members.',
    image: '/team/panos.jpg',
    avatar: 'fox',
    element: 'earth',
    skills: ['Operations Management', 'Graphics Design', 'Recruitment', 'Production'],
    achievements: ['Design Excellence', 'Team Builder', 'Operations Expert'],
    experience: '6+ Years',
    votes: 3,
    status: 'available',
    social: { linkedin: '#', twitter: '#' },
    gradient: 'from-green-500 to-teal-500',
    quote: "Creating operational excellence through innovative design and strategic recruitment."
  },
  {
    name: 'Danai',
    role: 'Public Communications Manager & Technical Instructor',
    title: 'Leadership Team',
    specialty: 'Corporate communications strategy, educational program development, and European funding acquisition',
    description: 'Manages our external communications, develops training materials, and researches funding opportunities including ESPA programs.',
    image: '/team/danai.jpg',
    avatar: 'deer',
    element: 'water',
    skills: ['Public Communications', 'Technical Instruction', 'Operational Integrity', 'ESPA Programs'],
    achievements: ['Communications Expert', 'Educational Leader', 'Funding Specialist'],
    experience: '5+ Years',
    votes: 3,
    status: 'available',
    social: { linkedin: '#', twitter: '#' },
    gradient: 'from-purple-500 to-pink-500',
    quote: "Bridging technology and communication to empower teams and secure growth."
  }
]

const specialists = [
  {
    name: 'George',
    role: 'Sales Manager, Hardware Specialist',
    title: 'SAAS Training - General Assistant',
    specialty: 'Enterprise hardware infrastructure optimization and SaaS implementation methodologies',
    description: 'Supports sales operations, provides technical assistance with hardware setups, and helps team members learn new software tools.',
    skills: ['Hardware Systems', 'SAAS Training', 'Sales Management', 'Technical Support'],
    avatar: 'bear',
    element: 'metal',
    achievements: ['Hardware Expert', 'Sales Leader', 'Training Specialist'],
    experience: '4+ Years',
    votes: 0,
    status: 'available',
    icon: Code,
    gradient: 'from-cyan-500 to-blue-500',
    quote: "Empowering teams through cutting-edge hardware solutions and comprehensive training."
  },
  {
    name: 'Ian Kanes',
    role: 'Physical Production Specialist',
    title: 'Production Network Connector',
    specialty: 'Supply chain integration and manufacturing partnership development for scalable production networks',
    description: 'Establishes connections with manufacturing partners and production facilities to support our physical product development needs.',
    skills: ['Physical Production', 'Manufacturing Networks', 'Production Resources', 'Supply Chain'],
    avatar: 'elephant',
    element: 'earth',
    achievements: ['Production Expert', 'Network Builder', 'Supply Chain Specialist'],
    experience: '6+ Years',
    votes: 6,
    status: 'busy',
    icon: Shield,
    gradient: 'from-indigo-500 to-purple-500',
    quote: "Connecting innovation with manufacturing excellence for scalable production solutions."
  }
]

// Premium Interactive Team Card Component - LIVE SITE STRUCTURE
const InteractiveTeamCard = ({ member, index, isLeadership = true }: { member: TeamMember, index: number, isLeadership?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ 
        y: -15, 
        rotateY: isLeadership ? 5 : 0,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => {
        setIsHovered(true)
        if (typeof window !== 'undefined' && window.gameboy) {
          window.gameboy.playHover()
        }
      }}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-slate-900/95 via-slate-800/80 to-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Premium Background Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${member.gradient}/10 rounded-3xl`}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Status Indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${member.status === 'available' ? 'bg-green-400' : 'bg-orange-400'} animate-pulse`}></div>
      </div>

      {/* Header Section with Simple Avatar */}
      <div className="flex items-center space-x-4 mb-6">
        {/* Simple Avatar */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${member.gradient} p-0.5 shadow-xl flex-shrink-0`}>
          <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
            <Shield className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Name and Role */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1 font-erevus-display">{member.name}</h3>
          <div className="text-orange-400 font-semibold text-sm mb-1 font-erevus-body">
            {member.role}
          </div>
          <div className="text-gray-400 text-sm italic font-erevus-body">
            "{member.title}"
          </div>
        </div>
      </div>

      {/* Votes Section */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-400 text-sm font-erevus-body"></span>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1 mb-1">
            {[...Array(6)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < (member.votes || 0) ? 'text-orange-400 fill-current' : 'text-gray-600'}`} />
            ))}
          </div>
          <span className="text-orange-400 font-bold text-sm font-erevus-body">{member.votes || 0} VOTES</span>
        </div>
      </div>

      {/* Core Specialty Section */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <TrendingUp className="w-5 h-5 text-orange-400" />
          <h4 className="text-orange-400 font-bold text-lg font-erevus-display">Core Specialty</h4>
        </div>
        
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
          <p className="text-white font-medium text-sm leading-relaxed font-erevus-body mb-3">
            {member.specialty}
          </p>
          
          <p className="text-gray-400 text-sm leading-relaxed font-erevus-body">
            {member.description}
          </p>
        </div>
      </div>

      {/* Expert Skills Section */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <CheckCircle className="w-5 h-5 text-orange-400" />
          <h4 className="text-orange-400 font-bold text-lg font-erevus-display">Expert Skills</h4>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {(member.skills || []).map((skill: string, i: number) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + i * 0.1 }}
              className="bg-slate-800/70 border border-orange-500/30 rounded-lg px-4 py-2"
            >
              <span className="text-orange-300 font-medium text-sm font-erevus-body">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        {member.social?.linkedin && (
          <motion.a
            href={member.social.linkedin}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </motion.a>
        )}
        {member.social?.twitter && (
          <motion.a
            href={member.social.twitter}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-orange-600 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
          >
            <Twitter className="w-5 h-5 text-white" />
          </motion.a>
        )}
        {member.social?.github && (
          <motion.a
            href={member.social.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300"
          >
            <Github className="w-5 h-5 text-white" />
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default function TeamPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <main className="min-h-screen animate-fade-in font-erevus-body">
      <Header />
      
      {/* Premium Team Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        className="relative min-h-screen pt-20 pb-32 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden flex items-center"
      >
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Dynamic Grid Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,165,0,0.4) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(59,130,246,0.4) 2px, transparent 2px)
              `,
              backgroundSize: '80px 80px, 120px 120px',
            }}
          />
          
          {/* Premium Gradient Orbs */}
          <motion.div 
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 via-orange-400/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-purple-400/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-400/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <Crown className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold text-sm font-erevus-display">OUR TEAM</span>
            </motion.div>

            {/* Hero Title */}
            <motion.h1 
              className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 font-erevus-display tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                EREVUS CLUSTERELITE
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                TEAM
              </span>
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-erevus-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Our collaborative network of leaders, specialists, and partners drive breakthrough innovation in Web3 gaming, Hedera blockchain development, and digital entertainment ecosystems.
            </motion.p>

            {/* Premium 3D Interactive Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative mb-20"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { 
                    number: '6+', 
                    label: 'Elite Members', 
                    icon: Users, 
                    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
                    particles: ['💎', '⭐', '🔷'],
                    description: 'Expert professionals'
                  },
                  { 
                    number: '50+', 
                    label: 'Projects Launched', 
                    icon: Rocket, 
                    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
                    particles: ['🚀', '⚡', '💫'],
                    description: 'Successful deliveries'
                  },
                  { 
                    number: '25+', 
                    label: 'Years Combined', 
                    icon: Award, 
                    gradient: 'from-amber-400 via-orange-500 to-red-600',
                    particles: ['🏆', '🔥', '⭐'],
                    description: 'Expert experience'
                  },
                  { 
                    number: '100%', 
                    label: 'Excellence', 
                    icon: Heart, 
                    gradient: 'from-pink-400 via-rose-500 to-purple-600',
                    particles: ['💎', '✨', '💯'],
                    description: 'Quality commitment'
                  }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -10,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    onHoverStart={() => {
                      if (typeof window !== 'undefined' && window.gameboy) {
                        window.gameboy.playHover()
                      }
                    }}
                    className="group relative perspective-1000"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 hover:border-transparent transition-all duration-500 overflow-hidden">
                      
                      {/* Animated Border Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className={`absolute inset-[1px] bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 rounded-2xl`}></div>
                      
                      {/* Floating Particles */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {stat.particles.map((particle, idx) => (
                          <motion.div
                            key={idx}
                            className="absolute text-lg opacity-30 group-hover:opacity-70"
                            style={{
                              left: `${20 + idx * 25}%`,
                              top: `${10 + idx * 20}%`
                            }}
                            animate={{
                              y: [0, -10, 0],
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 3 + idx,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.5
                            }}
                          >
                            {particle}
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className={`inline-flex p-4 bg-gradient-to-r ${stat.gradient}/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotateY: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          <stat.icon className={`w-7 h-7 text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`} />
                        </motion.div>
                        
                        {/* Number */}
                        <motion.div 
                          className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-erevus-display mb-2`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {stat.number}
                        </motion.div>
                        
                        {/* Label */}
                        <div className="text-white font-bold text-lg font-erevus-display mb-1">
                          {stat.label}
                        </div>
                        
                        {/* Description */}
                        <div className="text-gray-400 text-sm font-erevus-body">
                          {stat.description}
                        </div>
                      </div>
                      
                      {/* 3D Reflection Effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Shadow/Reflection */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient}/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Premium Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
              
              <div className="relative flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playHover()
                    }
                  }}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playClick()
                    }
                    document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group relative overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3 shadow-2xl shadow-orange-500/40 font-erevus-display"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <Users className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Meet Leadership</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    y: -5,
                    borderColor: "rgba(59, 130, 246, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playHover()
                    }
                  }}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playClick()
                    }
                    document.getElementById('specialists')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group relative overflow-hidden bg-transparent border-2 border-slate-600 hover:border-blue-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3 backdrop-blur-sm font-erevus-display"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Code className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">View Specialists</span>
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="relative z-10"
                  >
                    <Target className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.section>

      {/* Leadership Team Section */}
      <motion.section 
        id="leadership" 
        className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255,165,0,0.3) 2px, transparent 2px),
                radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 2px, transparent 2px)
              `,
              backgroundSize: '100px 100px, 140px 140px',
            }}
          />
          
          <motion.div 
            className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/15 via-orange-400/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full mb-8 backdrop-blur-sm">
              <Crown className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold text-sm font-erevus-display">EXECUTIVE LEADERSHIP</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-8 font-erevus-display tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-erevus-body">
              Meet the leadership behind EREVUS, bringing their experience and 
              <span className="text-orange-400 font-bold"> expertise</span> to the project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {leadership.map((member, index) => (
              <InteractiveTeamCard 
                key={member.name} 
                member={member} 
                index={index} 
                isLeadership={true} 
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Specialists Team Section */}
      <motion.section 
        id="specialists" 
        className="relative py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-slate-950 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['100% 100%', '0% 0%'],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 70%, rgba(255,165,0,0.3) 2px, transparent 2px),
                radial-gradient(circle at 70% 30%, rgba(139,69,19,0.3) 2px, transparent 2px)
              `,
              backgroundSize: '120px 120px, 90px 90px',
            }}
          />
          
          <motion.div 
            className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-gradient-to-tr from-orange-500/15 via-amber-400/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -180],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/30 rounded-full mb-8 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold text-sm font-erevus-display">SPECIALISTS</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-8 font-erevus-display tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Specialist Team
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-erevus-body">
              Strategic partners and emerging talents contributing 
              <span className="text-orange-400 font-bold"> specialized expertise</span> and 
              <span className="text-orange-500 font-bold"> driving innovation</span> through collaborative partnership models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {specialists.map((member, index) => (
              <InteractiveTeamCard 
                key={member.name} 
                member={member} 
                index={index} 
                isLeadership={false} 
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Growth Model Section */}
      <motion.section 
        className="relative py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-15"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 25%, rgba(34,197,94,0.3) 2px, transparent 2px),
                radial-gradient(circle at 25% 75%, rgba(16,185,129,0.3) 2px, transparent 2px)
              `,
              backgroundSize: '110px 110px, 130px 130px',
            }}
          />
          
          <motion.div 
            className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-500/20 via-emerald-400/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full mb-8 backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-semibold text-sm font-erevus-display">GROWTH MODEL</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-8 font-erevus-display tracking-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Growth Model
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-erevus-body">
              We transform emerging talent into industry leaders through our comprehensive OKR-based development system and fractional ownership model.
            </p>
          </motion.div>

          {/* Growth Phases */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: "📚",
                title: "Learn & Develop",
                subtitle: "Foundation Building",
                description: "Comprehensive training programs, mentorship, and hands-on experience across Web3 gaming domains through structured learning paths and real-world projects.",
                features: ["Foundation Building", "Mentorship Programs", "Skill Certification"],
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: "🎯", 
                title: "Deliver & Contribute",
                subtitle: "Value Creation",
                description: "Take on real projects with measurable OKRs, contributing to collective success while building professional portfolio and expertise in live environments.",
                features: ["Value Creation", "OKR-Based Projects", "Portfolio Building"],
                gradient: "from-purple-500 to-pink-600"
              },
              {
                icon: "💰",
                title: "Earn & Own", 
                subtitle: "Ownership Rewards",
                description: "Receive fractional ownership based on deliverables and participate in 50/50 revenue sharing through OBOLUS token rewards and equity stakes.",
                features: ["Ownership Rewards", "Revenue Sharing", "OBOLUS Tokens"],
                gradient: "from-orange-500 to-red-600"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 shadow-2xl hover:shadow-orange-500/10"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Phase Icon */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-erevus-display">{phase.title}</h3>
                  <p className="text-orange-400 font-semibold font-erevus-body">{phase.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-erevus-body">
                  {phase.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {phase.features.map((feature, i) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300 font-medium text-sm font-erevus-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Learning Opportunities Section */}
      <motion.section 
        className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-15"
            animate={{
              backgroundPosition: ['50% 0%', '50% 100%'],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 75% 25%, rgba(59,130,246,0.3) 2px, transparent 2px),
                radial-gradient(circle at 25% 75%, rgba(147,51,234,0.3) 2px, transparent 2px)
              `,
              backgroundSize: '100px 100px, 140px 140px',
            }}
          />
          
          <motion.div 
            className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-400/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
              x: [-50, 50, -50],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
              <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-semibold text-sm font-erevus-display">LEARN & GROW</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-8 font-erevus-display tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Start Your Journey
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-erevus-body">
              No experience? No problem! Join our <span className="text-blue-400 font-bold">educational seminars</span> to learn 
              valuable skills in technology, business, and innovation. As you progress and demonstrate your abilities, 
              we'll help connect you with <span className="text-cyan-400 font-bold">real clients and opportunities</span> to 
              build your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Educational Seminars",
                description: "Learn from experienced professionals across different fields and technologies",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: Users,
                title: "Mentorship Program", 
                description: "Get guidance from team members as you develop your skills and expertise",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: Rocket,
                title: "Client Connections",
                description: "Demonstrate your growth and we'll help connect you with potential clients",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => {
                  if (typeof window !== 'undefined' && window.gameboy) {
                    window.gameboy.playHover();
                  }
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-erevus-display">{feature.title}</h3>
                  <p className="text-gray-300 font-erevus-body">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Our Team CTA */}
      <motion.section 
        className="relative py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['100% 0%', '0% 100%'],
            }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 40% 60%, rgba(34,197,94,0.4) 2px, transparent 2px),
                radial-gradient(circle at 60% 40%, rgba(59,130,246,0.4) 2px, transparent 2px)
              `,
              backgroundSize: '150px 150px, 100px 100px',
            }}
          />
          
          <motion.div 
            className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-green-500/15 via-blue-400/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -360],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 rounded-full mb-8 backdrop-blur-sm">
              <Heart className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-semibold text-sm font-erevus-display">JOIN THE REVOLUTION</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black mb-8 font-erevus-display tracking-tight">
              <span className="bg-gradient-to-r from-green-400 via-teal-400 to-green-500 bg-clip-text text-transparent">
                Ready to Join Us?
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-erevus-body">
              We're always looking for passionate individuals who share our vision for 
              <span className="text-green-400 font-bold"> innovation</span> and 
              <span className="text-teal-400 font-bold"> excellence</span>. 
              Don't have experience yet? <span className="text-blue-400 font-bold">Start learning through our seminars</span> on different skills and technologies. 
              As you develop and demonstrate your abilities, we can even help connect you with 
              <span className="text-purple-400 font-bold">potential clients</span> to grow your career.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => {
                  if (typeof window !== 'undefined' && window.gameboy) {
                    window.gameboy.playHover()
                  }
                }}
              >
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-green-500 via-teal-500 to-green-600 hover:from-green-400 hover:via-teal-400 hover:to-green-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl shadow-green-500/40 hover:shadow-teal-500/50 font-erevus-display"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gameboy) {
                      window.gameboy.playClick()
                    }
                  }}
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>Get In Touch</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.gameboy) {
                    window.gameboy.playHover()
                  }
                }}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gameboy) {
                    window.gameboy.playClick()
                  }
                  window.open('mailto:careers@erevus.com', '_blank')
                }}
                className="group border-2 border-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-500 text-teal-400 hover:text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-3 backdrop-blur-sm font-erevus-display"
              >
                <Mail className="w-6 h-6" />
                <span>Send Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}