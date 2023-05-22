import React from 'react'
const ApplicantModalForm = (props) => {
  // const applicant = {
  //   contact_no: '09665213592',
  //   data_outage: 'I have the prepaid modem (Globe) 15-30mbps',
  //   date_of_birth: '2022-10-25',
  //   email: 'antonettevilla13@gmail.com',
  //   employement_status: 'Unemployed',
  //   file_name: '-NFEfC0Pr3uRR1dA5gVU.',
  //   first_name: 'Antonette Mae',
  //   last_name: 'Villa',
  //   middle_name: 'Balinas',
  //   position: 'Real Estate Admin Assistant',
  //   power_outage:
  //     'I do have 20-minute drive place incase of power outage in our area and also planning to purchase a portable back up power.',
  //   salary: '28000',
  //   url: 'https://firebasestorage.googleapis.com/v0/b/coreassist-website.appspot.com/o/resume%2F-NFEfC0Pr3uRR1dA5gVU.?alt=media&token=3f0e17a3-99e1-4956-86c0-a32887fc17cf',
  //   work_experience_remote: 'Yes',
  // }
  return (
    <div
      className="modal fade"
      id={props.index}
      tabIndex="-1"
      aria-labelledby="props.applicant"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.applicant.first_name + ' ' + props.applicant.last_name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.first_name}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Middle Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.middle_name}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.last_name}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.date_of_birth}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.email}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Contact No:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.contact_no}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Employment Status:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.employment_status}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Position Applied:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.position}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Work Experience:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.work_experience_remote}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Desired Salary:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.salary}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Time of work:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.time_of_work}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Source of Application:</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.source_of_application}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4 lead">
                  <div className="mb-3">
                    <label className="form-label">Referal Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.applicant.referred_by}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-md lead">
                <label className="form-label">CRM Experience:</label>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    defaultValue={props.applicant.crm_experience}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 lead">
                  <label className="form-label">Power Outage:</label>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      defaultValue={props.applicant.power_outage}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6 lead">
                  <label className="form-label">Data Outage:</label>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      defaultValue={props.applicant.data_outage}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-md-6 lead">
                <label className="form-label">Candidate Essay:</label>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    defaultValue={props.applicant.candidate_essay}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-10 lead">
                <button className="btn btn-orange">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={props.applicant.url}
                  >
                    View Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ApplicantModalForm
