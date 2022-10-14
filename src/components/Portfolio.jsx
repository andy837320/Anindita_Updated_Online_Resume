import React from "react";
import { data } from "../data/data.js";

const Portfolio = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="portfolio"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-[1200px] max-h-[1000px] p-4 flex flex-col justify-start w-full h-full">
        <div className="pb-8  ml-20">
          <p className="text-4xl font-bold inline border-b-4 text-blue-500 border-gray-600">
            PortFolio
          </p>
          <p className="py-6  text-blue-300">
            My Recent Projects!(Hover Over Please 😃)
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 ml-20 gap-8">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-lg 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-blue-500 font-bold  ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-cyan-500 text-white font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-cyan-500 text-white font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <a
            href="https://github.com/andy837320"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-white  bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-ceneter rounded-md hover:scale-110 duration-300">
              More Projects in Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
