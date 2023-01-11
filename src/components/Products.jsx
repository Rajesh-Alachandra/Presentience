import { useEffect, useState } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Navbar from "./Navbar";

// -----------------------------------useState  code -------------------------------->
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  // ------------------------------------------------ Data Fetching From  API------------>
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, []);

  // -------------------------------------loading Effect---------------------------->
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  //---------------------------------------filtering products----------------------------->
  const filterProduct = (ele) => {

    const updatedList = data.filter((x) => x.category === ele);

    setFilter(updatedList);
  }



  const ShowProducts = () => {
    return (
      <>
        {/* -----------------------products catagories--------------------------------- */}
        <div className="buttons d-flex justify-content-center mb-5 pb-5">

          <button className="btn btn-outline-dark me-2" onClick={() => { setFilter(data) }}>All</button>

          <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("men's clothing") }} >Men's Clothing</button>

          <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("women's clothing") }}>Women's Clothing</button>

          <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("jewelery") }}>jewelery</button>

          <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("electronics") }}>Electronics</button>

        </div>
        {/* --------------------------- Rendering data from API link----------------------------*/}
        {
          filter.map((products) => {
            return (
              <>
                <div className="col-md-3 mb-4">

                  <div className="card h-100 text-center" >

                    <div style={{ padding: "2rem" }}>

                      <img src={products.image} className="card-img-top" alt={products.title} height="250px" />

                    </div>

                    <div className="card-body" style={{ backgroundColor: "#e7e7e7" }} >

                      <h5 className="card-title mb-0">{products.title}</h5>

                      <p className="card-text lead fw-bold">${products.price}</p>

                      <Link to={`/products/${products.id}`} className="btn btn-outline-dark">Buy Now</Link>

                    </div>

                  </div>

                </div>
              </>
            )
          })
        }
      </>
    )
  }
  //----------------------------------------latest  prodocts code-------------------------------->
  return (

    <>
      {window.location.pathname !== "/" && <Navbar />}

      <div>

        <div className="container my-3 py-5">

          <div className="row">

            <div className="col-12 mb-5">

              <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
              <hr />

            </div>

          </div>

          <div className="row justify-content-around">

            {loading ? <Loading /> : <ShowProducts />}

          </div>

        </div>

      </div>
    </>
  )
}

export default Products