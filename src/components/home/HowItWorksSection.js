import { FiEdit3, FiShare2 } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";

const steps = [
  {
    title: "Write it down",
    body: "Add the ingredients, the steps, and whatever detail you'd want if a friend were cooking it.",
    Icon: FiEdit3,
    bg: "bg-mustard-50 dark:bg-mustard-600/20",
    fg: "text-mustard-600 dark:text-mustard-400",
  },
  {
    title: "Share it",
    body: "Your recipe joins the shelf for anyone browsing by category, cuisine, or craving.",
    Icon: FiShare2,
    bg: "bg-herb-50 dark:bg-herb-600/20",
    fg: "text-herb-600 dark:text-herb-400",
  },
  {
    title: "Get cooking",
    body: "Save recipes you want to try, like the ones that turn out well, and come back for more.",
    Icon: FaUtensils,
    bg: "bg-berry-50 dark:bg-berry-600/20",
    fg: "text-berry-600 dark:text-berry-400",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">The basics</p>
      <h2 className="mt-2 font-display text-3xl font-semibold">How RecipeHub works</h2>

      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        {steps.map(({ title, body, Icon, bg, fg }) => (
          <div key={title}>
            <span className={`grid h-14 w-14 place-items-center rounded-full ${bg}`}>
              <Icon className={fg} size={22} />
            </span>
            <p className="mt-4 font-medium">{title}</p>
            <p className="mt-1 text-sm text-ink/65 dark:text-ink-dark/65">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}