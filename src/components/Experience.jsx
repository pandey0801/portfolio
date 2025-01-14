// import React from "react";
// import nav from "../assets/nav.png";
// import edu from "../assets/edu.png";

// function Experience() {
//   return (
//     <div name="Experience" className="w-full bg-gray-900 text-white">
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
//         <div className="pb-8">
//           <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
//             Experience
//           </p>
//         </div>

//         {/* Nav Tech Experience */}
        

// <div className="flex flex-col sm:flex-row justify-center items-center ">
//           <img src={nav} alt="edu" className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6"></img>
//           <div className="flex flex-col items-center sm:items-start mb-6">
//             <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
//               <span className="text-2xl sm:text-3xl font-bold">Nav Tech Electronics</span>
//               <br />
//               <span className="text-lg sm:text-xl font-semibold">
//               Software Engineer | Oct 2023 – Jul 2024 | Hyderabad
//               </span>
//             </p>
//             <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
//             <li>
//                 Collected data from work sites using NREL calculator and OpenWeather API,
//                 conducted Exploratory Data Analysis (EDA), and implemented data cleaning techniques.
//               </li>
//               <li>
//                 Compared machine learning models (Linear Regression, Decision Tree, Random Forest,
//                 and Fuzzy Logic), plotted accuracy and loss curves, and performed value predictions
//                 using Python.
//               </li>
//               <li>
//                 Conducted hyperparameter tuning on various machine learning models for optimal results
//                 and implemented model saving using Pickle.
//               </li>
//             </ul>
//           </div>
//         </div>



//         {/* Eduphoenix Experience */}
//         <div className="flex flex-col sm:flex-row justify-center items-center">
//           <img src={edu} alt="edu" className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6"></img>
//           <div className="flex flex-col items-center sm:items-start">
//             <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
//               <span className="text-2xl sm:text-3xl font-bold">Eduphoenix Solutions</span>
//               <br />
//               <span className="text-lg sm:text-xl font-semibold">
//                 Web Developer Intern | Sep 2022 – Feb 2023 | Bengaluru
//               </span>
//             </p>
//             <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
//               <li>
//                 Developed and maintained responsive web applications using HTML, CSS, JavaScript,
//                 and React.js.
//               </li>
//               <li>
//                 Implemented modern design principles and best practices, reducing page load times by
//                 30% and ensuring compatibility across multiple browsers and devices.
//               </li>
//               <li>
//                 Managed project timelines and deliverables, consistently completing tasks ahead of
//                 schedule and receiving positive feedback from supervisors.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;


import React from "react";
import nav from "../assets/nav.png";
import edu from "../assets/edu.png";
import cms from "../assets/cms.jpg"; // Placeholder for CMS Computers Ltd image

function Experience() {
  return (
    <div name="Experience" className="w-full bg-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        {/* CMS Computers Ltd Experience */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img
            src={cms}
            alt="cms"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6"
          />
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold">CMS Computers Ltd</span>
              <br />
              <span className="text-lg sm:text-xl font-semibold">
                Front-end Developer | Sep 2024 – Present | Delhi, India
              </span>
            </p>
            <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
              <li>
                Successfully delivered the HRMS project for the Pension Fund Regulatory and Development Authority (PFRDA), ensuring high-quality user experience and adherence to project timelines.
              </li>
              <li>
                Designed intuitive, responsive web interfaces using Figma, converting designs into reusable and modular React.js components.
              </li>
              <li>
                Implemented API CRUD operations using Redux Slice and Redux-Saga for streamlined state management and efficient application performance.
              </li>
              <li>
                Validated and tested APIs with Postman, ensuring robust functionality and seamless data flow across the application.
              </li>
              <li>
                Collaborated effectively using Git for version control, maintaining a clean and well-documented codebase.
              </li>
              <li>
                Improved application performance by identifying bottlenecks, optimizing load times, and enhancing overall user experience.
              </li>
            </ul>
          </div>
        </div>

        {/* Nav Tech Experience */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img
            src={nav}
            alt="nav"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6"
          />
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold">Nav Tech Electronics Pvt Ltd</span>
              <br />
              <span className="text-lg sm:text-xl font-semibold">
                Trainee Software Engineer | Oct 2023 – Sep 2024 | Hyderabad, India
              </span>
            </p>
            <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
              <li>
                Processed over 10,000 data points from work sites using the NREL calculator and OpenWeather API, improving data accuracy by 15%.
              </li>
              <li>
                Conducted Exploratory Data Analysis (EDA) and applied advanced data cleaning techniques, ensuring high-quality datasets for machine learning models.
              </li>
              <li>
                Enhanced machine learning model accuracy by 10% through hyperparameter tuning and reduced model load times by 30% using Pickle.
              </li>
              <li>
                Conducted comparative analysis and optimized the performance of models, including Linear Regression, Decision Tree, Random Forest, and Fuzzy Logic, improving reliability by 12%.
              </li>
              <li>
                Visualized accuracy and loss curves to evaluate model performance and performed predictive analysis using Python.
              </li>
              <li>
                Developed and implemented responsive front-end interfaces using HTML, CSS, and JavaScript, integrating data-driven insights into user-facing applications.
              </li>
              <li>
                Collaborated on building dashboards to visualize machine learning insights, enhancing user engagement and data accessibility.
              </li>
              <li>
                Gained hands-on experience with version control systems like Git to manage collaborative projects efficiently.
              </li>
            </ul>
          </div>
        </div>

        {/* Eduphoenix Experience */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img
            src={edu}
            alt="edu"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg mb-6 sm:mb-0 sm:mr-6"
          />
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xl sm:text-2xl mt-4 sm:mt-0 text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-bold">Eduphoenix Solutions Pvt Ltd</span>
              <br />
              <span className="text-lg sm:text-xl font-semibold">
                Web Developer Intern | Apr 2023 – Sep 2023 | Bengaluru, India
              </span>
            </p>
            <ul className="list-disc mt-4 text-sm sm:text-base pl-6">
              <li>
                Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.js, delivering engaging and user-friendly interfaces.
              </li>
              <li>
                Optimized web performance by implementing modern design principles and best practices, reducing page load times by 30% and ensuring cross-browser and multi-device compatibility.
              </li>
              <li>
                Effectively managed project timelines and deliverables, consistently completing tasks ahead of schedule and earning commendations from supervisors for exceptional performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

