import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    title: "Frontend & Smart Contract Developer",
    company: "For the People (TFT)",
    period: "2024 – present",
    location: "Remote, Texas, USA",
    description: [
      "Developed secure mailing service, reducing spam by 4,000 tickets/year.",
      "Deployed websites with 99.9% uptime, +18% user engagement.",
      "Implemented real-time dashboards, +15% data visibility, +10% conversions.",
    ],
  },
  {
    title: "Frontend & Backend Developer",
    company: "Pixsee",
    period: "2025 – Present",
    location: "Remote, Los Angeles, USA",
    description: [
      "Designed and developed a web3 application with robust Solidity smart contracts.",
      "Integrated with Ether.js, Thirdweb, Wagmi for seamless blockchain UX.",
      "Achieved 95%+ test coverage using Hardhat & Foundry.",
      "Resolved complex blockers, earning recognition and bonus.",
    ],
  },

  {
    title: "frontend developer",
    company: "Convexity",
    period: "2025-present",
    location: "Remote, Abuja, Nigeria",
    description: [
      "Maintained and updated organization website for optimal performance.",
      "Collaborated on technological infrastructure solutions.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
           <Card className="bg-slate-800/90 backdrop-blur-md border border-white/10 text-white">

                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <div className="flex justify-between items-center">
                    <CardDescription className="text-lg font-semibold">
                      {exp.company}
                    </CardDescription>
                    <span className="text-sm opacity-75">
                      {exp.period} • {exp.location}
                    </span>
                  </div>
                </CardHeader>
                <Separator className="bg-white/20" />
                <CardContent className="pt-4 space-y-2">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-sm opacity-90">
                      • {desc}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
