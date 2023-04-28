import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { data } from "./util";
import "./experience.scss";

const Experience = () => {
  return (
    <section
      id="experience"
      className="resume bg-gradient-to-b from-black via-black to-gray-800"
    >
      {/* <div className="items-center justify-center mt-15"> */}
      <p className="text-4xl font-bold inline text-blue-500 mt-20 ml-20 items-center justify-center  border-b-4 border-gray-500 ">
        Resume
      </p>

      {/* </div> */}

      <div className="timeline">
        <div className="timeline__education">
          <h3 className="timeline__education__header-text ">Education</h3>
          <VerticalTimeline layout={"1-column"} lineColor="gray">
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "white",
                  border: "1px solid white",
                }}
                date=" 2002 - 2021"
                iconStyle={{
                  background: "black",
                  color: "yellowgreen",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>

                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p> {item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline layout={"1-column"} lineColor="gray">
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "white",
                  border: "1px solid white",
                }}
                date=" 2009- present"
                iconStyle={{
                  background: "black",
                  color: "yellowgreen",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>

                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p> {item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
