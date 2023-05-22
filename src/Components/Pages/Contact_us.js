import React from 'react'
import Footer from '../Footer/Footer'

const ContactUs = () => {
  return (
    <>
      <div
        style={{ height: '850px' }}
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

          <form>
            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label className="lead" for="name">
                    First Name
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md">
                <div className="form-group">
                  <label className="lead" for="name">
                    Last Name
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="lead" for="name">
                Email
              </label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label className="lead" for="name">
                Contact No
              </label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label className="lead" for="name">
                Comment/Message
              </label>
              <textarea
                className="form-control"
                name="Message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-orange btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default ContactUs
