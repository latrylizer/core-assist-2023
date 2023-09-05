import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";
import { uploadFile, writeData, generateId } from "../Firebase/Crud";
import { getJobs } from "../../Redux/Reducers/jobs";
const Careers = () => {
  const jobs = useSelector((state) => state.JobCollection.Jobs.payload);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const email_ref = useRef();
  const first_name_ref = useRef();
  const middle_name_ref = useRef();
  const last_name_ref = useRef();
  const date_of_birth_ref = useRef();
  const contact_no_ref = useRef();
  const position_ref = useRef();
  // const salary_ref = useRef();
  const time_of_work_ref = useRef();
  const referred_by_ref = useRef();
  const work_experience_remote_ref = useRef();
  const power_outage_ref = useRef();
  const data_outage_ref = useRef();
  const employment_status_ref = useRef();
  const form_ref = useRef();
  const source_of_application_ref = useRef();
  const crm_experiece_ref = useRef();
  const candidate_essay_ref = useRef();

  const [selectedJobDescription, setSelectedJobDescription] = useState("");
  function checkPosition() {
    for (var job in jobs) {
      if (jobs[job].name === position_ref.current.value) {
        setSelectedJobDescription(jobs[job].job_description);
      }
    }
  }
  useEffect(() => {
    checkPosition();
  }, [jobs]);
  useEffect(() => {
    /*eslint-disable */
    onValue(ref(getDatabase(), "Jobs"), (data) => {
      // setLoading(true)

      dispatch(getJobs(data.val()));
      //  setLoading(false)
    });
  }, []);
  function getAllInputs(fileInfo) {
    const inputs = {
      email: email_ref.current.value,
      first_name: first_name_ref.current.value,
      middle_name: middle_name_ref.current.value,
      last_name: last_name_ref.current.value,
      date_of_birth: date_of_birth_ref.current.value,
      contact_no: contact_no_ref.current.value,
      position: position_ref.current.value,
      // salary: salary_ref.current.value,
      salary: "0.00",
      work_experience_remote: work_experience_remote_ref.current.value,
      power_outage: power_outage_ref.current.value,
      data_outage: data_outage_ref.current.value,
      employment_status: employment_status_ref.current.value,
      file_name: fileInfo.fileName,
      url: fileInfo.url,
      submission_date: Date.now(),
      referred_by: referred_by_ref.current.value,
      crm_experience: crm_experiece_ref.current.value,
      source_of_application: source_of_application_ref.current.value,
      time_of_work: time_of_work_ref.current.value,
      candidate_essay: candidate_essay_ref.current.value,
    };
    return inputs;
  }
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const key = await generateId("Applicant");
      const fileInfo = await uploadResume(key);
      const inputs = await getAllInputs(fileInfo);

      await writeData("Applicant/" + key, inputs);
      alert("Applicant Added");
      setLoading(false);
      form_ref.current.reset();
    } catch {
      setError("Submission failed");
      setLoading(false);
    }
  }
  async function uploadResume(key) {
    return await uploadFile(selectedFile, key);
  }

  return (
    <>
      <div className="container-fluid pb-5 bg-light">
        <header className="display-4 text-center pt-3 pb-3">
          BE PART OF US!
        </header>
        <div className="container d-flex justify-content-center">
          <div className="col-md-10">
            {error !== "" && <div className="alert alert-danger">{error}</div>}
            <form ref={form_ref} onSubmit={handleOnSubmit}>
              <div className="card">
                <div className="card-body">
                  <div className="col-md">
                    <div className="row">
                      <div className="col-md mb-3">
                        <input
                          type="text"
                          id="tb_first_name"
                          className="form-control"
                          placeholder="First name"
                          ref={first_name_ref}
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                      <div className="col-md mb-3">
                        <input
                          type="text"
                          id="tb_middle_name"
                          className="form-control"
                          placeholder="Middle name"
                          ref={middle_name_ref}
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                      <div className="col-md mb-3">
                        <input
                          type="text"
                          id="tb_last_name"
                          className="form-control"
                          placeholder="Last name"
                          ref={last_name_ref}
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="row">
                      <div className="col-md mb-3">
                        <input
                          type="email"
                          id="tb_email"
                          ref={email_ref}
                          className="form-control"
                          placeholder="Personal Email"
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                      <div className="col-md mb-3">
                        <input
                          type="date"
                          id="tb_date_of_birth"
                          className="form-control"
                          placeholder="Date of Birth"
                          ref={date_of_birth_ref}
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                      <div className="col-md mb-3">
                        <input
                          type="number"
                          id="tb_contact_no"
                          className="form-control"
                          placeholder="Contact no"
                          ref={contact_no_ref}
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="row">
                      <div className="col-md mb-3">
                        <div className="row">
                          <div className="col-md">
                            <label className="mb-3">
                              Which position(s) are you interested in?
                            </label>
                            <select
                              id="dd_position"
                              ref={position_ref}
                              className="form-select"
                              onChange={() => checkPosition()}
                              required
                            >
                              {jobs &&
                                Object.keys(jobs).map(
                                  (element, index) =>
                                    jobs[element].active && (
                                      <option key={index}>
                                        {jobs[element].name}
                                      </option>
                                    )
                                )}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* <div className="col-md mb-3">
                        <label className="mb-3">
                          What is your expected monthly salary range?
                        </label>
                        <select
                          id="dd_remote_experience"
                          className="form-select"
                          required
                          ref={salary_ref}
                        >
                          <option>Php 10,000 - Php 20,000 </option>
                          <option>Php 20,000 - Php 30,000 </option>
                          <option>Php 30,000 - Php 40,000 </option>
                          <option>Php 40,000 and above </option>
                        </select>
                      </div> */}
                      <div className="col-md mb-3">
                        <label className="mb-3">
                          How much time can you allocate to work per week?
                        </label>
                        <select
                          id="dd_remote_experience"
                          className="form-select"
                          required
                          ref={time_of_work_ref}
                        >
                          <option>Part Time(20 hours)</option>
                          <option>Full Time (40 hours)</option>
                        </select>
                      </div>

                      <div className="col-md mb-3">
                        <label className="mb-3">
                          Where did you hear about this job opportunity?
                        </label>
                        <select
                          id="dd_remote_experience"
                          className="form-select"
                          required
                          ref={source_of_application_ref}
                        >
                          <option>Referral</option>
                          <option>Facebook Groups</option>
                          <option>OLJ</option>
                          <option>CoreAssist Website</option>
                          <option>LinkedIn</option>
                        </select>
                      </div>

                      <div className="col-md mb-3 d-flex flex-column justify-content-end">
                        <label className="mb-3">
                          Referred by (if applicable)
                        </label>
                        <input
                          id="tb_salary"
                          type="text"
                          className="form-control"
                          ref={referred_by_ref}
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                    </div>
                  </div>

                  <label className="mt-3 mb-2">Job Description:</label>
                  <div className="col-md">
                    <textarea
                      className="form-control"
                      rows="10"
                      defaultValue={selectedJobDescription}
                      disabled
                    ></textarea>
                  </div>
                  <label className="mt-3 mb-2">
                    Enumerate the CRMs/Systems/Software you have experience
                    with:
                  </label>
                  <div className="col-md mb-2">
                    <textarea
                      className="form-control"
                      rows="5"
                      ref={crm_experiece_ref}
                    ></textarea>
                  </div>
                  <div className="col-md">
                    <div className="row"></div>
                  </div>
                  <div className="col-md">
                    <div className="row">
                      <div className="col-md mb-3">
                        <label className="mb-2">
                          In the event of an Internet Outage, what is your
                          contingency plan?
                        </label>
                        <textarea
                          type="text"
                          id="tb_data_outage"
                          className="form-control"
                          ref={data_outage_ref}
                          rows="5"
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                      <div className="col-md mb-3">
                        <label className="mb-2">
                          In the event of a Power Outage, what is your
                          contingency plan?
                        </label>
                        <textarea
                          id="tb_power_outage"
                          type="text"
                          className="form-control"
                          ref={power_outage_ref}
                          rows="5"
                          required
                        />
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="row">
                      <div className="col-md mb-3">
                        <label>
                          Do you have any experience in working remotely?
                        </label>
                        <select
                          id="dd_remote_experience"
                          className="form-select"
                          ref={work_experience_remote_ref}
                          required
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                      <div className="col-md mb-3">
                        <label>What is your current employment status? </label>
                        <select
                          id="dd_employment_status"
                          className="form-select"
                          ref={employment_status_ref}
                          required
                        >
                          <option>Unemployed</option>
                          <option>Student</option>
                          <option>Self- Employed</option>
                          <option>Employed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md mb-3">
                    <label className="mb-2">
                      In 2-3 sentences, why do you believe you are the best
                      candidate for the job?
                    </label>
                    <textarea
                      id="tb_power_outage"
                      type="text"
                      className="form-control"
                      ref={candidate_essay_ref}
                      rows="5"
                      required
                    />
                    <div className="invalid-feedback">
                      Please fill input fields
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-text">Upload Resume</label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      accept=".doc,.docx,application/msword,.pdf"
                      required
                      onChange={(e) => {
                        setSelectedFile(e.target.files[0]);
                      }}
                    />
                  </div>
                  {/* <div className="col-md">
                    <div className="input-group mb">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Upload Resume</span>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="FiResume"
                          accept=".doc,.docx,application/msword,.pdf"
                        />

                        <label
                          id="lblFiResume"
                          className="custom-file-label"
                          for="inputGroupFile01"
                        >
                          Choose file
                        </label>
                        <div className="invalid-feedback">
                          Please fill input fields
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      id="SubmitButton"
                      name="SubmitButton"
                      className="btn btn-orange btn-block"
                      disabled={loading}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Careers;
