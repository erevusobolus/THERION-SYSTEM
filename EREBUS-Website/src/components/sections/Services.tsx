'use client'

import { Users, Building, Lightbulb, Coins, TrendingUp, Database, Globe } from 'lucide-react'

const customers = [
  {
    icon: Users,
    title: 'Individuals',
    description: 'Seeking to leverage online AI tools to create assets',
    color: 'from-slate-700 to-slate-800'
  },
  {
    icon: Building,
    title: 'Companies',
    description: 'Seeking to maximise the "better, faster, cheaper" trifecta',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Lightbulb,
    title: 'Entrepreneurs',
    description: 'Seeking to materialise their ideas',
    color: 'from-slate-800 to-slate-700'
  },
  {
    icon: Coins,
    title: 'Investors',
    description: 'Seeking to invest into GPU mining pools or our fractional rewards system',
    color: 'from-slate-700 to-slate-600'
  },
  {
    icon: TrendingUp,
    title: 'Businesses',
    description: 'Seeking to deliver high quality marketing campaigns',
    color: 'from-slate-600 to-slate-800'
  }
]

const platforms = [
  'Fiverr, Upwork, PeoplePerHour',
  'Craigslist, B2B Email',
  'Web3 Networks, Social Media'
]

const datasets = [
  'Web3 Users',
  'Potential Client Businesses',
  'Social Media Followers & Groups',
  'AI Research Data Extracts'
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-slate-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-slate-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-700/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Our <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Comprehensive solutions for diverse Web3 stakeholders
          </p>
        </div>

        {/* Customer Types - Premium Enhanced */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">We Serve These Customers</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((customer, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 hover:border-slate-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 shadow-2xl hover:shadow-slate-500/20">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/0 via-slate-500/5 to-slate-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${customer.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                      <customer.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-slate-300 group-hover:to-slate-400 transition-all duration-300">{customer.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{customer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms & Datasets - Premium Enhanced */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Platforms */}
          <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 hover:border-slate-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 shadow-2xl hover:shadow-slate-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/0 via-slate-500/5 to-slate-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-slate-300 group-hover:to-slate-400 transition-all duration-300">Our Platforms</h3>
              </div>
              <ul className="space-y-4">
                {platforms.map((platform, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse" />
                    <span className="text-gray-300 font-medium">{platform}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Datasets */}
          <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 hover:border-slate-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 shadow-2xl hover:shadow-slate-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/0 via-slate-500/5 to-slate-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-slate-300 group-hover:to-slate-400 transition-all duration-300">Our Datasets</h3>
              </div>
              <ul className="space-y-4">
                {datasets.map((dataset, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse" />
                    <span className="text-gray-300 font-medium">{dataset}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}