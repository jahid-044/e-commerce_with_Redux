import { useContext } from "react";
import { withRouter, useHistory, Redirect } from "react-router-dom";
import { globalContext } from "../GlobalContext/GlobalContext";


function Checkout() {
    const { cart, setCart } = useContext(globalContext);
    let history = useHistory();

    function removeItem(id) {
        const newCart = cart.filter(itemKey => itemKey.item.id !== id)
        setCart(newCart)
        localStorage.setItem("cartItem", JSON.stringify(newCart));
    }

    function submitForm(event) {
        event.preventDefault();
        setCart([]);
        localStorage.setItem("cartItem", JSON.stringify([]));
        history.push("/confirmation")
    }

    function getTotalAmount() {
        let total = 0.0;
        for (const itemKey of cart) {
            total += (itemKey.item.price * itemKey.quantity);
        }
        return total;
    }

    if (cart.length) {
        return (
            <div className="mx-4 sm:mx-20">
                <div className="container sm:p-12 mx-auto">
                    <div className="flex flex-col-reverse w-full px-0 mx-auto md:flex-row">
                        <div className="flex flex-col md:w-full">
                            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                            </h2>
                            <form className="justify-center w-full mx-auto" onSubmit={(event) => submitForm(event)}>
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                            Name</label>
                                        <input required name="firstName" type="text" placeholder="First Name"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                            Name</label>
                                        <input required name="Last Name" type="text" placeholder="Last Name"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label for="Email"
                                            className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                        <input required name="Last Name" type="email" placeholder="Email"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label for="Address"
                                            className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                        <textarea
                                            required className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label for="city"
                                            className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                        <input required name="city" type="text" placeholder="City"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label for="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                            Postcode</label>
                                        <input required name="postcode" type="text" placeholder="Post Code"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="flex items-center text-sm group text-heading">
                                        <input type="checkbox"
                                            className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                        <span className="ml-2">Save this information for next time</span></label>
                                </div>
                                <div className="relative pt-3 xl:pt-6"><label for="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                        className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        rows="4" placeholder="Notes for delivery"></textarea>
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col w-full ml-0 mb-16 md:ml-16 lg:w-2/5">
                            <div className="pt-12 md:pt-0 2xl:ps-4">
                                <h2 className="text-xl font-bold">Order Summary
                                </h2>
                                <div className="mt-8">
                                    <div className="flex flex-col space-y-4">
                                        {
                                            cart.map((cartItem, key) => {
                                                return (

                                                    <div className="grid grid-cols-7 space-x-2">
                                                        <div className="col-span-2">
                                                            <img src={cartItem.item.image} alt="Cart Item Image"
                                                                className="h-32 object-fill" />
                                                        </div>
                                                        <div className="col-span-4">
                                                            <h2 className="text-xl font-bold">{cartItem.item.title}</h2>
                                                            <div className="flex items-end justify-between font-bold">
                                                                <p>Qty: {cartItem.quantity}</p>
                                                                <p>${(cartItem.item.price * cartItem.quantity).toFixed(2)}</p>
                                                            </div>
                                                        </div>
                                                        <a role="button" onClick={() => removeItem(cartItem.item.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                    d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </a>
                                                    </div>


                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                    Subtotal<span className="ml-2">${getTotalAmount().toFixed(2)}</span></div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                    Shipping Tax<span className="ml-2">${cart.length ? '10.00' : '0.00'}</span></div>
                                <div
                                    className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                    Total<span className="ml-2">${cart.length ? (getTotalAmount() + 10).toFixed(2) : '0.00'}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <Redirect to="/empty-cart" />
    }
}
export default withRouter(Checkout);