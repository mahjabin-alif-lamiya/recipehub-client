"use client";

import { motion } from "framer-motion";
import {
  FaPizzaSlice,
  FaCookie,
  FaMugHot,
  FaBreadSlice,
  FaIceCream,
  FaHamburger,
  FaDrumstickBite,
  FaBirthdayCake,
} from "react-icons/fa";

function Chip({ Icon, label, bg, fg, rotate, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
      }}
      className="flex flex-col items-center gap-1.5"
    >
      <span
        className={`grid h-16 w-16 place-items-center rounded-full ${bg} shadow-sm`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <Icon className={fg} size={28} />
      </span>
      <span className="text-xs font-medium text-ink/60 dark:text-ink-dark/60">{label}</span>
    </motion.div>
  );
}

export default function HeroScatter() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
      <div className="absolute inset-x-0 top-2 flex justify-between px-6 md:px-16">
        <Chip Icon={FaPizzaSlice} label="Pizza" bg="bg-spice-50 dark:bg-spice-600/25" fg="text-spice-600 dark:text-spice-300" rotate={-8} delay={0.15} />
        <Chip Icon={FaBirthdayCake} label="Cake" bg="bg-berry-50 dark:bg-berry-600/25" fg="text-berry-500 dark:text-berry-300" rotate={5} delay={0.25} />
        <Chip Icon={FaCookie} label="Cookies" bg="bg-berry-50 dark:bg-berry-600/25" fg="text-berry-500 dark:text-berry-300" rotate={8} delay={0.35} />
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center md:left-4">
        <Chip Icon={FaMugHot} label="Coffee" bg="bg-mustard-50 dark:bg-mustard-600/25" fg="text-mustard-600 dark:text-mustard-300" rotate={6} delay={0.45} />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center md:right-4">
        <Chip Icon={FaBreadSlice} label="Bread" bg="bg-herb-50 dark:bg-herb-600/25" fg="text-herb-600 dark:text-herb-300" rotate={-6} delay={0.55} />
      </div>

      <div className="absolute inset-x-0 bottom-2 flex justify-between px-6 md:px-16">
        <Chip Icon={FaIceCream} label="Dessert" bg="bg-sky-50 dark:bg-sky-600/25" fg="text-sky-600 dark:text-sky-300" rotate={10} delay={0.65} />
        <Chip Icon={FaDrumstickBite} label="Chicken" bg="bg-brick-400/10 dark:bg-brick-600/25" fg="text-brick-500 dark:text-brick-400" rotate={-4} delay={0.75} />
        <Chip Icon={FaHamburger} label="Fast Food" bg="bg-herb-50 dark:bg-herb-600/25" fg="text-herb-600 dark:text-herb-300" rotate={-10} delay={0.85} />
      </div>
    </div>
  );
}