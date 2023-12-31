import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useAuth();

  console.log(product);

  const handleAddCart = (e) => {
    e.preventDefault();
    const form = e.target;
    const userEmail = form.userEmail.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const sortDescription = form.sortDescription.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const cartProduct = {
      userEmail,
      name,
      photo,
      sortDescription,
      brandName,
      productType,
      price,
      rating,
    };

    console.log(cartProduct);

    fetch("https://info-tech-server-app.vercel.app/product/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire(
            "Good job!",
            "Your product add to cart successfully!",
            "success"
          );
        }
        form.reset();
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product.photo} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="py-6">{product.sortDescription}</p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">{product.brandName}</div>
              <div className="badge badge-outline">{product.productType}</div>
            </div>

            <p className="my-3 font-bold">Price : {product.price}</p>
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

            <br />

            <div>
              <form onSubmit={handleAddCart}>
                <input
                  type="text"
                  name="userEmail"
                  defaultValue={user?.email}
                  hidden
                />
                <input
                  type="text"
                  name="name"
                  defaultValue={product.name}
                  hidden
                />

                <input
                  type="text"
                  name="photo"
                  defaultValue={product.photo}
                  hidden
                />
                <input
                  type="text"
                  name="sortDescription"
                  defaultValue={product.sortDescription}
                  hidden
                />
                <input
                  type="text"
                  name="brandName"
                  defaultValue={product.brandName}
                  hidden
                />
                <input
                  type="text"
                  name="productType"
                  defaultValue={product.productType}
                  hidden
                />
                <input
                  type="text"
                  name="price"
                  defaultValue={product.price}
                  hidden
                />
                <input
                  type="text"
                  name="rating"
                  defaultValue={product.rating}
                  hidden
                />

                <button className="mt-5 btn btn-primary">Add to Cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
