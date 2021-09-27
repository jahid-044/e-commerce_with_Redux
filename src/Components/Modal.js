import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, removeItem, flushCart } from '../Action/shopActions';



export default function Modal({ modalCall, setModalCall }) {
    const cart = useSelector(state => state.cart)
    //   const modalCall = useSelector(state => state.modalCall)
    const dispatch = useDispatch()

    function remove(id) {
        dispatch(removeItem(id))
    }

    function onChangeHandler(e, id) {
        const value = e.target.value;
        dispatch(changeQuantity(id, value))
    }

    // function howModal(bool) {
    //     dispatch(setModal(bool))
    // }

    function getTotalAmount() {
        let total = 0.0;
        for (const itemKey of cart) {
            total += (itemKey.item.price * itemKey.quantity);
        }
        return total;
    }

    function cleanCart() {
        dispatch(flushCart())
    }
    console.log("In modal", modalCall);
    return (
        <Transition.Root show={modalCall} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setModalCall}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >

                            <div className="w-screen max-w-md">
                                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                        <div className="mt-4 flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                            <div className="ml-3 h-7 flex items-center">
                                                <button
                                                    type="button"
                                                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    onClick={() => setModalCall(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {cart.map((product) => (
                                                        <li key={product.item.id} className="py-6 flex">
                                                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                                <img
                                                                    src={product.item.image} alt="Cart Item Image"
                                                                    className="w-full h-full object-center object-cover"
                                                                />
                                                            </div>

                                                            <div className="ml-4 flex-1 flex flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href='#'>{product.item.title}</a>
                                                                        </h3>
                                                                        <p className="ml-4">${(product.item.price * product.quantity).toFixed(2)}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-1 flex items-end justify-between text-sm">
                                                                    <input className=" text-center ring-2 ring-black rounded w-12 h-6" type="number" name="quantity" value={product.quantity} min="1" onChange={(event) => onChangeHandler(event, product.item.id)} />
                                                                    <div className="flex">
                                                                        <button onClick={() => remove(product.item.id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>${getTotalAmount().toFixed(2)}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">


                                            <div className="flex justify-between items-center">

                                                <Link to="/checkout">
                                                    <a onClick={() => setModalCall(false)} className="px-6 py-3 border border-transparent 
                                                    rounded-md shadow-sm text-base font-medium text-white bg-indigo-600
                                                     hover:bg-indigo-700">
                                                        Checkout
                                                    </a>

                                                </Link>
                                                <a onClick={() => cleanCart()} className="px-6 py-3 border border-transparent 
                                                        rounded-md shadow-sm text-base font-medium text-white bg-red-500
                                                        hover:bg-red-600">
                                                    Clear Cart
                                                </a>
                                            </div>



                                        </div>

                                        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                            <p>
                                                or{' '}
                                                <Link to="/">
                                                    <button
                                                        type="button"
                                                        className="text-indigo-600 font-medium hover:text-indigo-500"
                                                        onClick={() => setModalCall(false)}
                                                    >
                                                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
