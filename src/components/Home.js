import React from "react";
import heroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="Home"
      // className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      className="h-screen w-full bg-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 text-white md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pt-10">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Ex Software Engineer at Nav Tech Electronics Hyderabad | Experienced
            Front-End Developer | B.Tech in CSE from AIT Bangalore | Proficient
            in HTML, CSS, JavaScript (ES6+), and React.js | Skilled in Data
            Science, Data Structures, and Customer Experience | Expertise in
            Git, Responsive Design, Cross-Browser Compatibility, Debugging, and
            Testing
          </p>
          <div>
            <Link
              to="Testimonial"
              smooth
              duration={500}
              className="group text-white w-1/3 px-6 py-3 my-2 flex items-center rounded-md bg-cyan-500 cursor-pointer"
            >
              Testimonial
              {/* <span className="hover:rotate-90 duration-300"> */}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 h-75"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
