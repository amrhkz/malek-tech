import Banner from "./components/banner/banner";
import Comments from "./components/comments/comments";
import Portfolio from "./components/portfolio/portfolio";
import ServiceCategory from "./components/service-category/service-category";
import Skills from "./components/skills/skills";
import Slider from "./components/slider/slider";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Slider />
      <div className="about-us">
        <img src="/img/tarh-2.png" alt="" />
        <div className="content">
          <div className="title">
            Creative Web Agency Delivering Custom Solutions
          </div>
          <div className="desc">
            Malek Tech is a web design company & digital marketing agency
            focused on growing brands online. We create effective brand
            strategies, custom web design, development, and digital marketing
            solutions to generate greater brand engagement and conversions. We
            work closely with our clients to ensure each project meets their
            brand guidelines and business goals and provide technical and
            marketing expertise to ensure optimal results.
          </div>
          <div className="features">
            <div className="feature-item"></div>
          </div>
        </div>
      </div>
      <Portfolio />
      {/* <div className="about-us">
        <img src="/img/Profile.jpg" alt="" />
        <div className="content">
          <div className="title">About Us</div>
          <div className="desc">
            We are a team of tech enthusiasts who love building and creating.
            Our focus is on full-stack web development with Next.js, Express.js,
            and MongoDB. We also create custom trading indicators in Pine Script
            and MQL, helping traders make smarter decisions. On the hardware
            side, we build and assemble custom PCs and provide high-quality
            computer parts for professionals, gamers, and everyday users. Our
            goal is simple: to bring smart, reliable, and innovative solutions
            in both software and hardware to everyone we work with.
          </div>
        </div>
      </div> */}
      <Skills />
      <ServiceCategory />
      <Comments />
    </div>
  );
}
