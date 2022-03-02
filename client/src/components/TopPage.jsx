import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import topPic from "../image/top-me-pic.jpg";

export const TopPage = () => {
  return (
    <>
      <div className="top-con">
        <div className="top-con-left ">
          <div className="top-con-left-location ">
            <MdOutlineLocationOn className="icon " />
            <h5 className="">Vancouver, BC</h5>
          </div>
          <div className="top-con-left-me ">
            <div className="top-con-left-me-active">
              <h1>Hi, I'm Erika </h1>
              <h2> &#60; Activity looking for a job &#62; </h2>
            </div>
            <h5>
              Full-stack web developer with experience in HTML/CSS and
              Javascript, currently in the process of completing my diploma.
              <br />
              <br /> My previous experience as an Airline engineer allowed me to
              gain troubleshooting and problem-solving skills to identify
              defects and improve reliability. I am motivated to continue
              learning and applying these skills working as part of a full-stack
              web developer team.
            </h5>
          </div>
          <div className="top-con-left-btn">
            <button className="btn btn-top">
              <a href="/project">Project</a>
            </button>
            <button className="btn btn-top">
              <a href="/about">About me</a>
            </button>
          </div>
        </div>

        <div className="top-con-right ">
          <div className="top-con-right-pic">
            <img src={topPic} alt="erika-pic"></img>
          </div>
        </div>

        <div className="top-con-attr">
          <a href="https://lovepik.com/images/png-botanical-lace.html">
            Botanical Lace Png vectors by Lovepik.com
          </a>
        </div>
      </div>
    </>
  );
};
