import React from "react";

const Card = ({ data: { imageurl, title, desc, proficiency } }) => {
  return (
    <div
      className="
        relative 
        w-[full] 
        max-w-xs 
        mx-auto 
        bg-[#2E2E3E] 
        border-2 border-white 
        rounded-2xl 
        overflow-hidden 
        p-4 
        text-white 
        flex flex-col 
        items-center 
        hover:bg-[#6366F1] 
        hover:scale-105 
        hover:shadow-lg 
        duration-500 
        hd:w-[100vh] 
        hd:max-w-xl
      "
    >
      {/* Image Container */}
      <div
        className="
          w-24 
          h-24 
          flex 
          items-center 
          justify-center 
          rounded-full 
          bg-white 
          hd:w-[90px] 
          hd:h-[90px] 
          hd:mb-6
        "
      >
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
      <p
        className="
          hidden 
          text-lg 
          font-semibold 
          mb-2 
          text-center 
          md:block 
          lg:block 
          2xl:text-xl 
          hd:text-[45px] 
          hd:py-[20px]
        "
      >
        {title}
      </p>
      <p
        className="
          hidden 
          text-sm 
          font-light 
          text-center 
          md:block 
          lg:block 
          2xl:text-lg 
          hd:text-[30px] 
          hd:leading-10 
          hd:px-10
        "
      >
        {desc}
      </p>

      {/* Hover Section for Proficiency */}
      <div
        className="
          hidden 
          absolute 
          inset-0 
          bg-gradient-to-b 
          from-black 
          to-transparent 
          bg-opacity-80 
          opacity-0 
          transition-opacity 
          duration-300 
          backdrop-blur-sm 
          lg:flex 
          items-center 
          justify-center 
          hover:opacity-100
        "
      >
        <div className="flex flex-col gap-10 items-center">
          <p className="text-white text-3xl font-bold hd:text-[70px]">
            {proficiency}
          </p>
          <img
            src="https://static.thenounproject.com/png/5479475-200.png"
            alt=""
            className="bg-transparent text-white w-16 h-16 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
