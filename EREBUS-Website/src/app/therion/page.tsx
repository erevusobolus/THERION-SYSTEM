'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Brain, Code, Palette, Shield, Gamepad2, Database, Cloud, Smartphone, Bot, TrendingUp, Rocket, Crown, Zap, Sparkles, Gem, Users, Network, Layers } from 'lucide-react'
import Link from 'next/link'

const businessSolutions = [
  {
    icon: TrendingUp,
    title: 'Business Strategy & Analytics',
    description: 'AI-powered business intelligence and strategic planning',
    benefits: ['Market Analysis & Forecasting', 'Competitor Intelligence', 'ROI Optimization', 'Growth Strategy Development'],
    industry: 'Enterprise',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    benefits: ['iOS/Android Native', 'React Native/Flutter', 'Progressive Web Apps', 'App Store Optimization'],
    industry: 'Mobile',
    color: 'from-green-600 to-teal-700'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security auditing and implementation',
    benefits: ['Penetration Testing', 'Vulnerability Assessment', 'Security Architecture', 'Compliance Frameworks'],
    industry: 'Security',
    color: 'from-red-600 to-pink-700'
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Automation',
    description: 'Intelligent conversational AI and process automation',
    benefits: ['Customer Support Bots', 'Sales Automation', 'Process Optimization', 'Natural Language Processing'],
    industry: 'Automation',
    color: 'from-purple-600 to-violet-700'
  }
]

const pricingTiers = [
  {
    tier: 'EXPLORER',
    price: '15 OBOL',
    period: 'one-time access',
    description: 'Perfect for curious minds ready to explore AI-enhanced productivity and digital renaissance tools',
    features: [
      'Access to THERION AI learning platform',
      'VS Code integration with intelligent guidance',
      'Basic automation workflow templates',
      'Community forum and knowledge sharing',
      'Beginner-friendly tutorials and guides',
      'Monthly newsletter with latest innovations'
    ],
    color: 'blue',
    popular: false,
    capabilities: ['AI Learning', 'Basic Automation', 'Community Access', 'Learning Resources'],
    businessValue: 'Ideal for individuals starting their AI productivity journey',
    clanLevel: 'EXPLORER',
    powerMultiplier: '2x Productivity'
  },
  {
    tier: 'INNOVATOR',
    price: '25 OBOL/month',
    period: 'monthly subscription',
    description: 'Ideal for professionals and teams ready to enhance productivity with AI-powered tools and collaborative learning',
    features: [
      'Monthly AI breakthrough reports and analysis',
      'Early access to new productivity tools',
      'Advanced workflow automation templates',
      'Priority community support',
      'Live monthly Q&A sessions',
      'Collaboration tools and team features',
      'Industry trend analysis and forecasts'
    ],
    color: 'blue',
    popular: true,
    capabilities: ['Advanced Tools', 'Early Access', 'Team Features', 'Expert Insights'],
    businessValue: 'Perfect for professionals seeking to grow through AI innovation and community collaboration',
    clanLevel: 'INNOVATOR',
    powerMultiplier: '5x Efficiency'
  },
  {
    tier: 'MENTOR',
    price: '15 OBOL / session',
    period: 'per 1-hour session',
    description: 'Personalized guidance and training for complex AI implementation and workflow optimization',
    features: [
      'One-on-one mentoring sessions',
      'Custom solution development',
      'Personalized learning path creation',
      'Advanced troubleshooting support',
      'Strategic planning for AI adoption',
      'Custom workflow optimization',
      'Direct access to THERION experts'
    ],
    color: 'purple',
    popular: false,
    capabilities: ['Personal Mentoring', 'Custom Solutions', 'Expert Guidance', 'Strategic Planning'],
    businessValue: 'Perfect for individuals and teams needing specialized guidance and support',
    clanLevel: 'MENTORED',
    powerMultiplier: '10x Growth'
  },
  {
    tier: 'ENTERPRISE',
    price: 'Custom Pricing',
    period: 'enterprise solution',
    description: 'Comprehensive AI transformation solutions for organizations ready to lead the digital renaissance',
    features: [
      'Complete organizational AI assessment',
      'Custom THERION platform deployment',
      'Enterprise-wide workflow transformation',
      'Dedicated support team',
      'Security and compliance management',
      'Integration with existing systems',
      'ROI tracking and optimization',
      'Strategic consulting and planning'
    ],
    color: 'red',
    popular: false,
    capabilities: ['Enterprise AI', 'Custom Deployment', 'Strategic Consulting', 'ROI Optimization'],
    businessValue: 'Complete organizational transformation for enterprises ready to lead the future of work',
    clanLevel: 'SOVEREIGN',
    powerMultiplier: '∞x'
  }
]

