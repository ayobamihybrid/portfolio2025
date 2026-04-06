"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

const contactCards = [
  {
    title: 'Email',
    value: 'balogunayobami2023@gmail.com',
    href: 'mailto:balogunayobami2023@gmail.com',
    icon: Mail,
  },
  {
    title: 'Whatsapp',
    value: '08105829483',
    href: 'https://wa.me/2348105829483',
    external: true,
    icon: MessageCircle,
  },
]

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
              {contactCards.map((card, index) => {
                const Icon = card.icon

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 + index * 0.12 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={card.href}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noopener noreferrer' : undefined}
                      className="group relative block overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/75 p-8 text-center shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_28px_60px_-28px_rgba(37,99,235,0.32)]"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_46%),linear-gradient(135deg,rgba(255,255,255,0.84),rgba(236,243,255,0.9))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute -right-12 top-0 h-28 w-28 rounded-full bg-sky-200/40 blur-3xl transition-all duration-500 group-hover:right-0 group-hover:top-2" />
                      <span className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-indigo-200/30 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.9)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-sky-600 group-hover:shadow-[0_18px_35px_-18px_rgba(37,99,235,0.65)]">
                          <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                        </div>

                        <p className="text-2xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-slate-950">
                          {card.title}
                        </p>
                        <p className="mt-1 break-all text-neutral-500 transition-colors duration-300 group-hover:text-slate-600">
                          {card.value}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-2 text-lg font-medium text-neutral-600 transition-all duration-300 group-hover:gap-3 group-hover:text-sky-700">
                          Write me
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
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
