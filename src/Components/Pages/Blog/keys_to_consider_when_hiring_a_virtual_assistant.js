import React from "react";
import vaNineteen from "../../../img/va19.jpg";
import SubContent from "../../Blogs/Sub_content";

export default function keys_to_consider_when_hiring_a_virtual_assistant() {
  const content = {
    list: [
      "Define your needs",
      "Skillset and experience",
      "Communication and availability",
      "Reliability and professionalism",
      "Time management and organizational skills",
      "Cost and budget",
      "Data security and confidentiality",
    ],
    title: "Keys to consider when hiring a virtual assistant",
    img: vaNineteen,
  };
  return <SubContent Content={content} />;
}
