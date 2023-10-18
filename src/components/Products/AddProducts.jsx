import Swal from "sweetalert2";

const AddProducts = () => {
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
      fetch("http://localhost:5000/products", {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(products)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire("Good job!", "You Added a product successfully!", "success");
            }
            form.reset();
        });
  };

  /*
  * brand
https://i.ibb.co/h9vxJxv/jbl.jpg
https://i.ibb.co/BrnbBK6/sony.png
https://i.ibb.co/f10hR1S/canon.png
https://i.ibb.co/Fs6DBC8/dell.jpg
https://i.ibb.co/wWwfqXV/samsung.jpg
https://i.ibb.co/jvNcMcz/Apple-Logo.png


* product
https://i.ibb.co/sKkdgH2/sony-mobile.jpg
https://i.ibb.co/pr88XjG/apple-laptop.jpg
https://i.ibb.co/hcQ0QMs/apple-mobile.jpg
https://i.ibb.co/r6chdzd/samsung-mbl.jpg
https://i.ibb.co/g3MT2LS/dell-laptop.jpg
https://i.ibb.co/wJ1nSCK/canon-camera.png
https://i.ibb.co/Wy5fz46/sony-camera.jpg
https://i.ibb.co/mvR8M9q/jbl-headphones.png

    */
  return (
    <div className="w-3/4 m-auto text-center p-24">
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
              />
            </label>
          </div>
        </div>
        <input className="btn btn-block" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProducts;