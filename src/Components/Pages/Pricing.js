import React from 'react'
import Footer from '../Footer/Footer'
const Pricing = () => {
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
            height="200"
          />
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <header className="pt-5 pb-5 display-4 text-orange text-center">
            Pricing
          </header>
          <hr />
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-6">
                <div className="card h-100">
                  <div
                    className="container d-flex justify-content-center align-items-center"
                    style={{ height: '100px' }}
                  >
                    <header className="card-title lead font-weight-normal mb-0 text-orange">
                      Part-time Virtual Assistant Services
                    </header>
                  </div>
                  <hr className="mt-0 mb-0" />
                  <div className="card-body">
                    <ul className="list">
                      <li>
                        Recruitment & Staffing Services to Match Best Candidate
                        to Your Job Needs
                      </li>
                      <li>Virtual Assistant Services</li>
                      <li>
                        Dedicated Team Lead for Daily/Weekly Oversight of Job
                        Success
                      </li>
                      <li>On-Boarding & Training Assistance</li>
                      <li>Timekeeping/Payroll/HR Management</li>
                      <li>SOP Development</li>
                      <li>Overtime billed at time & half</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100">
                  <div
                    className="container d-flex justify-content-center align-items-center"
                    style={{ height: '100px' }}
                  >
                    <header className="card-title lead font-weight-normal mb-0 text-orange">
                      Full-time Virtual Assistant Services
                    </header>
                  </div>
                  <hr className="mt-0 mb-0" />
                  <div className="card-body">
                    <ul className="list">
                      <li>
                        Recruitment & Staffing Services to Match Best Candidate
                        to Your Job Needs
                      </li>
                      <li>Virtual Assistant Services</li>
                      <li>
                        Dedicated Team Lead for Daily/Weekly Oversight of Job
                        Success
                      </li>
                      <li>On-Boarding & Training Assistance</li>
                      <li>Timekeeping/Payroll/HR Management</li>
                      <li>SOP Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Pricing
