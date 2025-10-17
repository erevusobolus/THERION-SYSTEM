'use client'

import { Crown, Shield, Users, UserCheck, Brain, Settings } from 'lucide-react'

const leadership = [
  {
    name: 'Angelo',
    role: 'CEO, CTO, Business Strategist',
    title: 'Cluster President',
    icon: Crown,
    description: 'Strategic leadership and technical architecture'
  },
  {
    name: 'Loizos',
    role: 'CFO, Fundraising Manager',
    title: 'Account Manager',
    icon: Shield,
    description: 'Financial strategy and resource management'
  },
  {
    name: 'Panos',
    role: 'Sales, Operations Assistant',
    title: 'Chieftain of Operations',
    icon: Users,
    description: 'Sales excellence and operational efficiency'
  }
]

const consultants = [
  { name: 'Despoina', role: 'Political Scientist Consultant', icon: UserCheck },
  { name: 'Tom Wiggling', role: 'Gaming Industry Veteran', icon: Brain },
  { name: 'Thanos', role: 'Curator (Anxiety Filter)', icon: Settings },
  { name: 'Elizabeth', role: 'Community Support (Discord Moderator)', icon: Users },
  { name: 'Ian Kanes', role: 'Industrial Resources (Factor.io)', icon: Shield }
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-erevus-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Experienced leaders and specialists driving Web3 gaming innovation
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-erevus-darker rounded-xl p-8 border border-erevus-gray-light text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-slate-500/20 rounded-full flex items-center justify-center">
                    <member.icon className="w-8 h-8 text-slate-400" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-slate-400 font-semibold mb-1">{member.title}</p>
                <p className="text-sm text-gray-300 mb-4">{member.role}</p>
                <p className="text-primary-700 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultants & Specialists */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Consultants & Specialists</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultants.map((consultant, index) => (
              <div key={index} className="bg-erevus-darker rounded-lg p-6 border border-erevus-gray-light">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-500/20 rounded-lg flex items-center justify-center">
                    <consultant.icon className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{consultant.name}</h4>
                    <p className="text-sm text-gray-300">{consultant.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Structure */}
        <div className="mt-16 text-center">
          <div className="bg-erevus-darker rounded-xl p-8 border border-erevus-gray-light max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6">Collective Structure</h3>
            <p className="text-gray-300 mb-6">
              Our network operates on a fractional ownership model where contributors earn stakes 
              based on deliverables and OKRs (Objectives and Key Results).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-slate-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-slate-400 mb-2">Task Assignment</h4>
                <p className="text-gray-300">Based on skills and availability</p>
              </div>
              <div className="bg-slate-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-slate-400 mb-2">Ownership Model</h4>
                <p className="text-gray-300">Fractional shares via deliverables</p>
              </div>
              <div className="bg-slate-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-slate-400 mb-2">Growth Path</h4>
                <p className="text-gray-300">Inexperienced → Valuable contributors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}