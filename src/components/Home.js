import React from "react";
import heroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 text-white md:flex-row ">
        <div className="flex flex-col justify-center h-full md:items-start items-center text-center md:text-left">
          <h2 className="text-3xl sm:text-7xl font-bold text-white pt-40">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Full Stack Developer with 2+ years of experience building scalable web applications. Skilled in React, Node.js, JavaScript, and modern frontend technologies. Previously worked at CMS Computers and Nav Tech Electronics. Strong in problem-solving, responsive design, and performance optimization.
          </p>
          <div>
            <Link
              to="Testimonial"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cyan-500 cursor-pointer"
            >
              Testimonial
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-0">
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl w-2/3 md:w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

