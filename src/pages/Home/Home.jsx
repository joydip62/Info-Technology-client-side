
import AOS from "aos";
AOS.init();

const Home = () => {
  
  // const services = useLoaderData();

    return (
      <div>
        <div>
          <div>
            <div
              className="relative"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/8dv6HFr/tech-banner.jpg)",
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
        </div>
      </div>
    );
};

export default Home;