import React from "react";
import vaThirty from "../../../img/va30.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function why_hire_a_virtual_assistant() {
  const content = {
    list: [
      "Experience",
      "No physical space is required",
      "It saves time and money",
      "It can increase your productivity and customer response time",
    ],
    title: "Why Hire A Virtual Assistant",
    img: vaThirty,
  };
  return <SubContent Content={content} />;
}
