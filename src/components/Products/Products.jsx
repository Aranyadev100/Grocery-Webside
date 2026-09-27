import { useState } from "react";
import { Link } from "react-router-dom"; // Link ইমপোর্ট করা হলো
import Heading from "../Heading/Heading";
import Card from "../Card/Card";
import { productList } from "../ProductList/ProductList";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Seafood", "Meat"];

  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All"
    ? productList
    : productList.filter((item) => item.category === activeTab);

  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Our" heading="Products" centered />

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-lg text-lg cursor-pointer transition-all ${activeTab === category
                ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                : "bg-zinc-100 text-zinc-800 hover:bg-orange-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        { }
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
          {filteredItems.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        { }
        <div className="mt-15 flex justify-center">
          {/* Button টিকে Link দিয়ে র‍্যাপ করা হলো */}
          <Link to="/all-products">
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 transition-all cursor-pointer">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;