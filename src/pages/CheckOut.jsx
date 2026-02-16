import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from '@dr.pogodin/react-helmet';

// import components
import Header from "../components/Header";
import Footer from "../components/Footer";


const CheckOut = () => {
    // set logged in state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Helmet>
                <title>Checkout | TechStore</title>
            </Helmet>


            <div className="bg-white min-h-screen w-full">

                {/* header */}
                <header>
                    <Header />
                </header>

                <div className="block w-full min-h-[70vh]">
                    <div className="max-w-8xl mx-auto px-4 lg:px-8 py-8 mt-20 space-y-6 overflow-y-auto h-full">
                        <div className="w-full">
                            <p className="text-xl font-semibold">Checkout</p>
                        </div>

                        {isLoggedIn ? (

                            <div className="flex gap-6 lg:flex-row flex-col">

                                <div className="lg:w-2/3 w-full space-y-6">
                                    <div className="block border border-gray-300 rounded-lg p-4 bg-white h-fit">
                                        <p className="text-xl font-semibold mb-6">Shiping Information</p>

                                        <form action="" method="post" className="space-y-3">
                                            <div className="block w-full">
                                                <label htmlFor="fullname">Full Name</label>
                                                <input type="text" className="w-full bg-gray-200 p-2 rounded-lg" />
                                            </div>

                                            <div className="block w-full">
                                                <label htmlFor="address">Contact Address</label>
                                                <input type="text" className="w-full bg-gray-200 p-2 rounded-lg" />
                                            </div>

                                            <div className="flex gap-6 lg:flex-row flex-col">
                                                <div className="block w-full">
                                                    <label htmlFor="city">City</label>
                                                    <input type="text" className="w-full bg-gray-200 p-2 rounded-lg" />
                                                </div>
                                                <div className="block w-full">
                                                    <label htmlFor="state">State</label>
                                                    <input type="text" className="w-full bg-gray-200 p-2 rounded-lg" />
                                                </div>
                                            </div>

                                            <div className="flex gap-6 lg:flex-row flex-col">
                                                <div className="block w-full">
                                                    <label htmlFor="city">Zip Code</label>
                                                    <input type="text" className="w-full bg-gray-200 p-2 rounded-lg" />
                                                </div>
                                                <div className="block w-full">
                                                    <label htmlFor="state">Country</label>
                                                    <input type="text" className="w-full bg-gray-200 p-2 rounded-lg" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>


                                    <div className="block border border-gray-300 rounded-lg p-4 bg-white h-fit">
                                        <p className="text-xl font-semibold mb-6">Payment Information</p>

                                        <form action="" method="post" className="space-y-3">
                                            <div className="block w-full">
                                                <label htmlFor="fullname">Card Number</label>
                                                <input type="text" placeholder="123 4432 4432 12" className="w-full bg-gray-200 p-2 rounded-lg" />
                                            </div>

                                            <div className="flex gap-6 lg:flex-row flex-col">
                                                <div className="block w-full">
                                                    <label htmlFor="city">Expiry Date</label>
                                                    <input type="text" placeholder="02/12" className="w-full bg-gray-200 p-2 rounded-lg" />
                                                </div>
                                                <div className="block w-full">
                                                    <label htmlFor="state">CVV</label>
                                                    <input type="text" placeholder="123" className="w-full bg-gray-200 p-2 rounded-lg" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="lg:w-1/3 w-full border border-gray-300 rounded-lg p-4 bg-white">
                                    <p className="font-semibold text-xl">Order Summary</p>

                                    <ul className="flex justify-between py-2 text-sm">
                                        <li>Premium Ruce</li>
                                        <li>x1</li>
                                        <li>$349.99</li>
                                    </ul>
                                    <hr className="text-gray-500" />
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
                            <div className="flex flex-col gap-2 h-full items-center justify-center">
                                <p className="text-lg">Please login to checkout.</p>
                                <Link to="/login" className="w-fit bg-black hover:bg-gray-700 text-white px-6 py-3 rounded-lg mt-4">Login</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* footer   */}
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default CheckOut;