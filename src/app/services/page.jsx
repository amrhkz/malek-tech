import React from "react";
import "./services.css";

function Services() {
  const plans = [
    {
      id: 1,
      title: "Purple Lift",
      desc: "Supercharged crypto tools. Personalized guidance.",
      price: "$10.500 /month",
      logo: "/web-icon.png",
      features: ["4 free seats available", "Priority customer support"],
      separator: "TORQUOISE TREK",
      extras: ["Supercharged tools", "AI-driven signals", "Portfolio tracking"],
    },
    {
      id: 2,
      title: "Golden Rise",
      desc: "Advanced trading suite with automation and analytics.",
      price: "$25.000 /month",
      logo: "/web-icon.png",
      features: ["10 free seats available", "Dedicated account manager"],
      separator: "GOLDEN PATH",
      extras: [
        "Automated trading bots",
        "Exclusive market reports",
        "Private webinars",
      ],
    },
    {
      id: 3,
      title: "Diamond Peak",
      desc: "Full-scale enterprise solution for institutions.",
      price: "$50.000 /month",
      logo: "/web-icon.png",
      features: ["Unlimited seats", "24/7 support desk"],
      separator: "DIAMOND ROAD",
      extras: [
        "Custom strategy building",
        "On-demand research",
        "Direct API access",
      ],
    },
    {
      id: 4,
      title: "Starter Pack",
      desc: "Affordable entry point for beginners in crypto trading.",
      price: "$2.000 /month",
      logo: "/web-icon.png",
      features: ["1 free seat available", "Community support"],
      separator: "BASIC TRAIL",
      extras: ["Learning materials", "Basic signals", "Weekly newsletter"],
    },
  ];

  return (
    <div className="plans">
      <div className="title">Plans</div>
      <div className="plan-list">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-item">
            <div className="logo">
              <img src={plan.logo} alt={plan.title} />
            </div>
            <div className="title">{plan.title}</div>
            <div className="desc">{plan.desc}</div>
            <div className="price">{plan.price}</div>
            <button className="plan-btn">Choose this plan</button>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div key={i} className="feature-item">
                  <i className="bx bxs-user-circle bx-xs"></i>
                  {feature}
                </div>
              ))}
            </div>
            <div className="seperator">
              <div className="sep-div"></div>
              <div className="sep-txt">{plan.separator}</div>
              <div className="sep-div"></div>
            </div>
            <div className="extras">
              {plan.extras.map((extra, i) => (
                <div key={i} className="extra-item">
                  <i className="bx bxs-check-circle bx-xs"></i>
                  {extra}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
