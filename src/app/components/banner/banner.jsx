import React from "react";
import "./banner.css";
import Link from "next/link";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="desc">Premium Web Design Agency</div>
        <div className="title">We Grow Brands Online</div>
        <div className="desc">
          Custom Websites, Branding & Digital Marketing
        </div>
        <Link href={"/request"}>REQUEST A QUOTE</Link>
        {/* <div className="socials">
          <div className="social-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="var(--second)"
              viewBox="0 0 256 256"
            >
              <path d="M216 20H40a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H44V44h168Zm-100-36v-56a12 12 0 0 1 21.43-7.41A40 40 0 0 1 192 148v28a12 12 0 0 1-24 0v-28a16 16 0 0 0-32 0v28a12 12 0 0 1-24 0m-16-56v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0M68 80a16 16 0 1 1 16 16 16 16 0 0 1-16-16" />
            </svg>
          </div>
          <div className="social-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="var(--second)"
              viewBox="0 0 256 256"
            >
              <path d="M128 80a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24m48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16" />
            </svg>
          </div>
          <div className="social-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="var(--second)"
              viewBox="0 0 256 256"
            >
              <path d="M231.49 23.16a13 13 0 0 0-13.23-2.26L15.6 100.21a18.22 18.22 0 0 0 3.12 34.86L68 144.74V200a20 20 0 0 0 34.4 13.88l22.67-23.51L162.35 223a20 20 0 0 0 32.7-10.54l40.62-176.55a13 13 0 0 0-4.18-12.75m-92.08 54.36-62.19 44.57-34.43-6.75ZM92 190.06v-28.71l15 13.15Zm81.16 10.52-73.88-64.77 106.31-76.18Z" />
            </svg>
          </div>
        </div> */}
      </div>
      <div className="banner-img">
        <img src="/img/banner-3.png" alt="" />
      </div>
    </div>
  );
}

export default Banner;
