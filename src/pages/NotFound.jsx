import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from '@dr.pogodin/react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | TechStore</title>
      </Helmet>


      <div className="bg-white min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">

          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.</p>

          <Link to="/" className="inline-block bg-black hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Back Home
          </Link>
        </div>
      </div>
    </>
  )
};

export default NotFound;