import Heading from "../Heading/Heading";
import basketImg from "../../assets/basket-full-vegetables.png";
import { FaHeart, FaLeaf, FaShieldAlt } from "react-icons/fa";
import { GiSeedling } from "react-icons/gi";

const Values = () => {
  // ডেটা স্ট্রাকচার
  const values = [
    {
      id: 1,
      title: "Trust",
      description: "Quality you can trust for your daily needs.",
      icon: <FaHeart />,
    },
    {
      id: 2,
      title: "Always Fresh",
      description: "Freshly picked and delivered to your doorstep.",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Food Safety",
      description: "Strict quality checks for your safety.",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "100% Organic",
      description: "Pure, natural, and completely organic.",
      icon: <GiSeedling />,
    },
  ];

  // অ্যারেকে দুই ভাগে ভাগ করা (বাম ও ডানের জন্য)
  const leftValues = values.slice(0, 2);
  const rightValues = values.slice(2, 4);

  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Our" heading="Values" centered />

        <div className="flex flex-col md:flex-row items-center gap-15 mt-15">

          {/* বাম দিকের কন্টেন্ট */}
          <div className="flex-1 flex flex-col gap-y-15 w-full">
            {leftValues.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-right">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-800">{item.title}</h3>
                  <p className="text-zinc-600 mt-2">{item.description}</p>
                </div>
                <div className="w-15 h-15 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center items-center text-white text-2xl shrink-0">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* মাঝের ছবি (শুধু বড় স্ক্রিনে দেখাবে) */}
          <div className="flex-1 hidden md:flex justify-center">
            <img src={basketImg} alt="Fresh Basket" className="w-full max-w-[400px] object-contain" />
          </div>

          {/* ডান দিকের কন্টেন্ট */}
          <div className="flex-1 flex flex-col gap-y-15 w-full">
            {rightValues.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row-reverse items-center md:items-start gap-5 text-center md:text-left">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-800">{item.title}</h3>
                  <p className="text-zinc-600 mt-2">{item.description}</p>
                </div>
                <div className="w-15 h-15 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center items-center text-white text-2xl shrink-0">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Values;