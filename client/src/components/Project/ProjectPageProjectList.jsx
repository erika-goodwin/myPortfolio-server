import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProjectPageProjectList = ({ project, onLeave, onHover }) => {
  return (
    <div
      className="project-con-right-list-each"
      onMouseEnter={() => onHover(project._id)}
      onMouseLeave={() => onLeave()}
    >
      <Link to={`/project/${project._id}`}>{project.title}</Link>
      <hr />
    </div>
  );
};
