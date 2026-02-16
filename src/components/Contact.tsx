"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [project, setProject] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, project }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error ?? 'Failed to send message.')
      }

      toast.success('Message sent successfully.')
      setName('')
      setEmail('')
      setProject('')
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-surface-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Get in touch</h2>
          <p className="mt-2 text-lg text-neutral-500">Contact Me</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-center text-3xl font-semibold text-neutral-900 lg:text-left">Talk to me</h3>

            <div className="mx-auto flex max-w-sm flex-col gap-5 lg:mx-0">
              <div className="rounded-2xl border border-neutral-300 bg-white/50 p-8 text-center">
                <Mail className="mx-auto mb-3 h-7 w-7 text-neutral-700" />
                <p className="text-2xl font-semibold text-neutral-900">Email</p>
                <p className="mt-1 break-all text-neutral-500">balogunayobami2023@gmail.com</p>
                <Link
                  href="mailto:balogunayobami2023@gmail.com"
                  className="mt-5 inline-flex items-center gap-2 text-lg font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  Write me <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>

              <div className="rounded-2xl border border-neutral-300 bg-white/50 p-8 text-center">
                <MessageCircle className="mx-auto mb-3 h-7 w-7 text-neutral-700" />
                <p className="text-2xl font-semibold text-neutral-900">Whatsapp</p>
                <p className="mt-1 text-neutral-500">08105829483</p>
                <Link
                  href="https://wa.me/2348105829483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-lg font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  Write me <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-xl space-y-7"
            viewport={{ once: true }}
          >
            <h3 className="text-center text-2xl md:text-3xl font-semibold text-neutral-900 lg:text-left">Write to me about your project</h3>

            <label className="relative block">
              <span className="absolute -top-3 left-4 bg-[#eaf0ff] px-2 text-lg text-neutral-600">Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-14 md:h-18 w-full rounded-2xl border-2 border-neutral-700 bg-transparent px-6 py-5 text-lg md:text-2xl text-neutral-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-neutral-950"
              />
            </label>

            <label className="relative block">
              <span className="absolute -top-3 left-4 bg-[#eaf0ff] px-2 text-lg text-neutral-600">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 md:h-18 w-full rounded-2xl border-2 border-neutral-700 bg-transparent px-6 py-5 text-lg md:text-2xl text-neutral-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-neutral-950"
              />
            </label>

            <label className="relative block">
              <span className="absolute -top-3 left-4 bg-[#eaf0ff] px-2 text-lg text-neutral-600">Project</span>
              <textarea
                placeholder="Tell me about your project"
                rows={5}
                value={project}
                onChange={(e) => setProject(e.target.value)}
                required
                className="w-full resize-none rounded-2xl border-2 border-neutral-700 bg-transparent px-6 py-5 text-lg md:text-2xl text-neutral-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-neutral-950"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 rounded-3xl bg-neutral-900 px-6 md:px-10 py-3 md:py-5 text-lg md:text-xl font-semibold text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="h-6 w-6" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
