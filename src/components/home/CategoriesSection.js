import Link from "next/link";
import { FaMugHot, FaUtensils, FaCookie, FaPizzaSlice, FaLeaf, FaUtensilSpoon } from "react-icons/fa";

const categories = [
  { name: "Breakfast", Icon: FaMugHot, bg: "bg-mustard-50 dark:bg-mustard-600/20", fg: "text-mustard-600 dark:text-mustard-400" },
  { name: "Main Course", Icon: FaUtensils, bg: "bg-spice-50 dark:bg-spice-600/20", fg: "text-spice-600 dark:text-spice-400" },
  { name: "Dessert", Icon: FaCookie, bg: "bg-berry-50 dark:bg-berry-600/20", fg: "text-berry-600 dark:text-berry-400" },
  { name: "Snacks", Icon: FaPizzaSlice, bg: "bg-brick-400/10 dark:bg-brick-600/20", fg: "text-brick-500 dark:text-brick-400" },
  { name: "Vegan", Icon: FaLeaf, bg: "bg-herb-50 dark:bg-herb-600/20", fg: "text-herb-600 dark:text-herb-400" },
  { name: "Soup", Icon: FaUtensilSpoon, bg: "bg-sky-50 dark:bg-sky-600/20", fg: "text-sky-600 dark:text-sky-400" },
];

export default function CategoriesSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <p className="eyebrow">Pick a craving</p>
      <h2 className="mt-2 font-display text-3xl font-semibold">Browse by category</h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map(({ name, Icon, bg, fg }) => (
          <Link
            key={name}
            href={`/browse-recipes?categories=${encodeURIComponent(name)}`}
            className={`rounded-card ${bg} py-6 text-center transition-transform hover:-translate-y-0.5`}
          >
            <Icon className={`mx-auto ${fg}`} size={22} />
            <p className="mt-2 text-sm font-medium">{name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}