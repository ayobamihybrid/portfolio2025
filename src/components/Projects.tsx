import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Globe, Sparkles } from 'lucide-react'

const projects = [
  {
    title: "cNGN",
    description: "Nigeria's first regulated stablecoin for capital markets and financial ops.",
    link: "https://cngn.co",
    stack: ["Next.js", "Web3", "Fintech"],
    accent: "from-sky-500/20 via-cyan-400/10 to-transparent",
  },
  {
    title: "Scrybit",
    description: "State-of-the-art crypto wallet for secure digital asset management.",
    link: "https://scrybit.io",
    stack: ["React", "Wallet UX", "Security"],
    accent: "from-emerald-500/20 via-teal-400/10 to-transparent",
  },
  {
    title: "Seo Africa",
    description: "A non-profit leadership organisation with over a decade of experience in talent development across Africa.",
    link: "https://seo-africa.org/",
    stack: ["Non-profit", "Frontend", "Content"],
    accent: "from-orange-500/20 via-amber-400/10 to-transparent",
  },
]

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <section id="projects" className="section-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center text-slate-600"
        >
          Selected work across web3, product platforms, and mission-driven organizations.
        </motion.p>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-[0_28px_70px_-30px_rgba(15,23,42,0.8)]"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-400/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-8 h-44 w-44 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              Highlighted Project
            </div>
            <h3 className="text-2xl font-semibold sm:text-3xl">{featuredProject.title}</h3>
            <p className="mt-3 max-w-2xl text-slate-200">{featuredProject.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featuredProject.stack.map((item) => (
                <span key={item} className="rounded-full bg-white/15 px-3 py-1 text-sm">
                  {item}
                </span>
              ))}
            </div>
            <Link
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Visit Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.article>

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_-25px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_-25px_rgba(15,23,42,0.55)]">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${proj.accent} opacity-100`} />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    <Globe className="h-3.5 w-3.5" />
                    Live Product
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{proj.title}</h3>
                  <p className="mt-3 text-slate-600">{proj.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {proj.stack.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-700"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
