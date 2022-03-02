import React from "react";
import { ProjectPagePicture } from "./ProjectPagePicture";
import { ProjectPageProjectList } from "./ProjectPageProjectList";
import { Link } from "react-router-dom";
import { ImDatabase } from "react-icons/im";

function MobileProjectList({ data, info, showModal, onHover, onLeave }) {
  const tag = data.LangTag;

  return (
    <Link to={`/project/${data._id}`} className="mobile-project">
      <div
        className="mobile-project-con"
        onMouseEnter={() => onHover(data._id)}
        onClick={() => onHover(data._id)}
        onMouseLeave={() => onLeave()}
      >
        <h1>{data.title}</h1>
        <h4>{data.summary}</h4>
        <div className="mobile-project-con-tag">
          <ul>
            {tag?.map((tag) => (
              <li>
                <p>{tag}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-project-con-deslink-con">
          <p className="mobile-project-con-deslink-con-description ">
            {data.description}
          </p>
        </div>
        {data && <ProjectPagePicture info={data} />}
      </div>
    </Link>
  );
}

export default MobileProjectList;
