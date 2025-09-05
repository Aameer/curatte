'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    title: 'Geter.ai Engine',
    description: 'Multimodal AI agents for intelligent content curation.',
    icon: '🧠',
    gradient: 'from-violet-500 to-purple-600',
    details: ['Multimodal Search', 'AI Agents', 'Real-time'],
    highlight: true,
  },
  {
    title: 'Smart Aggregation',
    description: 'Validate and organize coupons intelligently.',
    icon: '🎯',
    gradient: 'from-cyan-500 to-blue-600',
    details: ['Auto-validation', 'Dynamic Pricing', 'Fraud Detection'],
  },
  {
    title: 'Data Pipeline',
    description: 'Process millions of data points instantly.',
    icon: '⚡',
    gradient: 'from-amber-500 to-orange-600',
    details: ['Real-time', 'Scalable', 'Edge Computing'],
  },
  {
    title: 'API Platform',
    description: 'Seamless integration with your workflow.',
    icon: '🔗',
    gradient: 'from-emerald-500 to-green-600',
    details: ['RESTful', 'WebSocket', 'SDKs'],
  },
  {
    title: 'Analytics',
    description: 'Deep insights and performance metrics.',
    icon: '📊',
    gradient: 'from-pink-500 to-rose-600',
    details: ['Custom Reports', 'Predictive', 'A/B Testing'],
  },
  {
    title: 'Security',
    description: 'Enterprise-grade protection and compliance.',
    icon: '🔒',
    gradient: 'from-slate-500 to-gray-600',
    details: ['Encryption', 'Zero-trust', 'Audit Logs'],
  },
]

export default function Features() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  
  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden" id="features">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-900/20 to-black" />
        <div className="absolute inset-0 aurora opacity-40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass mb-6"
          >
            <span className="text-sm font-medium text-violet-300">Platform Features</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Cutting-Edge</span>
            <br />
            <span className="text-white">Technology Stack</span>
          </h2>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Cloud-native AI architecture. Unparalleled performance.
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`group relative ${feature.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Card Container */}
              <div className="relative h-full p-6 rounded-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Glass Background */}
                <div className="absolute inset-0 bg-glass-darker" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Glow Effect */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-xl"
                    >
                      <span className="text-3xl">{feature.icon}</span>
                    </motion.div>
                    {feature.highlight && (
                      <span className="ml-3 px-2 py-1 text-xs font-semibold text-violet-300 bg-violet-500/20 rounded-full">
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                  
                  {/* Feature Details */}
                  <div className="flex flex-wrap gap-2">
                    {feature.details.map((detail, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20"
                      >
                        {detail}
                      </motion.span>
                    ))}
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}