import React from "react";
import vaTwentyfive from "../../../img/va25.jpeg";
import SubContent from "../../Blogs/Sub_content";
export default function what_are_the_benefits_of_hiring_a_virtual_assistant() {
  const content = {
    list: [
      "Time savings",
      "Increased productivity",
      "Cost efficiency",
      "Flexibility and scalability",
      "Expertise and specialization",
      "24/7 availability",
      "Reduced administrative burden",
    ],
    title: "What Are The Benefits Of Hiring A Virtual Assistant",
    img: vaTwentyfive,
  };
  return <SubContent Content={content} />;
}
