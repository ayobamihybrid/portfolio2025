import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Button } from './ui/button'

const projects = [
  {
    title: "cNGN",
    description: "Nigeria's first regulated stablecoin for capital markets and financial ops.",
    link: "https://cngn.co" 
  },

  {
    title: "Scrybit",
    description: "State-of-the-art crypto wallet for secure digital asset management.",
    link: "https://scrybit.io"
  },
 
  {
    title: "Seo Africa",
    description: "Micro-series streaming & creator market on blockchain Attention Layer Protocol.",
    link: "https://seo-africa.org/"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>{proj.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{proj.description}</CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <Link href={proj.link} target="_blank">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}