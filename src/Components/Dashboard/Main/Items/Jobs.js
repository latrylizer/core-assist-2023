import React, { useEffect, useRef, useState } from 'react'
import JobsTable from './Jobs/Jobs_table'
import { getDatabase, ref, onValue } from 'firebase/database'
import Loading from '../../../loading'
import { writeData, generateId } from '../../../Firebase/Crud'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../../../Redux/Reducers/jobs'
import { useFetcher } from 'react-router-dom'
import JobAddModal from './Jobs/Job_add_modal'
//import JobsDeleteModal from './Jobs/Jobs_delete_modal'
const Jobs = () => {
  const jobs = useSelector((state) => state.JobCollection.Jobs.payload)
  const [loading, setLoading] = useState(true)
  const jobs_ref = useRef()
  const dispatch = useDispatch()
  const job_description_ref = useRef()
  const [isEmpty, setIsEmpty] = useState(false)
  const [isListEmpty, setIsListEmpty] = useState(false)
  const [isJobNameEmpty, setIsJobNameEmpty] = useState(false)
  const [isJobDescriptionEmpty, setIsJobDescriptionEmpty] = useState(false)

  useEffect(() => {
    /*eslint-disable */
    onValue(ref(getDatabase(), 'Jobs'), (data) => {
      if (!data.exists()) {
        dispatch(getJobs([]))
        setLoading(false)
        setIsListEmpty(true)
        return
      }
      setIsListEmpty(false)
      setLoading(true)
      dispatch(getJobs(data.val()))
      setLoading(false)
    })
  }, [])
  /*eslint-enable */
  // function handleOnClick() {
  //   if (jobs_ref.current.value !== '') {
  //     const id = generateId('Jobs')
  //     const job = {
  //       name: jobs_ref.current.value,
  //       active: true,
  //     }
  //     setIsEmpty(false)
  //     writeData('Jobs/' + id, job)
  //     alert('Job Added.')
  //     jobs_ref.current.value = ''
  //   } else {
  //     setIsEmpty(true)
  //   }
  // }

  function handleOnClick() {
    setIsJobNameEmpty(false)
    setIsJobDescriptionEmpty(false)
    if (jobs_ref.current.value === '') {
      setIsJobNameEmpty(true)
      return
    }
    if (job_description_ref.current.value === '') {
      setIsJobDescriptionEmpty(true)
      return
    }
    const id = generateId('Jobs')
    const job = {
      name: jobs_ref.current.value,
      job_description: job_description_ref.current.value,
      active: true,
    }
    setIsEmpty(false)
    writeData('Jobs/' + id, job)
    alert('Job Added.')
    jobs_ref.current.value = ''
    jobs_ref.current.focus()
    job_description_ref.current.value = ''
  }
  return !loading ? (
    <div className="container-fluid">
      <div className="container">
        <header className="display-4 text-center mt-3">Jobs</header>
        {isListEmpty && (
          <div className="alert alert-warning mt-5">No jobs:</div>
        )}

        <JobAddModal />

        <div className="card mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Job</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th scope="row"></th>
                <td>
                  <input
                    id="tbJob"
                    type="text"
                    className={
                      isEmpty ? 'form-control is-invalid' : 'form-control'
                    }
                    placeholder="Enter Job"
                    ref={jobs_ref}
                    aria-describedby="tbJobValidCheck"
                    required
                  />
                  <div id="tbJobValidCheck" class="invalid-feedback">
                    Please enter Job.
                  </div>
                </td>
                <td>
                  <div className="d-grid gap-2">
                    <button
                      type="button"
                      onClick={() => handleOnClick()}
                      className="btn btn-orange"
                    >
                      Add Job
                    </button>
                  </div>
                </td>
                <td>
                  <div className="d-grid gap-2"></div>
                </td>
              </tr> */}
              {Object.keys(jobs).map((element, index) => (
                <JobsTable
                  key={index}
                  index={index + 1}
                  id={element}
                  job={jobs[element]}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button
            type="button"
            className="btn btn-orange"
            data-bs-toggle="modal"
            data-bs-target="#Job_add_modal"
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}
export default Jobs
