"use client"
import React from "react";
import "./comments.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const feedbacks = [
  {
    name: "AmirHosein",
    role: "Web Designer",
    img: "/img/Profile.jpg",
    comment:
      "The website design was clean and professional, with a smooth user experience.",
    rate: 5,
  },
  {
    name: "Sara",
    role: "UI/UX Designer",
    img: "/img/profile-2.png",
    comment:
      "She paid great attention to details and always listened to feedback carefully.",
    rate: 4,
  },
  {
    name: "Mohammad",
    role: "Frontend Developer",
    img: "/img/Profile.jpg",
    comment:
      "The code was well structured and easy to read, working with him was enjoyable.",
    rate: 5,
  },
  {
    name: "Narges",
    role: "Product Manager",
    img: "/img/Profile.jpg",
    comment:
      "Very responsible and delivered the project exactly on time as promised.",
    rate: 4,
  },
  {
    name: "AmirHosein",
    role: "Web Designer",
    img: "/img/Profile.jpg",
    comment:
      "The website design was clean and professional, with a smooth user experience.",
    rate: 5,
  },
  {
    name: "Sara",
    role: "UI/UX Designer",
    img: "/img/profile-2.png",
    comment:
      "She paid great attention to details and always listened to feedback carefully.",
    rate: 4,
  },
  {
    name: "Mohammad",
    role: "Frontend Developer",
    img: "/img/Profile.jpg",
    comment:
      "The code was well structured and easy to read, working with him was enjoyable.",
    rate: 5,
  },
  {
    name: "Narges",
    role: "Product Manager",
    img: "/img/Profile.jpg",
    comment:
      "Very responsible and delivered the project exactly on time as promised.",
    rate: 4,
  },
];

function Comments() {
  return (
    <div className="feed-back">
      <div className="title">Feed Back</div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="feed-back-list"
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="feed-back-item">
              <div className="user-row">
                <img src={item.img} alt={item.name} />
                <div className="user-info">
                  <div className="name">{item.name}</div>
                  <div className="role">{item.role}</div>
                </div>
              </div>
              <div className="content">
                <div className="desc">{item.comment}</div>
                <div className="rate">
                  {"★".repeat(item.rate) + "☆".repeat(5 - item.rate)}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Comments;
