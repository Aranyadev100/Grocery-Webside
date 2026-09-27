const Heading = ({ highlight, heading, centered = false, className = "" }) => {
  return (
    <div className={`${centered ? "w-fit mx-auto" : "w-fit mx-auto md:mx-0"} ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-zinc-800">
        <span className="text-orange-500">{highlight}</span> {heading}
      </h2>
      {/* Nicher underline design */}
      <div className="w-34 h-1 bg-orange-300 mt-3 ml-auto"></div>
    </div>
  );
};

export default Heading;