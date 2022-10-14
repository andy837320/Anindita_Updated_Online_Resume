import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Reactnative from "../assets/react-native.png";
import Next from "../assets/nextjs.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";
import Angular from "../assets/angular.png";
import Mongo from "../assets/mongo.png";
import Sm from "../assets/GE_Smallworld.png";
import Jquery from "../assets/jquery.png";
import Java from "../assets/java.jpg";
import Mysql from "../assets/mysql.jpg";
import Express from "../assets/express.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      {/* Container */}
      <div className="flex flex-col  w-full  max-h-screen overflow-hidden ">
        <div className="ml-20 mt-20  text-blue-500">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600 ">
            Skills
          </p>
          <p className="py-4  text-blue-300">Specializing With 💻</p>
        </div>

        <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-4  gap-3  text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Angular} alt="HTML icon" />
            <p className="my-4">ANGULAR</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Next} alt="HTML icon" />
            <p className="my-4">NEXTJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="HTML icon" />
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Jquery} alt="HTML icon" />
            <p className="my-4">JQUERY</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mysql} alt="HTML icon" />
            <p className="my-4">MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Express} alt="HTML icon" />
            <p className="my-4">EXPRESS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Sm} alt="HTML icon" />
            <p className="my-4">SMALLWORL/GIS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Redux} alt="HTML icon" />
            <p className="my-4">REDUX</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto" src={Reactnative} alt="HTML icon" />
            <p className="my-4">REACT-NATIVE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
