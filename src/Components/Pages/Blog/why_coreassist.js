import React from "react";
import vaTwentytwo from "../../../img/va22.png";
import SubContent from "../../Blogs/Sub_content";
export default function why_coreassist() {
  const content = {
    list: [
      "Tailored solutions",
      "Highly skilled assistants",
      "Seamless communication",
      "Cost-effective solutions",
      "Focus on growth",
    ],
    title: "Why Coreassist?",
    img: vaTwentytwo,
  };
  return <SubContent Content={content} />;
}
