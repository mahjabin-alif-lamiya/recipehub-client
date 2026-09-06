"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroScatter from "@/components/HeroScatter";
import FeaturedSection from "@/components/home/FeaturedSection";
import PopularSection from "@/components/home/PopularSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CategoriesSection from "@/components/home/CategoriesSection";

export default function HomePage() {
  return (
    <>
      <section className="relative mx-auto max-w-3xl px-5 pb-32 pt-20 text-center md:pb-40 md:pt-28">
        <HeroScatter />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Real recipes, real kitchens
        </motion.p>

        <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="block"
          >
            Share what&apos;s
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
            className="block italic text-spice-500"
          >
            cooking.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mx-auto mt-5 max-w-[34ch] text-ink/70 dark:text-ink-dark/70"
        >
          Write down what you cook, save the recipes you love, and build a
          shelf worth returning to.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/browse-recipes"
            className="rounded-full bg-spice-500 px-6 py-3 text-sm font-medium text-white hover:bg-spice-600"
          >
            Browse recipes
          </Link>
          <Link
            href="/dashboard/add-recipe"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium hover:bg-ink/5 dark:border-ink-dark/20 dark:hover:bg-white/5"
          >
            Share a recipe
          </Link>
        </motion.div>
      </section>

      <FeaturedSection />
      <PopularSection />
      <HowItWorksSection />
      <CategoriesSection />
    </>
  );
}