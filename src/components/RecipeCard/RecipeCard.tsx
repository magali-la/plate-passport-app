import { Link } from "react-router";
import type { FilteredMeal } from "../../types";

// prop for Recipe Card - needs to receive the meal from the recipe list component
interface RecipeCardProps {
    meal: FilteredMeal;
}

export default function RecipeCard({ meal }: RecipeCardProps) {
    return (
        <div className="rounded-xl shadow-md w-full py-6 px-4 flex flex-col gap-3">
            {/* image section */}
            <div>
                <img src={meal.strMealThumb} className="rounded-2xl" alt={`image of ${meal.strMeal}`}/>
            </div>
            <h4>{meal.strMeal}</h4>
            {/* use absolute link since this isn't coming from a recipes page */}
            <Link to={`/recipes/${meal.idMeal}`}>View Recipe</Link>
        </div>
    )
}