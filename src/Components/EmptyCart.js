import emptyCart from '../Assets/emptyCart.png'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={emptyCart} alt="Empty Cart" className="mx-auto mt-24 mb-4 w-1/2" />
            <Link to="/" className="bg-green-600 hover:bg-green-700 px-6 py-3 border border-transparent rounded-md shadow-sm text-white text-base font-medium">
                Go to shop
            </Link>
        </div>
    )
}