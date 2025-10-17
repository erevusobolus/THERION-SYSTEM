'use client'

import { Target, Users, Lightbulb, Crown, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">EREVUS</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're just making a friends group, but in a profitable way
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Vision - Enhanced */}
          <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-blue-500/30">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "If we organise our collective efforts and package them under one umbrella, 
                we can all propel our parallel activities via sharing contacts, content, 
                connections, discussions, contracts"
              </p>
            </div>
          </div>

          {/* Mission - Ultra Enhanced */}
          <motion.div 
            className="group relative bg-gradient-to-br from-slate-700/30 via-slate-600/20 to-slate-700/30 backdrop-blur-lg rounded-3xl p-10 border border-slate-500/30 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
              boxShadow: "0 40px 80px rgba(100, 116, 139, 0.3)",
              border: "1px solid rgba(148, 163, 184, 0.6)"
            }}
          >
            {/* Animated Background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-slate-600/0 via-slate-500/10 to-slate-600/0 rounded-3xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Floating Particles */}
            <motion.div 
              className="absolute top-4 right-4 w-2 h-2 bg-slate-400 rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                y: [0, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-slate-300 rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.3, 1, 0.3],
                y: [0, -15, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center space-x-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-500/40"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 15,
                    boxShadow: "0 20px 40px rgba(100, 116, 139, 0.5)"
                  }}
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    hover: { duration: 0.4, type: "spring", stiffness: 300 },
                    animate: { duration: 8, repeat: Infinity }
                  }}
                >
                  <Lightbulb className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Our Mission
                </motion.h3>
              </motion.div>
              <motion.p 
                className="text-slate-200 leading-relaxed text-lg font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                "Become a dominant player comparable to either Activision OR Blizzard OR King 
                but in the segment of web3 gaming"
              </motion.p>
            </div>
          </motion.div>

          {/* What We Do - Enhanced */}
          <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-purple-500/30">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">What We Do</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We establish a network of generalists who take on actual tasks to own 
                fractional share of contracts based on deliverables. Our goal is to turn 
                inexperienced people into valuable contributors FOR EVERYONE INVOLVED BASED ON OKRs.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values - Premium Enhanced */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl p-8 border border-blue-500/40 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">Better</h4>
              <p className="text-gray-300">Superior quality through collective expertise</p>
            </div>
            <div className="group bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-2xl p-8 border border-orange-500/40 backdrop-blur-sm hover:border-orange-400/60 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-orange-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">Faster</h4>
              <p className="text-gray-300">Accelerated delivery through parallel workflows</p>
            </div>
            <div className="group bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-2xl p-8 border border-purple-500/40 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">Cheaper</h4>
              <p className="text-gray-300">Cost-effective solutions through resource pooling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}