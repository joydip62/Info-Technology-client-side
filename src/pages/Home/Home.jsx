
import AOS from "aos";
import { Link, useLoaderData } from "react-router-dom";
import Products from "../../components/Products/Products";
import WhyUs from "./WhyUs";
AOS.init();

const Home = () => {
  
  const brands = useLoaderData();


    return (
      <div>
        <div>
          <div
            className="relative"
            style={{
              backgroundImage: "url(https://i.ibb.co/8dv6HFr/tech-banner.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="w-full mx-auto flex justify-center items-center md:h-[47vh] lg:h-[68vh]"
              style={{
                background: "black",
                opacity: 0.7,
              }}
            >
              <div className="text-right text-white w-full p-5 lg:w-full">
                <h1 className="md:text-3xl">
                  Bestseller
                  <span className="block text-2xl md:text-[78px] font-extrabold my-3 md:my-5">
                    Smart Collection
                  </span>
                </h1>
                <p className="">
                  {" "}
                  --------------- Best choice for your best Experience
                  ---------------
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-xl font-bold md:text-5xl md:font-extrabold">
            Best Brand in our shop
          </h2>
          <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <div key={brand.id}>
                <Link to={`/brand/product/${brand.name}`}>
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-72"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="text-center text-3xl font-bold">
                        {brand.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Products></Products>
        </div>
        <div><WhyUs></WhyUs></div>

      </div>
    );
};

export default Home;