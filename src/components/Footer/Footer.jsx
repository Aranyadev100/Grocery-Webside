import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row flex-wrap gap-12">

        
        <div className="flex-1 basis-[300px]">
          <Link to="/" className="text-3xl font-semibold">
            Grosif<span className="text-orange-500 uppercase">y</span>
          </Link>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            We deliver the freshest and highest quality organic fruits and vegetables directly from the farm to your doorstep. Healthy living made easy!
          </p>
          <p className="text-zinc-800 font-semibold mt-6">
            © 2026 All Rights Reserved.
          </p>
        </div>

        
        <div className="flex-1">
          <h5 className="text-2xl font-bold text-zinc-800">Company</h5>
          <ul className="mt-6 flex flex-col gap-y-4">
            <li><Link to="/about" className="text-zinc-600 hover:text-orange-500 font-semibold transition-colors">About Us</Link></li>
            <li><Link to="/process" className="text-zinc-600 hover:text-orange-500 font-semibold transition-colors">Our Process</Link></li>
            <li><Link to="/account" className="text-zinc-600 hover:text-orange-500 font-semibold transition-colors">Account</Link></li>
          </ul>
        </div>

        
        <div className="flex-1">
          <h5 className="text-2xl font-bold text-zinc-800">Support</h5>
          <ul className="mt-6 flex flex-col gap-y-4">
            <li><Link to="/contact" className="text-zinc-600 hover:text-orange-500 font-semibold transition-colors">Support Center</Link></li>
            <li><Link to="/contact" className="text-zinc-600 hover:text-orange-500 font-semibold transition-colors">Feedback</Link></li>
            <li><Link to="/contact" className="text-zinc-600 hover:text-orange-500 font-semibold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        
        <div className="flex-1 basis-[300px]">
          <h5 className="text-2xl font-bold text-zinc-800">Stay Connected</h5>
          <p className="text-zinc-600 mt-6">
            Questions or feedback? <br /> We'd love to hear from you.
          </p>

          <div className="flex p-1 border-2 border-orange-500 rounded-full items-center bg-white mt-6">
            <input
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              className="px-4 focus:outline-none bg-transparent w-full h-10"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-12 h-12 flex justify-center items-center rounded-full text-xl cursor-pointer transition-all hover:scale-105 shrink-0">
              <IoSend />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;