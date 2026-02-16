
import { useState } from "react";
import { Link } from "react-router-dom";


// Navigation links data
import navLinks from "../assets/js/menu";


const Header = () => {

    const navLinksData = navLinks;

    // set menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className="border-b border-gray-200 bg-gray-300 p-3 w-full fixed top-0 left-0 z-50">
            <div className="lg:container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-black p-1.5 rounded">
                        <img src="assets/images/shopping-cart-white-icon.webp" alt="logo" className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">TechStore</span>
                </div>

                <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    {navLinksData.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className="text-black pb-1 hover:border-b-2 hover:border-black"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <aside className={`w-full h-screen lg:hidden fixed inset-0 bg-[#d1d5dc90] backdrop-blur-sm border-t border-gray-200 py-2 px-4 shadow-lg transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="absolute top-4 right-4 text-gray-700 hover:text-black">
                        <i className="fa-solid fa-times text-xl"></i>
                    </button>

                    <nav className="flex flex-col space-y-6 text-gray-600 font-medium overflow-x-auto mt-20">
                        {navLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="text-black pb-1 hover:border-b-2 hover:border-black"
                            >
                                {item.label}
                            </a>
                        ))}

                        <Link to="/authentication" className="bg-black hover:bg-gray-700 text-white px-5 py-2 rounded-lg flex items-center justify-center w-full gap-2 text-sm font-medium">
                            <i className="fa-regular fa-user"></i>
                            Login
                        </Link>
                    </nav>
                </aside>

                <div className="flex items-center gap-6">
                    <button className="text-gray-700 hover:text-black relative">
                        <i className="fa-solid fa-cart-shopping text-lg"></i>
                        <span className="block text-xs rounded bg-red-500 text-white p-0.5 h-4 min-w-4 absolute -top-2 -right-3">12</span>
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-gray-700 p-1 rounded-lg flex items-center gap-2 text-xl lg:hidden">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <Link to="/authentication" className="bg-black hover:bg-gray-700 text-white px-5 py-2 rounded-lg lg:flex items-center gap-2 text-sm font-medium hidden">
                        <i className="fa-regular fa-user"></i>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;