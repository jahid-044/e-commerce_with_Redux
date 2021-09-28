import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../Action/fetchAction";
import { changeQuantity } from "../Action/shopActions";
import { addItem } from "../Action/shopActions";

export default function Cards() {
    const cart = useSelector(state => state.static.cart)
    const dispatch = useDispatch()
    dispatch(fetchProduct)

    const productList = useSelector(state => state.dynamic.productList)

    function add(item) {
        dispatch(addItem({ item, quantity: 1 }))
    }

    function handleChange(id, value) {
        const quantity = itemQuantity(id)
        dispatch(changeQuantity(id, quantity + value))
    }

    function find(id) {
        return cart.find(({ item }) => item.id === id)
    }

    function itemQuantity(id) {
        for (const itemKey of cart) {
            if (itemKey.item.id === id) {
                return itemKey.quantity;
            }
        }
    }


    return (
        <div className=" max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-4 gap-x-6 gap-y-8 lg:grid-cols-4">
                {
                    productList.map((item, key) => {
                        return (
                            <div className="bg-white flex flex-col rounded shadow-lg p-4" key={key}>

                                <div className="h-72">
                                    <img src={item.image} alt="Product Item Image" className="h-full w-full object-fill rounded-2xl" />
                                </div>

                                <div className="font-bold mt-4 line-clamp-1">
                                    {item.title}
                                </div>

                                <div className="flex justify-between my-4">
                                    <p>${item.price}</p>
                                    <p><i className="fa fa-star" />{item.rating.rate}</p>
                                </div>
                                {
                                    find(item.id) ? (
                                        <div className="w-full flex justify-center py-2 mt-auto bg-gray-200 text-white rounded shadow focus:ring-2">
                                            <button id="btn" onClick={() => handleChange(item.id, -1)} className="w-6 h-6 mx-5 bg-green-700 text-white rounded shadow focus:ring-2">
                                                -
                                            </button>
                                            <p className=" text-black">{itemQuantity(item.id)}</p>
                                            <button id="btn" onClick={() => handleChange(item.id, 1)} className="w-6 h-6 mx-5 bg-green-700 text-white rounded shadow focus:ring-2">
                                                +
                                            </button>
                                        </div>

                                    ) : (
                                        <button id="btn" onClick={() => add(item)} className="mt-auto w-full py-2 bg-green-700 text-white rounded shadow focus:ring-2">
                                            Add to Cart
                                        </button>
                                    )
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}