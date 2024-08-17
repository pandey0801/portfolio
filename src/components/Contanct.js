// import React from "react";

// function Contanct() {
//   return (
//     <div name="Contact" className="w-full bg-gray-900 text-white p-4">
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4  border-gray-500">Contanct</p>
//           <p className="py-6">Sumbit the form below to get in touch with me</p>
      
//             <div className="flex justify-center items-center">
//           <form action="https://getform.io/f/aqonvkva" method="POST" className="flex flex-col w-full md:w-1/2 " >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="my-4 p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none "
//             />

//             <input
//               type="mail"
//               name="email"
//               placeholder="Enter your email"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />

//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               rows="10"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
//             >
//             </textarea>

//             <button className="text-white bg-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
//                 Let's talk
//               </button>
//           </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contanct;


import React from "react";

function Contact() {
  return (
    <div name="Contact" className="w-full bg-gray-900 text-white p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>

          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/aqonvkva"
              method="POST"
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

              <input
                type="mail"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>
        </div>
        {/* Contact Number Section */}
        <div className="text-center mt-8">
          <p className="text-xl">Or reach me directly at:</p>
          <p className="text-2xl font-bold mt-2">+91-7000685261</p> {/* Replace XXXXXXXXXX with your contact number */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
