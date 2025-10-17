'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Github, MessageCircle, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const footerNavigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Games', href: '/games' },
    { name: 'OBOLUS', href: '/obolus' },
    { name: 'THERION AI', href: '/therion' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Twitter', href: 'https://x.com/ErevusAi', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Discord', href: '#', icon: MessageCircle },
    { name: 'Email', href: '/contact', icon: Mail },
  ],
}

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-slate-900 to-black border-t border-gray-600/50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 5 }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Image 
                  src="/erevus-logo.png" 
                  alt="EREVUS Logo" 
                  width={40} 
                  height={40} 
                  className="drop-shadow-lg hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full blur-sm"></div>
              </div>
              <div>
                <h3 className="text-xl font-black bg-gradient-to-r from-white via-blue-300 to-orange-300 bg-clip-text text-transparent">EREVUS CLUSTER</h3>
                <p className="text-sm bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">Collaborative Force Network</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Joining forces to solve problems, make products, and build connections. 
              Organizing collective efforts under one umbrella for shared success.
            </p>
            <div className="mt-6 flex space-x-4">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="p-2 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-600/30 group-hover:border-orange-500/50 transition-all duration-300">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h4 className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block">Collaborative Solutions</Link></li>
              <li><Link href="/team" className="text-sm text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block">Join the Network</Link></li>
              <li><Link href="/games" className="text-sm text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block">Game Development</Link></li>
              <li><Link href="/therion" className="text-sm text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block">THERION Tools</Link></li>
            </ul>
          </div>

          {/* OBOLUS & Contact - Enhanced */}
          <div>
            <h4 className="text-sm font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/obolus" className="text-sm text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block">OBOLUS Token</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block">About Cluster</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 block">Get In Touch</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-gray-600/50 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <p className="text-xs bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
              &copy; {new Date().getFullYear()} EREVUS CLUSTER. Collaborative Force Network.
            </p>
            <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
              <p className="text-xs text-gray-400">
                Licensed under{' '}
                <Link 
                  href="https://github.com/erevus-collective/erevus-website/blob/main/LICENSE" 
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AGPL-3.0
                </Link>
              </p>
              <Link 
                href="https://github.com/erevus-collective/erevus-website" 
                className="text-xs text-orange-400 hover:text-orange-300 underline transition-colors flex items-center space-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3 w-3" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}