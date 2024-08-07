import React from "react";
import heroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div 
    name="Home" 
    // className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
     className="h-screen w-full bg-gray-900"
     >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 text-white md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pt-10">I'm a Front End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
          NodeJS, released by Ryan Dahl in 2009, unexpectedly gained immense popularity within a decade. 
          It has become a top choice for small to large enterprises in building backend services. Today, NodeJS is 
          considered an essential skill for developers due to its widespread use and popularity.
          </p>
          <div>
            <button className="group text-white w-fir px-6 py-3 my-2 flex items-center rounded-md bg-cyan-500 cursor-pointer">
                Portfolio
                {/* <span className="hover:rotate-90 duration-300"> */}
                <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight/>
                </span>
            </button>
          </div>
        </div>
        <div>
            <img src={heroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 h-75"/>
        </div>
      </div>
    </div>

  );
}

export default Home;



