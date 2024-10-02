import React from "react";
import Card2 from "../Card/Card2";

const Project = () => {
  const data = [
    {
      title: "Book Rental",
      description:
        "Project 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, nisi repudiandae ipsa veritatis, cumque, quam ex maiores voluptatibus optio impedit tempora magnam.",
      color: "bg-white",
    },
    {
      title: "SunDown clone",
      description:
        "Project 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, nisi repudiandae ipsa veritatis, cumque, quam ex maiores voluptatibus optio impedit tempora magnam.",
      color: "bg-white",
    },
    {
      title: "Gemini clone",
      description:
        "Project 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, nisi repudiandae ipsa veritatis, cumque, quam ex maiores voluptatibus optio impedit tempora magnam.",
      color: "bg-white",
    },
    {
      title: "Blog post",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere, nisi repudiandae ipsa veritatis, cumque, quam ex maiores voluptatibus optio impedit tempora magnam.",
      color: "red-100",
    },
  ];

  return (
    <div
      id="Project"
      className="w-full h-auto pb-10 bg-black lg:pb-16  xl:pb-20"
    >
      <h1 className="text-center text-4xl text-white pt-10 lg:text-6xl lg:pb-16 xl:text-7xl xl:pb-20 md:pb-8">
        Projects
      </h1>
      <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center px-8 lg:gap-x-24 lg:gap-y-10 lg:px-6 xl:gap-x-40 xl:gap-y-20 xl:px-10 xl:border-white overflow-hidden">
        {data.map((item, index) => (
          <Card2 key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
