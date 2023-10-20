import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetch("https://info-tech-server-app.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log(loadProducts);
  return (
    <div>
      <h2 className="text-5xl mt-10 font-bold text-center">
        Our Featured Products
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {products.slice(0, 8).map((product) => (
          <>
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
      {/* {products.length > 4 && (
          <button
            onClick={() => setIsShow(!isShow)}
            className="px-5 py-2 rounded-lg mt-5 bg-green-600 text-white block mx-auto"
          >
            {isShow ? "See Less" : "See All"}
          </button>
        )} */}
    </div>
  );
};

export default Products;
