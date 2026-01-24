"use client";

import { useState, useEffect, useMemo } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate particle styles once on mount (stable across renders)
  const particleStyles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i, // For stable key
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
    }));
  }, []); // Empty deps = compute once

  return (
    <div className="relative overflow-hidden">
      {/* Floating Particles */}
      <div className="particles hidden md:block">
        {particleStyles.map((style) => (
          <div
            key={style.id} // Use stable id, not index
            className="particle"
            style={{
              left: style.left,
              animationDelay: style.animationDelay,
              animationDuration: style.animationDuration,
            }}
          />
        ))}
      </div>

      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        {/* <Education /> */}
        <Contact />
      </main>
    </div>
  );
}
