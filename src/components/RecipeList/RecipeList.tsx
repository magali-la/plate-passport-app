import { useEffect } from "react";
import { useFetchMealsByCategory } from "../../hooks/useFetch";
import RecipeCard from "../RecipeCard/RecipeCard";

// union type to define the options for the props passed down
type RecipeListType = 'category' | 'cuisine'
// this prop is for telling the component what slug and what type of list - either cuisine or category to pull the right data
export interface RecipeListProps {
    nameOfCatOrCuisine: string;
    type: RecipeListType;
}

export default function RecipeList({nameOfCatOrCuisine, type}: RecipeListProps) {
    const { mealsByCategory, loading, displayMealsByCategory } = useFetchMealsByCategory();
    
    // the slug and type passed into this component as a prop is going to determine if the recipe list will render recipes for  category or for a cuisine and trigger the right fetch
    useEffect(() => {
        if (type === "category") {
            displayMealsByCategory(nameOfCatOrCuisine)
        }
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6">
           {loading ? (
                <h3>Loading up delicious recipes!</h3>
           ) : (
                // don't need {} anymore since it's already been used for the ternary so just use the javascript and don't wrap the map by a {}
                mealsByCategory.map((meal) => (
                    <RecipeCard key={meal.idMeal} meal={meal}/>
                ))
            )}
        </div>
    )
}