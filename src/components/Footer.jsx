const Footer = () => {
    return (
        <div className="bg-black text-white py-12 px-6 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-black p-1.5 rounded">
                            <img src="assets/images/shopping-cart-white-icon.webp" alt="logo" className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">TechStore</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Premium hardware and cutting-edge gadgets for the modern innovator. Elevate your setup with TechStore.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-white transition">Laptops</a></li>
                        <li><a href="#" className="hover:text-white transition">PC Components</a></li>
                        <li><a href="#" className="hover:text-white transition">Peripherals</a></li>
                        <li><a href="#" className="hover:text-white transition">Accessories</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Returns</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Stay Updated</h3>
                    <p className="text-gray-300 text-sm">Get the latest tech news and deals.</p>
                    <div className="flex">
                        <input type="email" placeholder="Email address" className="bg-gray-900 border border-gray-700 text-white text-sm p-2 w-full focus:outline-none focus:border-white" />
                        <button className="bg-white text-black px-4 py-2 font-bold text-sm hover:bg-gray-300 transition">JOIN</button>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
                <p>© 2026 TechStore Inc. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                    <a href="#" className="hover:text-white">Cookies</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;