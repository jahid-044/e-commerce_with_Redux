import { Link } from "react-router-dom"

export default function Error() {

    return (
        <div class="text-center pt-36">
            <h1 class="text-9xl font-bold text-purple-400">404</h1>
            <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
            <p class="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

            <Link to="/" className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                HOME
            </Link>

        </div >
    )
}

