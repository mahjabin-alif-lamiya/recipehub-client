import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiClock } from "react-icons/fi";

export default function RecipeCard({ recipe }) {
  return (
    <Link
      href={`/recipe/${recipe._id}`}
      className="card-punch group block overflow-hidden rounded-card bg-surface pt-4 ring-1 ring-ink/8 transition-transform hover:-translate-y-0.5 dark:bg-surface-dark dark:ring-ink-dark/10"
    >
      <div className="relative mx-4 aspect-[4/3] overflow-hidden rounded-[6px]">
        <Image
          src={recipe.recipeImage || "/placeholder-recipe.svg"}
          alt={recipe.recipeName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {recipe.category && (
          <span className="absolute left-2 top-2 rounded-full bg-paper/90 px-2.5 py-1 text-xs font-medium text-ink dark:bg-paper-dark/90 dark:text-ink-dark">
            {recipe.category}
          </span>
        )}
      </div>

      <div className="space-y-2 p-4">
        <h3 className="font-display text-lg leading-snug">{recipe.recipeName}</h3>

        <div className="flex items-center justify-between text-sm text-ink/60 dark:text-ink-dark/60">
          {recipe.preparationTime ? (
            <span className="flex items-center gap-1">
              <FiClock size={14} /> {recipe.preparationTime}
            </span>
          ) : (
            <span>{recipe.cuisineType}</span>
          )}

          {typeof recipe.likesCount === "number" && (
            <span className="flex items-center gap-1">
              <FiHeart size={14} /> {recipe.likesCount}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}