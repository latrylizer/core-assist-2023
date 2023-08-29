import React from "react";
import vaSeventeen from "../../../img/va17.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function why_business_owners_choose_virtual_assistants() {
  const content = {
    list: [
      "Time savings",
      "Increased efficiency",
      "Work-life balance",
      "On-demand support",
      "Access to a diverse skill set",
      "Reduced overhead costs",
      "Quick ramp-up time",
      "Scalability and flexibility",
    ],
    title: "Why business owners choose virtual assistants",
    img: vaSeventeen,
  };
  return <SubContent Content={content} />;
}
