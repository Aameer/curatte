'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactMethods = [
  {
    icon: '📧',
    title: 'Email Support',
    description: 'Get in touch with our team',
    value: 'support@geter.ai',
    action: 'mailto:support@geter.ai',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '📅',
    title: 'Schedule a Demo',
    description: 'Book a personalized walkthrough',
    value: 'Available 24/7',
    action: 'https://calendly.com/d/cq9f-2qp-8ty/geter-ai',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: '🚀',
    title: 'Enterprise Sales',
    description: 'Custom solutions for large teams',
    value: 'White-glove onboarding',
    action: 'https://calendly.com/d/cq9f-2qp-8ty/geter-ai',
    gradient: 'from-emerald-500 to-teal-500',
  },
]

const faqs = [
  {
    question: 'How quickly can we integrate Geter.ai?',
    answer: 'Most integrations are completed within 24-48 hours using our comprehensive API and SDK libraries. Our team provides white-glove onboarding support.',
  },
  {
    question: 'What makes your coupon aggregation different?',
    answer: 'Our AI validates coupons in real-time, preventing expired or fraudulent codes. We process over 500M data points daily with 99.9% accuracy.',
  },
  {
    question: 'Is my data secure with Currate?',
    answer: 'Absolutely. We\'re SOC 2 Type II compliant, GDPR compliant, and use bank-grade encryption. All data is processed in secure US-based data centers.',
  },
  {
    question: 'Can I customize the curation algorithms?',
    answer: 'Yes, our platform offers extensive customization options. You can train models on your specific data and adjust algorithms to match your business needs.',
  },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  
  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-violet-900/5 to-black" />
        <div className="absolute inset-0 cyber-grid opacity-10" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-300">Ready to Connect</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Let's Build</span>
            <br />
            <span className="text-white">The Future Together</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with AI-powered curation? 
            Our team is standing by to create a custom solution for your needs.
          </p>
        </motion.div>
        
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => {
                if (method.action.startsWith('http')) {
                  window.open(method.action, '_blank')
                } else {
                  window.location.href = method.action
                }
              }}
            >
              <div className="relative h-full p-8 rounded-2xl overflow-hidden">
                {/* Background Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-glass-darker" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Animated Border */}
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-violet-500/50 via-transparent to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-xl mb-6"
                  >
                    <span className="text-3xl">{method.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{method.description}</p>
                  <div className="text-sm font-medium text-violet-400">{method.value}</div>
                  
                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 inline-flex items-center gap-2 text-violet-400"
                  >
                    <span className="text-sm">Connect now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="relative inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendly.com/d/cq9f-2qp-8ty/geter-ai', '_blank')}
              className="group relative px-12 py-6 overflow-hidden rounded-2xl font-bold text-xl text-white"
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Button Content */}
              <span className="relative flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Your Demo Today
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" />
          </div>
          
          <p className="text-gray-400 mt-6">
            ⚡ Instant setup • 💬 24/7 support • 🔒 Enterprise security
          </p>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left rounded-2xl bg-glass-darker hover:bg-glass transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h4>
                    <motion.svg
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-violet-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-24 pt-12 border-t border-gray-800 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-400">
              <p>&copy; 2024 Currate. Delaware C-Corporation. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-gray-500">
              <span className="text-sm">Built with 💜 in Texas</span>
              <div className="w-px h-4 bg-gray-700" />
              <span className="text-sm">Powered by Geter.ai</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}