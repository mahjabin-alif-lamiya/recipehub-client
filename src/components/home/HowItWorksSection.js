const steps = [
  {
    title: "Write it down",
    body: "Add the ingredients, the steps, and whatever detail you'd want if a friend were cooking it.",
  },
  {
    title: "Share it",
    body: "Your recipe joins the shelf for anyone browsing by category, cuisine, or craving.",
  },
  {
    title: "Get cooking",
    body: "Save recipes you want to try, like the ones that turn out well, and come back for more.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">The basics</p>
      <h2 className="mt-2 font-display text-3xl font-semibold">How RecipeHub works</h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="border-l-2 border-spice-500 pl-5">
            <p className="font-display text-3xl font-bold text-spice-500">{i + 1}</p>
            <p className="mt-2 font-medium">{step.title}</p>
            <p className="mt-1 text-sm text-ink/65 dark:text-ink-dark/65">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}