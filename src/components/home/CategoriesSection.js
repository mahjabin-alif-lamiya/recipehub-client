import Link from "next/link";
import { FiCoffee, FiSun as FiMain, FiHeart, FiPackage, FiFeather, FiThermometer } from "react-icons/fi";

const categories = [
  { name: "Breakfast", Icon: FiCoffee },
  { name: "Main Course", Icon: FiMain },
  { name: "Dessert", Icon: FiHeart },
  { name: "Snacks", Icon: FiPackage },
  { name: "Vegan", Icon: FiFeather },
  { name: "Soup", Icon: FiThermometer },
];

export default function CategoriesSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <h2 className="font-display text-2xl">Browse by category</h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map(({ name, Icon }) => (
          <Link
            key={name}
            href={`/browse-recipes?categories=${encodeURIComponent(name)}`}
            className="card-punch rounded-card bg-surface pt-5 pb-4 text-center ring-1 ring-ink/8 hover:-translate-y-0.5 transition-transform dark:bg-surface-dark dark:ring-ink-dark/10"
          >
            <Icon className="mx-auto text-herb-500" size={22} />
            <p className="mt-2 text-sm">{name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}