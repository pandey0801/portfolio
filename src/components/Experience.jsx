// import React from "react";
// import nav from "../assets/nav.png";
// import edu from "../assets/edu.png";

// function Experience() {
//   return (
//     <div name="Experience" className="w-full  bg-gray-900 text-white">
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-ful ">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Experience
//           </p>
//         </div>
//         <div className="flex justify-center items-center mb-10">
//           <p className="text-xl mt-10">
//             <spam className="text-3xl font-bold">Nav Tech Electronics</spam>
//             <br />
//             <spam className="ext-2xl font-semibold">
//               Software Engineer | Oct 2023 – Feb 2024 | Hyderabad
//             </spam>
//             <br />
//             <ul className="list-disc">
//               <li>
//                 Collected data from work sites using NREL calculator and
//                 OpenWeather API, conducted Exploratory Data Analysis (EDA), and
//                 implemented data cleaning techniques
//               </li>
//               <li>
//                 Compared machine learning models (Linear Regression, Decision
//                 Tree, Random Forest, and Fuzzy Logic), plotted accuracy and loss
//                 curves, and performed value predictions using Python
//               </li>

//               <li>
//                 Conducted hyperparameter tuning on various machine learning
//                 models for optimal results and implemented model saving using
//                 Pickle
//               </li>
//             </ul>
//           </p>
//           <img src={nav} alt="nav" className="size-80"></img>
//         </div>

//         <div className="flex justify-center items-center">
//           <img src={edu} alt="edu" className="rounded-lg w-22 px-3 mt-10"></img>
//           <p className="text-xl mt-10 ml-5">
//             <spam className="text-3xl font-bold"> Eduphoenix Solutions</spam>
//             <br />
//             <spam className="ext-2xl font-semibold">
//               Web Developer Intern | Sep 2022 –Nov 2022 | Bengaluru
//             </spam>
//             <br />
//             <ul className="list-disc">
//               <li>
//                 Developed and maintained responsive web applications using HTML,
//                 CSS, JavaScript, and React.js
//               </li>
//               <li>
//                 Implemented modern design principles and best practices,
//                 reducing page load times by 30% and ensuring compatibility
//                 across multiple browsers and devices.
//               </li>

//               <li>
//                 Managed project timelines and deliverables, consistently
//                 completing tasks ahead of schedule and receiving positive
//                 feedback from supervisors.
//               </li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;


import React from "react";
import nav from "../assets/nav.png";
import edu from "../assets/edu.png";

function Experience() {
  return (
    <div name="Experience" className="w-full bg-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        {/* Nav Tech Experience */}
        {/* <div className="flex flex-col justify-center items-center mb-10">
          
          
          <img src={nav} alt="nav" className="w-32 h-32 sm:w-48 sm:h-48 mt-6 sm:mt-0 sm:ml-6 rounded-lg"></img>
        
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold">Nav Tech Electronics</span>
              <br />
              <span className="text-lg sm:text-xl font-semibold">
                Software Engineer | Oct 2023 – Feb 2024 | Hyderabad
              </span>
            </p>
            <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
              <li>
                Collected data from work sites using NREL calculator and OpenWeather API,
                conducted Exploratory Data Analysis (EDA), and implemented data cleaning techniques.
              </li>
              <li>
                Compared machine learning models (Linear Regression, Decision Tree, Random Forest,
                and Fuzzy Logic), plotted accuracy and loss curves, and performed value predictions
                using Python.
              </li>
              <li>
                Conducted hyperparameter tuning on various machine learning models for optimal results
                and implemented model saving using Pickle.
              </li>
            </ul>
         </div>
         </div> */}

<div className="flex flex-col sm:flex-row justify-center items-center ">
          <img src={nav} alt="edu" className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6"></img>
          <div className="flex flex-col items-center sm:items-start mb-6">
            <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold">Nav Tech Electronics</span>
              <br />
              <span className="text-lg sm:text-xl font-semibold">
              Software Engineer | Oct 2023 – Jul 2024 | Hyderabad
              </span>
            </p>
            <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
            <li>
                Collected data from work sites using NREL calculator and OpenWeather API,
                conducted Exploratory Data Analysis (EDA), and implemented data cleaning techniques.
              </li>
              <li>
                Compared machine learning models (Linear Regression, Decision Tree, Random Forest,
                and Fuzzy Logic), plotted accuracy and loss curves, and performed value predictions
                using Python.
              </li>
              <li>
                Conducted hyperparameter tuning on various machine learning models for optimal results
                and implemented model saving using Pickle.
              </li>
            </ul>
          </div>
        </div>



        {/* Eduphoenix Experience */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img src={edu} alt="edu" className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6"></img>
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold">Eduphoenix Solutions</span>
              <br />
              <span className="text-lg sm:text-xl font-semibold">
                Web Developer Intern | Sep 2022 – Feb 2023 | Bengaluru
              </span>
            </p>
            <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
              <li>
                Developed and maintained responsive web applications using HTML, CSS, JavaScript,
                and React.js.
              </li>
              <li>
                Implemented modern design principles and best practices, reducing page load times by
                30% and ensuring compatibility across multiple browsers and devices.
              </li>
              <li>
                Managed project timelines and deliverables, consistently completing tasks ahead of
                schedule and receiving positive feedback from supervisors.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
