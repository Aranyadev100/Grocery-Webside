import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Heading from "../Heading/Heading";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  // কাস্টমার রিভিউ ডেটা
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      profession: "College Student",
      rating: 5,
      para: "Living in a mess means compromising on fresh food, but Grosify changed that. The organic fruits are perfectly fresh and delivery is always on time!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Patel",
      profession: "Software Engineer",
      rating: 4,
      para: "Great quality vegetables! It saves me so much time after work. The packaging is eco-friendly and the products last longer in the fridge.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Amit Kumar",
      profession: "Fitness Trainer",
      rating: 5,
      para: "As someone who tracks their diet strictly, I highly recommend their high-protein dairy and fresh seafood. Top-notch quality every single time.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 4,
      name: "Sneha Roy",
      profession: "Home Maker",
      rating: 5,
      para: "The 100% organic guarantee is real. The taste of the veggies reminds me of my village farm. Absolutely love the fast delivery service.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-10 relative">
          <Heading highlight="Customers" heading="Saying" centered className="md:absolute md:left-1/2 md:-translate-x-1/2" />

          {/* কাস্টম নেভিগেশন বাটন */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="custom-prev w-12 h-12 rounded-full bg-zinc-100 flex justify-center items-center text-xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white transition-all cursor-pointer shadow-sm">
              <IoIosArrowBack />
            </button>
            <button className="custom-next w-12 h-12 rounded-full bg-zinc-100 flex justify-center items-center text-xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white transition-all cursor-pointer shadow-sm">
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10 pb-10"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-zinc-100 p-8 rounded-2xl h-full min-h-[250px]">

                {/* প্রোফাইল ছবি ও নাম */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 p-0.5">
                    <img src={item.image} alt={item.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-zinc-800">{item.name}</h5>
                    <p className="text-zinc-600 text-sm">{item.profession}</p>

                    {/* ডাইনামিক স্টার রেটিং */}
                    <div className="flex gap-1 text-orange-400 mt-1 text-sm">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* রিভিউ টেক্সট */}
                <p className="text-zinc-600 mt-6 leading-relaxed">
                  "{item.para}"
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;