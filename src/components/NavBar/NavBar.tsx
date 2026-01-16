import { Link } from "react-router";

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-between py-2 px-20">
            {/* title section */}
            <Link to="/" className="text-lg">PlatePassport</Link>
            {/* links section */}
            <div className="flex flex-row items-center gap-4">
                <Link to="/">Home</Link>
                <Link to="/discover">Discover</Link>
                {/* <Link to="/recipes">Recipes</Link> */}
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
    )
}