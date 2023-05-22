import React from 'react'
import JobsDeleteModal from './Jobs_delete_modal'
import { updateData } from '../../../../Firebase/Crud'
import JobViewModal from './Job_view_modal'
export default function JobsTable(props) {
  function updateJobStatus() {
    const table = 'Jobs/' + props.id
    const updated = {
      active: true,
    }
    if (props.job.active) {
      updated.active = false
    }
    updateData(table, updated)
  }
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.job.name}</td>
      <td>
        <div className="d-grid gap-2">
          <button
            type="button"
            className={
              props.job.active ? 'btn btn-orange' : 'btn btn-secondary'
            }
            onClick={() => updateJobStatus()}
          >
            {props.job.active ? 'Disable' : 'Activate'}
          </button>
        </div>
      </td>
      <td>
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-orange"
            data-bs-toggle="modal"
            data-bs-target={'#view_' + props.id}
          >
            View
          </button>
        </div>
      </td>
      <td>
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-orange"
            data-bs-toggle="modal"
            data-bs-target={'#delete_' + props.id}
          >
            Delete
          </button>
        </div>
      </td>
      <JobViewModal index={'view_' + props.id} job={props.job} id={props.id} />
      <JobsDeleteModal index={'delete_' + props.id} id={props.id} />
    </tr>
  )
}
