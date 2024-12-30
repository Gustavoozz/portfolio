"use client";
import { AboutSection } from '@/components/sections/about/page';
import HomePage from '@/components/sections/home/page';
import { ProjectSection } from '@/components/sections/projects/page';
import { SkillSection } from '@/components/sections/skills/page';

import { motion } from 'framer-motion';


export default function RootPage() {
  const sections = [
    <HomePage key={Math.random()} />,
    <SkillSection key={Math.random()} />,
    <AboutSection key={Math.random()} />,
    <ProjectSection key={Math.random()} />
  ];

  return (
    <div>
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
    </div>
  )
}
