import React from "react";
import SubContent from "../../Blogs/Sub_content";
import vaFourteen from "../../../img/va14.jpg";
export default function choosing_the_perfect_virtual_recruitnent_agency() {
  const content = {
    list: [
      "Reputation and Experience",
      "Specialization and Industry Knowledge",
      "Technology and Virtual Platforms",
      "Candidate Pool and Network",
      "Communication and Collaboration",
      "Data Privacy and Security",
      "Fees and Cost Structure",
      "Contract Terms and Flexibility",
      "Geographical Reach",
      "Client References",
      "Innovative Recruitment Strategies",
      "Agility and Adaptability",
    ],
    title: "Choosing the perfect virtual recruitment agency",
    img: vaFourteen,
  };
  return <SubContent Content={content} />;
}
