"use client";

import { motion } from "framer-motion";

const float = (delay, amount = 7) => ({
  animate: { y: [0, -amount, 0] },
  transition: { duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay },
});

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
      <svg viewBox="0 0 400 320" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="170" rx="190" ry="150" fill="#FBEDE4" />

        <motion.path
          d="M150 95 Q140 70 155 50"
          stroke="#DD7A45" strokeWidth="3" strokeLinecap="round" fill="none"
          animate={{ y: [0, -10, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M250 95 Q260 70 245 50"
          stroke="#DD7A45" strokeWidth="3" strokeLinecap="round" fill="none"
          animate={{ y: [0, -10, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />

        <motion.g {...float(0.1, 8)}>
          <circle cx="138" cy="112" r="16" fill="#C24B6B" />
          <circle cx="138" cy="112" r="10" fill="#F5D3BC" />
          <line x1="138" y1="102" x2="138" y2="122" stroke="#C24B6B" strokeWidth="1.5" />
          <line x1="128" y1="112" x2="148" y2="112" stroke="#C24B6B" strokeWidth="1.5" />
        </motion.g>

        <motion.g {...float(0.4, 9)}>
          <rect x="228" y="118" width="6" height="15" fill="#5C7A45" />
          <circle cx="231" cy="110" r="7" fill="#3F5E3A" />
          <circle cx="222" cy="115" r="5.5" fill="#5C7A45" />
          <circle cx="240" cy="115" r="5.5" fill="#5C7A45" />
        </motion.g>

        <motion.g {...float(0.25, 6)}>
          <rect x="196" y="94" width="5" height="13" fill="#F7F8F3" />
          <path d="M178 94 Q198 74 219 94 Z" fill="#D9A441" />
        </motion.g>

        <motion.g {...float(0.55, 7)}>
          <path d="M272 100 Q294 94 299 116 Q293 132 277 123 Q265 112 272 100 Z" fill="#CC5B33" />
        </motion.g>

        <motion.g {...float(0.15, 6)}>
          <path d="M158 78 Q175 66 181 82 Q170 95 158 78 Z" fill="#5C7A45" />
        </motion.g>

        <motion.g {...float(0.6, 5)}>
          <circle cx="205" cy="85" r="5" fill="#E3B25C" />
        </motion.g>

        <ellipse cx="200" cy="218" rx="92" ry="16" fill="#24261F" opacity="0.12" />
        <ellipse cx="200" cy="206" rx="90" ry="34" fill="#2E2A26" />
        <ellipse cx="200" cy="200" rx="74" ry="24" fill="#3A342F" />
        <rect x="276" y="194" width="72" height="13" rx="6" fill="#8C5A3C" transform="rotate(-6 276 194)" />

        <path
          d="M182 248 Q188 230 200 248 Q212 230 218 248 Q212 260 200 260 Q188 260 182 248 Z"
          fill="#D9A441"
        />
      </svg>
    </div>
  );
}