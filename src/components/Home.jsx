import React from "react";
import img from "../assets/clothes.jpg"
import Footer from "../Pages/Footer";
import Navbar from "./Navbar";
import Products from "./Products";


const Home = () => {
    return (
        <>
            <Navbar />
            <div className="card bg-dark text-white">

                <img src={img} className="card-img" alt="bgImg" height={'520px'} />

                <div className="card-img-overlay d-flex flex-column justify-content-center ">

                    <div className="container">

                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>

                        <p className="card-text lead fs-4">CHECK OUT  ALL THE TRENDS</p>

                    </div>

                </div>
            </div>
            <Products />
            <Footer/>
        </>
    )
};

export default Home;
