import React from "react";
import Card from "../Card/Card";
import { programmingLanguages } from "./data";

const List = () => {
  return (
    <div id="List" className="w-full bg-[#414361] py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 hd:pb-20">
      <h4 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold text-center mb-6 hd:text-[120px] hd:mb-10">
        Programming Language Proficiency
      </h4>
      <p className="text-white/85 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium text-center mb-12 mx-auto max-w-2xl hd:text-[50px] hd:max-w-[70vw] hd:leading-[50px] hd:mb-20">
        Below is a list of programming languages I am proficient in, along with areas of expertise and practical applications.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 hd:gap-y-12">
        {programmingLanguages.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
