import communications from "./../../../public/communications.jpg";
import delivery from "./../../../public/delivery.jpg";
import guarantee from "./../../../public/guarantee.jpg";

const WhyUs = () => {
  return (
    <div className="">
      <h2 className="text-5xl font-bold mt-10 text-center">Why Choose Us?</h2>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card bg-base-100 shadow-xl">
          <div className="text-center">
            <img src={communications} alt="" className="w-full h-96" />
            <div className="card card-body">
              <h3 className="text-3xl font-bold text-center">
                Best Communications
              </h3>
              <p>
                Clear and timely communication is integral to our e-commerce
                platform. We provide product information, order confirmations,
                and shipment updates to keep you informed. Our dedicated support
                team is available for any questions. Your feedback drives our
                commitment to delivering transparent and efficient communication
                throughout your shopping journey.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="text-center">
            <img src={delivery} alt="" className="w-full h-96" />
            <div className="card card-body">
              <h3 className="text-3xl font-bold text-center">Fast Delivery</h3>
              <p>
                Fast Delivery: Your time is precious, and we understand that.
                We are dedicated to providing lightning-fast delivery services,
                ensuring your orders are in your hands when you need them most.
                Shop with confidence, knowing that swift, on-time delivery is
                our promise to you.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="text-center">
            <img src={guarantee} alt="" className="w-full h-96" />
            <div className="card card-body">
              <h3 className="text-3xl font-bold text-center">Reliable</h3>
              <p>
                Count on us for dependable service. We pride ourselves on
                reliability, ensuring your orders arrive on schedule and in
                excellent condition. Your trust is essential, and we are here to
                consistently deliver a reliable shopping experience you can rely
                on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
