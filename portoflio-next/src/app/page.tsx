import { AboutSection } from '@/components/sections/about/page';
import HomePage from '@/components/sections/home/page';
import { ProjectSection } from '@/components/sections/projects/page';
import { SkillSection } from '@/components/sections/skills/page';


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
        <div key={section.key}>
          {section}
        </div>
      ))}
    </div>
  )
}
