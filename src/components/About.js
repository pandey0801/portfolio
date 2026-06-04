

import React from "react";

function About() {
  return (
    <div name="about" className="w-full min-h-screen bg-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full py-20">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <p className="text-base sm:text-xl mt-5 sm:mt-10">
            I am Vinay Shree Pandey, a Full Stack Developer with a strong foundation in
            Computer Science, holding a B.Tech degree from Atria Institute of Technology,
            Bangalore, with an 8.6 CGPA. I am passionate about building modern,
            responsive, and user-friendly web applications that deliver exceptional user
            experiences. Currently, I am working as a Full Stack Developer at Drishtee,
            where I develop scalable web applications using React.js, Node.js, SQL, and
            Prisma ORM. My responsibilities include developing both frontend and backend
            functionalities, integrating REST APIs, managing databases, and ensuring
            seamless application performance. One of my key achievements has been
            successfully implementing Firebase Cloud Messaging (FCM) Push Notifications,
            enabling real-time notifications through secure device token management and
            seamless frontend-backend integration. This involved Firebase configuration,
            notification permission handling, token generation and storage, and
            supporting notification delivery workflows.
          </p>

          <br />

          <p className="text-base sm:text-xl sm:mt-10  " >

            Previously, I worked as a Front-End Developer at CMS Computers Ltd., where I contributed to the
            PFRDA HRMS portal for a government organization, developing reusable React.js components,
            implementing state management with Redux Toolkit and Redux-Saga, and integrating APIs.
            Earlier, I worked on projects in the Energy and Healthcare sectors, integrating third-party
            APIs, developing dashboards, and supporting data-driven decision-making. My experience across
            BFSI, Government, NGO, Energy, and Healthcare domains has helped me build
            strong problem-solving skills and a passion for delivering high-quality digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

