"use client"

import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import type { Engine } from "@tsparticles/engine"
import type { ISourceOptions } from "@tsparticles/engine"

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"))
    })
    observer.observe(html, { attributes: true, attributeFilter: ["class"] })
    setIsDark(html.classList.contains("dark"))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: "transparent",
    },
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
      },
      color: {
        value: isDark ? "#ffffff" : "#888888",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
      },
      size: {
        value: { min: 0.7, max: 1.7 },
      },
      move: {
        enable: true,
        speed: 1.2,
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
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
      },
    },
  }

  if (!init) {
    return null
  }

  return <Particles id="tsparticles" options={options} />
}
