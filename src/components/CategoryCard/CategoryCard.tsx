import type { CategoryDesc } from "../../types"

// set up categoryCard Props type which will take in the category from the map in main categories page
export interface CategoryProps {
    category: CategoryDesc;
}

// prop destructuring to pull direct values
export default function CategoryCard({ category: { strCategory, strCategoryThumb } }: CategoryProps)  {

    return (
        <div className="rounded-2xl shadow-md w-full py-10 px-10 flex flex-col gap-4">
            {/* image section */}
            <div>
                <img src={strCategoryThumb} className="rounded-2xl" alt={`image of ${strCategory}`} />
            </div>
            <h4>{strCategory}</h4>
        </div>
    )
}