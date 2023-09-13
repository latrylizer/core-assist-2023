import React from "react";
import vaThirtyfour from "../../../img/va34.jpg";
import SubContent from "../../Blogs/Sub_content";

export default function why_your_business_needs_a_virtual_assistant() {
  const content = {
    list: [
      "Promote Business Growth",
      "Decrease Workload",
      "Save Money",
      "Increase Leisure Time",
      "Provide Better Customer Service",
      "Strengthen Problem Areas",
    ],
    title: "Why Your Business Needs A Virtual Assistant",
    img: vaThirtyfour,
  };
  return <SubContent Content={content} />;
}
