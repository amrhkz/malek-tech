import React from "react";
import "./service-category.css";

const services = [
  {
    id: 1,
    img: "/img/service-1.png",
    title: "UI Design",
    desc: "We craft clean, modern, and user-friendly interfaces that ensure your product looks stunning and easy to use.",
  },
  {
    id: 2,
    img: "/img/service-2.png",
    title: "UX Design",
    desc: "Our UX design focuses on creating seamless and engaging experiences that keep users satisfied and coming back.",
  },
  {
    id: 3,
    img: "/img/service-3.png",
    title: "App Design",
    desc: "From concept to prototype, we design mobile applications that are intuitive, scalable, and aligned with user needs.",
  },
  {
    id: 4,
    img: "/img/service-4.png",
    title: "Web Design",
    desc: "We build responsive, fast, and visually appealing websites tailored to your brand and business goals.",
  },
];

function ServiceCategory() {
  return (
    <div className="service-category">
      <div className="title">Service Category</div>
      <div className="service-category-list">
        {services.map((service) => (
          <div key={service.id} className="service-category-item">
            <img src={service.img} alt={service.title} />
            <div className="card-content">
              <div className="title">{service.title}</div>
              <div className="desc">{service.desc}</div>
              <button className="hire-btn">Hire me Now!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCategory;
