import React from 'react'
import { deleteData } from '../../../../Firebase/Crud'

export default function JobsDeleteModal(props) {
  function exeDelete(id) {
    deleteData('Jobs/' + id)
  }
  return (
    <div>
      <div
        className="modal fade"
        id={props.index}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Warning
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this job?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-orange"
                data-bs-dismiss="modal"
                onClick={() => exeDelete(props.id)}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
