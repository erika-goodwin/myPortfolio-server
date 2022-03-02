import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectAccordion from "./ProjectAccordion";
import ProjectImageGallery from "./ProjectImageGallery";
import { BsGithub } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import useWindowSize from "../../tool/useWindowSize";

function ProjectDetailPop() {
  let { detailId } = useParams();
  const [projectData, setProjectData] = useState([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    fetch("http://localhost:3001/api/projects")
      .then((res) => res.json())
      .then((res) => {
        const selectedProject = res.find((project) => project._id === detailId);

        setProjectData(selectedProject);
      })
      // .then((res) => dispatch(res))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <>
      <div className="project-detail ">
        {windowSize.width > 768 && (
          <div className="project-detail-left ">
            {projectData && (
              <ProjectImageGallery imageData={projectData.image} />
            )}
          </div>
        )}

        <div className="project-detail-right ">
          <div className="project-detail-right-titleLink ">
            <h1>{projectData.title}</h1>
            <div className="project-detail-right-titleLink-link ">
              <ul>
                <li>
                  <a
                    href={projectData.deployedUrl}
                    target="_blank"
                    rel="noreferrer"
                    alt="homepage"
                  >
                    <ImEarth className="sns-icon earth" />
                  </a>
                </li>
                <li>
                  <a
                    href={projectData.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    alt="GitHub"
                  >
                    <BsGithub className="sns-icon github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h4 className="">{projectData.summary}</h4>

          <div className="project-detail-right-tag ">
            <ul>
              {projectData.LangTag.map((tag) => (
                <li>
                  <p>{tag}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="project-detail-right-desc ">
            {projectData.description}
          </p>

          {windowSize.width <= 768 && (
            <div className="project-detail-right-img ">
              {projectData && (
                <ProjectImageGallery imageData={projectData.image} />
              )}
            </div>
          )}

          <div className="project-detail-right-accordion">
            {projectData.bulletPoint.map((point) => (
              <ProjectAccordion
                bulletPoint={point}
                key={projectData.bulletPoint._id}
              />
            ))}
            {/* <ProjectAccordion /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailPop;
