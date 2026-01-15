import { Link, useParams } from "react-router";
import { useFetchAllCategoryDesc } from "../hooks/useFetch"
import { useEffect } from "react";

export default function CategoryDetail() {
    // grab the url :slug as the category title to avoid delays from data retrieval
    const { slug } = useParams();
    // import the array with all the category objects and loading state
    const { allCategoryDesc, loading, displayAllCategoryDesc } = useFetchAllCategoryDesc();

    // fetch the description data on mount
    useEffect(() => {
        displayAllCategoryDesc()
    }, []);

    // once the state has been updated from the fetch hook, find the one in question whose strCategory matches the categorySlug that was extracted - use a different parameter name so it doesn't confuse with the slug name in the routes
    const categoryDesc = allCategoryDesc.find((cat) => cat.strCategory === slug);

    return (
        <div className="flex flex-col ">
            <Link to="/categories" >Back to Categories</Link>
            {/* put the title outside of the loading ternary - it'll be loaded from the url with params */}
            <h1>{slug ? slug : 'No Category Found'}</h1>
            {loading ? (
                <h3 className="font-semibold">Loading category details</h3>
                // to-do, add spinner
            ) : (
                // actually put the data
                <div className="md:grid md:grid-cols-2">
                    <p>{categoryDesc?.strCategoryDescription}</p> 
                    
                    {/* image box */}
                    <div>
                        <img src={categoryDesc?.strCategoryThumb} alt={`image of ${categoryDesc?.strCategory}`}/>
                    </div>
                </div> 
            )}
            
        </div>
    )
}