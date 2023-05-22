import React from 'react'
import DasboardSideBar from './Sidebar/Dashbord_sidebar'
import DashBoardMain from './Main/Dashboard_main'
const Dashboard = () => {
  return (
    <>
      <div className="row bg-light mx-0" style={{ height: '100vh' }}>
        <div className="col-md-2 m-0 p-0 bg-dark">
          <DasboardSideBar />
        </div>
        <div className="col-md-10  mx-0 px-0">
          <DashBoardMain />
        </div>
      </div>
    </>
  )
}
export default Dashboard
