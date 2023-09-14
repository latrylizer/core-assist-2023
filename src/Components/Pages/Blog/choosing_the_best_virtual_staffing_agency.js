import React from "react";
import vaEighteen from "../../../img/va18.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function choosing_the_best_virtual_staffing_agency() {
  const content = {
    list: [
      "Expertise and Specialization",
      "Skill Assessment and Screening",
      "Flexibility and Scalability",
      "Availability and Time Zone Compatibility",
      "Communication and Management",
      "Security and Confidentiality",
      "Language Proficiency",
      "Training and Support",
      "Customization and Personalization",
      "Succession Planning",
    ],
    title: "Choosing the Best Virtual Staffing Agency",
    img: vaEighteen,
  };
  return <SubContent Content={content} />;
}
