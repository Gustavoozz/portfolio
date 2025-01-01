"use client";

import { ButtonGoBack } from '@/components/button/button';
import { Footer } from '@/components/footer/footer';
import { AboutSection } from '@/components/sections/about/page';
import HomePage from '@/components/sections/home/page';
import { ProjectSection } from '@/components/sections/projects/page';
import { SkillSection } from '@/components/sections/skills/page';

import { motion } from 'framer-motion';

const scrollToHome = () => {
  const section = document.getElementById('home');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  } else {
    console.error("Seção com o ID 'home' não encontrada.");
  }
};

export default function RootPage() {
  const sections = [
    <HomePage key="home" />,
    <SkillSection key="skills" />,
    <AboutSection key="about" />,
    <ProjectSection key="projects" />
  ];

  return (
    <div>
      <ButtonGoBack onClick={scrollToHome} />
      {sections.map((section) => (
        <motion.div
          key={section.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {section}
        </motion.div>
      ))}
      <Footer />
    </div>
  );
}
