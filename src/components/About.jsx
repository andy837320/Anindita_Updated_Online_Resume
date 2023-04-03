import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col w-full max-h-screen    overflow-x-hidden ">
        <div className="pb-6 mt-3">
          <p className="text-4xl  text-blue-500 border-gray-600  ml-20  display-flex  font-bold inline border-b-4">
            Who Am I? 👧
          </p>
        </div>
        <p className="text-xl mt-20 ml-20 mr-20">
          I feel that a'm an enthusiatic,energetic person. I cracked my first
          job back in India before completing my BTECH.Coding in my new passion
          nowadyas.Six years ago I relocated Florida,USA with my family.More
          than 3 years I am working in Wells Fargo and J&J in
          Orlando(Remote).Keenly interested in UI/UX/Frontend development but I
          have done my projects in Nodejs backend with NoSql/PL-Sql Database.I
          have hands on experience with Mobile Development(React Native) as
          well.
        </p>

        <br />
        <br />
        <br />

        <p className="text-xl ml-20 mr-20">
          Seasoned andindependent full stack developer(Web & Mobile),I had done
          'NuCAMP course(Java Script,React js, Bootstrap,Express js,
          MongoDB,Reat Native) '& 'Udemy courses' to enhance my knowledge in
          Full stack web development.I worked with Hp & IBM back in India ,I
          have tptal 8+ of experiance in development and testing. I worked with
          TELSTRA,EXCEL Energy and DUKE Energy , Wells Fargo and J&J. I had
          experienced with GIS,Smallworld ,ESRI and Magik language.I completed
          my PGDBA back in India with a great score.
        </p>
      </div>
    </div>
  );
};

export default About;
