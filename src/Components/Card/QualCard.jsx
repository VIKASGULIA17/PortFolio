import React from 'react';
import assets from '../../assets/pictures/Qualificationsbackground.jpg'; 

const QualCard = ({ data }) => {
  return (
    <div className="relative w-full max-h-64 lg:min-h-72 h-auto border-2 border-white rounded-2xl text-white/90 bg-cover bg-no-repeat transition-transform duration-500 capitalize
     md:w-80 md:h-80
      lg:w-[100%] lg:h-[22rem] 
      desktop:w-[80%]   desktop:h-[22rem] 
      hd:h-[35rem] hd:mx-40 hd:my-10 hd:w-[70%] ">
        <img src={assets} alt="" className='w-full rounded-2xl h-full relative  '/>
      <div className="absolute h-auto w-[90%] left-5  top-5 bg-[#6366F1] border-2 border-white/30 shadow-xl transition-transform duration-500 ml-8 rounded-lg text-[#F9F7F7] hover:scale-105  md:h-auto md:mt-2 lg:w-96 lg:left-30 lg:h-auto lg:pb-4 xl:right-40
       desktop:left-40 desktop:mx-0
        hd:h-auto hd:w-[80%]">
        <h1 className="text-xl font-semibold px-4 py-4 text-white md:text-3xl lg:text-4xl lg:px-9 lg:py-5 desktop:text-4xl hd:text-7xl">
          {data.title}
        </h1>
        <p className="text-sm px-4 text-[#FFD700] md:text-md md:px-6 lg:text-lg lg:px-9 2xl:text-xl hd:text-4xl">
          {data.description}
        </p>
        <div className="mt-2 px-4 text-sm font-light md:mt-4 md:px-6 md:text-md lg:px-9 lg:text-lg 2xl:text-xl hd:text-[2rem]">
          {data.completion ? <p className="mt-2 hd:leading-10 py-4">
            {data.completion}
          </p>: null}
        </div>
        
      </div>
    </div>
  );
};

export default QualCard;
