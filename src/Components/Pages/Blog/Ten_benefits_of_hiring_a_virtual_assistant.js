import React from "react";
import vaTwentyeight from "../../../img/va28.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function Ten_benefits_of_hiring_a_virtual_assistant() {
  const content = {
    list: [
      "Time savings",
      "Improved turnaround of time-consuming tasks",
      "Reduced costs for staffing and operations",
      "Increased scale of operations",
      "Expanded reach",
      "Improved customer service",
      "Renewed focus on core business services",
      "Improved work-life balance",
      "Increased productivity",
      "Enhanced emotional well-being",
    ],
    title: "Ten benefits of hiring a virtual assistant",
    img: vaTwentyeight,
  };
  return <SubContent Content={content} />;
}
