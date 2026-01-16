// utility functions to add something to favorites and store to local storage
// the favorites will store the meal's id into a local storage array

// always retrieve the meals array from local storage 
export function getFavorites() {
    const storedFavorites = localStorage.getItem("favorites");

    // if stored exists then return it or just empty array 
    return storedFavorites ? JSON.parse(storedFavorites) : [];
}

// utility for adding a meal to local storage
export function addFavorite(mealID: string) {
    // add to favorite meals array - always get the latest first from local
    const favoriteMeals = getFavorites();

    // check if the id in question is not already in the array to then push it
    if (!favoriteMeals.includes(mealID)) {
        // push to the array
        favoriteMeals.push(mealID);
        
        // then store this list to local storage  
        localStorage.setItem("favorites", JSON.stringify(favoriteMeals));
    }
}