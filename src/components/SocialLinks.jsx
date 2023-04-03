import React from "react";
import { AiFillSkype } from "react-icons/ai";
import { BsFacebook, BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/anindita-das-dey-0a548a266/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/andy837320",
    },
    {
      id: 3,
      child: (
        <>
          Mail <SiGmail size={30} />
        </>
      ),
      href: "mailto:ani837320@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Skype <AiFillSkype size={30} />
        </>
      ),
      href: "https://web.skype.com/",
      // style: "rounded-tr-md",
    },
    {
      id: 5,
      child: (
        <>
          Facebook <BsFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/anindita.anidas",
      // style: "rounded-tr-md",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./Anindita_Sr Ui.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className=" flex flex-col top-[25%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between  items-center w-25 px-4 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
