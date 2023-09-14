import React from "react";
import vaThirtyfive from "../../../img/va35.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function why_a_virtual_assistant_for_entrepreneurs_is_a_great_investment() {
  const content = {
    list: [
      "Say Goodbye to Procrastination ",
      "Less Stressful Deadlines",
      "Its the Most Affordable Optionaire",
      "Choose from a Wide Variety of Talent",
    ],
    title: "Why A Virtual Assistant For Entrepreneurs Is A Great Investment?",
    img: vaThirtyfive,
  };
  return <SubContent Content={content} />;
}
