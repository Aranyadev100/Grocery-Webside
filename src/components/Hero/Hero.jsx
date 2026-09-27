import Button from "../Button/Button";
import { Link } from "react-router-dom";
import groceryImg from "../../assets/grocery.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen pt-24 bg-white">
      
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">

        
        <div className="flex-1 mt-10 md:mt-0">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-zinc-800 leading-[1.2] mt-6">
            Tasty Organic <br />
            <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span>
          </h1>

          <p className="text-zinc-600 text-lg max-w-[530px] mt-5 mb-10">
            We deliver the freshest and highest quality organic fruits and vegetables directly from the farm to your doorstep. Healthy living made easy!
          </p>

          
          <Link to="/all-products"><Button content="Shop Now" /></Link>
        </div>

        
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={groceryImg}
            alt="Grocery"
            className="w-full max-w-[600px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;