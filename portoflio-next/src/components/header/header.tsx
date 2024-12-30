"use client";
import { Nav } from '../nav/nav'
import { motion } from 'framer-motion'

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full h-12 bg-transparent">
      <Nav />
    </motion.div>
  )
}