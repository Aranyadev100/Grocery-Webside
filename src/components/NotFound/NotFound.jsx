import { Link } from "react-router-dom";
import Button from "../Button/Button";

const NotFound = () => <div className="max-w-[1400px] mx-auto px-10 py-40 text-center"><h1 className="text-6xl font-bold text-orange-500">404</h1><h2 className="text-3xl font-bold text-zinc-800 mt-4">Page not found</h2><Link to="/" className="inline-block mt-8"><Button content="Back Home" /></Link></div>;

export default NotFound;
