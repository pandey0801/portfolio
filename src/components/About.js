

import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <p className="text-base sm:text-xl mt-5 sm:mt-10">
          I am Vinay Shree Pandey, an experienced Front-End Developer with a strong foundation in Computer Science, 
          holding a B.Tech degree from Atria Institute of Technology, Bangalore, with an 8.6 CGPA. My passion lies in
           building intuitive and responsive web applications using technologies like HTML, CSS, JavaScript (ES6+), and
            React.js. As a Front-End Developer at CMS Computers Ltd, Delhi, I successfully delivered the HRMS project
             for the Pension Fund Regulatory and Development Authority (PFRDA), ensuring a seamless user experience 
             while adhering to strict timelines. My contributions included designing responsive interfaces with Figma,
            developing reusable React.js components, implementing API CRUD operations 
          with Redux Slice and Redux-Saga, and optimizing application performance. I also validated APIs with Postman
           and maintained a clean, well-documented codebase using Git.
          </p>
          <br />

          <p className="text-base sm:text-xl">
          Previously, I worked as a Software Engineer at Nav Tech Electronics, enhancing machine learning 
          models and improving data accuracy, and as a Web Developer Intern at Eduphoenix Solutions, where 
          I developed responsive web applications and implemented modern design principles. Across these roles, 
          I have demonstrated expertise in managing complex functionalities, debugging, and testing. Proficient 
          in Git, Scrum, SQL, and performance optimization, 
          I am committed to advancing my skills and contributing to innovative and impactful web solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

