import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import './assets/css/custom.css';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




// pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);


  return (
    <HelmetProvider>
      <Router>

        <ToastContainer position="top-right" autoClose={3000} />


        <div className="App">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App