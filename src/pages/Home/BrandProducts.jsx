/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const BrandProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://info-tech-server-app.vercel.app/products")
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
      <div className="mt-10 m-auto text-center">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/wpDW5q2/ad4.jpg"
              alt="Add"
              className="h-96 w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/nkQyXjJ/ad2.jpg"
              alt="Add"
              className="h-96 w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/yN9WZ2D/ad3.jpg"
              alt="Add"
              className="h-96 w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/b68ZxLM/ad1.jpg"
              alt="Add"
              className="h-96 w-full"
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
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
                <div className="card-actions">
                  <Link to={`/productsDetails/${product._id}`}>
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
    </div>
  );
};

export default BrandProducts;
