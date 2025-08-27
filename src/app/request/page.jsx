"use client";
import React, { useState } from "react";
import "./request.css";

function Request() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Loading...");

    try {
      const res = await fetch("http://localhost:4001/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ درخواستت ثبت شد، باهات تماس می‌گیریم");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("❌ خطا در ارسال: " + data.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ خطا در اتصال به سرور");
    }
  };
  return (
    <div className="request">
      <div className="request-banner">
        <div className="desc">Take the Silk Road to</div>
        <div className="title">Digitizing Your Business Growth</div>
        <div className="features">
          <div className="feature-item">
            Expert
            <br />
            Team Members
          </div>
          <div className="feature-item">
            Results-Driven
            <br />
            Approach
          </div>
          <div className="feature-item">
            Streamlined
            <br />
            Execution
          </div>
        </div>
        <div className="seperator">Premium Digital Agency Recognized by</div>
        <div className="companies">
          <img src="/img/comp-1.png" alt="" />
          <img src="/img/comp-2.png" alt="" />
          <img src="/img/comp-3.svg" alt="" />
          <img src="/img/comp-4.svg" alt="" />
        </div>
      </div>
      <div className="request-form">
        <div className="desc">Request a free consultation</div>
        <div className="title">Let’s Create Something AMAZING Together</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
}

export default Request;
