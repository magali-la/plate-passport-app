import { useEffect, useState } from "react"
import { getFavorites } from "../utils/favorites"
import { useFetchMealById } from "../hooks/useFetch";
import type { Meal } from "../types";
import RecipeCard from "../components/RecipeCard/RecipeCard";

export default function Favorites() {
    // set state for favorites - initilize with function to retrieve the saved ids from local storage
    const [favoriteMealIds] = useState<string[]>(() => getFavorites());
    // set state for array full of full meal objects
    const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);
    // set state for search input
    const [searchTerm, setSearchTerm] = useState<string>('');
    // use display meal only to get the full meal data for the card to work
    const { displayMeal } = useFetchMealById();
    
    // once page mounts or when the favorite mealIDs change then do it gain, get the meals by checking data
    useEffect(() => {
        // function to fetch favorites from ids to build an array, directly get from the return
        async function loadFavorites() {
            const meals = [];
            
            // for loop through the ids to fetch the recipe data
            for (const id of favoriteMealIds) {
                try {
                    // need to await it until it's done getting the data otherwise it won't actually store the data in this varible, but the promise and tht's not allowed in a useEffect, so the whole function needs to be async for this await
                    const mealObj = await displayMeal(id);
                    console.log(mealObj)
                    if (mealObj) {
                        meals.push(mealObj);
                    }
                } catch {
                    console.error('Error fetching favorite meal')
                }
            }
            // now that all the data has been placed in the meals array, now set the favorite meals in state
            setFavoriteMeals(meals);
        }
    
        if (favoriteMealIds.length > 0) {
            loadFavorites();
        } 
        
    // it depends on if favorite ids changes
    }, [favoriteMealIds])

    // if theres no meals then display a different UI
    if (favoriteMealIds.length === 0) {
        return (
            <>
                <h1>Your Plate Passport</h1>
                <p>Meals you've favorited:</p>
                <p>You don't have any favorite meals yet. Add some!</p>
            </>
        )
    }

    // set handlers for search
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value)
    }

    // lastly base the map off of filtered meals which will depend on the current search term for live search for category, name, or cuisine
    const filteredMeals = favoriteMeals.filter((meal) => 
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) || 
        meal.strCategory.toLowerCase().includes(searchTerm.toLowerCase()) || 
        meal.strArea.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="flex flex-col">
            <h1>Your Plate Passport</h1>
            <p>Meals you've favorited:</p>
            {/* search section */}
            <div className="flex flex-col self-end w-fit">
                <label>Search your favorites recipes:</label>
                <input type="text" className="border-2 border-blue-400 placeholder:text-blue-950 p-3 w-80" value={searchTerm} onChange={handleSearch} placeholder="Search by name, category, or cuisine"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6">
                {/* set the array to the search array - ternary for invalid search results or map the results */}
                {filteredMeals.length === 0 ? (
                    <h3>No meals found for '{searchTerm}'. Try another search!</h3>
                    ) : ( 
                        filteredMeals.map((meal) => (
                            <RecipeCard key={meal.idMeal} meal={meal} />
                        ))
                    )
                }
            </div>
        </div>
    )
}