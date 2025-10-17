'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Users, Target, ArrowRight, Building, Globe, TrendingUp, CheckCircle,
  Rocket, Shield, Heart, Trophy, Brain, Crown, Gamepad2, Bot, Eye, Sparkles, Gem, Coins
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CompanyValue {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details: string[]
  color: string
}

interface Achievement {
  number: string
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

interface TeamMember {
  name: string
  role: string
  specialty: string
  avatar: string
  contributions: string[]
}

const companyValues: CompanyValue[] = [
  {
    icon: Trophy,
    title: "Excellence Through Collaboration",
    description: "We believe that collective intelligence surpasses individual brilliance. Our network of specialists creates solutions that none could achieve alone.",
    details: [
      "Shared knowledge amplifies individual expertise",
      "Cross-disciplinary collaboration drives innovation", 
      "Quality emerges from diverse perspectives",
      "Collective ownership ensures accountability"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Innovation Without Boundaries",
    description: "From traditional gaming to Web3 ecosystems, we push the boundaries of what's possible in digital entertainment and business solutions.",
    details: [
      "Pioneering Web3 gaming integration",
      "Advanced AI-driven development tools",
      "Cutting-edge blockchain implementations",
      "Future-ready technology stacks"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Heart,
    title: "Community-Driven Growth",
    description: "Every contributor earns fractional ownership based on their actual contributions, creating a true meritocracy where talent is rewarded.",
    details: [
      "Fractional ownership based on contributions",
      "Transparent performance tracking",
      "Objective-driven development paths",
      "Revenue sharing that rewards impact"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Sustainable Excellence",
    description: "We build for the long term, creating systems and relationships that grow stronger over time while maintaining the highest quality standards.",
    details: [
      "Long-term strategic partnerships",
      "Sustainable business models",
      "Continuous learning and adaptation",
      "Quality-first development approach"
    ],
    color: "from-green-500 to-emerald-500"
  }
]

const achievements: Achievement[] = [
  {
    number: "OBOLUS",
    label: "Native Stablecoin",
    description: "Our blockchain-native currency providing stable value exchange",
    icon: Coins,
    color: "from-yellow-400 to-orange-500"
  },
  {
    number: "50/50",
    label: "Revenue Sharing",
    description: "Fair distribution model ensuring community benefits from success", 
    icon: TrendingUp,
    color: "from-green-400 to-blue-500"
  },
  {
    number: "Web3",
    label: "Gaming Pioneer",
    description: "Leading innovation in blockchain-integrated gaming experiences",
    icon: Gamepad2,
    color: "from-purple-400 to-pink-500"
  },
  {
    number: "OKR",
    label: "Driven Growth",
    description: "Objective-based development ensuring measurable progress",
    icon: Target,
    color: "from-blue-400 to-cyan-500"
  },
  {
    number: "AI",
    label: "Enhanced Development",
    description: "THERION AI systems accelerating creative and technical processes",
    icon: Brain,
    color: "from-indigo-400 to-purple-500"
  },
  {
    number: "Global",
    label: "Creative Network",
    description: "Worldwide collective of specialists and creative professionals",
    icon: Globe,
    color: "from-cyan-400 to-blue-500"
  }
]

export default function AboutPage() {
  return (
    <motion.main 
      className="min-h-screen bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Header />
      
      {/* Fixed Mobile-Optimized About Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-slate-950 relative overflow-hidden">
        {/* Clean Mobile-Friendly Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50" />
          
          {/* Subtle Animated Elements for Desktop */}
          <motion.div 
            className="hidden md:block absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="hidden md:block absolute bottom-20 right-10 w-64 h-64 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center space-y-6 md:space-y-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 bg-slate-800/60 border border-blue-400/30 rounded-full px-4 py-2 md:px-8 md:py-4 backdrop-blur-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Crown className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
              <span className="text-blue-300 font-semibold text-sm md:text-lg font-erevus-heading">About EREVUS Collective</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-erevus-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Redefining Digital
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Entertainment
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-erevus-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              A revolutionary collective of <span className="text-cyan-400 font-semibold">creators</span>, <span className="text-purple-400 font-semibold">developers</span>, and <span className="text-orange-400 font-semibold">visionaries</span> building the future of gaming 
              <span className="hidden sm:inline"> through collaborative innovation and shared ownership of success.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 md:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/services"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 md:px-10 md:py-4 rounded-xl font-semibold text-sm md:text-lg font-erevus-heading transition-all duration-300 flex items-center justify-center space-x-2 md:space-x-4 shadow-lg w-full"
                >
                  <Rocket className="w-4 h-4 md:w-6 md:h-6" />
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/team"
                  className="group border-2 border-orange-400/60 hover:bg-orange-400/10 text-orange-400 hover:text-orange-300 px-6 py-3 md:px-10 md:py-4 rounded-xl font-semibold text-sm md:text-lg font-erevus-heading transition-all duration-300 flex items-center justify-center space-x-2 md:space-x-4 backdrop-blur-sm w-full"
                >
                  <Users className="w-4 h-4 md:w-6 md:h-6" />
                  <span>Meet Our Collective</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fixed Mobile-Optimized Core Values */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        {/* Simple Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-gray-800/30" />
          
          {/* Subtle Desktop-Only Effects */}
          <motion.div 
            className="hidden lg:block absolute top-40 left-10 w-64 h-64 bg-gradient-radial from-blue-500/8 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="hidden lg:block absolute bottom-40 right-10 w-64 h-64 bg-gradient-radial from-purple-500/8 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/2 to-indigo-500/3" />
          <motion.div 
            className="absolute top-20 md:top-40 left-4 md:left-10 w-48 md:w-80 h-48 md:h-80 bg-gradient-radial from-blue-400/8 via-cyan-500/4 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 md:bottom-40 right-4 md:right-10 w-48 md:w-80 h-48 md:h-80 bg-gradient-radial from-purple-400/8 via-pink-500/4 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-12 font-erevus-display"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">Our Core</span> 
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Values</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-erevus-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              The principles that drive our collective success and shape every project we undertake
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {companyValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Simplified Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl md:rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-600/50 rounded-2xl md:rounded-3xl p-6 md:p-10 hover:border-slate-500/50 transition-all duration-500">
                  {/* Value Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 md:mb-8">
                    <motion.div 
                      className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg mx-auto sm:mx-0 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 font-erevus-heading text-white">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed font-erevus-body">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Value Details */}
                  <motion.div 
                    className="space-y-3 md:space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: (index * 0.2) + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {value.details.map((detail, detailIndex) => (
                      <motion.div 
                        key={detailIndex} 
                        className="flex items-start space-x-3 md:space-x-4"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (index * 0.2) + (detailIndex * 0.1) + 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base text-slate-300 leading-relaxed font-erevus-body">{detail}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fixed Mobile-Optimized Achievements */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
        {/* Simple Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-slate-800/30" />
          
          {/* Subtle Desktop-Only Effects */}
          <motion.div 
            className="hidden lg:block absolute top-20 left-20 w-64 h-64 bg-gradient-radial from-emerald-500/6 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="hidden lg:block absolute bottom-20 right-20 w-64 h-64 bg-gradient-radial from-purple-500/6 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-12 font-erevus-display"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text text-transparent">Measurable</span> 
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-erevus-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Real achievements that demonstrate our commitment to innovation and community success
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="group relative rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 shadow-lg text-center overflow-hidden bg-slate-800/40 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                {/* Simplified Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-2xl md:rounded-3xl group-hover:from-slate-600/30 group-hover:to-slate-700/30 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${achievement.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-xl md:text-2xl lg:text-3xl font-black mb-2 font-erevus-display text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {achievement.number}
                  </motion.div>
                  
                  <div className="text-sm md:text-base lg:text-lg font-bold text-slate-200 mb-3 md:mb-4 font-erevus-heading">
                    {achievement.label}
                  </div>
                  
                  <p className="text-xs md:text-sm lg:text-base text-slate-400 leading-relaxed font-erevus-body">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fixed Mobile-Optimized Vision & Mission */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
        {/* Simple Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-gray-900/30" />
          
          {/* Subtle Desktop-Only Effects */}
          <motion.div 
            className="hidden lg:block absolute top-40 left-10 w-64 h-64 bg-gradient-radial from-blue-500/8 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="hidden lg:block absolute bottom-40 right-10 w-64 h-64 bg-gradient-radial from-orange-500/8 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          />
        </div>
        
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-20 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            
            {/* Enhanced Vision Statement */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-6 py-3 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Eye className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold font-erevus-heading">Our Vision</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl lg:text-6xl font-black font-erevus-display"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">The Future of</span> 
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Collaborative Gaming</span>
              </motion.h2>
              
              <motion.blockquote 
                className="text-2xl text-slate-200 leading-relaxed italic border-l-4 border-blue-500 pl-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-r-xl py-6 font-erevus-body"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                "To organize collective efforts under one umbrella, accelerating parallel activities through 
                shared contacts, content, and connections while building the next generation of gaming experiences."
              </motion.blockquote>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  "Unite creators worldwide in shared purpose",
                  "Accelerate innovation through collaboration",
                  "Build sustainable creator economies",
                  "Pioneer the future of digital entertainment"
                ].map((point, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <span className="text-lg text-slate-300 font-erevus-body">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Mission Statement */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/30 rounded-full px-6 py-3 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold font-erevus-heading">Our Mission</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl lg:text-6xl font-black font-erevus-display"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-white via-orange-300 to-amber-300 bg-clip-text text-transparent">Become a Gaming</span> 
                <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Industry Leader</span>
              </motion.h2>
              
              <motion.blockquote 
                className="text-2xl text-slate-200 leading-relaxed italic border-l-4 border-orange-500 pl-8 bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-r-xl py-6 font-erevus-body"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                "To become a major player in gaming, comparable to industry giants like Activision, Blizzard, 
                or King, while maintaining our commitment to community ownership and creative excellence."
              </motion.blockquote>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              >
                {[
                  "Achieve AAA-quality game development",
                  "Build sustainable revenue streams", 
                  "Maintain community-first values",
                  "Pioneer Web3 gaming integration"
                ].map((point, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <span className="text-lg text-slate-300 font-erevus-body">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fixed Mobile-Optimized How We're Different */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
        {/* Simple Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-gray-800/30" />
          
          {/* Subtle Desktop-Only Effects */}
          <motion.div 
            className="hidden lg:block absolute top-20 left-20 w-64 h-64 bg-gradient-radial from-emerald-500/6 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="hidden lg:block absolute bottom-20 right-20 w-64 h-64 bg-gradient-radial from-purple-500/6 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          />
        </div>
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl lg:text-7xl font-black mb-12 font-erevus-display"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-emerald-300 to-cyan-300 bg-clip-text text-transparent">What Makes Us</span> 
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Unique</span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-erevus-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our approach combines the best of traditional game development with innovative Web3 technologies and community ownership
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Fractional Ownership Model",
                description: "Contributors earn real ownership stakes based on their actual contributions, not just promises.",
                icon: Gem,
                benefits: ["Merit-based rewards", "Transparent contribution tracking", "Long-term value alignment", "Democratic decision making"],
                color: "from-emerald-500 to-green-500"
              },
              {
                title: "THERION AI Integration", 
                description: "Advanced AI systems accelerate development while enhancing creative capabilities.",
                icon: Bot,
                benefits: ["AI-enhanced development", "Automated quality assurance", "Creative workflow optimization", "Intelligent project management"],
                color: "from-blue-500 to-purple-500"
              },
              {
                title: "Web3 Gaming Pioneer",
                description: "Leading the integration of blockchain technology with traditional gaming excellence.",
                icon: Sparkles,
                benefits: ["OBOLUS stablecoin economy", "Smart contract integration", "NFT gaming assets", "Decentralized governance"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Global Creative Network",
                description: "Worldwide collective of specialists sharing knowledge, resources, and opportunities.",
                icon: Globe,
                benefits: ["Diverse skill sets", "24/7 development cycles", "Cultural perspective variety", "Scalable talent pool"],
                color: "from-cyan-500 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                {/* Enhanced Background with Color-Specific Glows */}
                <div className={`absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 ${
                  index === 0 ? 'bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-cyan-500/20' :
                  index === 1 ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20' :
                  index === 2 ? 'bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-red-500/20' :
                  'bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20'
                }`}></div>
                
                <div className={`relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 transition-all duration-500 ${
                  index === 0 ? 'hover:border-emerald-400/30' :
                  index === 1 ? 'hover:border-blue-400/30' :
                  index === 2 ? 'hover:border-purple-400/30' :
                  'hover:border-cyan-400/30'
                }`}>
                  <div className="flex items-start space-x-6 mb-8">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold mb-4 font-erevus-heading">
                        <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                          index === 0 ? 'from-emerald-300 to-green-400' :
                          index === 1 ? 'from-blue-300 to-purple-400' :
                          index === 2 ? 'from-purple-300 to-pink-400' :
                          'from-cyan-300 to-blue-400'
                        }`}>
                          {feature.title}
                        </span>
                      </h3>
                      <p className="text-lg text-slate-300 leading-relaxed font-erevus-body">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: (index * 0.1) + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.div 
                        key={benefitIndex} 
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (index * 0.1) + (benefitIndex * 0.1) + 0.4 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: benefitIndex * 0.3 }}
                        >
                          <CheckCircle className={`w-6 h-6 flex-shrink-0 ${
                            index === 0 ? 'text-emerald-400' :
                            index === 1 ? 'text-blue-400' :
                            index === 2 ? 'text-purple-400' :
                            'text-cyan-400'
                          }`} />
                        </motion.div>
                        <span className="text-slate-300 font-erevus-body">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fixed Mobile-Optimized Call to Action */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
        {/* Simple Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-gray-900/30" />
          
          {/* Subtle Desktop-Only Effects */}
          <motion.div 
            className="hidden lg:block absolute top-10 left-10 w-64 h-64 bg-gradient-radial from-blue-500/8 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="hidden lg:block absolute bottom-10 right-10 w-64 h-64 bg-gradient-radial from-orange-500/8 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>
        
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl lg:text-7xl font-black mb-8 font-erevus-display"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">Ready to</span> 
              <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Join the Revolution?</span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto font-erevus-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Discover how EREVUS can accelerate your projects, meet our collective of specialists, 
              or explore the games we're building together.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <Link
                href="/services"
                className="group relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-blue-400/30 rounded-3xl p-10 transition-all duration-500 shadow-2xl text-center block overflow-hidden"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Building className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-6 font-erevus-heading">
                    <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">Our Services</span>
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8 font-erevus-body">
                    Explore comprehensive development solutions and see how we can help accelerate your project
                  </p>
                  <motion.div 
                    className="flex items-center justify-center space-x-3 text-blue-400 group-hover:text-blue-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-semibold font-erevus-heading">Learn More</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <Link
                href="/team"
                className="group relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-orange-400/30 rounded-3xl p-10 transition-all duration-500 shadow-2xl text-center block overflow-hidden"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-6 font-erevus-heading">
                    <span className="bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text text-transparent">Meet Our Collective</span>
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8 font-erevus-body">
                    Get to know the specialists, creators, and visionaries driving our success
                  </p>
                  <motion.div 
                    className="flex items-center justify-center space-x-3 text-orange-400 group-hover:text-orange-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-semibold font-erevus-heading">Meet the Team</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <Link
                href="/games"
                className="group relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-purple-400/30 rounded-3xl p-10 transition-all duration-500 shadow-2xl text-center block overflow-hidden"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Gamepad2 className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-6 font-erevus-heading">
                    <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">Our Projects</span>
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8 font-erevus-body">
                    Discover the innovative games and applications we're building for the future
                  </p>
                  <motion.div 
                    className="flex items-center justify-center space-x-3 text-purple-400 group-hover:text-purple-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-semibold font-erevus-heading">Explore Games</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
