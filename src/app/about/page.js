import Link from "next/link";
import { FiTarget, FiEye, FiUsers, FiCompass, FiShare2, FiStar } from "react-icons/fi";

const values = [
  { title: "Our Mission", body: "To make it easy for anyone to write down a recipe and have it actually be findable later.", Icon: FiTarget, bg: "bg-mustard-50 dark:bg-mustard-600/20", fg: "text-mustard-600 dark:text-mustard-400" },
  { title: "Our Vision", body: "A place where sharing a recipe is as normal as sharing a photo.", Icon: FiEye, bg: "bg-berry-50 dark:bg-berry-600/20", fg: "text-berry-600 dark:text-berry-400" },
  { title: "Our Values", body: "Community, creativity, and good food, kept simple and free of clutter.", Icon: FiUsers, bg: "bg-herb-50 dark:bg-herb-600/20", fg: "text-herb-600 dark:text-herb-400" },
];

const features = [
  { title: "Discover New Flavors", body: "Browse recipes across cuisines and categories.", Icon: FiCompass, bg: "bg-spice-50 dark:bg-spice-600/20", fg: "text-spice-600 dark:text-spice-400" },
  { title: "Share Your Creations", body: "Publish your own recipes in a few minutes.", Icon: FiShare2, bg: "bg-herb-50 dark:bg-herb-600/20", fg: "text-herb-600 dark:text-herb-400" },
  { title: "Be Part of a Community", body: "Like, save, and follow what others are cooking.", Icon: FiUsers, bg: "bg-sky-50 dark:bg-sky-600/20", fg: "text-sky-600 dark:text-sky-400" },
  { title: "Grow Together", body: "The more people share, the better the shelf gets.", Icon: FiStar, bg: "bg-mustard-50 dark:bg-mustard-600/20", fg: "text-mustard-600 dark:text-mustard-400" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-16 text-center md:pt-24">
        <p className="eyebrow">About RecipeHub</p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
          More than recipes,
          <br />
          <span className="italic text-spice-500">it&apos;s a community.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-ink/70 dark:text-ink-dark/70">
          RecipeHub is a space where anyone can share their recipes, discover
          new flavors, and celebrate the everyday work of cooking for people
          you care about.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/register"
            className="rounded-full bg-spice-500 px-6 py-3 text-sm font-medium text-white hover:bg-spice-600"
          >
            Join our community
          </Link>
          <Link
            href="/browse-recipes"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium hover:bg-ink/5 dark:border-ink-dark/20 dark:hover:bg-white/5"
          >
            Browse recipes
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <p className="eyebrow text-center">Our story</p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold">
          A shared kitchen for a better tomorrow
        </h2>
        <p className="mx-auto mt-5 max-w-[62ch] text-center text-ink/70 dark:text-ink-dark/70">
          Most good recipes live in someone&apos;s head, a scrap of paper, or
          a screenshot buried in a camera roll. RecipeHub started as a way to
          write a recipe down once and have it actually stay findable — by
          the person who wrote it, and by anyone else looking for something
          to cook tonight.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map(({ title, body, Icon, bg, fg }) => (
            <div key={title} className="rounded-card bg-surface p-6 text-center ring-1 ring-ink/8 dark:bg-surface-dark dark:ring-ink-dark/10">
              <span className={`mx-auto grid h-12 w-12 place-items-center rounded-full ${bg}`}>
                <Icon className={fg} size={20} />
              </span>
              <p className="mt-3 font-medium">{title}</p>
              <p className="mt-1 text-sm text-ink/65 dark:text-ink-dark/65">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="eyebrow text-center">Why RecipeHub</p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold">
          Because food is better together
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, body, Icon, bg, fg }) => (
            <div key={title} className="rounded-card bg-surface p-6 ring-1 ring-ink/8 dark:bg-surface-dark dark:ring-ink-dark/10">
              <span className={`grid h-12 w-12 place-items-center rounded-full ${bg}`}>
                <Icon className={fg} size={20} />
              </span>
              <p className="mt-4 font-medium">{title}</p>
              <p className="mt-1 text-sm text-ink/65 dark:text-ink-dark/65">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-herb-700 p-8 text-white sm:flex-row sm:items-center dark:bg-herb-700">
          <div>
            <h2 className="font-display text-2xl font-semibold">Ready to share your first recipe?</h2>
            <p className="mt-1 text-white/75">Join RecipeHub and add it to the shelf.</p>
          </div>
          <Link
            href="/register"
            className="rounded-full bg-spice-500 px-6 py-3 text-sm font-medium text-white hover:bg-spice-600"
          >
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}