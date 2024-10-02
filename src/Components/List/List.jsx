import React from "react";
import Card from "../Card/Card";
import { programmingLanguages } from "./data";

const List = () => {
  return (
    <div id="List" className="w-full bg-[#414361] py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h4 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold text-center mb-6">
        Programming Language Proficiency
      </h4>
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium text-center mb-12 mx-auto max-w-2xl">
        Below is a list of programming languages I am proficient in, along with areas of expertise and practical applications.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programmingLanguages.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
