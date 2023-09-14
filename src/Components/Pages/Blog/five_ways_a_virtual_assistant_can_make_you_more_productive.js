import React from "react";
import vaTwentynine from "../../../img/va29.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function five_ways_a_virtual_assistant_can_make_you_more_productive() {
  const content = {
    list: [
      "They Put Processes in Place",
      "They Filter Communication",
      "They Capture and Organize Data",
      "They Complete Tedious Daily Tasks",
      "They Let You Focus on What You Do Best",
    ],
    title: "Five Ways A Virtual Assistant Can Make You More Productive",
    img: vaTwentynine,
  };
  return <SubContent Content={content} />;
}