const seminarPrograms = [
  {
    category: 'Individual Learning',
    type: 'monthly',
    icon: Users,
    title: 'THERION Individual Mastery',
    subtitle: 'Monthly AI Advancement Program',
    price: '50 OBOL',
    duration: 'Monthly Access',
    format: 'Online Learning Platform',
    capacity: 'Unlimited Individual Access',
    description: 'Continuous AI skill development with monthly structured learning paths and breakthrough discoveries.',
    features: [
      'Monthly AI breakthrough workshops',
      'Personalized learning pathway',
      'Access to latest tool discoveries',
      'Individual progress tracking',
      'Community forum access',
      'Resource library updates'
    ],
    details: [
      'New AI tools and techniques monthly',
      'Interactive learning modules',
      'Progress certificates',
      'Expert Q&A sessions',
      'Future-work trend analysis'
    ],
    color: 'from-blue-600 to-cyan-600',
    popular: true
  },
  {
    category: 'Team Workshops',
    type: 'workshop',
    icon: Gamepad2,
    title: 'THERION Team Accelerator',
    subtitle: 'Intensive Workshop Experience',
    price: '200 OBOL',
    duration: '1-3 Days Intensive',
    format: 'Interactive Team Workshop',
    capacity: '2-6 People Maximum',
    description: 'Intensive hands-on workshops designed for small teams to rapidly adopt AI-powered workflows.',
    features: [
      'Customized team assessment',
      'Hands-on AI implementation',
      'Team workflow optimization',
      'Collaborative tool mastery',
      'Real project application',
      'Follow-up support session'
    ],
    details: [
      'Pre-workshop team analysis',
      'Live project integration',
      'Custom tool configuration',
      'Team dynamics optimization',
      'Post-workshop action plan'
    ],
    color: 'from-purple-600 to-blue-600',
    popular: false
  },
  {
    category: 'Online Group Seminars',
    type: 'group',
    icon: Network,
    title: 'THERION Collective Sessions',
    subtitle: 'Affordable Group Learning',
    price: '25 OBOL',
    duration: '2-4 Hour Sessions',
    format: 'Online Group Seminars',
    capacity: '10-20 Participants',
    description: 'Cost-effective group learning sessions focusing on specific AI tools and collaborative innovation techniques.',
    features: [
      'Topic-focused deep dives',
      'Group collaboration exercises',
      'Peer learning opportunities',
      'Expert-led demonstrations',
      'Networking with innovators',
      'Session recordings access'
    ],
    details: [
      'Specialized topic coverage',
      'Interactive group exercises',
      'Breakout collaboration rooms',
      'Live tool demonstrations',
      'Community building focus'
    ],
    color: 'from-cyan-600 to-purple-600',
    popular: false
  },
  {
    category: 'Corporate Training',
    type: 'enterprise',
    icon: Crown,
    title: 'THERION Enterprise Transformation',
    subtitle: 'Complete Organizational Upgrade',
    price: 'Custom Quote',
    duration: 'Multi-Week Program',
    format: 'Comprehensive Corporate Solution',
    capacity: 'Unlimited Enterprise Scale',
    description: 'Full-scale organizational AI transformation with custom implementation and ongoing support.',
    features: [
      'Complete workforce assessment',
      'Custom THERION system integration',
      'Department-specific training modules',
      'Leadership transformation coaching',
      'ROI measurement and optimization',
      'Ongoing innovation consulting'
    ],
    details: [
      'Organizational readiness assessment',
      'Custom deployment strategy',
      'Multi-phase implementation',
      'Change management support',
      'Performance analytics dashboard'
    ],
    color: 'from-amber-600 to-red-600',
    popular: false
  }
]

