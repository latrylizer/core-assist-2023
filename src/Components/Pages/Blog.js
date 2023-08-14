import React from "react";
import vaOne from "../../img/va1.jpg";
import vaTwo from "../../img/va2.jpg";
import vaThree from "../../img/va3.jpg";
import Footer from "../Footer/Footer";
import vaFour from "../../img/va4.jpg";
import vaFive from "../../img/va5.jpg";
import vaSix from "../../img/va6.jpg";
import vaSeven from "../../img/va7.jpg";
import vaEight from "../../img/va8.jpg";
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
      {
        title: "Gain a Comprehensive Understanding of the CoreAssist Process!",
        url: "/gain_a_comprehensive_understanding_of_the_coreassist_process",
        img: vaFour,
        headline:
          "Step 1: Define Your Needs - Identify the specific tasks and responsibilities you want your virtual assistant or remote team member to handle...",
      },
      {
        title:
          "Navigating the Virtual World: Frequently Asked Questions for Collaborating with Remote Professionals.",
        url: "/navigation_the_virtual_world_frequently_asked_question_for_collaborating_with_remote_professionals",
        img: vaFive,
        headline:
          "What is a virtual assistant or Remote Team Member? A virtual assistant is a professional who provides remote administrative, creative, technical, or specialized support to individuals or businesses...",
      },
      {
        title:
          "Your Perfect Match: Valuable Tips for a Successful Virtual Collaboration",
        url: "/your_perfect_match_valuable_tips_for_a_successfull_virtual_collaboration",
        img: vaSix,
        headline:
          "Discover the power of the Culture Index Survey - an exciting and highly effective tool that CoreAssist uses to find your perfect Virtual Assistant or Remote Team Member...",
      },
      {
        title:
          "Unlocking Success: Expert Tips for Identifying the Perfect Candidates for Your Business Needs",
        url: "/unlocking_success_expert_tips_for_identifying_the_perfect_candidates_for_your_business_needs",
        img: vaSeven,
        headline:
          " When it comes to virtual assistants, finding the perfect match for your business is essential for a successful partnership....",
      },
      {
        title:
          "Discover the Next Level of Virtual Assistance with CoreAssist: Unleashing Exceptional Services and Talent!",
        url: "/discover_the_next_level_of_virtual_assistance_with_coreAssist_unleashing_exceptional_services_and_talent",
        img: vaEight,
        headline:
          "If you already have a Virtual Assistant and are considering exploring more options, CoreAssist can open up a world of possibilities for you...",
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
