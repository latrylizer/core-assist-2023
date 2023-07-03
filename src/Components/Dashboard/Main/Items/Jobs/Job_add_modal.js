import { React, useState, useRef } from "react";
import { writeData, generateId } from "../../../../Firebase/Crud";

export default function JobAddModal() {
  const job_name_ref = useRef();
  const job_description_ref = useRef();
  const [isJobNameEmpty, setIsJobNameEmpty] = useState(false);
  const [isJobDescriptionEmpty, setIsJobDescriptionEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function handleOnClick() {
    setIsJobNameEmpty(false);
    setIsJobDescriptionEmpty(false);
    setIsLoading(true);
    if (job_name_ref.current.value === "") {
      setIsJobNameEmpty(true);
      setIsLoading(false);
      return;
    }
    if (job_description_ref.current.value === "") {
      setIsJobDescriptionEmpty(true);
      setIsLoading(false);
      return;
    }
    const id = await generateId("Jobs");
    const job = {
      name: job_name_ref.current.value,
      job_description: job_description_ref.current.value,
      active: true,
    };
    await writeData("Jobs/" + id, job);
    alert("Job Added.");
    setIsLoading(false);
    job_name_ref.current.value = "";
    job_name_ref.current.focus();
    job_description_ref.current.value = "";
  }
  return (
    <div
      class="modal fade"
      id="Job_add_modal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Add Job
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div className="form-group">
                <div className="col-md p-3">
                  <div className="form-group">
                    <label className="lead">Job Name:</label>
                    <input
                      type="text"
                      className={
                        !isJobNameEmpty
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      ref={job_name_ref}
                    />
                    <div class="invalid-feedback">Fill the blank input</div>
                  </div>
                  <label className="lead mt-3">Job Description:</label>
                  <textarea
                    className={
                      !isJobDescriptionEmpty
                        ? "form-control"
                        : "form-control is-invalid"
                    }
                    rows="10"
                    ref={job_description_ref}
                  ></textarea>
                  <div class="invalid-feedback">Fill the blank input</div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => handleOnClick()}
              type="button"
              class="btn btn-orange"
              disabled={isLoading}
            >
              Add Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
