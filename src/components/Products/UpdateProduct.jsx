import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id,
    name,
    brandName,
    productType,
    price,
    sortDescription,
    rating,
    photo,
  } = product;

  const navigate = useNavigate();

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const sortDescription = form.sortDescription.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updateProducts = {
      name,
      brandName,
      productType,
      price,
      sortDescription,
      rating,
      photo,
    };

    fetch(`https://info-tech-server-app.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-3/4 m-auto text-center lg:p-24">
      <h2 className="text-3xl mb-8 font-bold">Update Product</h2>
      <form onSubmit={handleUpdateProduct}>
        <div className="md:flex space-x-5 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter product name"
                className="input input-bordered w-full"
                name="name"
                defaultValue={name}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full max-w-xs"
                name="brandName"
                defaultValue={brandName}
                required
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"Apple"}>Apple</option>
                <option value={"Samsung"}>Samsung</option>
                <option value={"Dell"}>Dell</option>
                <option value={"Canon"}>Canon</option>
                <option value={"Sony"}>Sony</option>
                <option value={"JBL"}>JBL</option>
              </select>
            </label>
          </div>
        </div>

        <div className="md:flex space-x-5 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full max-w-xs"
                name="productType"
                defaultValue={productType}
                required
              >
                <option disabled selected>
                  Select type
                </option>
                <option value={"Phone"}>Phone</option>
                <option value={"Laptop"}>Laptop</option>
                <option value={"Camera"}>Camera</option>
                <option value={"Headphone"}>Headphone</option>
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter price"
                className="input input-bordered w-full"
                name="price"
                defaultValue={price}
                required
              />
            </label>
          </div>
        </div>

        <div className="md:flex space-x-5 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Sort Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter sort description"
                className="input input-bordered w-full"
                name="sortDescription"
                defaultValue={sortDescription}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter rating"
                className="input input-bordered w-full"
                name="rating"
                defaultValue={rating}
                required
              />
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter photo url"
                className="input input-bordered w-full"
                name="photo"
                defaultValue={photo}
                required
              />
            </label>
          </div>
        </div>
        <input className="btn btn-block" type="submit" value="Update Product" />
      </form>
    </div>
  );
};

export default UpdateProduct;
