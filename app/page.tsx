'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-1 px-6 py-3 rounded-full bg-glass-darker backdrop-blur-xl border border-white/10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            Features
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            About
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            Contact
          </motion.button>
          <div className="w-px h-4 bg-gray-600 mx-2" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/d/cq9f-2qp-8ty/geter-ai', '_blank')}
            className="px-4 py-2 text-sm bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
          >
            Book Demo
          </motion.button>
        </div>
      </motion.nav>
      
      {/* Page Sections */}
      <Hero />
      <Features />
      <About />
      <Contact />
      
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dynamic Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        />
        
        {/* Particle System */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-violet-400 rounded-full"
            />
          ))}
        </div>
      </div>
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-cyan-600 to-violet-600 z-50"
        style={{
          scaleX: 0,
          transformOrigin: "0%"
        }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: "all" }}
      />
    </main>
  )
}