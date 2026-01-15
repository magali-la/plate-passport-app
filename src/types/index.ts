// type for the shape of the meal object within the data
export interface Meal {
    // type some of the common key's i'll need to access into
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string | null;
    strYoutube: string;
    strSource: string;

    // use index signatures to account for varying key-value pairs in the meal object
    // some data is listed as null
    [key: string]: string | null;
}

// type the shape of the raw data retrieved from fetch - an object with a meals key and an array of meal objects, which is used for a lot of endpoints
export interface RawMealData {
    meals: Meal[];
}


// interface for Cuisines
export interface Cuisine {
    strArea: string;
}

// interface for the raw array of objects with the cuisine
export interface RawCuisinesData {
    meals: Cuisine[]
}

// interface for Category for lists - filters, buttons, labels, etc
export interface Category {
    strCategory: string;
}

// interface for the raw array of objects with the cuisine
export interface RawCategoryListData {
    meals: Category[]
}

// interfaces for Category for category pages with descriptions and images
export interface CategoryDesc {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

// shape for the raw array with category objects - objct with a categories key holding an array of category objects
export interface RawCategoryDescData {
    categories: CategoryDesc[]
}

// interfaces for the meals that show up from a filtered fetch by category or cuisine, which have less key-value pairs than the normal meals one
export interface FilteredMeal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface RawFilteredMealsData {
    meals: FilteredMeal[];
}