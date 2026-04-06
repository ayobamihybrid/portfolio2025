import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Smart Contract & Frontend Developer - lead developer",
    company: "Daffy",
    period: "2024 – present",
    location: "Remote, Texas, USA",
    description: [
      "Designed and developed a web3 application with robust Solidity smart contracts.",
      "Integrated with Thirdweb, Wagmi, privy, for seamless blockchain UX.",
      "Achieved 99%+ test coverage using Foundry.",
      "Resolved complex blockers, earning recognition and bonus.",
    ],
  },
  {
    title: "Smart Contract & Frontend Developer - lead developer",
    company: "Pixsee",
    period: "2025 – Present",
    location: "Remote, Los Angeles, USA",
    description: [
      "Head the frontend team to develop dynamic dashboards, user interfaces for the Pixsee website, ensuring a seamless user experience in a web3 environment.",
      "Played a key role in developing and deploying smart contracts, and seamlessly integrated them with the frontend using Wagmi, Viem, and Privy.",
      "Participate actively in stand-ups and sprint planning to ensure alignment and timely delivery of project milestones.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Convexity",
    period: "2025-present",
    location: "Remote, Abuja, Nigeria",
    description: [
      "Collaborated on diverse front-end projects, actively contributing to design, development, and deployment to meet project objectives.",
      "Participated in team meetings to contribute to project planning and execution, ensuring alignment with goals and timelines.",
      "Maintained and updated organization website for optimal performance. Collaborated on technological infrastructure solutions.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Mular",
    period: "2026-present",
    location: "Remote, Lagos, Nigeria",
    description: [
      "Built and refined high-converting landing pages and product flows, improving clarity and user trust across key touchpoints.",
      "Translated Figma concepts into responsive Vue interfaces with strong attention to accessibility and performance.",
      "Partnered with product and engineering teams during sprint cycles to ship features on schedule and reduce UI rework.",
      "Improved maintainability by organizing reusable UI patterns and cleaner component structure across front-end modules.",
    ],
  },
  {
    title: "Freelance Frontend & Backend Developer - lead developer",
    company: "SEO Africa",
    period: "2025",
    location: "Remote",
    description: [
      "Built complete client websites end-to-end, handling design implementation, frontend architecture, backend APIs, and deployment independently.",
      "Developed content-managed backend systems with Strapi CMS, enabling non-technical teams to update pages, media, and structured content.",
      "Integrated React/Next.js frontends with Strapi APIs for dynamic pages, forms, and admin-managed content blocks.",
      "Delivered a full production website in under one month, from planning and development through launch and post-release fixes.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Professional Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center text-slate-600"
        >
          Frontend-focused roles across web3 and product teams, delivering
          production-ready interfaces and scalable user experiences.
        </motion.p>

        <div className="relative mx-auto max-w-5xl space-y-6 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-slate-300/80 sm:space-y-8 sm:before:left-7">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-8 sm:pl-16"
            >
              <span className="absolute left-[0.125rem] top-6 z-10 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-slate-900 shadow-sm sm:left-[1.125rem] sm:top-8" />
              <article className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.5)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8">
                <div className="flex flex-col items-start gap-2 text-xs font-medium text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:text-sm">
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                    <BriefcaseBusiness className="h-4 w-4" />
                    <span className="truncate">{exp.company}</span>
                  </span>
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
                    <CalendarDays className="h-4 w-4" />
                    <span className="truncate">{exp.period}</span>
                  </span>
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{exp.location}</span>
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900 sm:text-2xl">
                  {exp.title}
                </h3>

                <div className="mt-4 space-y-2 sm:mt-5">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-sm leading-relaxed text-slate-700 sm:text-base">
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-500 align-middle" />
                      {desc}
                    </p>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
