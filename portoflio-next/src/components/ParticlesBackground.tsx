"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    setIsDark(html.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  initParticlesEngine(async (engine: Engine) => {
    await loadFull(engine);
  });

  const options = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "transparent" },
    particles: {
      number: {
        value: 100,
        density: { enable: true, area: 800 },
      },
      color: { value: isDark ? "#ffffff" : "#888888" },
      shape: { type: "circle" },
      opacity: { value: 0.8, random: true },
      size: { value: 1.2, random: { enable: true, minimumValue: 0.5 } },
      move: {
        enable: true,
        speed: 0.9,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
  };

  return <Particles id="tsparticles" options={options} />;
}
