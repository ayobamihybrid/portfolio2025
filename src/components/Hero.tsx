"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = "Fullstack Web3 Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg text-white px-4 py-12">
      <div className="container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 min-h-[2.5em] sm:min-h-[1.5em]">
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            Building seamless UIs and secure smart contracts for the decentralized future.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto">
              <Link href="/Ayobami-resume.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-white text-white hover:bg-white/10">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-2 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <Button variant="ghost" size="icon" asChild className="hover:bg-white/10">
              <Link href="https://github.com/ayobamihybrid" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-white/10">
              <Link href="https://www.linkedin.com/in/ayobami-balogun-423a18140/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-white/10">
              <Link href="https://twitter.com/AyobamiWorld" target="_blank">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}