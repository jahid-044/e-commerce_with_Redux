import { Link } from "react-router-dom"

export default function AboutUs() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" bg-green-100 w-full h-36 flex justify-center items-center">
                <h1 className="text-center font-bold text-5xl">About Us</h1>
            </div>
            <h1 className="w-1/2 text-center text-xl mt-20">
                DSI-e.com is a premium provider of supplements around the world. It preserves the reputation of providing services to mass people.
                We assure you that we make difference in our every step from hand to machine. We make similarity in our difference.
            </h1>
            <Link to="/">
                <button className="bg-green-600 hover:bg-green-700 px-6 py-3 border border-transparent rounded-md shadow-sm text-white text-base font-medium mt-8">Go to shop</button>
            </Link>
        </div>
    )
}