import { useParams } from "react-router"
import { useFetchMealById } from "../hooks/useFetch";
import { useEffect } from "react";

export default function RecipeDetail() {
    // take the slug which is the route chosen from the link that has the meal's id of the card or link clicked
    const { slug } = useParams();

    // import the custom gook for getting a meal by its id
    const { meal, displayMeal } = useFetchMealById();

    // use effect load on mount with the slug as the fetch
    useEffect(() => {
        // use the slug as the argument to find the exact match - use nonnull assertion to avoid ts error 
        displayMeal(slug!);
    })

    return (
        <div>
            {meal && <h1>Recipe: {meal.strMeal}</h1>}
            {!meal && <h1>No Meal Found</h1>}

            {/* image */}
            <div>
                <img src={`${meal?.strMealThumb}/medium`} alt={`image of ${meal?.strCategory}`}/>
            </div>

            {/* info about cuisine and category */}
            <h2>About this Recipe</h2>
            <h4 className="italic">{meal?.strArea}</h4>
            <h4>Category: {meal?.strCategory}</h4>

            {/* instructions */}
            <h2>Instructions</h2>
            <p className="">{meal?.strInstructions}</p>

            <h3>Need a Hand?</h3>
            <p>Watch a video: <a href={meal?.strYoutube} target="_blank">{meal?.strYoutube}</a></p>
        </div>
    )
}