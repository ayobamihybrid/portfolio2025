import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const summary = `Hi, I’m Ayobami, a Frontend/smart contract and mobile developer with 4 years of hands-on experience building and managing innovative products that deliver exceptional user experiences. From creating seamless and dynamic user interfaces to writing smart contracts using Solidity, I’m passionate about building modern decentralized applications.

Let’s connect!`;

export default function About() {
  return (
    <section id="about" className="section-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,360px)] lg:gap-14 md:items-center"
        >
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-3xl font-bold text-black">About Me</h2>
            <p className="mb-8 text-lg leading-relaxed text-black">{summary}</p>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              <Badge variant="secondary">Web3 Enthusiast</Badge>
              <Badge variant="secondary">Solidity Developer</Badge>
              <Badge variant="secondary">React/Next.js Expert</Badge>
              <Badge variant="secondary">ReactNative/Expo Expert</Badge>
            </div>
          </div>
          <div className="flex justify-center">
            <Avatar className="h-64 w-64 lg:h-80 lg:w-80">
            <AvatarImage src="/portfolio-image.jpg" alt="Ayobami"/>
            <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
