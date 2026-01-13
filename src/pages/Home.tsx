export default function Home() {

    return (
        <>
            <h1>Plate Passport Home</h1>
            <section className=" flex flex-row justify-between" aria-label="Discover a random meal">
                {/* recipe image */}
                <div></div>
                {/* recipe details */}
                <div>
                    <h3>Recipe Title</h3>
                    <p>Recipe Ingredients</p>
                    <p>Recipe Insctuctions</p>
                    <button>View Recipe</button>
                </div>
            </section>
            <p className="">Want to load a new recipe?</p>
            <button>Recipe Remix</button>
        </>
    )
}