import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-start max-w-screen-lg ml-20 h-full">
        <div className="pb-8 ml-18">
          <p className="text-4xl   text-blue-500 font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6  text-blue-300">
            Submit the form below to get in Touch with me 🌍
          </p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/75a41067-b986-498f-b1cc-3a1c52f6cb90"
            method="POST"
            className="flex flex-col  w-full md:w-1/2"
            onSubmit={(e) => e.target.reset()}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white  focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white  focus:outline-none "
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-ceneter rounded-md hover:scale-110 duration-300">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
