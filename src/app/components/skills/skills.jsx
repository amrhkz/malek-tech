"use client";
import React from "react";
import "./skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  {
    id: 1,
    img: "/img/js-logo.jpg",
    title: "JavaScript",
  },
  {
    id: 2,
    img: "/img/next-logo.png",
    title: "Next.js",
  },
  {
    id: 3,
    img: "/img/react-logo.png",
    title: "React.js",
  },
  {
    id: 4,
    img: "/img/node-logo.webp",
    title: "Node.js",
  },
  {
    id: 5,
    img: "/img/express-logo.png",
    title: "Express.js",
  },
  {
    id: 6,
    img: "/img/pine-script.webp",
    title: "Pine Script",
  },
  {
    id: 7,
    img: "/img/mql.png",
    title: "MQL",
  },
];

function Skills() {
  return (
    <div className="skills">
      <div className="title">Skills</div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="skills-list"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.id}>
            <div className="skill-item">
              <img src={skill.img} alt={skill.title} />
              <div className="content">
                <div className="title">{skill.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Skills;
