"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "./slider.css"

function Slider() {
  const logos = [
    "/img/binance.png",
    "/img/binance-dex.png",
    "/img/fidibo.png",
    "/img/digikala.png",
    "/img/trading-view.webp",
    "/img/nfl_logo-1.png.webp",
    "/img/nyc_logo-1.png.webp",
    "/img/PG_logo-1.png.webp",
    "/img/Sony-1.png.webp",
    "/img/xerox_logo-1.png.webp",
    "/img/grenco_logo-1.png.webp",
    "/img/BRU_Logo-1.png.webp",
    "/img/enchant_logo-1.png.webp",
    "/img/g2_logo-1.png.webp",
    "/img/mcds_logo-1.png.webp",
    "/img/MicrosoftTeams-image-2.png.webp",
    "/img/nfl_logo-1.png.webp",
    "/img/nyc_logo-1.png.webp",
    "/img/PG_logo-1.png.webp",
    "/img/Sony-1.png.webp",
    "/img/xerox_logo-1.png.webp",
    "/img/grenco_logo-1.png.webp",
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={"auto"}
      spaceBetween={24}
      loop={true}
      speed={1500} // حرکت نرم
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      className="slider"
    >
      {logos.map((logo, i) => (
        <SwiperSlide key={i} className="!w-auto p-[24px]">
          <img className="h-[36px]" src={logo} alt={`logo-${i}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
