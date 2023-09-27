import React from 'react'
import vaSeventeen from '../../../img/va17.jpg'
import Sub_content_with_bullet_header from '../../Blogs/Sub_content_with_bullet_header'
export default function why_business_owners_are_choosing_coreassist_virtual_assistant() {
    const content = {
        list: [
           {
            header: "Cost Efficiency",
            body: "Virtual assistants are often more cost-effective than hiring full-time in-house employees. Business owners can save money on salaries, benefits, and office space."
           },
           {
            header: "Scalability",
            body: "Virtual assistants can be hired on a per-project or part-time basis, allowing business owners to scale their support up or down as needed."
           },
           {
            header: "Bibot baho",
            body: "Virtual assistants can be hired on a per-project or part-time basis, allowing business owners to scale their support up or down as needed."
           }
        ],
        title: "Outsourcing Success: Why Business Owners Are Choosing CoreAssist Virtual Assistants",
        img: vaSeventeen,
      };
      return <Sub_content_with_bullet_header Content={content} />;
}
