import React, { useEffect, useState } from 'react'
import { UseAuth } from '../Auth/Auth_context'
const nav_items = {
  activeItem: '',
  items: [
    {
      name: 'HOME',
      address: '/home',
    },
    {
      name: 'WHAT WE DO',
      address: '/what_we_do',
    },
    {
      name: 'PRICING',
      address: '/pricing',
    },
    {
      name: 'CONTACT US',
      address: '/contact_us',
    },
    {
      name: 'CAREERS',
      address: '/careers',
    },
    {
      name: 'LOGIN',
      address: '/login',
    },
  ],
}
const nav_items2 = {
  activeItem: '',
  items: [
    {
      name: 'HOME',
      address: '/home',
    },
    {
      name: 'WHAT WE DO',
      address: '/what_we_do',
    },
    {
      name: 'PRICING',
      address: '/pricing',
    },
    {
      name: 'CONTACT US',
      address: '/contact_us',
    },
    {
      name: 'CAREERS',
      address: '/careers',
    },
    {
      name: 'DASHBOARD',
      address: '/dashboard',
    },
  ],
}

const Navigation = () => {
  console.log(window.location.pathname)
  const [items, setItems] = useState(nav_items)
  const { currentUser } = UseAuth()
  useEffect(() => {
    if (currentUser) {
      setItems(nav_items2)
    } else {
      setItems(nav_items)
    }
  }, [currentUser])
  function setActiveNav(name) {
    if (name === window.location.pathname) {
      return ' actives'
    } else {
      return ''
    }
  }
  return (
    <nav className="nav-bar bg-orange">
      <div className="row d-flex justify-content-between px-0 mx-0">
        <div className="nav-bar-brand-container col-md-5 px-0">
          <div className="row px-0 mx-0">
            <div className="col-md-7 bg-dark d-flex justify-content-md-end ps-5 pe-0">
              <img
                src="./img/Core Assist svg.svg"
                alt="coreassist"
                height="80"
              />
            </div>
            <div className="slanted"></div>
          </div>
        </div>
        <div className="nav-bar-nav-container col-md-4 px-0">
          <ul className="nav-bar-nav d-flex h-100 pe-0 ps-0">
            {items.items.map((element, index) => (
              <li
                key={index}
                className={
                  'nav-bar-item' + setActiveNav(items.items[index].address)
                }
              >
                <a
                  className="lead font-weight-normal"
                  href={items.items[index].address}
                >
                  {items.items[index].name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation
