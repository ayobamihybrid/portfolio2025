import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "HND/Computer Science",
    school: "Moshood Abiola Polytechnic",
    period: "2019 – 2021"
  },
  {
    degree: "ND/Computer Science",
    school: "Moshood Abiola Polytechnic",
    period: "2014 – 2016"
  },
  {
    degree: "Senior Secondary Certificate",
    school: "Ceclam College",
    period: "2006 – 2012"
  },
  {
    degree: "Primary School Leaving Certificate",
    school: "Ceclam Nursery and Primary School",
    period: "2000 – 2006"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-1">
                  <p className="font-semibold">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}