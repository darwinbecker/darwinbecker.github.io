"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.08, staggerChildren: 0.12 },
  },
}

type MotionChildrenProps = {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className }: MotionChildrenProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({ children, className }: MotionChildrenProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      variants={groupVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: MotionChildrenProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={shouldReduceMotion ? undefined : revealVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
    >
      {children}
    </motion.div>
  )
}
