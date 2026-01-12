import { Link } from "react-router";

export default function Discover() {
    return (
        <>
            <h1>Discovery Mode</h1>
            <p>Quiz like guided recipe search yielding results to fight decision fatigue. Asks users about ingredients they prefer or dont. Asks users about cuisine they like, prompt user to save recipes from the search</p>

            <h2>Categories</h2>
            <Link to="/categories">View All Categories</Link>
        </>
    )
}