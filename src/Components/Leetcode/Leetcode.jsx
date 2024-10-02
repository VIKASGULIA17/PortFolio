import React from 'react'
import Card2 from '../Card/Card3';
const Leetcode = () => {
    const data =[
        
                {
                  title: "10th",
                  description: "Completed 10th from hari krishna public school ,delhi.",
                  completion:"achieved 85% from c.b.s.e board.completion year-2021."
                },
                
                {
                  title: "12th",
                  description: "Completed 12th from spring meadows public school ,delhi.",
                  completion:"achieved 88.9% from c.b.s.e board.completion year-2023"
                },
                {
                  title: "BCA",
                  description: "Currently studying at institute of information technology and management (IITM).",
                  completion:"achieved 9.5 gpa in 1st year.currently bca 2nd year."
                },
                
              ];
        
  return (
    <div id="Project" className="w-full bg-black py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h1 className="xl:text-center xl:text-7xl xl:text-white xl:pb-20 text-center text-white text-3xl font-bold  bg-black p-5">Qualifications</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <Card2 key={index} data={item} />
        ))}
      </div>
    </div>

  )
 
            
}

export default Leetcode