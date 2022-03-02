import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Burger from "./Burger";
import useWindowSize from "../tool/useWindowSize";
import { useOnClickOutside } from "../tool/useOnClickOutside";

const navigationMenu = [
  { name: "Projects", url: "/project", current: true },
  { name: "About", url: "/about", current: true },
  { name: "Contact me", url: "/contact", current: true },
];

const settingChanger = (location) => {
  let backgroundCol;
  let navHoverCol;
  switch (location.pathname) {
    case "/":
      backgroundCol = "nav-con-background-top";
      navHoverCol = "nav-hover-top";
      break;
    case "/project":
      backgroundCol = "nav-con-background-project";
      navHoverCol = "nav-hover-project";
      break;

    case "/about":
      backgroundCol = "nav-con-background-about";
      navHoverCol = "nav-hover-about";
      break;
    case "/contact":
      backgroundCol = "nav-con-background-contact";
      navHoverCol = "nav-hover-contact";
      break;
    default:
      backgroundCol = "nav-con-background-project";
      navHoverCol = "nav-hover-project";

      break;
  }
  return [backgroundCol, navHoverCol];
};

const bugerOpener = (open) => {

  return open ? "translateXOpen" : "translateXClose";
};

function Nav() {
  const [backgroundClass, setBackgroundClass] = useState();
  const [navHoverClass, setNavHoverClass] = useState();
  const [open, setOpen] = useState(false);
  const [burgerOpenClass, setBurgerOpenClass] = useState();
  let location = useLocation();
  const windowSize = useWindowSize();

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    setBackgroundClass(settingChanger(location)[0]);
    setNavHoverClass(settingChanger(location)[1]);
  }, [location]);

  useEffect(() => {
    setBurgerOpenClass(bugerOpener(open));
  }, [open]);

  return (
    <nav className={`nav-con ${backgroundClass}`}>
      <div className="nav-con-1 ">
        <a href="/" className={navHoverClass}>
          <h3>Erika Hashizume</h3>
        </a>
      </div>
      <div className="nav-con-2">
        {windowSize.width > 768 ? (
          <ul className="nav-con-2-ul">
            {navigationMenu.map((item) => (
              //   <li key={item.name}><a href={item.url}>{item.name}</a></li>
              <Link
                to={item.url}
                key={item.name}
                className={`nav-con-2-ul-link ${navHoverClass}`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        ) : (
          <Burger open={open} setOpen={setOpen} />
        )}
      </div>

      <div ref={node} className={`burgerNav ${burgerOpenClass}`}>
        <div className="burgerNav-ul">
          <Link
            to='/'
            key='home'
            className={`burgerNav-ul-link`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Home
          </Link>
          {navigationMenu.map((item) => (
            <Link
              to={item.url}
              key={item.name}
              className={`burgerNav-ul-link`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
