import { useEffect, useState } from "react";
export default function Cards() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(data => {
                setProductList(data);
            })
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 sm:mt-8 gap-x-6 gap-y-8">
                {
                    productList.map((item, key) => {
                        return (
                            <div className="bg-white rounded shadow-lg p-4" key={key}>

                                <div className="min-h-48">
                                    <img src={item.image} alt="Just a flower" className=" w-full   object-fill  rounded-2xl" />
                                </div>

                                <div className="font-bold mt-4">
                                    {item.title}
                                </div>

                                <div className="flex justify-between mt-4">
                                    <p>${item.price}</p>
                                    <p>{item.rating.rate}</p>
                                </div>

                                <button className="w-full py-2 mt-4 bg-green-700 text-white rounded shadow focus:ring-2">
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}