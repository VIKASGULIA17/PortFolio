import React from "react";
import ProjectCard from "../Card/ProjectCard";

const Project = () => {
  const data = [
    {
      title: "Task Manager",
      description:
        "A web application that allows users to create,customize and manage task .User can also add priority to task and can also delete task.",
      color: "bg-white",
      link:"https://github.com/VIKASGULIA17/Task_manager",
    },
    {
      title: "SunDown clone",
      description:
        "A modern recreation of a vacation booking platform,showing different types of animations and effects.",
      color: "bg-white",
      link:"https://github.com/VIKASGULIA17/sunshine-clone",
    },
    {
      title: "Ani-gpt",
      description:
        "A gpt website which helps user to do various search and get the result from AI without any message limit with a user friendly interface.",
      color: "bg-white",
      link:"https://github.com/VIKASGULIA17/Gemini-Clone",
    },
    
  ];
  

  return (
    <div
      id="Project"
      className="w-full h-auto pb-10 bg-black lg:pb-16  xl:pb-20 hd:border-b-white hd:border-b-4 "
    >
      <h1 className="text-center text-4xl text-white py-10 lg:text-6xl xl:text-7xl xl:pb-20 md:pb-8 hd:text-[150px]">
        Projects
      </h1>
      <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center px-8 lg:gap-x-24 lg:gap-y-10 lg:px-6 xl:gap-x-40 xl:gap-y-20 xl:px-10 xl:border-white overflow-hidden hd:grid hd: grid-cols-2 hd:mx-[10vw]">
        {data.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
