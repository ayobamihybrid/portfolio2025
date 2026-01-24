"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    const mailtoLink = `mailto:balogunayobami2023@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // toast.success("Message sent!")

    // Reset form
    setName('')
    setEmail('')
    setMessage('')
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-linear-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Let&apos;s Connect
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-600" />
                <span>balogunayobami2023@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-600" />
                <span>08105829483</span>
              </div>
            </div>
            <Button asChild className="mt-6 w-full md:w-auto">
              <Link href="https://www.linkedin.com/in/ayobami-balogun-423a18140/" target="_blank">LinkedIn</Link>
            </Button>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
            viewport={{ once: true }}
          >
            <Input 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <Textarea 
              placeholder="Your Message" 
              rows={5} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Opening...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}