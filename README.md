# Plate Passport
#### A MVP of a global recipe discovery app built with React, TypeScript, Tailwind CSS, and TheMealDB API


## Tech Stack
TheMealDB API

JavaScript, TypeScript, CSS

React, TailwindCSS

Vite, Netlify

## Features
- Randomly generated recipe on the Home page with ability to refresh the results using TheMealDB API
- Category pages with descriptions and lists of recipes
- Recipe pages with detailed cooking instructions, cuisine, category types, and a link to a youtube video for guided cooking
- Plate Passport / Favorites List: users can add recipes to their favorites list, using localStorage persistence 
- Search by recipe name, category, or cuisine within favorites page 

## Future Features
- Section on discovery page with cuisines and cuisine detail pages with rendered recipes
- Error handling for user's incorrectly inputted slug routes for category and cuisine detail pages with user-friendly CTA to email support if interested in adding this category/cuisine to the site
- Quiz in discovery mode to help user find meals of interest to save in their favorites
- Styling and branding
- Animations with Motion

## Learnings
- Learned about index signatures to help make types more scalable for database structures that have large amounts of key-value pairs. This was helpful for returning the RandomMeal type in my useFetch hook and promise return types

- I learned how better to manage writing generics in my apiService. After looking at the endpoints data I noticed there were only two shapes / `{ meals: [{}] }` or `{ categories: [{}] }`. This actually guided the beginning of the project where I was debating having one large useFetch hook order-1 multiple useFetch hooks to transform the raw data in a way that would be easily extracted in the components

- I tried to match my slugs to the property I would use from the data using `strCategory` for category pages and `idMeal` for recipe pages, but ran into issues when writing logic as I was using the same variables to search for the correct category or meal id property based off the slug. I decided to rename the slugs to `:slug`, which made writing my `useParams` and logic simpler.

- I was encountering an error in adding a ternary around my map method to render the `RecipeList` component; I was unable to wrap my `meals.map` method in `{}`. After looking into the issue, I learned that you can't nest `{}` in a JS element introduced with `{}`. This helped me understand syntax when using JSX


## Resources
https://dev.to/techcheck/custom-react-hook-usefetch-eid

For learning how to type large object with varying key-value pairs
https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures