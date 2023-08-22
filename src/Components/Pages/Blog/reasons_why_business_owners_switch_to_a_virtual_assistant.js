import React from "react";
import Footer from "../../Footer/Footer";
import vaEleven from "../../../img/va11.jpg";
export default function reasons_why_business_owners_switch_to_a_virtual_assistant() {
  const list = [
    "Cost savings",
    "Flexibility",
    "Specialized skills",
    "Focus on core task",
    "Increased productivity",
    "Access to global talent",
    "Scalability",
    "Time zone coverage",
    "Reduced onboarding time",
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
          <header className="display-5 text-center py-4">
            Reasons Why Business Owners Switch to a Virtual Assistant
          </header>
          <div className="d-lg-flex justify-content-center">
            <ul className="lead mb-0 align-self-center">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="col-md-6">
              <img className="p-4 w-100" src={vaEleven} alt="va" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
