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
