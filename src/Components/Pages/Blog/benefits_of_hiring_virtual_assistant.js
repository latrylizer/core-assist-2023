import React from "react";
import SubContent from "../../Blogs/Sub_content";
import vaThirteen from "../../../img/va13.png";
export default function benefits_of_hiring_virtual_assistant() {
  const content = {
    list: [
      "Quick Onboarding",
      "Dedicated Support",
      "Reduced Recruitment Hassle",
      "Multitasking Abilities",
      "Language and Cultural Diversity",
      "Access to Advanced Tools",
      "Temporary Support",
      "Boosted Creativity",
      "Higher Work Efficiency",
      "Reduced Burnout",
    ],
    title: "Benefits of Hiring a Virtual Assistant",
    img: vaThirteen,
  };
  return <SubContent Content={content} />;
}
