'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '500M+', label: 'Data Points Processed', description: 'Daily processing volume' },
  { value: '99.9%', label: 'Uptime Guarantee', description: 'Enterprise-grade reliability' },
  { value: '<50ms', label: 'API Response Time', description: 'Lightning-fast performance' },
  { value: '150+', label: 'Enterprise Clients', description: 'Fortune 500 companies' },
]

const timeline = [
  {
    year: '2023',
    title: 'Foundation & Vision',
    description: 'Founded in Texas with a mission to revolutionize AI-powered curation',
    icon: '🌟',
  },
  {
    year: '2024',
    title: 'Geter.ai Launch',
    description: 'Launched our flagship AI platform with advanced natural language processing',
    icon: '🚀',
  },
  {
    year: '2024',
    title: 'Series A Funding',
    description: 'Secured $15M Series A led by prominent Silicon Valley investors',
    icon: '💎',
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Expanding operations while maintaining our core presence in the US',
    icon: '🌍',
  },
]

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  
  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/20 to-black" />
        <motion.div
          style={{ y, rotate }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-fuchsia-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
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
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-300">Delaware C-Corp • Texas Based</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Redefining</span>
            <br />
            <span className="chrome-text">Digital Intelligence</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Born from the innovation hubs of America, we're building the next generation 
            of AI-powered curation technology that scales globally while staying true to our roots.
          </p>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="group text-center"
            >
              <div className="relative p-6 rounded-2xl bg-glass-darker hover:bg-glass transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="text-3xl lg:text-4xl font-bold text-gradient mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">American Innovation,</span>
              <br />
              <span className="text-white">Global Impact</span>
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded in the heart of Texas, Currate represents the convergence of 
                American entrepreneurship and cutting-edge AI technology. Our team of 
                world-class engineers and data scientists work from our Austin headquarters 
                to deliver solutions that power businesses across the globe.
              </p>
              <p>
                As a Delaware C-Corporation, we maintain the highest standards of 
                corporate governance while fostering an innovative culture that attracts 
                top talent from leading tech companies and research institutions.
              </p>
              <p>
                Our flagship product, <span className="text-violet-400 font-semibold">Geter.ai</span>, 
                exemplifies our commitment to pushing the boundaries of what's possible 
                in artificial intelligence and automated curation.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-glass rounded-lg">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-glass rounded-lg">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.447.894L10 15.118l-4.553 1.776A1 1 0 014 16V4z" />
                </svg>
                <span className="text-sm text-gray-300">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-glass rounded-lg">
                <div className="w-3 h-2 bg-gradient-to-r from-red-500 via-white to-blue-500 rounded-sm" />
                <span className="text-sm text-gray-300">US-Based</span>
              </div>
            </div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-glass-darker">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 rounded-3xl" />
              <div className="relative">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.05 }}
                      className="aspect-square rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-xl"
                    />
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Austin, Texas HQ</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-green-400">Online • 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Our Journey</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 opacity-30" />
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full -translate-x-1/2" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="p-6 rounded-2xl bg-glass-darker hover:bg-glass transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-lg font-bold text-violet-400">{item.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}