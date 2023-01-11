import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


// ----------------------------------------------------single product page details--------------------------------->

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    // ------------------------------------------------UseEffect.....data fatching from API--------------------->
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        };
        getProducts();
    },[]);

// -----------------------------------------------Loading effect..................................................>
    const Loading = () => {
        return <>
        <div>
            <Skeleton height={300}/>
        </div>
        </>;
    };
// -----------------------------------------------------single produts fuction in product page------------------->
    const ShowProduct = () => {
        return (
            <>
            {/* <---------------------------logic for Navbar---------------> */}
                {window.location.pathname !== "/" && <Navbar />}

                <div className="d-flex p-md-5 justify-content-around my-5">
                    <div className="col-md-4">
                        <img
                            src={product.image}
                            alt={product.title}
                            height={"300px"}
                            width={"300px"}
                        />
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-black-50 fs-2">
                            {product.category}{" "}
                        </h4>
                        <h1 className="display-5">{product.title}</h1>
                        <p className="lead fw-bold">
                            Rating {product.rating && product.rating.rate}
                            <i className="fa fa-star"></i>
                        </p>
                        <h3 className="displsy-6 fw-bold my-5"> ${product.price}</h3>
                        <p>{product.description}</p>

                        <button className="btn btn-outline-dark px-2 py-2">Add to Cart</button>

                        <Link to="/Cart"><button className="btn btn-outline-primary ms-4 py-2">Go to Cart</button></Link>

                    </div>
                </div>
            </>
        );
    };
// <---------------------------------------------------Rendering single product function---------------->
    return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
};

export default Product;
