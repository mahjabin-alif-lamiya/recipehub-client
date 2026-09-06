export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-display text-3xl">About RecipeHub</h1>
      <p className="mt-5 text-ink/70 dark:text-ink-dark/70">
        RecipeHub started as a simple idea: most good recipes live in
        someone&apos;s head, a scrap of paper, or a screenshot buried in a
        camera roll. We wanted a place where home cooks could write a recipe
        down once and have it actually be findable later — by them, and by
        anyone else looking for something to cook tonight.
      </p>
      <p className="mt-4 text-ink/70 dark:text-ink-dark/70">
        Anyone can browse and save recipes for free. Members can publish
        their own recipes, follow along with what&apos;s popular, and go
        premium for unlimited posting.
      </p>
    </div>
  );
}