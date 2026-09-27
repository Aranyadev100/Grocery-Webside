import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { Link } from "react-router-dom"; 

import fruitsCat from "../../assets/fruits-and-veggies.png";
import dairyCat from "../../assets/dairy-and-eggs.png";
import seafoodCat from "../../assets/meat-and-seafood.png";

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "Fruits & Veggies",
      description: "Get fresh and organic fruits and vegetables directly from the farm to your doorstep.",
      image: fruitsCat,
      path: "/fruits", 
    },
    {
      id: 2,
      title: "Dairy & Eggs",
      description: "Start your day right with our farm-fresh dairy and eggs, perfect for a healthy diet.",
      image: dairyCat,
      path: "/dairy", 
    },
    {
      id: 3,
      title: "Meat & Seafood",
      description: "Premium quality meat and fresh seafood to make your daily meals more delicious.",
      image: seafoodCat,
      path: "/seafood", 
    },
  ];

  const renderCards = categories.map((card) => {
    return (
      <div key={card.id} className="flex-1 mt-15 md:mt-0 relative">
        <div className="bg-zinc-100 px-8 pt-24 pb-8 rounded-xl text-center md:text-left mt-20 relative z-10">
          <h3 className="text-3xl font-bold text-zinc-800">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>

          {/* Button-কে Link দিয়ে র‍্যাপ করা হলো */}
          <Link to={card.path}>
            <Button content="See All" />
          </Link>

        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-5 -mt-10 z-20 w-4/5 md:w-[90%] h-[200px]">
          <img src={card.image} alt={card.title} className="w-full h-full object-contain" />
        </div>
      </div>
    );
  });

  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Shop" heading="by Category" centered />
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 md:mt-20">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;