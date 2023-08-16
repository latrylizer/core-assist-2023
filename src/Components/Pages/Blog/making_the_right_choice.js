import React from "react";
import Footer from "../../Footer/Footer";
import vaTen from "../../../img/va10.jpg";
export default function making_the_right_choice() {
  const list = [
    {
      header: "Assess Your Workload",
      body: "Take a closer look at your daily tasks and responsibilities. Are you spending too much time on repetitive or administrative tasks? If your workload is overwhelming, a Virtual Assistant can help alleviate the burden, allowing you to focus on core business activities.",
    },
    {
      header: "Identify Pain Points",
      body: "Determine the areas where you face challenges or feel less productive. A Virtual Assistant can provide expertise in those specific areas, offering valuable solutions and allowing you to excel in your strengths.",
    },
    {
      header: "Start Small",
      body: "If you're unsure about committing to a full-time Virtual Assistant, consider starting with a part-time or project-based arrangement. This allows you to gauge the benefits of having additional support without a significant long-term commitment.",
    },
    {
      header: "Cost-Effectivenes",
      body: "Evaluate the cost-effectiveness of hiring a Virtual Assistant compared to hiring an in-house employee. Virtual Assistants typically save on overhead expenses, making them a more budget-friendly option for many businesses.",
    },
    {
      header: "Virtual Assistant Specializations",
      body: "Virtual Assistants come with various skill sets and expertise. Research available Virtual Assistants to find one who matches your specific needs. Consider whether you need administrative support, social media management, content creation, customer service, or other specialized tasks.",
    },
  ];
  return (
    <div className="container-fluid px-0">
      <div
        style={{ height: "650px" }}
        className="container-fluid bg-dark-transparent d-flex justify-content-center align-items-center"
      >
        <div className="col-md-3">
          <img
            className="coreAssist-big-logo"
            src="./img/Core Assist svg.svg"
            alt="coreassist"
            height="200"
          />
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <header className="display-4 text-center py-4">
            Making the Right Choice: Expert Insights for Deciding Between a
            Virtual Assistant or Remote Team Member
          </header>
          <p className="lead">
            For those doubting whether to get a Virtual Assistant, here’s our
            top 5 list to help you decide!
          </p>
          {list.map((item, index) => (
            <div key={index}>
              <p className="lead mb-0 pb-3">
                <span className="fw-normal">{item.header}: </span>
                {item.body}
              </p>
              {index === Math.round(list.length / 2) - 1 ? (
                <img className="w-100 py-4" src={vaTen} alt="va"></img>
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
