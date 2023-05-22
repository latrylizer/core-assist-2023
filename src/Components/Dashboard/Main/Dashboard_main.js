import React, { useEffect, useRef, useState } from 'react'
import EventEmitter from '../../../utils/emitter'
import Jobs from './Items/Jobs'
import Applicants from './Items/Applicants'
import Accounts from './Items/Accounts'
import Logout from './Items/Logout'
import SidebarItem from '../Sidebar/Sidebar_item.json'
const DashBoardMain = () => {
  const [component, setComponent] = useState('')
  const sidebarItems = useRef()
  sidebarItems.current = SidebarItem
  useEffect(() => {
    const listener = EventEmitter.addListener(
      'D_sidebar_item_e',
      (data) => {
        for (var index in SidebarItem.items) {
          if (data === sidebarItems.current.items[index].component) {
            return setComponent(data)
          }
        }
        return ''
      },
      false
    )
    return () => listener.remove()
  })
  return (
    <>
      {component === 'Jobs' ? <Jobs /> : <div />}
      {component === 'Applicants' ? <Applicants /> : <div />}
      {component === 'Accounts' ? <Accounts /> : <div />}
      {component === 'Logout' ? <Logout /> : <div />}
    </>
  )
}
export default DashBoardMain
