import React, { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import useWindowSize from "../../tool/useWindowSize";

export const ProjectPagePicture = ({ info, showModal }) => {
  const windowSize = useWindowSize();

  return (
    <>
      {windowSize.width > 768 ? (
        <div className="project-con-left-comp">
          {showModal ? (
            <img src={info.image[0].original} alt="projectImage" />
          ) : (
            <img
              src="/projectlist-image/nodeblogapp-pic1.png"
              alt="projectImage"
            />
          )}
          {showModal && <ProjectModal project={info} />}
        </div>
      ) : (
        <div className="mobile-project-con-pic ?">
          <img
            src="/projectlist-image/nodeblogapp-pic1.png"
            alt="projectImage"
          />
        </div>
      )}
    </>
  );
};
