import React from "react";
import vaThirtyseven from "../../../img/va37.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function benefits_of_outsourcing_to_a_virtual_assistant() {
  const content = {
    list: [
      "Saves You Time & Money",
      "Focus On Your Core Skills",
      "Makes Your Business Efficient",
      "Access To Experts",
      "Increased Quality",
      "Streamlined Operations",
      "You Can Scale Up or Down",
      "Hire According To Needs",
      "Improve Customer Service",
      "Increase Return of Investment",
    ],
    title: "Benefits of Outsourcing To A Virtual Assistant",
    img: vaThirtyseven,
  };
  return <SubContent Content={content} />;
}
