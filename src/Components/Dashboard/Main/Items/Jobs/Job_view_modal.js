import { React, useState, useRef, useEffect } from 'react'
import { updateData } from '../../../../Firebase/Crud'
export default function JobViewModal(props) {
  const job_name_ref = useRef()
  const job_description_ref = useRef()

  useEffect(() => {
    job_description_ref.current.value = props.job.job_description
    job_name_ref.current.value = props.job.name
  }, [])

  async function handleOnClick() {
    const input = {
      name: job_name_ref.current.value,
      job_description: job_description_ref.current.value,
    }
    updateData('Jobs/' + props.id, input)
    job_name_ref.current.focus()
    alert('Job Updated')
  }
  return (
    <div
      class="modal fade"
      id={props.index}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Job
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
                      className="form-control"
                      placeholder="Job Name"
                      ref={job_name_ref}
                      // value={props.job.name}
                    />
                    <div class="invalid-feedback">Fill the blank input</div>
                  </div>
                  <label className="lead mt-3">Job Description:</label>
                  <textarea
                    className="form-control"
                    rows="10"
                    ref={job_description_ref}
                    // value={props.job.job_description}
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
              type="button"
              class="btn btn-orange"
              onClick={() => handleOnClick()}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
