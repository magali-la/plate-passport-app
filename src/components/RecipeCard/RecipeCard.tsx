import { Link } from "react-router";
import type { FilteredMeal } from "../../types";
import { addFavorite } from "../../utils/favorites";

// prop for Recipe Card - needs to receive the meal from the recipe list component
interface RecipeCardProps {
    meal: FilteredMeal;
}

export default function RecipeCard({ meal }: RecipeCardProps) {

    // handler for adding favorites
    function handleFavorites(){
        // first check if meal exists
        if (meal) {
            // use slug since it's already in the url anyways
            addFavorite(meal.idMeal)
            alert('Meal added successfully!')
        } else {
            alert('There was a problem adding your meal to favorites. Please try again');
        }
    }

    return (
        <div className="rounded-xl shadow-md w-full py-6 px-4 flex flex-col gap-3">
            {/* image section */}
            <div>
                <img src={meal.strMealThumb} className="rounded-2xl" alt={`image of ${meal.strMeal}`}/>
            </div>
            <h4>{meal.strMeal}</h4>
            {/* use absolute link since this isn't coming from a recipes page */}
            <Link to={`/recipes/${meal.idMeal}`}>View Recipe</Link>

            {/* add to favorites button */}
            <button className="p-3 bg-green-300 rounded-4xl font-semibold" onClick={handleFavorites}>Add to Plate Passport</button>
        </div>
    )
}