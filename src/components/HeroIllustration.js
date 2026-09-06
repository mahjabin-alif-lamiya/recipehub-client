import { FiClock, FiHeart } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";

// A mockup of what a real recipe card looks like in the app, shown
// as a small stack for depth. Static — no looping animation.
export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-sm py-6">
      <div className="absolute inset-x-6 top-8 h-full rounded-card bg-mustard-100 dark:bg-mustard-600/20" style={{ transform: "rotate(6deg)" }} />
      <div className="absolute inset-x-6 top-4 h-full rounded-card bg-herb-100 dark:bg-herb-600/20" style={{ transform: "rotate(-4deg)" }} />

      <div
        className="relative overflow-hidden rounded-card bg-surface ring-1 ring-ink/8 dark:bg-surface-dark dark:ring-ink-dark/10"
        style={{ transform: "rotate(-2deg)" }}
      >
        <div className="flex h-40 items-center justify-center bg-gradient-to-br from-spice-400 to-mustard-400 sm:h-48">
          <FaUtensils className="text-white/90" size={36} />
        </div>
        <div className="space-y-2 p-5">
          <span className="inline-block rounded-full bg-spice-50 px-2.5 py-1 text-xs font-medium text-spice-600 dark:bg-spice-600/20 dark:text-spice-400">
            Soup
          </span>
          <h3 className="font-display text-xl font-semibold">Grandma&apos;s Tomato Soup</h3>
          <div className="flex items-center justify-between text-sm text-ink/60 dark:text-ink-dark/60">
            <span className="flex items-center gap-1.5"><FiClock size={14} /> 25 mins</span>
            <span className="flex items-center gap-1.5"><FiHeart size={14} /> 482</span>
          </div>
        </div>
      </div>
    </div>
  );
}