import React, { useEffect, useState } from "react";
import { UseAuth } from "../Auth/Auth_context";
import { Menu } from "@mui/icons-material";
const nav_items = {
  activeItem: "",
  items: [
    {
      name: "HOME",
      address: "/home",
    },
    {
      name: "WHAT WE DO",
      address: "/what_we_do",
    },
    {
      name: "PRICING",
      address: "/pricing",
    },
    {
      name: "CONTACT US",
      address: "/contact_us",
    },
    {
      name: "BLOG",
      address: "/blog",
    },
    {
      name: "CAREERS",
      address: "/careers",
    },
    {
      name: "LOGIN",
      address: "/login",
    },
  ],
};
const nav_items2 = {
  activeItem: "",
  items: [
    {
      name: "HOME",
      address: "/home",
    },
    {
      name: "WHAT WE DO",
      address: "/what_we_do",
    },
    {
      name: "PRICING",
      address: "/pricing",
    },
    {
      name: "CONTACT US",
      address: "/contact_us",
    },
    {
      name: "BLOG",
      address: "/blog",
    },
    {
      name: "CAREERS",
      address: "/careers",
    },
    {
      name: "DASHBOARD",
      address: "/dashboard",
    },
  ],
};

const Navigation = () => {
  console.log(window.location.pathname);
  const [items, setItems] = useState(nav_items);
  const { currentUser } = UseAuth();
  useEffect(() => {
    if (currentUser) {
      setItems(nav_items2);
    } else {
      setItems(nav_items);
    }
  }, [currentUser]);
  function setActiveNav(name) {
    if (name === window.location.pathname) {
      return " actives";
    } else {
      return "";
    }
  }
  return (
    <nav className="nav-bar bg-orange">
      <div className="row d-flex justify-content-between flex-xl-row flex-column px-0 mx-0">
        <div className="nav-bar-brand-container col-xl-5 px-0 ">
          <div className="row px-0 mx-0">
            <div className="col-xl-7 bg-dark d-flex justify-content-between justify-content-xl-end">
              <img
                src="./img/Core Assist svg.svg"
                alt="coreassist"
                height="80"
              />

              <button
                className="btn btn-dark px-4 d-block d-xl-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navCollapse"
                aria-expanded="false"
                aria-controls="navCollapse"
              >
                <Menu color="white" fontSize="large" />
              </button>
            </div>
            <div className="slanted d-none d-xl-block"></div>
          </div>
        </div>

        <div
          id="navCollapse"
          className="collapse nav-bar-nav-container px-0 d-xl-block"
        >
          <ul className="nav-bar-nav d-flex flex-column flex-xl-row h-100 pe-0 ps-0">
            {items.items.map((element, index) => (
              <li
                key={index}
                className={
                  "nav-bar-item " + setActiveNav(items.items[index].address)
                }
              >
                <a
                  className="lead fs-6 fw-normal"
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
  );
};
export default Navigation;
