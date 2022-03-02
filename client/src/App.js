import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/app.scss";
import { TopPage } from "./components/TopPage";
import { Project } from "./components/Project/Project";
import { ProjectPage } from "./components/Project/ProjectPage";
import { About } from "./components/About";
import ContactMe from "./components/ContactMe";
import ProjectDetailPop from "./components/Project/ProjectDetailPop";


const backgroundChanger = (location) => {
  let backgroundPic;
  switch (location.pathname) {
    case "/":
      backgroundPic = "app-con-background-top";
      break;
    case "/project":
      backgroundPic = "app-con-background-project";
      break;
    case "/about":
      backgroundPic = "app-con-background-about";
      break;
    case "/contact":
      backgroundPic = "app-con-background-contact";
      break;
    default:
      break;
  }
  return backgroundPic;
};

export default function App() {
  const [backgroundClass, setBackgroundClass] = useState();
  let location = useLocation();

  useEffect(() => {
    setBackgroundClass(backgroundChanger(location));
  }, [location]);

  return (
    <>
      <div className={`app-con ${backgroundClass}`}>
  
        <Nav />
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/project" element={<Project />}>
            <Route path="" element={<ProjectPage />} />
            <Route path=":detailId" element={<ProjectDetailPop />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </>
  );
}
