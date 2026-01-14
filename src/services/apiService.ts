// fetch random meal for the home page - use generic to account for complex type at this url
export async function fetchRandomMeal<T>(): Promise<T> {
    try {
        console.log('Attempting to retrieve random meal data from API');
        // endpoint for generating a random meal
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

        // throw error if not fetched
        if (!response.ok) {
            throw new Error('API failed to retrieve random meal data');
        }

        // set variable name 
        const randomMealData = await response.json();
        // console success message
        console.log('Meal data retrieved successfully for: ', randomMealData.meals[0].strMeal);

        return randomMealData;
    } catch (error) {
        // specific console error
        console.error('Error found while fetching random meal data:', error);

        // throw the error so that there is a return in the catch block
        throw error;
    }
} 

// fetch individual meal by idMeal - takes an argument to know what to retrieve from the api
export async function fetchMealById<T>(id: string): Promise<T> {
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

        // throw error if not fetched
        if (!response.ok) {
            throw new Error(`API failed to retrieve meal data by id: ${id}`);
        }

        // set variable name 
        const singleMealData = await response.json();
        // console success message
        console.log(`Meal data retrieved successfully for meal: ${id}`, singleMealData.meals[0].strMeal);

        return singleMealData;
    } catch (error) {
        console.log(`Error found while fetching meal by id: ${id}`, error)
        throw error;
    }
}

// fetch  list of all cuisines
export async function fetchAllCuisines<T>(): Promise<T> {
    try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

        if (!response.ok){
            throw new Error('API failed to retrieve list of all cuisines')
        }

        // set variable name
        const allCuisinesData = await response.json();
        console.log('All cuisines data retrieved successfully from API');

        return allCuisinesData;
    } catch (error){
        console.error('Error found while fetching all cuisines data: ', error);
        throw error;
    }
}

// fetch list of all categories
export async function fetchAllCategories<T>(): Promise<T> {
    try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');

        if (!response.ok){
            throw new Error('API failed to retrieve list of all categories')
        }

        // set variable name
        const allCategoriesData = await response.json();
        console.log('All categories data retrieved successfully from API');

        return allCategoriesData;
    } catch (error){
        console.error('Error found while fetching categories list data: ', error);
        throw error;
    }
}

// fetch list of category descriptions
export async function fetchAllCategoryDesc<T>(): Promise<T> {
    try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

        if (!response.ok){
            throw new Error('API failed to retrieve list of category descriptions')
        }

        // set variable name
        const categoryDescData = await response.json();
        console.log('All categories data retrieved successfully from API');

        return categoryDescData;
    } catch (error){
        console.error('Error found while fetching categories description data: ', error);
        throw error;
    }
}