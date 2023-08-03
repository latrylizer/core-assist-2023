import React from "react";
import vaOne from "../../img/va1.jpg";
import vaTwo from "../../img/va2.jpg";
import vaThree from "../../img/va3.jpg";
import Footer from "../Footer/Footer";
export default function Blog() {
  const blogs = {
    content: [
      {
        title: "What a Virtual Assistant can do",
        url: "/what_a_virtual_assistant_can_do",
        img: vaOne,
        headline:
          "A Virtual Assistant or remote team member A virtual assistant or remote team member is an individual who works remotely and provides various administrative, technical, or creative support to individuals or businesses...",
      },
      {
        title:
          "Advantages and Benefits of Hiring a Virtual Assistant or Remote Team Member",
        url: "/advantages_and_benefits_of_hiring_a_virtual_assistant",
        img: vaTwo,
        headline:
          "There are several benefits to hiring a virtual assistant or remote team member...",
      },
      {
        title: "Testimonials!",
        url: "/testimonials",
        img: vaThree,
        headline: "What Our Valued Clients Have to Say...",
      },
    ],
  };
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
      <div className="Container-fluid bg-light">
        <header className="display-5 text-center text-uppercase text-orange py-4">
          Tips on hiring virtual assistant
        </header>
        <div className="container py-5">
          <div className="row">
            {Object.keys(blogs.content).map((item, index) => (
              <div key={index} className="col-md-4 py-4">
                <div className="card h-100">
                  <img src={blogs.content[index].img} alt={"va" + index}></img>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="container-fluid">
                      <header className="lead fw-normal fs-4 text-center">
                        {blogs.content[index].title}
                      </header>
                      <p className="lead fs-6 text-center">By CoreAssist</p>
                    </div>
                    <div className="container-fluid">
                      <p className="lead fs-6">
                        {blogs.content[index].headline}
                      </p>

                      <div className="d-grid gap-2">
                        <a
                          target="_blank"
                          href={blogs.content[index].url}
                          className="btn btn-orange"
                        >
                          See Full Post
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
