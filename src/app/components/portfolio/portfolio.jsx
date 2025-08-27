"use client";
import React from "react";
import "./portfolio.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Portfolio() {
  const demos = [
    {
      href: "https://arilla.vercel.app/",
      img: "/img/demo-1.png",
      alt: "Demo 1",
    },
    {
      href: "https://exonyx.vercel.app/",
      img: "/img/demo-2.png",
      alt: "Demo 2",
    },
    {
      href: "https://fidibo.vercel.app/",
      img: "/img/demo-3.png",
      alt: "Demo 3",
    },
    {
      href: "https://payjib.vercel.app/",
      img: "/img/demo-4.png",
      alt: "Demo 4",
    },
    {
      href: "https://zoomit-ivory.vercel.app/product",
      img: "/img/demo-5.png",
      alt: "Demo 5",
    },
  ];

  return (
    <div className="portfolio">
      <div className="title">Demos</div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="portfolio-list"
      >
        {demos.map((demo, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio-item">
              <img src={demo.img} alt={demo.alt} />
              <div className="content">
                <div className="title">Exchange Website</div>
                <div className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  nesciunt libero quidem numquam, qui quis.
                </div>
                <div className="btns">
                  <Link href={demo.href}>Preview</Link>
                  <Link href={"/request"}>Order</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
