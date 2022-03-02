import React, { useState } from "react";

function ProjectAccordion({ bulletPoint }) {
  const [toggleActive, setToggleActive] = useState(false);

  const clickAccordion = () => {
    setToggleActive((pre) => !pre);
  };

  return (
    <>
      <div className="project-detail-right-accordion-indi">
        <button className={toggleActive ? "accordion active" : "accordion"} onClick={clickAccordion}>
          {bulletPoint.header}
        </button>
        {toggleActive && (
          <div className="panel">
            <p>{bulletPoint.content}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectAccordion;
