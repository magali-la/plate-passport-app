// fetch random meal for the home page
export async function fetchRandomMeal(): Promise<any> {
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
        console.error('Error found while fetching random meal data:', error)
    }
} 