import React from "react";
import vaFifteen from "../../../img/va15.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function what_are_the_important_things_to_consider_in_hiring_perfect_virtual_assistants() {
  const content = {
    list: [
      "Skills and Expertise",
      "Communication",
      "Reliability and Professionalism",
      "Time Zone Compatibility",
      "Availability and Workload",
      "Technology and Tools",
    ],
    title:
      "What are the important things to consider in hiring perfect virtual assistants?",
    img: vaFifteen,
  };
  return <SubContent Content={content} />;
}
