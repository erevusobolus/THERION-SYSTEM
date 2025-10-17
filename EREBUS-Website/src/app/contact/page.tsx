'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Send, Users, Briefcase, Gamepad2, CheckCircle, AlertCircle, Loader, MessageSquare, Star, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const contactReasons = [
  {
    icon: Briefcase,
    title: 'Business Partnership',
    description: 'Enterprise solutions, strategic partnerships, and large-scale implementations',
    examples: ['Enterprise gaming platforms', 'Web3 integration projects', 'Custom development solutions'],
    color: 'from-blue-500 to-cyan-600',
    audience: 'CTOs, Business Leaders, Enterprise Teams'
  },
  {
    icon: Users,
    title: 'Join Our Team',
    description: 'Talented developers, designers, and specialists looking to join EREVUS',
    examples: ['Game developers', 'Web3 specialists', 'UI/UX designers', 'Community managers'],
    color: 'from-purple-500 to-pink-600',
    audience: 'Developers, Designers, Specialists'
  },
  {
    icon: Gamepad2,
    title: 'Gaming Collaboration',
    description: 'Game studios, indie developers, and content creators seeking collaboration',
    examples: ['Game publishing opportunities', 'Development partnerships', 'Community collaborations'],
    color: 'from-green-500 to-emerald-600',
    audience: 'Game Studios, Indie Developers, Content Creators'
  },
  {
    icon: MessageSquare,
    title: 'General Inquiry',
    description: 'Questions about our services, technology, or general information',
    examples: ['Service questions', 'Technology inquiries', 'General information'],
    color: 'from-orange-500 to-red-600',
    audience: 'Anyone interested in learning more'
  }
]

const inquiryTypes = [
  'Business Partnership',
  'Join Our Team',
  'Gaming Collaboration', 
  'Investment Opportunity',
  'Technical Consultation',
  'Community Partnership',
  'Media & Press',
  'General Question'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    budget: '',
    timeline: '',
    message: '',
    erevusInterest: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      console.log('Form submission data:', formData) // Debug logging
      
      // Validate required fields
      if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
        throw new Error('Please fill in all required fields')
      }

      // For static build, we'll use a simple mailto solution
      const subject = encodeURIComponent(`EREVUS Contact: ${formData.inquiryType} - ${formData.name}`)
      const body = encodeURIComponent(`
EREVUS CONTACT FORM SUBMISSION
===============================

CONTACT DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

INQUIRY DETAILS:
Type: ${formData.inquiryType}
Budget Range: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}
EREVUS Interest: ${formData.erevusInterest ? 'YES - Interested in collaboration!' : 'General inquiry'}

MESSAGE:
${formData.message}

===============================
Submitted: ${new Date().toLocaleString()}
From: EREVUS Contact Form
===============================
      `)

      // Open default email client with correct EREVUS email
      window.location.href = `mailto:erevus.ai@proton.me?subject=${subject}&body=${body}`
      
      setIsSubmitted(true)
      setSubmitError('')
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        budget: '',
        timeline: '',
        message: '',
        erevusInterest: false
      })
      
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitError(error instanceof Error ? error.message : 'Please try again or contact us directly at erevus.ai@proton.me')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    console.log('Form input changed:', { name, value, type }) // Debug logging
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData({
        ...formData,
        [name]: checkbox.checked
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              <span className="block">Get In Touch</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                With EREVUS
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to build the future of gaming together? Whether you&apos;re looking to 
              <span className="text-blue-400 font-semibold"> partner with us</span>, 
              <span className="text-purple-400 font-semibold"> join our team</span>, or 
              <span className="text-cyan-400 font-semibold"> collaborate on projects</span> - 
              we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Reasons Section - NEW */}
      <section className="py-16 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Why Reach Out?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose your reason for contacting us and we&apos;ll connect you with the right team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{reason.description}</p>
                <div className="text-xs text-gray-400">
                  <span className="font-semibold">For:</span> {reason.audience}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Redesigned */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Send Us a Message</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to start a conversation? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-8">
                  Your message has been received. Our team will respond within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Send Another Message</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="your.email@domain.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label htmlFor="company" className="block text-white font-semibold mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label htmlFor="inquiryType" className="block text-white font-semibold mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="budget" className="block text-white font-semibold mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                      <option value="$100,000+">$100,000+</option>
                      <option value="Let's discuss">Let&apos;s discuss</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="timeline" className="block text-white font-semibold mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP - Urgent">ASAP - Urgent</option>
                      <option value="1-4 weeks">1-4 weeks</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and how EREVUS can help you achieve them..."
                  />
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <input
                    type="checkbox"
                    id="erevusInterest"
                    name="erevusInterest"
                    checked={formData.erevusInterest}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-500 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="erevusInterest" className="text-white font-medium flex items-center">
                    <Star className="w-5 h-5 text-blue-400 inline mr-2" />
                    I&apos;m interested in long-term collaboration opportunities with EREVUS
                  </label>
                </motion.div>

                <motion.div 
                  className="text-center pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {submitError && (
                    <div className="mb-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-400">{submitError}</span>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-12 py-4 rounded-xl font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center justify-center space-x-3 mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-6 h-6 animate-spin" />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>SEND MESSAGE</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-gray-400 text-sm mt-4">
                    Your message will be sent securely to our team. We typically respond within 24 hours.
                  </p>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}