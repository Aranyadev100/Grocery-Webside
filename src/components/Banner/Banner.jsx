const Banner = ({ title, bgImage }) => {
  return (
    <div 
      className="relative w-full h-[50vh] flex justify-center items-center rounded-xl overflow-hidden mt-25"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >

      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      
      <h2 className="text-5xl font-bold text-white z-10 text-center px-5">
        {title}
      </h2>
    </div>
  );
};

export default Banner;