import React from "react";
import Footer from "../Footer/Footer";

export default function Sub_content_with_bullet_header(props) {
  return (
    <div>
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
            <ul className="lead mb-0 align-self-center py-4">
              {props.Content.list.map((item, index) => (
                <div>
                  <li key={index}>
                    <span className="fw-normal fs-5 text-orange">
                      {item.header}
                      {item.header === "" ? "" : ":"}
                    </span>{" "}
                    {item.body}
                  </li>
                  {index === Math.round(props.Content.list.length / 2) - 1 ? (
                    <img
                      className="w-100 py-4"
                      src={props.Content.img}
                      alt="va"
                    ></img>
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
