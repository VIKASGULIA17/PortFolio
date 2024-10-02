import React from "react";

const Card = ({ data: { imageurl, title, desc, proficiency } }) => {
  return (
    <div className="relative w-[full]   max-w-xs mx-auto bg-[#2E2E3E] border-2 border-white rounded-2xl overflow-hidden p-4 text-white hover:bg-[#6366F1] hover:scale-105 hover:shadow-lg duration-500 flex flex-col items-center">
      {/* Image Container */}
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white">
        {imageurl ? (
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={imageurl}
            alt={title}
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse"></div>
        )}
      </div>

      {/* Title and Description */}
      <p className="hidden lg:block text-lg font-semibold mb-2 text-center 2xl:text-xl">{title}</p>
      <p className=" hidden lg:block text-sm font-light text-center 2xl:text-lg">{desc}</p>

      {/* Hover Section for Proficiency */}
      <div className=" hidden absolute inset-0 lg:flex items-center justify-center bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm ">
        <p className="text-white text-3xl font-bold ">{proficiency}</p>
      </div>
    </div>
  );
};

export default Card;
