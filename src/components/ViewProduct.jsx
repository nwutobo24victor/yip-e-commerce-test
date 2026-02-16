const ViewProduct = () => {
    return (
        <div className="block w-full h-screen fixed top-0 left-0 bg-[#ffffff96] backdrop-blur-sm z-10">
            <div className="max-w-8xl mx-auto px-4 lg:px-8 py-8 mt-20 space-y-6 overflow-y-auto h-full">
                <div className="w-full">
                    <button type="button" className="text-gray-700 hover:text-black flex items-center gap-2 hover:bg-gray-200 rounded-lg px-4 py-2">
                        <i className="fa-solid fa-arrow-left text-xl"></i>
                        <span>Back to Products</span>
                    </button>
                </div>

                <div className="flex gap-6 lg:flex-row flex-col pb-10">
                    <div className="lg:w-1/2 w-full">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="lg:w-1/2 w-full space-y-4 bg-white p-6 rounded-xl">
                        <p>
                            <span className="rounded-md text-xs bg-gray-200 px-2 py-1">Audio</span>
                        </p>
                        <p className="font-semibold text-xl">Sony WH-1000XM4 Wireless Noise-Canceling Headphones</p>
                        <p className="flex items-center space-x-2">
                            <i className="fa-solid fa-star text-yellow-400 text-xs"></i>
                            <span className="text-sm">4.8</span>
                            <span className="text-sm text-gray-500">(120 reviews)</span>
                        </p>
                        <p className="text-2xl">$349.99</p>
                        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio ipsa cupiditate fuga veritatis quisquam facilis odio dolor, voluptate temporibus non eum perspiciatis ea iure. Cupiditate inventore rerum praesentium sapiente.</p>
                        <hr className="text-gray-500" />

                        <p className="text-sm">Stock: <span className="text-green-500">15 units available</span></p>

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

                        <button type="button" className="w-full bg-black hover:bg-gray-700 text-white py-3 rounded-lg mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;