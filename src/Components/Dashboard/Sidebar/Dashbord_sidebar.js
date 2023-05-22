import React, { useEffect, useState } from 'react'
import ErrorHandler from '../../Error/Errorhandler'
import EventEmitter from '../../../utils/emitter'
import SidebarItems from './Sidebar_item.json'
import { UseAuth } from '../../Auth/Auth_context'
const DasboardSideBar = () => {
  const [navItems, setNavItems] = useState(SidebarItems)
  const { Logout } = UseAuth()

  useEffect(() => {
    /*eslint-disable */
    ToggleNavItem(0)
  }, [])
  /*eslint-enable */
  async function ToggleNavItem(index) {
    try {
      if (navItems.items[index].component === 'Logout') {
        Logout()
      } else {
        const obj = { ...navItems }
        obj.activeItem = await navItems.items[index].name
        await setNavItems(obj)
        await EventEmitter.emit(
          'D_sidebar_item_e',
          navItems.items[index].component
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  function ActiveSelectedItem(index) {
    try {
      if (navItems.activeItem === navItems.items[index].name) {
        return ' dashboard-nav-item-active'
      }
      return ''
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {navItems != null ? (
        <>
          <header className="text-light lead font-weight-normal text-center pt-2 pb-2">
            Dashboard
          </header>
          <hr className="bg-light" />
          <div className="list-group">
            {navItems.items.map((element, index) => (
              <div
                key={index}
                onClick={() => ToggleNavItem(index)}
                className={
                  'dashboard-nav-item bg-dark list-group-item  rounded-0 border-0 text-white' +
                  ActiveSelectedItem(index)
                }
              >
                {element.name}
              </div>
            ))}
          </div>
        </>
      ) : (
        <ErrorHandler message={'Navigation is empty'} />
      )}
    </>
  )
}
export default DasboardSideBar
