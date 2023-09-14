import React from "react";
import vaThirtysix from "../../../img/va36.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function ten_reasons_to_work_from_home_and_improve_productivity() {
  const content = {
    list: [
      "Employees Working Remotely Can Reinvest Their Commuting Time",
      "Distractions Go Down, Focus and Productivity Go up When Working Remotely From Home",
      "Remote Workers More Productive When It Comes to Meetings",
      "Working From Home Work Life Balance",
      "Introverts Are More Productive While Working From Home",
      "Working From Home Means a Healthier, More Comfortable Life (If Youre Proactive)",
      "Cost Saving: Benefits of Working From Home for Employers",
      "here Are Great Remote Workers All Over the World",
      "Temporary Staff Tend to Work Remotely",
      "Well, Why Not? Remote Working Works a Whole Lot Better Than It Used to",
    ],
    title: "Ten Reasons to Work From Home and Improve Productivity",
    img: vaThirtysix,
  };
  return <SubContent Content={content} />;
}
