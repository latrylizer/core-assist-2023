import React from "react";
import vaTwenty from "../../../img/va20.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function five_tips_for_choosing_the_right_virtual_assistant() {
  const content = {
    list: [
      "Determine Your Specific Needs",
      "Evaluate Experience and Expertise",
      "Assess Communication and Availability",
      "Review Pricing and Flexibility",
      "Seek Professionalism and Trustworthiness",
    ],
    title: "Five tips for choosing the right virtual assistant",
    img: vaTwenty,
  };
  return <SubContent Content={content} />;
}
