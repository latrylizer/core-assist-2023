import React, { useState } from "react";
import Footer from "../Footer/Footer";
import leslie from '../../img/staff/leslie.jpg'
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
      <div className="container-fluid bg-light">
        <div className="container">
          <header className="display-5 fw-normal py-3 h1 text-center text-orange text-uppercase">
            Please Contact
          </header>
          <hr />
         <div className="row justify-content-center py-3">
          <div className="col-md-4">
            <div className="card">
              <img src={leslie} className="w-100" alt="leslie"></img>
              <div className="card-body">
              <header className="display-6 my-3">Leslie McEwen</header>
              <p className="lead m-0">Sales Executive</p>
              <p className="lead m-0">Email: 
                <span>
                  <a href="mailto: leslie.mcwen@coreassist.com">
                    leslie.mcwen@coreassist.com
                  </a>
                </span>
              </p>
             <p className="lead m-0">Contact No. : 901-405-4525</p>
              </div>
            </div>
            
          </div>
         </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;
