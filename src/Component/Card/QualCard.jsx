import React from 'react';
import assets from '../../assets/pictures/Qualificationsbackground.jpg'; 

const QualCard = ({ data }) => {
  return (
    <div className="relative
        w-full
        min-h-64
        border-2 border-white 
        rounded-2xl  
        text-white/90 
        bg-cover bg-no-repeat 
        hover:bg-zinc-700 
        transition-transform duration-500 
        md:w-80 md:h-80 
        lg:w-[30rem] lg:h-[24rem] 
        3xl:w-[0%] 
        desktop:h-[23rem] desktop:w-[33rem] 
        hd:w-[30vw] hd:h-[30vh]">
        <img src="https://www.hdwallpapers.in/download/blue_black_lines_shades_dark_background_hd_black-1600x900.jpg" alt="" className='w-full rounded-2xl h-full relative  '/>
      <div className="py-5
          absolute 
          h-auto 
          w-[90%] 
          left-5 
          top-5 
          backdrop-filter backdrop-blur-lg
          border-2 border-white/30 
          shadow-xl 
          ml-8 
          rounded-lg 
          capitalize 
          hover:scale-105 
          transition-transform duration-500 
          md:h-auto 
          lg:w-96 lg:left-30 lg:h-auto 
          xl:right-40 
          desktop:left-20 
          hd:h-[85%] hd:w-[80%]">
        <h1 className="text-xl font-semibold px-4 py-4 text-white md:text-3xl lg:text-4xl lg:px-9 lg:py-5 desktop:text-4xl hd:text-7xl">
          {data.title}
        </h1>
        <p className="text-sm px-4 text-cyan-400 md:text-md md:px-6 lg:text-lg lg:px-9 2xl:text-xl hd:text-4xl">
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
