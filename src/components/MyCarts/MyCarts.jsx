import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCarts = () => {
  const myCart = useLoaderData();

  const [updatedCart, setUpdatedCart] = useState(myCart);

  const handleDeleteCart = (_id) => {
    fetch(`https://info-tech-server-app.vercel.app/product/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure to delete cart product?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                "Deleted!",
                "Your cart product has been deleted.",
                "success"
              );
              const remaining = updatedCart.filter((cof) => cof._id !== _id);
              setUpdatedCart(remaining);
            }
          });
        }
      });
  };
  
  // const handleDeleteCart = (_id) => {
  //   fetch(`http://localhost:5000/product/${_id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         Swal.fire({
  //           title: "Are you sure to delete cart product?",
  //           text: "You won't be able to revert this!",
  //           icon: "warning",
  //           showCancelButton: true,
  //           confirmButtonColor: "#3085d6",
  //           cancelButtonColor: "#d33",
  //           confirmButtonText: "Yes, delete it!",
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             Swal.fire(
  //               "Deleted!",
  //               "Your cart product has been deleted.",
  //               "success"
  //             );
  //             const remaining = updatedCart.filter((cof) => cof._id !== _id);
  //             setUpdatedCart(remaining);
  //           }
  //         });
  //       } 
  //     });
  // };
  
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center mt-10">
        You have {updatedCart.length} product in cart
      </h2>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {updatedCart.map((cart) => (
              <tr key={cart._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cart.photo} alt={cart.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cart.name}</div>
                    </div>
                  </div>
                </td>

                <td>
                  {cart.sortDescription}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {cart.brandName}
                  </span>

                  <span className="badge badge-ghost badge-sm">
                    {cart.productType}
                  </span>
                </td>
                <td>{cart.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteCart(cart._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCarts;
