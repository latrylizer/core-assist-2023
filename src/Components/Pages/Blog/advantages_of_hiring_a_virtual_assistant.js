import React from "react";
import vaTwentyfour from "../../../img/va24.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function advantages_of_hiring_a_virtual_assistant() {
  const content = {
    list: [
      "Expertise and Skillset",
      "Customization",
      "Quality Assurance",
      "Time Savings",
      "Ongoing Support",
    ],
    title: "Advantages of hiring a virtual assistant",
    img: vaTwentyfour,
  };
  return <SubContent Content={content} />;
}
