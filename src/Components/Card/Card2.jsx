import React from 'react';

const Card2 = ({ data }) => {
  return (
    <div className="relative w-full h-72 md:w-80 md:h-80 lg:w-[40%] lg:h-[59vh] 3xl:w-[30%] border-2 border-white rounded-2xl p-5 text-white/90 bg-cover bg-no-repeat bg-backgroundimg hover:bg-zinc-700 transition-transform duration-500 desktop:h-[30rem] desktop:w-[35rem] hd:w-[30vw] hd:h-[30vh]">
      <div className="xl:right-40 absolute h-64 md:h-auto w-[90%] lg:w-96 left-5 lg:left-30 top-5 bg-[black] border-2 border-white/30 shadow-xl hover:scale-105 transition-transform duration-500 ml-8 rounded-lg lg:h-[80%] capitalize desktop:left-20 hd:h-[85%] hd:w-[80%]">
        <h1 className="text-xl lg:text-4xl 3xl:text-6xl font-light px-4 lg:px-9 py-4 lg:py-9 text-white md:text-3xl hd:text-[70px] hd:mt-6">
          {data.title}
        </h1>
        <p className="text-sm md:text-md lg:text-lg 3xl:text-2xl px-4 md:px-6 lg:px-9 hd:text-3xl hd:leading-9 hd:tracking-wider hd:mt-10">
          {data.description}
        </p>
        <div className="mt-2 md:mt-4 px-4 md:px-6 lg:px-9 text-sm md:text-md lg:text-lg 3xl:text-2xl font-light ">
          <p className="mt-2 hd:text-3xl hd:leading-9 hd:tracking-wider">
            {data.completion}
          </p>
        </div>
        <button className="border-2 font-extralight w-28 sm:w-32 md:w-28 lg:w-36 h-8 md:h-9 lg:h-10 phonemid:mt-6 lg:my-4 mx-4 lg:mx-10 text-sm md:text-lg lg:text-xl hover:border-red-400 hover:bg-red-400 hover:text-white capitalize duration-500 md:mb-7 md:mx-6 hd:mt-12 hd:w-40 hd:h-16">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card2;
