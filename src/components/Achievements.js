

import React from 'react';
import springer from "../assets/springer-logo.png";
import Atria from "../assets/Atria.png";

function Achievements() {
  return (
    <div name="Achievements" className="w-full bg-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Achievements
          </p>
        </div>

        {/* Research Paper Achievement */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img src={springer} alt="Springer" className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6" />
          <div className="flex flex-col items-center sm:items-start mb-6">
            <div className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold">Publication in Springer </p>
              
              <p className="text-lg sm:text-xl font-semibold">
                Book: New Trends and Applications in Internet of Things (IoT) and Big Data Analytics
              </p>
            
              <p className="text-lg sm:text-xl font-semibold">
                Paper: An Intelligent Health Diagnosis System Based on a Secure Data Transfer Through Li-Fi Technology 
                <a  href="https://link.springer.com/chapter/10.1007/978-3-030-99329-0_11"
                   className="inline-block  px-6 mx-3 sm:mb-0 sm:mx-2 text-center bg-cyan-500 text-white rounded-md duration-200 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"> Click</a>
                  </p>
              
            </div>
            <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
              <li>Enhanced diagnostic accuracy by using Li-Fi technology for secure data transfer.</li>
              <li>Utilized Power BI for data visualization and preprocessing, improving system efficiency.</li>
              <li>Conducted data analysis to identify key health indicators, leading to more accurate diagnoses.</li>
              <li>Presented findings at academic conferences, contributing to secure data transfer research.
              </li>
            </ul>
          </div>
        </div>

        {/* Education Achievement */}
       

<div className="flex flex-col sm:flex-row justify-center items-center">
          <img src={Atria} alt="Springer" className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6" />
          <div className="flex flex-col items-center sm:items-start mb-6">
            <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold"> CSE from Atria Institute of Technology</span>
              <br />
              <span className="text-lg sm:text-xl font-semibold">
              Bachelor of Engineering in Computer Science | CGPA: 8.63
              </span>
              <br />
              <span className="text-lg sm:text-xl font-semibold">
              Bangalore | Aug 2019 – May 2023
              </span>
            </p>
            <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
            <li>Developed a strong foundation in computer science and engineering.</li>
              <li>Consistently achieved high academic performance, graduating with a CGPA of 8.63.</li>
              <li>Engaged in various projects and research activities during the course.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Achievements;
