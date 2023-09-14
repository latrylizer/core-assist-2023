import React from "react";
import vaTwentyseven from "../../../img/va27.jpg";
import SubContent from "../../Blogs/Sub_content";
export default function top_ten_reason_why_successful_entrepreneurs_hire_virtual_assistants() {
  const content = {
    list: [
      "Time Is Your Goldmine",
      "You Need Cost-Effective Business Scalability",
      "You Need to Maintain Entrepreneurial Sanity",
      "You Need to Escape the Admin Jungle",
      "You Need to Streamline Your Business Operations",
      "You Need to Improve Your Products and Services",
      "You Need to Provide 24/7 Business or Customer Service",
      "You Need to Maintain a Killer Online Strategy",
      "You Need to Avoid Selling Your Soul to Your Business",
      "You Need to Increase the Asset Value of Your Business",
    ],
    title:
      "Top Ten Reasons Why Successful Entrepreneurs Hire Virtual Assistants",
    img: vaTwentyseven,
  };
  return <SubContent Content={content} />;
}
