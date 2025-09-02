'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    title: 'Geter.ai Engine',
    description: 'Advanced AI algorithms that understand context, predict trends, and deliver personalized content curation at scale.',
    icon: '🧠',
    gradient: 'from-violet-500 to-purple-600',
    details: ['Natural Language Processing', 'Predictive Analytics', 'Real-time Learning'],
    highlight: true,
  },
  {
    title: 'Smart Coupon Aggregation',
    description: 'Automatically discover, validate, and organize thousands of coupons from across the web with intelligent categorization.',
    icon: '🎯',
    gradient: 'from-cyan-500 to-blue-600',
    details: ['Auto-validation', 'Dynamic Pricing', 'Fraud Detection'],
  },
  {
    title: 'Intelligent Data Pipeline',
    description: 'Process millions of data points in real-time with our distributed computing infrastructure.',
    icon: '⚡',
    gradient: 'from-amber-500 to-orange-600',
    details: ['Real-time Processing', 'Scalable Architecture', 'Edge Computing'],
  },
  {
    title: 'API-First Platform',
    description: 'Seamlessly integrate our curation capabilities into your existing workflow with our comprehensive API suite.',
    icon: '🔗',
    gradient: 'from-emerald-500 to-green-600',
    details: ['RESTful APIs', 'WebSocket Support', 'SDK Libraries'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Gain deep insights into user behavior, content performance, and ROI with advanced analytics.',
    icon: '📊',
    gradient: 'from-pink-500 to-rose-600',
    details: ['Custom Reports', 'Predictive Metrics', 'A/B Testing'],
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and CCPA standards.',
    icon: '🔒',
    gradient: 'from-slate-500 to-gray-600',
    details: ['End-to-end Encryption', 'Zero-trust Architecture', 'Audit Logs'],
  },
]

export default function Features() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  
  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden" id="features">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-900/10 to-black" />
        <div className="absolute inset-0 aurora opacity-30" />
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
            <span className="chrome-text">Technology Stack</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with the latest AI advancements and cloud-native architecture to deliver 
            unparalleled performance and reliability.
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
              <div className="relative h-full p-8 rounded-2xl overflow-hidden">
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
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Feature Details */}
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full" />
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Learn More Link */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-6 inline-flex items-center gap-2 text-violet-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-400">Ready to transform your business?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}