export default function TherionPage() {
  return (
    <main className="min-h-screen bg-EREVUS-black">
      <Header />
      
      {/* Hero Section - THERION COLLECTIVE */}
      <section className="relative min-h-screen bg-EREVUS-black overflow-hidden">
        {/* Enhanced Background with better mobile performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
        
        {/* Responsive Animated Particles */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh]">
            
            {/* Left Column - THERION COLLECTIVE */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
              {/* Collective Innovation Seal - Mobile Optimized */}
              <div className="inline-flex items-center space-x-2 sm:space-x-3 lg:space-x-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/40 sm:border-2 rounded-lg px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 backdrop-blur-sm shadow-xl shadow-blue-500/20">
                <div className="relative">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur opacity-40 animate-pulse"></div>
                </div>
                <div>
                  <span className="text-blue-400 font-bold text-sm sm:text-base lg:text-lg tracking-wide">THERION</span>
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg ml-1 sm:ml-2">COLLECTIVE</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>

              {/* Collective Innovation Headlines */}
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                  <span className="block relative">
                    THERION
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 blur-sm"></div>
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                    COLLECTIVE
                  </span>
                  <span className="block text-blue-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2">
                    INTELLIGENCE
                  </span>
                </h1>
                
                <div className="space-y-6">
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium max-w-2xl">
                    <span className="text-blue-400 font-semibold">Transformative AI innovation collective</span> that <span className="text-cyan-400 font-semibold">ELEVATES human potential</span> - 
                    an inspiring community of digital pioneers that <span className="text-purple-400 font-semibold">liberates minds and empowers futures</span> together.
                  </p>
                  
                  {/* Future Innovation Vision Statement */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base sm:text-lg">DIGITAL RENAISSANCE 2.0</span>
                    </div>
                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                      While others adapt to change, <span className="text-cyan-400 font-medium">THERION COLLECTIVE</span> cultivates transformation. 
                      We don&apos;t just embrace AI evolution - <span className="text-blue-400 font-medium">we contribute to a collaborative learning community</span> that develops 
                      practical tools and knowledge to help humanity thrive in 2026, 2027, and beyond.
                    </p>
                  </div>
                  
                  {/* Collective Power Indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base">
                    <div className="flex items-center space-x-3 bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 sm:p-4 hover:bg-blue-900/30 transition-all duration-300">
                      <Crown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-400" />
                      <div>
                        <div className="text-blue-400 font-medium text-xs sm:text-sm">TECH ENLIGHTENMENT</div>
                        <div className="text-white font-medium text-sm sm:text-base">Innovation Sanctuary</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-3 sm:p-4 hover:bg-cyan-900/30 transition-all duration-300">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-cyan-400" />
                      <div>
                        <div className="text-cyan-400 font-medium text-xs sm:text-sm">COLLECTIVE WISDOM</div>
                        <div className="text-white font-medium text-sm sm:text-base">United Vision</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-purple-900/20 border border-purple-500/30 rounded-lg p-3 sm:p-4 hover:bg-purple-900/30 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-400" />
                      <div>
                        <div className="text-purple-400 font-medium text-xs sm:text-sm">CREATIVE LIBERATION</div>
                        <div className="text-white font-medium text-sm sm:text-base">Innovation Renaissance</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Collective Vision Quote */}
                  <div className="relative bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg backdrop-blur-sm">
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <blockquote className="text-gray-200 text-sm sm:text-base lg:text-lg italic font-normal">
                      &quot;When digital innovators unite as one collective, <span className="text-blue-400 font-medium">impossible becomes achievable</span> and <span className="text-cyan-400 font-medium">visions become reality</span>.&quot;
                    </blockquote>
                    <cite className="text-blue-400 text-xs sm:text-sm font-medium mt-2 block">— Collective Innovation Principle</cite>
                  </div>
                </div>
                
                {/* Collective Innovation CTA */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                  <Link
                    href="/contact"
                    className="group relative bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-medium text-base sm:text-lg lg:text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center justify-center space-x-2 sm:space-x-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-pulse"></div>
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative z-10" />
                    <span className="relative z-10">JOIN THE COLLECTIVE</span>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-125 group-hover:rotate-12 transition-transform relative z-10" />
                  </Link>
                  <Link
                    href="/obolus"
                    className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-medium text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3"
                  >
                    <Gem className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    <span>FUEL INNOVATION</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - THERION COLLECTIVE VISUALIZATION */}
            <div className="relative flex items-center justify-center mt-12 lg:mt-0">
              <div className="relative">
                {/* Central Collective Core - Pulsing innovation center */}
                <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/50 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-blue-500/30 transform rotate-12 hover:rotate-0 transition-all duration-1000">
                  
                  {/* Inner Innovation Energy */}
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg animate-pulse border border-blue-400/40"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-lg animate-pulse border border-cyan-400/40"></div>
                  
                  {/* Collective Core Symbol */}
                  <div className="relative z-10 p-8 sm:p-10 lg:p-12 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-700/40 border-2 border-blue-400/60 backdrop-blur-sm">
                    <div className="relative">
                      <Brain className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-blue-300 drop-shadow-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full"></div>
                      {/* Collective Unity Symbol */}
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Collective Member Orbs - Floating around the core */}
                  <div className="absolute -top-8 sm:-top-10 lg:-top-12 -right-8 sm:-right-10 lg:-right-12 bg-gradient-to-br from-blue-500 to-blue-700 p-3 sm:p-4 lg:p-5 rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 transition-all duration-500 cursor-pointer group animate-bounce">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white group-hover:scale-125 transition-transform" />
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-300 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full border border-blue-300/30 animate-ping"></div>
                    <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full opacity-60"></div>
                  </div>
                  
                  <div className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 -left-8 sm:-left-10 lg:-left-12 bg-gradient-to-br from-cyan-500 to-cyan-700 p-3 sm:p-4 lg:p-5 rounded-full shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-all duration-500 cursor-pointer group animate-bounce" style={{animationDelay: '0.5s'}}>
                    <Palette className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white group-hover:rotate-180 transition-transform duration-700" />
                    <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-300 rounded-full animate-ping"></div>
                    <div className="absolute -inset-0.5 sm:-inset-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur animate-pulse"></div>
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full opacity-60"></div>
                  </div>
                  
                  <div className="absolute top-8 sm:top-10 lg:top-12 -left-10 sm:-left-12 lg:-left-16 bg-gradient-to-br from-purple-500 to-purple-700 p-2.5 sm:p-3 lg:p-4 rounded-full shadow-2xl shadow-purple-500/40 hover:shadow-purple-400/60 transition-all duration-500 cursor-pointer group animate-bounce" style={{animationDelay: '1s'}}>
                    <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white group-hover:scale-125 transition-transform" />
                    <div className="absolute inset-0 rounded-full border-2 border-purple-300/20 animate-pulse"></div>
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-60"></div>
                  </div>
                  
                  <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 -right-10 sm:-right-12 lg:-right-16 bg-gradient-to-br from-blue-600 to-cyan-600 p-2.5 sm:p-3 lg:p-4 rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-cyan-400/60 transition-all duration-500 cursor-pointer group animate-bounce" style={{animationDelay: '1.5s'}}>
                    <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white group-hover:rotate-12 transition-transform" />
                    <div className="absolute -inset-1 sm:-inset-2 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur animate-pulse"></div>
                    <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-60"></div>
                  </div>
                  
                  <div className="absolute top-16 sm:top-20 lg:top-1/4 -right-12 sm:-right-16 lg:-right-20 bg-gradient-to-br from-cyan-600 to-blue-600 p-2.5 sm:p-3 lg:p-4 rounded-full shadow-2xl shadow-cyan-500/50 hover:shadow-blue-400/70 transition-all duration-500 cursor-pointer group animate-bounce" style={{animationDelay: '2s'}}>
                    <Cloud className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white group-hover:scale-125 group-hover:rotate-180 transition-transform duration-700" />
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-60"></div>
                  </div>
                  
                  <div className="absolute bottom-16 sm:bottom-20 lg:bottom-1/4 -left-12 sm:-left-16 lg:-left-20 bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 sm:p-3 lg:p-4 rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-purple-400/70 transition-all duration-500 cursor-pointer group animate-bounce" style={{animationDelay: '2.5s'}}>
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white group-hover:scale-125 group-hover:-rotate-12 transition-transform" />
                    <div className="absolute inset-0 rounded-full border-2 border-blue-300/30 animate-pulse"></div>
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Elegant Floating Innovation Indicators */}
                <div className="hidden lg:block">
                  {/* Top - Tech Leadership */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                      <span className="text-blue-200 font-medium text-sm tracking-wide">TECH LEADERSHIP</span>
                    </div>
                  </div>
                  
                  {/* Bottom - Collective Unity */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-600/80 to-cyan-700/80 backdrop-blur-md border border-cyan-400/30 px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                      <span className="text-cyan-200 font-medium text-sm tracking-wide">COLLECTIVE UNITY</span>
                    </div>
                  </div>
                  
                  {/* Left - Innovation Wisdom */}
                  <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gradient-to-r from-purple-600/80 to-purple-700/80 backdrop-blur-md border border-purple-400/30 px-3 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse"></div>
                      <span className="text-purple-200 font-medium text-xs tracking-wide">WISDOM</span>
                    </div>
                  </div>
                  
                  {/* Right - Innovation Hub */}
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-md border border-cyan-400/30 px-3 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
                      <span className="text-cyan-200 font-medium text-xs tracking-wide">INNOVATION</span>
                    </div>
                  </div>
                </div>

                {/* Mobile-friendly Corner Badges */}
                <div className="lg:hidden">
                  <div className="absolute top-3 left-3 bg-blue-600/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-blue-200 font-medium">TECH</div>
                  <div className="absolute top-3 right-3 bg-cyan-600/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-cyan-200 font-medium">UNITY</div>
                  <div className="absolute bottom-3 left-3 bg-purple-600/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-purple-200 font-medium">WISDOM</div>
                  <div className="absolute bottom-3 right-3 bg-blue-600/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-blue-200 font-medium">INNOVATION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section - Redesigned */}
      <section className="relative bg-gradient-to-b from-gray-900 via-slate-900 to-gray-800 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-16 w-24 h-24 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4 sm:mb-6">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">ADVANCED AI SYSTEMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Next-Generation <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Intelligence</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI capabilities that power the future of digital innovation and creative excellence
            </p>
          </div>
          
          {/* Enhanced Grid with Better Mobile Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              { 
                icon: Brain, 
                title: "Neural Networks", 
                description: "Advanced deep learning architectures for complex pattern recognition",
                features: ["Multi-layer processing", "Real-time adaptation", "Pattern recognition"],
                color: "from-purple-500 to-purple-600",
                accent: "purple-400"
              },
              { 
                icon: Network, 
                title: "Distributed Processing", 
                description: "Scalable architecture across multiple computational nodes",
                features: ["Load balancing", "Parallel computing", "Cloud integration"],
                color: "from-blue-500 to-cyan-500",
                accent: "cyan-400"
              },
              { 
                icon: Zap, 
                title: "Real-time Analytics", 
                description: "Lightning-fast data processing with instant insights",
                features: ["Live monitoring", "Instant alerts", "Predictive analysis"],
                color: "from-cyan-500 to-blue-500",
                accent: "blue-400"
              },
              { 
                icon: Shield, 
                title: "Secure Framework", 
                description: "Enterprise-grade security for all computational processes",
                features: ["End-to-end encryption", "Access control", "Audit trails"],
                color: "from-blue-600 to-purple-600",
                accent: "purple-400"
              },
              { 
                icon: Layers, 
                title: "Modular Architecture", 
                description: "Flexible components that adapt to various use cases",
                features: ["Plugin system", "Custom modules", "Easy integration"],
                color: "from-purple-600 to-pink-600",
                accent: "pink-400"
              },
              { 
                icon: TrendingUp, 
                title: "Predictive Intelligence", 
                description: "Advanced forecasting for optimal decision making",
                features: ["Trend analysis", "Risk assessment", "Future modeling"],
                color: "from-cyan-600 to-purple-600",
                accent: "cyan-400"
              }
            ].map((capability, index) => (
              <div key={index} className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-${capability.accent}/50 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${index >= 4 ? 'xl:col-span-1' : ''} ${index === 4 ? 'xl:col-start-1' : ''} ${index === 5 ? 'xl:col-start-2' : ''}`}>
                
                {/* Floating Icon */}
                <div className={`relative mb-4 sm:mb-6`}>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-${capability.accent}/30`}>
                    <capability.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className={`absolute -top-1 -right-1 w-4 h-4 bg-${capability.accent} rounded-full animate-pulse`}></div>
                </div>
                
                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {capability.description}
                  </p>
                  
                  {/* Feature List */}
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 bg-${capability.accent} rounded-full`}></div>
                        <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${capability.accent}/0 via-${capability.accent}/5 to-${capability.accent}/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-white font-medium hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm sm:text-base">Explore All Capabilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Enterprise <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Industry-specific AI solutions that deliver measurable business value and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {businessSolutions.map((solution, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-900/90 to-gray-800/50 rounded-xl p-6 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-medium mb-1 sm:mb-2">{solution.industry}</span>
                    <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">{solution.title}</h3>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THERION Seminars & Training Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              THERION <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">LEARNING COLLECTIVE</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Master the future of AI-powered work through structured learning programs designed for individuals, teams, and organizations.
            </p>
            <div className="inline-flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 backdrop-blur-sm">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm sm:text-base lg:text-lg">STRUCTURED SKILL ADVANCEMENT</span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {seminarPrograms.map((program, index) => (
              <div 
                key={index} 
                className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/60 rounded-2xl p-6 sm:p-8 border transition-all duration-500 transform hover:scale-105 ${
                  program.popular 
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 ring-2 ring-blue-500/20' 
                    : 'border-gray-700/50 hover:border-cyan-500/30'
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    🔥 MOST POPULAR
                  </div>
                )}
                
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <program.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium mb-1">{program.category}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{program.title}</h3>
                    <p className="text-sm text-gray-400">{program.subtitle}</p>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-cyan-400">{program.price}</span>
                    <span className="text-sm text-gray-400">{program.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                    <span className="bg-gray-700/50 px-2 py-1 rounded">{program.format}</span>
                    <span className="bg-gray-700/50 px-2 py-1 rounded">{program.capacity}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{program.description}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-medium text-sm">Program Features:</h4>
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700/50 pt-4 mb-6">
                  <h4 className="text-white font-medium text-sm mb-3">What&apos;s Included:</h4>
                  <div className="space-y-2">
                    {program.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-blue-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full bg-gradient-to-r ${program.color} hover:shadow-lg hover:shadow-cyan-500/25 text-white py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{program.type === 'enterprise' ? 'Request Quote' : 'Join Program'}</span>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to Transform Your AI Skills?</h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Choose the learning path that matches your goals and join thousands of innovators mastering the future of work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Start Learning Today</span>
                </Link>
                <Link
                  href="/obolus"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Gem className="w-5 h-5" />
                  <span>Get OBOL Credits</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Pricing Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Revolutionary Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-4">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-xs sm:text-sm">FOR CREATORS, PROFESSIONALS & TEAMS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              THERION <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">LEARNING PATHS</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Whether you&apos;re just starting or leading a team, we have the right path for your AI learning journey. Each tier provides <span className="text-blue-400 font-bold">practical tools and knowledge</span> {' '}
              to help you thrive in the <span className="text-cyan-400 font-bold">digital renaissance</span>.
            </p>
            
            {/* Learning Path Indicator */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl px-4 py-3 max-w-xl mx-auto">
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 font-medium text-sm">PROGRESSIVE LEARNING SYSTEM</span>
              </div>
              <div className="flex space-x-3 text-sm">
                <span className="text-blue-400">Explore → Learn → Master</span>
                <span className="text-gray-400">CONTINUOUS GROWTH</span>
              </div>
            </div>
          </div>

          {/* Revolutionary Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {pricingTiers.map((plan, index) => (
              <div 
                key={index} 
                className={`group relative ${
                  plan.popular 
                    ? 'lg:scale-105 lg:-translate-y-2' 
                    : ''
                }`}
              >
                {/* Outer Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                  plan.popular 
                    ? 'from-blue-600 via-cyan-500 to-blue-600' 
                    : `from-${plan.color}-600 to-${plan.color}-400`
                } rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-700`}></div>
                
                {/* Main Card */}
                <div className={`relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-xl p-6 lg:p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-xl shadow-blue-500/20' 
                    : `border-${plan.color}-500/30 hover:border-${plan.color}-400/50`
                } transition-all duration-500 group-hover:scale-102 min-h-[580px] flex flex-col`}>
                  
                  {/* Professional Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-blue-400/50">
                        ⭐ RECOMMENDED ⭐
                      </div>
                    </div>
                  )}
                  
                  {/* Tier Header */}
                  <div className="text-center mb-6 flex-shrink-0">
                    {/* Power Level */}
                    <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${
                      plan.popular 
                        ? 'from-blue-500/20 to-cyan-500/20 border-blue-400/40' 
                        : `from-${plan.color}-500/20 to-${plan.color}-600/20 border-${plan.color}-400/40`
                    } border rounded-full px-3 py-1.5 mb-3`}>
                      <Crown className={`w-3 h-3 ${
                        plan.popular ? 'text-blue-400' : `text-${plan.color}-400`
                      }`} />
                      <span className={`${
                        plan.popular ? 'text-blue-400' : `text-${plan.color}-400`
                      } text-xs font-bold`}>{plan.clanLevel}</span>
                      <span className={`${
                        plan.popular ? 'text-cyan-300' : `text-${plan.color}-300`
                      } text-xs font-medium`}>{plan.powerMultiplier}</span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">{plan.tier}</h3>
                    
                    {/* Dynamic Pricing Display */}
                    <div className="mb-3">
                      <div className={`text-2xl lg:text-3xl xl:text-4xl font-black ${
                        plan.popular ? 'text-blue-400' : `text-${plan.color}-400`
                      } mb-1 leading-tight break-words`}>
                        {plan.price}
                      </div>
                      <div className="text-gray-400 text-xs">{plan.period}</div>
                    </div>
                    
                    <p className="text-gray-300 text-xs lg:text-sm leading-relaxed px-2">{plan.description}</p>
                  </div>
                  
                  {/* Revolutionary Features */}
                  <div className="space-y-2.5 mb-6 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2.5 group/feature">
                        <div className={`w-1.5 h-1.5 ${
                          plan.popular ? 'bg-blue-400' : `bg-${plan.color}-400`
                        } rounded-full mt-1.5 group-hover/feature:scale-125 transition-transform flex-shrink-0`}></div>
                        <span className="text-gray-300 text-xs lg:text-sm group-hover/feature:text-white transition-colors leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Capabilities Matrix */}
                  <div className="border-t border-gray-700/50 pt-4 mb-6 flex-shrink-0">
                    <h4 className="text-white font-bold text-xs mb-3 flex items-center space-x-2">
                      <Brain className="w-3 h-3 text-cyan-400" />
                      <span>ADVANCED CAPABILITIES</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {plan.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className={`bg-gradient-to-r ${
                          plan.popular 
                            ? 'from-blue-500/10 to-cyan-500/10 border-blue-400/20' 
                            : `from-${plan.color}-500/10 to-${plan.color}-600/10 border-${plan.color}-400/20`
                        } border rounded-lg px-2 py-1.5 text-center`}>
                          <span className={`${
                            plan.popular ? 'text-blue-400' : `text-${plan.color}-400`
                          } text-xs font-medium leading-tight`}>{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Power CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${
                    plan.popular 
                      ? 'from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-500' 
                      : `from-${plan.color}-600 to-${plan.color}-500 hover:from-${plan.color}-500 hover:to-${plan.color}-400`
                  } text-white py-3 lg:py-4 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    plan.popular ? 'shadow-blue-500/25' : `shadow-${plan.color}-500/25`
                  } group-hover:shadow-xl flex-shrink-0`}>
                    <div className="flex items-center justify-center space-x-2">
                      {plan.popular ? (
                        <Sparkles className="w-4 h-4" />
                      ) : (
                        <Rocket className="w-4 h-4" />
                      )}
                      <span className="leading-tight">{plan.tier === 'Enterprise' ? 'UNLOCK INFINITE POWER' : 'ASCEND TO ' + plan.clanLevel}</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Revolutionary Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/40 rounded-xl p-6 lg:p-8 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Ready to Transform Reality?</h3>
                  <p className="text-gray-400 text-sm">Join thousands ascending to digital supremacy</p>
                </div>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-cyan-400">5000+</div>
                    <div className="text-xs text-gray-400">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-purple-400">∞</div>
                    <div className="text-xs text-gray-400">Possibilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 sm:p-8 lg:p-12 border border-blue-500/20 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 sm:mb-6">Ready to Shape the Future of Work?</h2>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                Join THERION COLLECTIVE and gain <span className="text-blue-400 font-medium">5-10 years innovation advantage</span> over your competitors. 
                While they discover tools in 2027, <span className="text-cyan-400 font-medium">you&apos;ll already be mastering 2030 technology</span> today.
              </p>
              
              {/* Future of Work Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-4 sm:p-6">
                  <div className="text-blue-400 text-2xl sm:text-3xl font-medium mb-1 sm:mb-2">2025-2030</div>
                  <div className="text-white font-medium mb-1 text-sm sm:text-base">CUTTING-EDGE RESEARCH</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Continuous discovery of future AI breakthroughs</div>
                </div>
                <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-xl p-4 sm:p-6">
                  <div className="text-cyan-400 text-2xl sm:text-3xl font-medium mb-1 sm:mb-2">10X</div>
                  <div className="text-white font-medium mb-1 text-sm sm:text-base">INNOVATION ADVANTAGE</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Tools and methodologies others won&apos;t discover for years</div>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                  <div className="text-purple-400 text-2xl sm:text-3xl font-medium mb-1 sm:mb-2">∞</div>
                  <div className="text-white font-medium mb-1 text-sm sm:text-base">COLLECTIVE INTELLIGENCE</div>
                  <div className="text-gray-300 text-xs sm:text-sm">United digital innovators solving complex challenges</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl font-medium text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center justify-center space-x-2 sm:space-x-3"
                >
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  <span>JOIN THERION COLLECTIVE</span>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
                </Link>
                <Link
                  href="/obolus"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-medium text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3"
                >
                  <Gem className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>GET OBOL POWER</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-medium text-cyan-400 mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Languages Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-blue-400 mb-1">∞</div>
                  <div className="text-sm text-gray-400">Creative Possibilities</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-medium text-purple-400 mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">AI Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-medium text-blue-400 mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">OBOL Powered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
