import React from "react";

import html from "../assets/html.png";

import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";

import tailwind from "../assets/tailwind.png";

function Skill() {
  const tech = [
    {
      id: 1,
      src: html,
      title: "html",
      style: "shadow-orange-200",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      style: "shadow-orange-200",
    },
    {
      id: 4,
      src: reactImage,
      title: "react",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "next JS",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHuB",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="Skill" className="bg-gray-900 w-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div>
          <p className="text-4xl font-bolo border-b-4 border-gray-500 p-2 inline ">
          Skill
          </p>
          <p className="py-6">these are the technologies I've word with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}

          {/* <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                <img src={html} alt=""
                className='w-20 mx-auto'
                />
                <p className='mt-4'>HTML</p>
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skill;
