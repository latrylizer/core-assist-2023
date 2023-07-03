import React, { useState } from "react";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  const [formstate, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formstate, [event.target.name]: event.target.value });
  };
  const handOnSubmit = (event) => {
    event.preventDefault();
    const config = {
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "latryll.alimes@coreassist.com",
      Password: "3B89421B6E23AABC931E1D8F283BC0978EB6",
      To: "latryll.alimes@coreassist.com",
      From: "latrylizer@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",

      // Username: "latrylizer@gmail.com",
      // Password:
      //   "xsmtpsib-64baae51e8358f97ea8b47f7ca7bad75d14ecb3ddd79b13562ee141a9ef587bd-0IRN59sqwUFW8zVc",
      // Host: "smtp-relay.sendinblue.com",
      // Port: "587",
      // To: "latrylizer@gmail.com",
      // From: "latrylizer@gmail.com",
      // Subject: "An interested client to coreassist",
      // Body: "Chula",
    };
    if (window.Email) {
      window.Email.send(config).then(alert("Email sent"));
    }
  };

  return (
    <>
      <div
        style={{ height: "850px" }}
        className="container-fluid bg-dark-transparent d-flex justify-content-center align-items-center"
      >
        <div className="col-md-3">
          <img
            className="coreAssist-big-logo"
            src="./img/Core Assist svg.svg"
            alt="coreassist"
            height="250"
          />
        </div>
      </div>
      <div className="container-fluid bg-light pb-5">
        <div className="container">
          <header className="pt-4 h1 text-center text-orange">
            Contact us
          </header>
          <hr />
          <div className="col-md-8">
            <form onSubmit={handOnSubmit}>
              <div className="row"></div>
              <div className="form-group">
                <label className="lead">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formstate.name || ""}
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="lead">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formstate.name || ""}
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="lead">Message</label>
                <textarea
                  className="form-control"
                  onChange={changeHandler}
                  name="Message"
                  value={formstate.name || ""}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-orange btn-block mt-3 px-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;
