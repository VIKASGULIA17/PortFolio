import React from 'react';
import assets from '../../assets/pictures/ProjectBackground.jpg';


const ProjectCard = ({ data }) => {
  return (
    <div
      className="
        relative
        w-full
        min-h-64
        border-2 border-white 
        rounded-2xl  
        text-white/90 
        bg-cover bg-no-repeat 
        hover:bg-zinc-700 
        transition-transform duration-500 
        md:w-80 md:h-80 
        lg:w-[40%] lg:h-[59vh] 
        3xl:w-[30%] 
        desktop:h-[30rem] desktop:w-[35rem] 
        hd:w-[30vw] hd:h-[30vh]
      "
    >
      <img src={assets} alt="" className='w-full rounded-2xl h-full relative' />
      <div
        className="
          py-5
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
          lg:w-96 lg:left-30 lg:h-[80%] 
          xl:right-40 
          desktop:left-20 
          hd:h-[85%] hd:w-[80%]
        "
      >
        <h1
          className="
            text-xl 
            font-light 
            px-4 
            text-white 
            md:text-3xl 
            lg:text-4xl lg:px-9 lg:py-5 
            3xl:text-6xl 
            hd:text-[70px] hd:mt-6
          "
        >
          {data.title}
        </h1>
        <p
          className="
            text-sm 
            px-4 
            md:text-md md:px-6 
            lg:text-lg lg:px-9 
            3xl:text-2xl 
            hd:text-3xl hd:leading-9 hd:tracking-wider hd:mt-10
          "
        >
          {data.description}
        </p>
        <div
          className="
            mt-2 
            px-4 
            text-sm 
            font-light 
            md:mt-4 md:px-6 md:text-md 
            lg:px-9 lg:text-lg 
            3xl:text-2xl
          "
        >
          <p
            className="
              mt-2 
              hd:text-3xl hd:leading-9 hd:tracking-wider
            "
          >
            {data.completion}
          </p>
        </div>
        <button
          className="
          relative
            border-2 
            font-extralight 
            w-28 
            h-8 
            mx-4 
            text-sm 
            capitalize 
            sm:w-32 
            md:w-28 md:h-9 md:text-lg md:mb-7 md:mx-6 
            lg:w-36 lg:h-10 lg:my-4 lg:mx-10 lg:text-xl 
            phonemid:mt-6 
            hd:mt-12 hd:w-40 hd:h-16 
            hover:border-red-400 hover:bg-red-400 hover:text-white 
            duration-500
          "
        >
          <a href={data.link}>
          Read more
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
