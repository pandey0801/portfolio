import React from "react";
import project1 from "../assets/portfolio/project1.png";
import project2 from "../assets/portfolio/project2.png";
import project3 from "../assets/portfolio/project3.png";

function Testimonial() {

  const portfolio = [
    {
      id: 1,
      src: project1,
      demo: "https://ecom-khaki-one.vercel.app/home",
      code: "https://github.com/pandey0801/Cart-Component"
    },
    {
      id: 2,
      src: project2,
      demo: "https://expense-tracker-alpha-azure.vercel.app/home",
      code: "https://github.com/pandey0801/Creating-Signup-Screen",
    },
    {
      id: 3,
      src: project3,
      demo: "https://mail-v1.vercel.app/home",
      code: "https://github.com/pandey0801/Mail-Box-Client"
    },
  ];

  return (
    <div name="Testimonial" className="w-full h-full bg-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Testimonial
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md w-full h-auto duration-200 hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
                <a
                  href={demo}
                  className="w-full sm:w-1/2 px-6 py-3 mb-4 sm:mb-0 sm:mx-2 text-center bg-cyan-500 text-white rounded-md duration-200 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-full sm:w-1/2 px-6 py-3 text-center bg-gray-700 text-white rounded-md duration-200 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

