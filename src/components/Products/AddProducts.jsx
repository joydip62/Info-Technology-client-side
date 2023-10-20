// import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddProducts = () => {
  // const loadProducts = useLoaderData();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const sortDescription = form.sortDescription.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const products = {
      name,
      brandName,
      productType,
      price,
      sortDescription,
      rating,
      photo,
    };
    //   console.log(products);
    fetch("https://info-tech-server-app.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire(
            "Good job!",
            "You Added a product successfully!",
            "success"
          );
        }
        form.reset();
      });
  };
  return (
    <div className="w-3/4 m-auto text-center lg:p-24">
      <h2 className="text-3xl mb-8">Add Product</h2>
      <form onSubmit={handleAddProduct}>
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
                required
              >
                <option disabled selected>
                  Select type
                </option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Dell">Dell</option>
                <option value="Canon">Canon</option>
                <option value="Sony">Sony</option>
                <option value="JBL">JBL</option>
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
                required
              >
                <option disabled selected>
                  Select type
                </option>
                <option value="phone">Phone</option>
                <option value="laptop">Laptop</option>
                <option value="camera">Camera</option>
                <option value="headphone">Headphone</option>
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
                required
              />
            </label>
          </div>
        </div>
        <input className="btn btn-block" type="submit" value="Add Product" />
      </form>
      {/*  
      <br />
      <br />
      <br />
      <h2 className="text-3xl mb-8">All Products</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadProducts.map((product) => (
              <>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.photo} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-sm opacity-50">
                          {product.brandName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.sortDescription}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {product.productType}
                    </span>
                  </td>
                  <td>{product.price}</td>

                  <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                    <button className="btn btn-danger btn-xs">Delete</button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      */}
    </div>
  );
};

export default AddProducts;
