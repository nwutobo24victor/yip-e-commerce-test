import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from '@dr.pogodin/react-helmet';

// import components
import Header from "../components/Header";

const Authentication = () => {

    const [accType, setAccType] = useState("login");

    return (
        <>
            <Helmet>
                <title>Authentication | TechStore</title>
            </Helmet>


            <div className="bg-white h-screen w-full">

                {/* header */}
                <header>
                    <Header />
                </header>

                <div className="flex items-center justify-center w-full h-[90vh] p-2">
                    <div className="lg:w-xl w-full mx-auto flex flex-col gap-4 items-center justify-center">
                        <p className="text-xl font-semibold">Welcome to TechStore</p>
                        <div className="flex bg-gray-200 rounded-2xl w-full p-1">
                            <button onClick={() => setAccType("login")} type="button" className={`${accType === "login" ? "bg-white" : "hover:bg-gray-700 hover:text-white"} w-full rounded-2xl font-semibold text-sm p-2`}>Login</button>
                            <button onClick={() => setAccType("register")} type="button" className={`${accType === "register" ? "bg-white" : "hover:bg-gray-700  hover:text-white"} w-full rounded-2xl font-semibold text-sm p-2`}>Register</button>
                        </div>
                        {accType === "login" ? (
                            <div className="w-full bg-white p-6 rounded-2xl border border-gray-300">
                                <form action="" method="post" className="space-y-6">
                                    <div className="block">
                                        <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
                                        <input type="text" id="email" name="email" className="w-full p-2 bg-gray-200 rounded-lg" />
                                    </div>

                                    <div className="block">
                                        <label htmlFor="password" className="text-sm font-semibold">Password</label>
                                        <input type="text" id="password" name="password" className="w-full p-2 bg-gray-200 rounded-lg" />
                                    </div>

                                    <div className="block">
                                        <button type="submit" className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg">Login</button>
                                    </div>
                                </form>

                                <p className="text-sm text-center mt-10">Demo Account: user@example.com | password123</p>
                            </div>
                        ) : (

                            <div className="w-full bg-white p-6 rounded-2xl border border-gray-300">
                                <form action="" method="post" className="space-y-6">
                                    <div className="block">
                                        <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
                                        <input type="text" id="name" name="name" className="w-full p-2 bg-gray-200 rounded-lg" />
                                    </div>

                                     <div className="block">
                                        <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
                                        <input type="text" id="email" name="email" className="w-full p-2 bg-gray-200 rounded-lg" />
                                    </div>

                                    <div className="block">
                                        <label htmlFor="password" className="text-sm font-semibold">Password</label>
                                        <input type="text" id="password" name="password" className="w-full p-2 bg-gray-200 rounded-lg" />
                                    </div>

                                    <div className="block">
                                        <label htmlFor="confirmPassword" className="text-sm font-semibold">Confirm Password</label>
                                        <input type="text" id="confirmPassword" name="confirmPassword" className="w-full p-2 bg-gray-200 rounded-lg" />
                                    </div>

                                    <div className="block">
                                        <button type="submit" className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg">Register</button>
                                    </div>
                                </form>

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Authentication;