import { Link } from "react-router";

export default function Categories() {
    return (
        <>
            <h1>All Categories</h1>
            <p>View Categories learn more about them</p>

            {/* reltive link so it knows it's nested under categories route */}
            <Link to="sample-category">Sample Category</Link>
        </>
    )
}