import { useEffect, useState, useContext } from "react";
import { modalContext } from '../GlobalContext/GlobalContext'
export default function Cards() {
    const [productList, setProductList] = useState([]);

    const { cart, setCart, totalQuantity, setTotalQuantity, totalAmount, setTotalAmount } = useContext(modalContext);

    useEffect(() => {

        if (productList.length === 0 && !localStorage.getItem("productList")) {
            console.log("I am going to fetch...");
            fetch('https://fakestoreapi.com/products')
                .then(data => data.json())
                .then(data => {
                    localStorage.setItem("productList", JSON.stringify(data));
                    setProductList(data);
                })
        }
        else {
            setProductList(JSON.parse(localStorage.getItem("productList")));
        }
    }, []);

    const addItems = (item) => {
        setCart([...cart, { item, quantity: 1 }]);
        setTotalQuantity(totalQuantity + 1);
        setTotalAmount(totalAmount + item.price)
    }

    function increaseQty({ id, price }) {
        cart.map(itemKey => itemKey.item.id === id ? itemKey.quantity += 1 : itemKey);
        setCart(cart)
        setTotalQuantity(totalQuantity + 1);
        setTotalAmount(totalAmount + price)
    }

    function decreaseQty({ id, price }) {
        let cartItems = [];
        for (const itemKey of cart) {
            if (itemKey.item.id === id) {
                itemKey.quantity -= 1;
                if (itemKey.quantity !== 0) cartItems.push(itemKey);
                continue;
            }
            cartItems.push(itemKey);

        }
        setCart(cartItems)
        setTotalQuantity(totalQuantity - 1);
        setTotalAmount(totalAmount - price)
    }

    function find({ id }) {
        return cart.find(({ item }) => item.id === id)
    }

    function itemQuantity({ id }) {
        for (const itemKey of cart) {
            if (itemKey.item.id === id) {
                return itemKey.quantity;
            }
        }
    }
    return (
        <div className=" max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-8 gap-x-6 gap-y-8 lg:grid-cols-4 mt-4">
                {
                    productList.map((item, key) => {
                        return (
                            <div className="bg-white flex flex-col rounded shadow-lg p-4" key={key}>

                                <div className="h-80">
                                    <img src={item.image} className="h-full w-full object-fill rounded-2xl" />
                                </div>

                                <div className="font-bold mt-4">
                                    {item.title}
                                </div>

                                <div className="flex justify-between mt-4">
                                    <p>${item.price}</p>
                                    <p>{item.rating.rate}</p>
                                </div>
                                {
                                    find(item) ? (
                                        <div className="w-full flex justify-center py-2 mt-auto bg-gray-200 text-white rounded shadow focus:ring-2">
                                            <button id="btn" onClick={() => decreaseQty(item)} className="w-8 h-8 mx-5 bg-green-700 text-white rounded shadow focus:ring-2">
                                                -
                                            </button>
                                            <p className=" text-black">{itemQuantity(item)}</p>
                                            <button id="btn" onClick={() => increaseQty(item)} className="w-8 h-8 mx-5 bg-green-700 text-white rounded shadow focus:ring-2">
                                                +
                                            </button>
                                        </div>

                                    ) : (
                                        <button id="btn" onClick={() => addItems(item)} className="mt-auto w-full py-2 bg-green-700 text-white rounded shadow focus:ring-2">
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