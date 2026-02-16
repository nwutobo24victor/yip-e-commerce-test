import { React, useState } from "react";

const ViewCart = () => {
    const [cartItems, setCartItems] = useState(null);

    return (
        <div className="block w-full h-screen fixed top-0 left-0 bg-[#ffffff96] backdrop-blur-sm z-10">
            <div className="max-w-8xl mx-auto px-4 lg:px-8 py-8 mt-20 space-y-6 overflow-y-auto h-full">
                <div className="w-full">
                    <p className="text-xl font-semibold">Your Shopping Cart</p>
                </div>

                {cartItems ? (
                    <div className="flex gap-6 lg:flex-row flex-col">

                        <div className="lg:w-2/3 w-full border border-gray-300 rounded-lg p-4 bg-white h-fit">
                            <div className="flex gap-4 items-center">
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" className="w-30 h-30 object-cover object-center rounded-xl" />
                                <div className="block w-full space-y-2 ">
                                    <div className="w-full flex justify-between items-center">
                                        <p className="font-semibold lg:text-xl">Sony WH-1000XM4 Wireless</p>
                                        <button type="button" className="text-red-500 hover:text-red-700">
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                    <p className="text-normal">$349.99</p>
                                    <div className="flex gap-2 items-center">
                                        <p>Quantity:</p>
                                        <button type="button" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                                            <i className="fa-solid fa-minus text-xs"></i>
                                        </button>
                                        <input type="number" min="1" max="15" defaultValue="1" className="w-10 appearance-none text-center bg-gray-100 rounded-lg py-2 border border-gray-300 focus:ring-2 focus:ring-gray-200 outline-none" />
                                        <button type="button" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                                            <i className="fa-solid fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="lg:w-1/3 w-full border border-gray-300 rounded-lg p-4 bg-white">
                            <p className="font-semibold text-xl">Order Summary</p>
                            <ul className="flex justify-between py-2">
                                <li>Subtotal</li>
                                <li>$349.99</li>
                            </ul>
                            <ul className="flex justify-between py-2">
                                <li>Shipping</li>
                                <li>$0.00</li>
                            </ul>
                            <ul className="flex justify-between py-2">
                                <li>Tax</li>
                                <li>$27.99</li>
                            </ul>
                            <hr className="text-gray-500" />
                            <ul className="flex justify-between py-2 font-semibold text-lg">
                                <li>Total</li>
                                <li>$377.98</li>
                            </ul>
                            <button type="button" className="w-full bg-black hover:bg-gray-700 text-white py-3 rounded-lg mt-4">Proceed to Checkout</button>
                        </div>

                    </div>
                ) : (
                    <div className="w-full h-60 flex items-center justify-center">
                        <p className="text-lg">Your cart is currently empty.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ViewCart;