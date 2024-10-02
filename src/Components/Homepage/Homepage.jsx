import React from "react";
import { motion } from "framer-motion";
import photo from "../../assets/pictures/myimage.jpeg";

const Homepage = () => {
  const image = [
    {
      src: photo,
      alt: "Vikas Gulia",
    },
  ];

  return (
    <div id="Homepage" className="w-full h-screen bg-n-7 flex items-center justify-center ">
  <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-10 sm:py-16 lg:py-24 lg:px-12 ">
    <motion.div
      className="text-white flex flex-col items-center sm:items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <img
  className="w-4/5 sm:w-3/4 lg:w-[30vw] h-auto lg:h-[65vh] object-cover rounded-lg md:mx-9 desktop:h-[70vh]"
  src={photo}
  alt="Portrait of Vikas Gulia, aspiring data scientist"

  loading="lazy"
/>

    </motion.div>
    <motion.div
      className="text-white flex flex-col items-center sm:items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      >
    <div className="text-white/100 mt-6 sm:mt-0 sm:ml-8 lg:ml-12 text-center sm:text-left md:mx-0 desktop:h-[25vh] desktop:ml-20">
      <h1 className="text-3xl text-red-50 sm:text-4xl md:text-5xl lg:text-8xl font-semibold inline desktop:text-8xl ">
        Vikas
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold text-[#6366F1] inline pl-2 xl:pl-6 desktop:text-8xl">
        Gulia
      </h1>
      <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold capitalize desktop:text-5xl">
        Aspiring Data Scientist
      </h2>
      <p className="mt-2 text-sm sm:text-md md:text-lg lg:text-xl font-light text-white/70 desktop:text-2xl desktop:mt-6">
        Uttam Nagar, New Delhi, Delhi, 110059 | Email: vikasgulia17@gmail.com
      </p>
    </div>
      </motion.div>
  </div>
</div>

  );
};

export default Homepage;
