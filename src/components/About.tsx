import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const summary = `Hi, I’m Ayobami, a Frontend/smart contract developer with a strong foundation in Backend Development. From creating seamless and dynamic user interfaces to writing smart contracts using Solidity, Foundry, wagmi, ethers etc, I’m passionate about building modern decentralized applications.

Let’s connect!`;

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed mb-8">{summary}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Web3 Enthusiast</Badge>
              <Badge variant="secondary">Solidity Developer</Badge>
              <Badge variant="secondary">React/Next.js Expert</Badge>
            </div>
          </div>
          <Avatar className="w-64 h-64 mx-auto md:mx-0">
            <AvatarImage src="/portfolio-image.jpg" alt="Ayobami" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </section>
  );
}
