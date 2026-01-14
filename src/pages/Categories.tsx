import { Link } from "react-router";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import { useFetchAllCategoryDesc } from "../hooks/useFetch";
import { useEffect } from "react";

export default function Categories() {
    const { allCategoryDesc, loading, displayAllCategoryDesc } = useFetchAllCategoryDesc();

    // load data on mount
    useEffect(() => {
        displayAllCategoryDesc();
    }, []);

    // add loading return if loading true
    if (loading) return <p>Loading categories...</p>

    return (
        <>
            <h1>All Categories</h1>
            <p>View meal categories and click to learn recipes!</p>
            {/* wrap the contents in a div, which will serve as a grid with each link and card working as a */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6">
                {/* reltive link so it knows it's nested under categories route */}
                {allCategoryDesc.map(category => (
                    <Link to={category.strCategory} key={category.idCategory}>
                        <CategoryCard category={category}/>
                    </Link>
                ))}
            </div>
        </>
    )
}