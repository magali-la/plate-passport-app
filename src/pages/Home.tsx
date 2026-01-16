import { useEffect } from "react";
import { useFetchRandom } from "../hooks/useFetch";
import { Link } from "react-router";

export default function Home() {
    // import with custom fetch random custom hook
    const { meal, loading, displayRandomMeal } = useFetchRandom();

    // use effect to load the data on mount - if the function is called again, restart the process
    useEffect(() => {
        // call function to set states for this fetch 
        displayRandomMeal();

    }, []);

    return (
        <>
            <h1>Discover the best foods from all around the world!</h1>
            <section className="flex justify-center" aria-label="Discover a random meal">
                {/* recipe details - conditional loading text vs actual recipe */}
                {loading ? (
                    <div>
                        <p>Generating your meal of the day...</p>
                        {/* todo - loading spinner */}
                    </div>
                ) : (
                    // once the loading is set to false when the data is successfully set to state, then use meal object
                    <div className="flex flex-row gap-20 px-30">
                        {/* thumbnail of meal */}
                        <div className="flex rounded-2xl overflow-clip">
                            <img src={`${meal?.strMealThumb}/medium`} alt={`image of ${meal?.strMeal}`} className="h-full w-full" />
                        </div>
                        {/* recipe info and remix button */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-semibold">{meal?.strMeal}</h3>
                            {meal?.strArea && <p className="italic">{meal?.strArea}</p>}
                            {meal?.strTags && <p>Tags: {meal.strTags}</p>}
                            <p>Category: {meal?.strCategory}</p>
                            <Link to={`/recipes/${meal?.idMeal}`}>View Recipe</Link>
                            <p className="">Want to load a new recipe?</p>
                            <button onClick={displayRandomMeal}>Recipe Remix</button>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}