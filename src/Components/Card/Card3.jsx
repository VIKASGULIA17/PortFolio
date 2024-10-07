import React from 'react';

const Card2 = ({ data }) => {
  return (
    <div className="relative w-full h-72 md:w-80 md:h-80  lg:w-[100%] lg:h-[59vh] desktop:w-[80%] hd:h-[35rem] hd:mx-40 hd:my-10 hd:w-[70%] border-2 border-white rounded-2xl  p-5 text-white/90 bg-cover bg-no-repeat bg-backgroundimg  transition-transform duration-500 capitalize desktop:h-[30rem] ">
      <div className="xl:right-40 absolute h-64 md:h-auto w-[90%] lg:w-96 left-5  lg:left-30 desktop:left-40 top-5 hd:h-[85%] bg-[#6366F1] border-2 border-white/30 shadow-xl transition-transform duration-500 desktop:mx-0 md:mt-2 ml-8 lg:h-auto lg:pb-4 rounded-lg text-[#F9F7F7] hd:w-[80%] hover:scale-105">
        <h1 className="text-xl  lg:text-4xl desktop:text-4xl hd:text-7xl font-semibold px-4  lg:px-9 py-4  lg:py-9 text-white md:text-3xl ">
          {data.title}
        </h1>
        <p className="text-sm md:text-md lg:text-lg 2xl:text-xl  px-4 md:px-6 lg:px-9 hd:text-4xl text-white/90">
          {data.description}
        </p>
        <div className="mt-2 md:mt-4 px-4 md:px-6 lg:px-9 text-sm md:text-md lg:text-lg 2xl:text-xl hd:text-[2rem] font-light ">
          <p className="mt-2 hd:leading-10">
            {data.completion}
          </p>
        </div>
        <button className="border-2 font-extralight w-28 sm:w-32 md:w-28 lg:w-36 h-8 sm:h-10 md:h-9 lg:h-10 my-6 lg:my-4 mx-4 sm:mx-6 lg:mx-10 text-sm sm:text-lg md:text-lg lg:text-xl hover:border-red-400 hover:bg-red-400 hover:text-white capitalize duration-500 md:mb-7 lg:mt-10 hd:text-2xl">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card2;
