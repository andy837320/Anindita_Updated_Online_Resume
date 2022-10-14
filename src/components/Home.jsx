import React from "react";
import logo from "../assets/mypic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typical from "react-typical";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mb-2 p-3 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col mb-2 justify-center h-full">
          <h2 className="text-2xl sm:text-5xl mb-2  text-blue-500 font-bold">
            Hie 👋 This is Anindita Dey[Full Stack Developer]
          </h2>

          <p className="text-blue-300 py-4 mx-w-md">
            <Typical
              loop={Infinity}
              steps={[
                "Enthusistic Programmer 💟",
                3000,
                "Full Stack Dev 🤯",
                3000,
                "Experianced In GIS 🌏",
                3000,
                "React & Angular fav Framework 🎞️",
                3000,
                "Worked with HP & IBM 💻",
                3000,
                "Completed PGDBA(MBA) with grade 'A' 🎓",
                3000,
                "Passionate Dancer & HomeCheif 💃 😃 ",
                3000,
              ]}
            />
          </p>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className=" group text-white  w-fit px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Hire Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={logo}
            alt="logo"
            className="rounded-2xl   w-2/3 md:w-full h-80 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
