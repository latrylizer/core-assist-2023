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
import vaNine from "../../img/va9.jpg";
import vaTen from "../../img/va10.jpg";
import vaEleven from "../../img/va11.jpg";
import vaTwelve from "../../img/va12.jpg";
import vaThirteen from "../../img/va13.png";
import vaFourteen from "../../img/va14.jpg";
import vaFifteen from "../../img/va15.jpg";
import vaSixteen from "../../img/va16.jpeg";
import vaSeventeen from "../../img/va17.jpg";
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
      {
        title:
          "Unlocking the Full Potential of Your Virtual Assistant: Invaluable Insights and Strategies for Seamless Collaboration and Productivity",
        url: "/unlocking_the_full_potential_of_your_virtual_assistant_invaluable_insights_and_strategies_for_seamless_collboration_and_productivity",
        img: vaNine,
        headline:
          "As you continue to experience the positive impact they bring to your business, it's time to explore the boundless opportunities for long-term success and expansion...",
      },
      {
        title:
          "Making the Right Choice: Expert Insights for Deciding Between a Virtual Assistant or Remote Team Member",
        url: "/making_the_right_choice_expert_insights_for_deciding_between_a_virtual_assistant_remote_team_member",
        img: vaTen,
        headline:
          "For those doubting whether to get a Virtual Assistant, here’s our top 5 list to help you decide...",
      },
      {
        title: "Reasons Why Business Owners Switch to a Virtual Assistant",
        url: "/reasons_why_business_owners_switch_to_a_virtual_assistant",
        img: vaEleven,
        headline: "",
      },
      {
        title: "Things to Consider in Looking for the Best Recruiting Agency",
        url: "/things_to_consider_in_looking_for_the_best_recruiting_agency",
        img: vaTwelve,
        headline: "",
      },
      {
        title: "Benefits of Hiring a Virtual Assistant",
        url: "/benefits_of_hiring_virtual_assistant",
        img: vaThirteen,
        headline: "",
      },

      {
        title: "Choosing the perfect virtual recruitment agency",
        url: "/choosing_the_perfect_virtual_recruitnent_agency",
        img: vaFourteen,
        headline: "",
      },
      {
        title:
          "What are the important things to consider in hiring perfect virtual assistants?",
        url: "/what_are_the_important_things_to_consider_in_hiring_perfect_virtual_assistants",
        img: vaFifteen,
        headline: "",
      },
      {
        title: "Grow your business with us",
        url: "/grow_your_business_with_us",
        img: vaSixteen,
        headline: "",
      },
      {
        title: "Why business owners choose virtual assistants",
        url: "/why_business_owners_choose_virtual_assistants",
        img: vaSeventeen,
        headline: "",
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
          CoreAssist Blog
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
                          rel="noreferrer"
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
