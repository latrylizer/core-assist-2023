import React from "react";
import Footer from "../../Footer/Footer";
import vaThree from "../../../img/va3.jpg";

export default function testimonials() {
  const testimonial = [
    `“Camille is absolutely amazing to work with.” ~Meredith - Operations Consultant~`,
    `“I recently had to replace 2 of my RTMs and CoreAssist did a wonderful job sending me qualified candidates. The 2 that have joined the team are GREAT! Furthermore, the team members that have been with us for years, are also GREAT!” ~Robert - Operations Manager~`,
    `“In this ever-changing industry, we are happy on how adaptable and resilient our RTMs to these changes. “ ~Jon - Owner~`,
    `Quality team member placement, quick response time and affordability. ~Jim - Director of Operations~`,
    `“The communication and professionalism that I get from the team at CoreAssist is great! They provide quality applicants and assist us through the hiring process. “ ~Sheila - Operations Manager~`,
    `“Nilsy is excellent to work with! Hard-working, strong communication and very helpful with creating content and learning LinkedIn ads manager! Grateful for her passion for learning and grow with us.” ~Victoria~`,
    `“Very pleased with our RTMs” ~Mandy - Manager~`,
    `“I have an excellent team and enjoy working with them.” ~Taylor - Manager~`,
    `“Our RTM Nikko has been nothing short of amazing since starting with us!” ~Ericka - Manager~`,
    `I think CoreAssist is a good program because it offers companies a chance to hire people from different backgrounds and create a diverse environment within your company. ~Chandra~`,
    `They are a very important members of our team and hardworking individuals. ~Caitlin - Manager~`,
    `“Rosemay is an absolute delight to work with, and is always helpful.” ~Shane - Director~`,
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
          <header className="display-5 text-center py-3">Testimonials</header>
          <p className="lead fs-3 fw-normal">
            What Our Valued Clients Have to Say!
          </p>
          <ul className="lead my-0">
            {testimonial.map((item, index) => (
              <>
                <li className="py-3 mb-0" key={index}>
                  {item}
                </li>
                {index === Math.round(testimonial.length / 2) - 1 ? (
                  <img className="w-100 py-4" src={vaThree} alt="va"></img>
                ) : (
                  <div />
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
