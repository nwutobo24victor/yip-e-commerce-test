import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from '@dr.pogodin/react-helmet';

// import components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ViewProduct from "../components/ViewProduct";
import ViewCart from "../components/ViewCart";


const Home = () => {

    // set searchForm state
    const [searchQuery, setSearchQuery] = useState("");
    // set filter state
    const [filter, setFilter] = useState("all");


    const products = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            category: "audio",
            price: 299.99,
            rating: 4.8,
            stock: 25,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Noise Cancelling Earbuds",
            category: "audio",
            price: 149.99,
            rating: 4.6,
            stock: 40,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
        },
        {
            id: 3,
            name: "Smart Fitness Watch",
            category: "wearable",
            price: 199.99,
            rating: 4.7,
            stock: 30,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },
        {
            id: 4,
            name: "Luxury Smartwatch",
            category: "wearable",
            price: 349.99,
            rating: 4.9,
            stock: 15,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        },
        {
            id: 5,
            name: "Gaming Laptop",
            category: "computer",
            price: 1299.99,
            rating: 4.8,
            stock: 10,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        },
        {
            id: 6,
            name: "Ultrabook Laptop",
            category: "computer",
            price: 999.99,
            rating: 4.5,
            stock: 18,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        },
        {
            id: 7,
            name: "Mechanical Keyboard",
            category: "computer",
            price: 129.99,
            rating: 4.6,
            stock: 50,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
        },
        {
            id: 8,
            name: "Wireless Mouse",
            category: "computer",
            price: 49.99,
            rating: 4.4,
            stock: 70,
            image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
        },
        {
            id: 9,
            name: "Bluetooth Speaker",
            category: "audio",
            price: 89.99,
            rating: 4.5,
            stock: 60,
            image: "https://images.unsplash.com/photo-1585386959984-a41552231692"
        },
        {
            id: 10,
            name: "Studio Microphone",
            category: "audio",
            price: 179.99,
            rating: 4.7,
            stock: 22,
            image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc"
        },
        {
            id: 11,
            name: "Non-stick Frying Pan",
            category: "kitchen",
            price: 39.99,
            rating: 4.3,
            stock: 80,
            image: "https://images.unsplash.com/photo-1586201375761-83865001e17b"
        },
        {
            id: 12,
            name: "Electric Kettle",
            category: "kitchen",
            price: 59.99,
            rating: 4.6,
            stock: 45,
            image: "https://images.unsplash.com/photo-1606813902914-04f4ad53a0e1"
        },
        {
            id: 13,
            name: "Blender Machine",
            category: "kitchen",
            price: 99.99,
            rating: 4.5,
            stock: 28,
            image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b"
        },
        {
            id: 14,
            name: "Chef Knife Set",
            category: "kitchen",
            price: 79.99,
            rating: 4.7,
            stock: 35,
            image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef"
        },
        {
            id: 15,
            name: "Men’s Casual Shirt",
            category: "fashion",
            price: 49.99,
            rating: 4.4,
            stock: 90,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        },
        {
            id: 16,
            name: "Women’s Summer Dress",
            category: "fashion",
            price: 69.99,
            rating: 4.6,
            stock: 55,
            image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
        },
        {
            id: 17,
            name: "Unisex Hoodie",
            category: "fashion",
            price: 59.99,
            rating: 4.5,
            stock: 65,
            image: "https://images.unsplash.com/photo-1520974735194-6c2f0c7f3a63"
        },
        {
            id: 18,
            name: "Running Sneakers",
            category: "fashion",
            price: 89.99,
            rating: 4.7,
            stock: 40,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        },
        {
            id: 19,
            name: "Smart Glasses",
            category: "wearable",
            price: 249.99,
            rating: 4.3,
            stock: 20,
            image: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759"
        },
        {
            id: 20,
            name: "Fitness Band",
            category: "wearable",
            price: 79.99,
            rating: 4.4,
            stock: 85,
            image: "https://images.unsplash.com/photo-1556404030-2c3b94bbd265"
        }
    ];

    const filteredProducts = (products || []).filter((product) => {
        const name = product?.name ?? "";
        const category = product?.category ?? "";

        const matchesCategory = filter === "all" || (category && category === filter);

        const matchesSearch = searchQuery.trim() === "" || name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Helmet>
                <title>Products | TechStore</title>
            </Helmet>


            <div className="bg-white min-h-screen w-full">
                {/* header */}
                <header>
                    <Header />
                </header>

                {/* main     */}
                <main className="max-w-8xl mx-auto px-8 py-8 mt-20">

                    <div className="flex lg:flex-row flex-col gap-4 mb-10 w-full">
                        <div className="flex lg:flex-row flex-col gap-4 mb-10 w-full">
                            {/* Search */}
                            <div className="lg:w-5/6 w-full relative">
                                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#f1f5f9] border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-gray-200 outline-none text-gray-600"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="lg:w-1/6 w-full">
                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    className="w-full bg-[#f1f5f9] border-none rounded-xl py-4 px-2 font-medium text-gray-700 outline-none cursor-pointer"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="wearable">Wearables</option>
                                    <option value="computer">Computer</option>
                                    <option value="audio">Audio</option>
                                    <option value="kitchen">Kitchen Utensill</option>
                                    <option value="fashion">Men & Women Wears</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {filteredProducts.map((items, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-64 flex items-center justify-center p-4">
                                    <img src={items.image} alt={items.name} className="max-h-full w-full rounded-lg object-center object-cover" />
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-gray-900">{items.name}</h3>
                                        <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded font-bold">{items.category}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-4">
                                        <i className="fa-solid fa-star text-yellow-400 text-xs"></i>
                                        <span className="text-sm font-bold">{items.rating}</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-xl font-bold">${items.price}</span>
                                        <span className="text-gray-400 text-xs">{items.stock} in stock</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </main>

                {/* footer   */}
                <footer>
                    <Footer />
                </footer>

                {/* view products modal */}
                <div hidden>
                    <ViewProduct />
                </div>

                {/* view cart modal */}
                <div hidden>
                    <ViewCart />
                </div>
            </div>
        </>
    )
};

export default Home;