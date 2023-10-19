import { useEffect, useState } from "react";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://info-tech-server-app.vercel.app/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
    },[])
    // console.log(loadProducts);
    return (
      <div>
        <h2 className="text-5xl mt-10 font-bold text-center">
          Our Featured Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {products.map((product) => (
            <>
              <div
                className="card card-compact bg-base-100 shadow-xl"
                key={product._id}
              >
                <figure>
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="h-96"
                  />
                </figure>

                <div className="card-body">
                  <div className="mt-5 card-actions justify-start">
                    <div className="badge badge-outline">
                      {product.brandName}
                    </div>
                    <div className="badge badge-outline">
                      {product.productType}
                    </div>
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
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
};

export default Products;