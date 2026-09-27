import Heading from "../Heading/Heading";
import { FaSeedling, FaIndustry, FaShieldAlt, FaTruck } from "react-icons/fa";

const Process = () => {
  
  const steps = [
    {
      id: 1,
      title: "Sourcing",
      desc: "We source the best organic products directly from the farms.",
      icon: <FaSeedling />,
    },
    {
      id: 2,
      title: "Manufacturing",
      desc: "Products are carefully processed and packed keeping them fresh.",
      icon: <FaIndustry />,
    },
    {
      id: 3,
      title: "Quality Control",
      desc: "Strict quality checks are done to ensure 100% food safety.",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "Logistics",
      desc: "Fast and reliable delivery straight to your doorstep.",
      icon: <FaTruck />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">

        
        <Heading highlight="Our" heading="Process" centered />

        <div className="flex flex-col md:flex-row gap-10 mt-20 justify-center">
          {steps.map((item, index) => (
            <div
              key={item.id}
              
              className={`flex-1 flex flex-col items-center text-center ${index % 2 !== 0 ? "md:mt-16" : ""}`}
            >
              
              <span className="text-7xl font-bold text-zinc-100 mb-2">0{item.id}</span>

             
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center items-center text-white text-4xl mb-6 shadow-xl relative -mt-12">
                {item.icon}
              </div>

              
              <h4 className="text-2xl font-bold text-zinc-800">{item.title}</h4>
              <p className="text-zinc-600 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;