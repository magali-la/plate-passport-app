// retrieve data from the API fetch in apiService and package it in state for components
import { useState } from "react";
import { fetchAllCuisines, fetchRandomMeal } from "../services/apiService";
import type { RawCuisinesData, Meal, RawMealData } from "../types";

// CUSTOM HOOK - RANDOM MEAL FETCH - fetching and setting just the meal object in state 
export function useFetchRandom() {
    // set up states for data, loading, and error
    // general data extracted from the API call - using Meal type for shape of the data or undefined in case it's not loaded yet
    const [meal, setMeal] = useState<Meal | undefined>(undefined);
    // determines if the api call is in progress
    const [loading, setLoading] = useState<boolean>(false);
    // for error messages - set it to null to say either it exists or doesn't at all
    const [error, setError] = useState<Error | null>(null);

    // RANDOM MEAL DATA - set the object in state
    async function displayRandomMeal() {
        // start loading state to true for UI purposes
        setLoading(true);
        // clear any errors that remained from previous calls to start fresh
        setError(null);

        // wrap fetch in try catch finally block to handle erros
        try {
            const randomMealData = await fetchRandomMeal<RawMealData>();

            if (!randomMealData) {
                throw new Error("Data not unwrapped");
            }
            console.log('Random meal data unwrapped');

            // the data at fetch URL is an object containing key-value of meals and an array with one object with the meal's data - return the actual meal object for easier manipulation at the component-level
            const randomMealObj: Meal = randomMealData.meals[0];

            // set in state for use elsewhere
            setMeal(randomMealObj);

        } catch (error) {
            // explicitly state type to avoid ts errors
            setError(error as Error);
        } finally {
            // stop the loading state after either a successful or unsuccessful retrieval
            setLoading(false);
        }
    }

    // return the functions within the hook for use at the component-level
    return { meal, loading, error, displayRandomMeal };
}

// CUSTOM HOOK - All cuisines in a list to look for food from cuisine filters
export function useFetchAllCuisines() {
    const [cuisines, setCuisines] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    // get the data and convert it to just the array called meals
    async function displayAllCuisines() {
        setLoading(true);
        setError(null);

        // try catch for getting raw data from the API service
        try {
            // get the raw data
            const allCuisinesData = await fetchAllCuisines<RawCuisinesData>();
            
            if (!allCuisinesData) {
                throw new Error("Data not unwrapped");
            }
            console.log('All cuisines data unwrapped');

            // convert each into an array with just the strings of cuisines to store in state - map through to transform each index into just its
            const cuisinesArray = allCuisinesData.meals.map(cuisineObj => cuisineObj.strArea);

            // set state with the array
            setCuisines(cuisinesArray);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }

        
    }
    
    return { cuisines, loading, error, displayAllCuisines }
}

