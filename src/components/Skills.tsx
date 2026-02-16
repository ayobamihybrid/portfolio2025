import { motion } from "framer-motion";

const skills = [
  { name: "Solidity", level: 90 },
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "TailwindCSS", level: 95 },
  { name: "Foundry/Hardhat", level: 80 },
  { name: "Ethers.js/Wagmi", level: 90 },
  { name: "Node.js/Express", level: 80 },
  { name: "Vue/Nuxt", level: 80 },
  { name: "MongoDB/Firestore", level: 80 },
  { name: "Git/Figma", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="section-surface-alt py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1 + 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
