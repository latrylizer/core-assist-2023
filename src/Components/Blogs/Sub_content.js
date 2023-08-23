import React from "react";
import Footer from "../Footer/Footer";
export default function SubContent(props) {
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
            {props.Content.title}
          </header>
          <div className="d-lg-flex justify-content-center">
            <ul className="lead mb-0 align-self-center">
              {props.Content.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="col-md-6">
              <img className="p-4 w-100" src={props.Content.img} alt="va" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
