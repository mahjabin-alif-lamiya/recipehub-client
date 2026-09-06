"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroIllustration from "@/components/HeroIllustration";
import FeaturedSection from "@/components/home/FeaturedSection";
import PopularSection from "@/components/home/PopularSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CategoriesSection from "@/components/home/CategoriesSection";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Real recipes, real kitchens</p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
              Share what&apos;s
              <br />
              <span className="italic text-spice-500">cooking.</span>
            </h1>
            <p className="mt-5 max-w-[46ch] text-ink/70 dark:text-ink-dark/70">
              RecipeHub is where home cooks write down what they make, so
              everyone else has something to make tonight. Post a recipe,
              save the ones you love, and build a shelf worth returning to.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <p
              className="script-accent absolute -top-7 right-6 z-10 text-2xl text-spice-600 dark:text-spice-100"
              style={{ transform: "rotate(-4deg)" }}
            >
              cooked with love
            </p>
            <div className="card-punch overflow-hidden rounded-card bg-spice-50 pt-4 ring-1 ring-ink/8 dark:bg-spice-700/20 dark:ring-ink-dark/10">
              <div className="relative mx-4 mb-4 aspect-[4/3] overflow-hidden rounded-[6px]">
                <HeroIllustration />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-card bg-mustard-500 px-4 py-3 text-sm font-medium text-ink shadow-sm sm:block">
              New recipe added every few minutes
            </div>
          </motion.div>
        </div>
      </section>

      <FeaturedSection />
      <PopularSection />
      <HowItWorksSection />
      <CategoriesSection />
    </>
  );
}