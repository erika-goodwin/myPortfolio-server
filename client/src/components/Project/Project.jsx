import React from "react";
import { Outlet } from "react-router-dom";

export const Project = () => {
  return (
    <>
      <div className="project-con">
        <Outlet />
      </div>
    </>
  );
};
