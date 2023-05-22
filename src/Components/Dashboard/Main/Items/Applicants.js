import React, { useEffect, useState } from 'react'
import ApplicantModalForm from './Applicants/Applicant_modal_form'
import { getDatabase, ref, onValue } from 'firebase/database'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicant } from '../../../../Redux/Reducers/applicants'
import Loading from '../../../loading'
import ApplicantDeleteModal from './Applicants/Applicant_delete_modal'
const Applicants = () => {
  const dispatch = useDispatch()
  const datas = useSelector((state) => state.Collections.Applicants.payload)
  const [loading, setLoading] = useState(true)
  let applicantArr = []
  const [localData, setLocalData] = useState([])
  const [isListEmpty, setIsListempty] = useState(false)

  useEffect(() => {
    /*eslint-disable */
    onValue(ref(getDatabase(), 'Applicant'), (data) => {
      //let arr = []
      const obj = data.val()
      if (!data.exists()) {
        dispatch(getApplicant([]))
        setLoading(false)
        setIsListempty(true)
        return
      }

      const keys = Object.keys(obj)
      // const entry = Object.entries(obj).sort((a, b) => {
      //   let lnA = a[1]['last_name']
      //   let lnB = b[1]['last_name']

      //   if (lnA < lnB) {
      //     return -1
      //   }
      //   if (lnA > lnB) {
      //     return 1
      //   }
      //   return 0
      // })
      applicantArr = Object.entries(obj)
      const singleObj = obj[keys[1]]

      dispatch(getApplicant(applicantArr))
      setLoading(false)
      setIsListempty(false)
    })

    return
  }, [])
  useEffect(() => {
    setLocalData(datas)
  }, [datas])

  /*eslint-enable */
  function sortText(columnName) {
    let oldData = [...localData]

    oldData.sort((a, b) => {
      let lnA = a[1][columnName]
      let lnB = b[1][columnName]

      if (lnA < lnB) {
        return -1
      }
      if (lnA > lnB) {
        return 1
      }
      return 0
    })
    dispatch(getApplicant(oldData))
  }

  function formatDate(timestamp) {
    if (timestamp) {
      const options = { year: 'numeric', month: '2-digit', day: 'numeric' }
      return new Date(timestamp).toLocaleDateString(undefined, options)
    }
    return ''
  }

  return !loading ? (
    <div
      className="container-fluid overflow-auto"
      style={{ maxHeight: '100vh' }}
    >
      <div className="container">
        <header className="display-4 text-center mt-3">Applicants</header>
        {isListEmpty && (
          <div className="alert alert-warning mt-3" role="alert">
            No Applicants
          </div>
        )}
        <div className="card mt-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" onClick={() => sortText('first_name')}>
                  First Name
                </th>
                <th scope="col" onClick={() => sortText('last_name')}>
                  Last Name
                </th>
                <th scope="col" onClick={() => sortText('position')}>
                  Position Applied
                </th>
                <th scope="col">Submission Date</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {datas &&
                datas.map((element, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{element[1].first_name}</td>
                    <td>{element[1].last_name}</td>
                    <td>{element[1].position}</td>
                    <td>{formatDate(element[1].submission_date)}</td>
                    <td>
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-orange btn-block"
                          data-bs-toggle="modal"
                          data-bs-target={'#' + element[0]}
                        >
                          View
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-orange btn-block"
                          data-bs-toggle="modal"
                          data-bs-target={'#delete_' + element[0]}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <ApplicantModalForm
                      index={element[0]}
                      key={element[0] + 'ViewModal'}
                      applicant={element[1]}
                    />
                    <ApplicantDeleteModal
                      id={element[0]}
                      key={element[0] + 'DeleteModal'}
                      index={'delete_' + element[0]}
                    />
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}
export default Applicants
