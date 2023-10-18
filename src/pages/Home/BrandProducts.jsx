/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const brandName = name;

        const filteredData = data.filter(
          (item) => item.brandName === brandName
        );
        setProducts(filteredData);
      });
  }, [name]);
  return (
    <div>
      <h2 className="font-bold md:text-5xl text-center mt-10">
        Products with brand name:{" "}
        <span className="md:font-extrabold">{name}</span>
      </h2>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            className="card card-compact bg-base-100 shadow-xl"
            key={product._id}
          >
            <figure>
              <img src={product.photo} alt={product.name} className="h-96" />
            </figure>

            <div className="card-body">
              <div className="mt-5 card-actions justify-start">
                <div className="badge badge-outline">{product.brandName}</div>
                <div className="badge badge-outline">{product.productType}</div>
              </div>
              <h2 className="card-title">{product.name}</h2>
              <p>{product.sortDescription}</p>
              <p>Price : {product.price}</p>
              <div className="rating">
                {Array.from({ length: product.rating }, (_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name={`rating-${index}`}
                    className={`mask mask-star-2 bg-orange-400 ${
                      index < product.rating ? "checked" : ""
                    }`}
                  />
                ))}
              </div>
              <div className="card-actions">
                <Link to={`/productDetails/${product._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>

                <Link to={`/productUpdate/${product._id}`}>
                  <button className="btn btn-success ">Update</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
