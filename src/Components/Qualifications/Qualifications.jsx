import React from 'react';
import QualCard from '../Card/QualCard';

const Qualifications = () => {
  // Expanded data including academic qualifications and extracurricular involvement.
  const data = [
    {
      title: "10th",
      description: "Completed 10th from Hari Krishna Public School, Delhi.",
      completion: "Achieved 85% from C.B.S.E board. Completion year: 2021."
    },
    {
      title: "12th",
        description: "Completed 12th from Spring Meadows Public School, Delhi.",
        completion: "Achieved 88.9% from C.B.S.E board. Completion year: 2023."
      },
      {
        title: "BCA",
        description:
        "Currently studying at the Institute of Information Technology and Management (IITM).",
        completion: "Achieved 9.5 GPA in 1st year. Currently in BCA 2nd year."
      },
      {
        title: "Extracurricular & Club Involvement",
        description:
          "As Head of the DSA Department at Geekroom IITM, I solve DSA problems daily—having tackled over 250 on LeetCode. I am continually explore emerging trends in data science."
      },
    
    
    
  ];

  return (
    <section id="qualifications" className="w-full  h-auto bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16  py-10">
      <header>
        <h1 className="text-center text-white text-3xl xl:text-7xl font-bold pb-10">
          Qualifications
        </h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <QualCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Qualifications;
