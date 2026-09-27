import Button from "../Button/Button";
import { Link } from "react-router-dom";

import bgImage from "../../assets/fruits-and-veggies.png";

const Discount = () => {
  return (
    <section
      className="py-10 my-20 bg-zinc-100 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center h-full min-h-[40vh]">

        
        <span className="text-6xl md:text-8xl text-orange-500 font-bold md:-rotate-90 md:mr-10 mb-5 md:mb-0">
          20%
        </span>

        
        <div className="max-w-[700px] bg-white/80 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none">
          <h3 className="text-4xl md:text-6xl font-bold text-zinc-800">
            First Order Discount
          </h3>
          <p className="text-zinc-600 my-6 text-lg">
            Get a special discount on your very first order. Experience the best quality organic products delivered straight to your hostel or mess, making healthy living easier for you.
          </p>
          <Link to="/all-products"><Button content="Get a Discount" /></Link>
        </div>

      </div>
    </section>
  );
};

export default Discount;