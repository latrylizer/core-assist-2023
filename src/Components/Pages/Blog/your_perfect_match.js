import React from "react";
import Footer from "../../Footer/Footer";
import vaSix from "../../../img/va6.jpg";
export default function your_perfect_match() {
  return (
    <div className="container-fluid px-0">
      <div
        style={{ height: "650px" }}
        className="container-fluid bg-dark-transparent d-flex justify-content-center align-items-center"
      >
        <div className="col-md-3">
          <img
            className="coreAssist-big-logo"
            src="./img/Core Assist svg.svg"
            alt="coreassist"
            height="200"
          />
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <header className="display-5 text-center py-4">
            Your Perfect Match: Valuable Tips for a Successful Virtual
            Collaboration
          </header>
          <p className="lead">
            Discover the power of the Culture Index Survey - an exciting and
            highly effective tool that CoreAssist uses to find your perfect
            Virtual Assistant or Remote Team Member. It's easy! You'll receive
            an email with simple questions about your ideal candidate, taking
            only 2-5 minutes to complete. You'll be amazed at how reliable this
            process is in helping us identify the best match for your business
            needs. Embrace the future of seamless hiring with CoreAssist!
          </p>
          <img src={vaSix} className="w-100 py-4" alt="va"></img>
          <p className="lead mb-0 pb-4">
            Take part in our unique Culture Index survey to assess your
            personality and find the perfect virtual assistant or remote team
            member who will seamlessly collaborate with you, meeting both your
            personal and business requirements.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
