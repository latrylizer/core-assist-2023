import React from 'react'
const Loading = () => {
  return (
    <div className="cotainer-fluid mr-0 ml-0 h-100 d-flex align-items-center justify-content-center bg-white">
      <div className="col-md-10 d-flex justify-content-center">
        <img
          className="image-loading"
          alt="loading"
          src="img/loading.gif"
        ></img>
      </div>
    </div>
  )
}

export default Loading
