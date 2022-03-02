import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { IoLogoSass } from "react-icons/io";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import topPic from "../image/top-me-pic.jpg";
import useWindowSize from "../tool/useWindowSize";

export const About = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className="about-con ">
        <div className="about-con-top ">
            {windowSize.width < 768 && <h1>Erika Hashizume</h1>}
          <div className="about-con-top-resume ">
            <ul className="about-con-top-resume-linkCont ">
              <li>
                <a
                  href="https://www.linkedin.com/in/erika-hashizume-37295a153/"
                  target="_blank"
                  rel="noreferrer"
                  alt="linkdin"
                >
                  <BsLinkedin className="sns-icon linkdin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/erika-goodwin"
                  target="_blank"
                  rel="noreferrer"
                  alt="GitHub"
                >
                  <BsGithub className="sns-icon github" />
                </a>
              </li>
            </ul>
            <div className="about-con-top-resume-resumelink">
              <a
                href="https://drive.google.com/file/d/1As09ypqr_i5yOXXM-hAthQHbk1uJnHD4/viewusp=sharing"
                target="_blank"
                rel="noreferrer"
                alt="resume"
                className="btn-resume btn"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="about-con-below ">
          <div className="about-con-below-pic ">
            <div className="about-con-below-pic-absolute ">
              <div className="about-con-below-pic-absolute-picCont ">
                <a href="#" className="photo ">
                  <h2>
                    Erika <br /> Hashizume
                  </h2>
                  <img src={topPic} alt="erika-pic" className="" />
                  <div className="glow-wrap ">
                    <i className="glow"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="about-con-below-des">
            <div className="about-con-below-des-summary ">
              <h4>
                I am a Full-stack web developer with experience in HTML/CSS and
                Javascript, currently in the process of completing my diploma.
              </h4>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                officiis deleniti ratione cupiditate vitae asperiores nulla
                earum numquam facere exercitationem repudiandae, natus dolorum.
                Nulla minima quis voluptas dolorem aliquid Architecto. Ea,
                repudiandae temporibus consectetur possimus quis asperiores
                distinctio accusantium aliquid incidunt libero cumque maxime.
                Eveniet autem quo consectetur! Recusandae, delectus! Magnam,
                fugiat beatae quam deleniti molestiae harum cumque dolorem! Eos.
                Dolorum, harum aperiam aliquam doloribus consequatur, inventore
                modi odit officiis eum sunt expedita eaque. Impedit, facilis
                fugit rerum doloribus ipsam provident culpa nemo labore nobis,
                et optio Tempore, voluptas minus
              </p>
            </div>
            <div className="about-con-below-des-skill ">
              <h3>Technical Skill</h3>
              <div className="about-con-below-des-skill-con ">
                <div className="about-con-below-des-skill-con-con1">
                  <div className="Lang skill-logo">
                    <h4>Language</h4>
                    <div className="logoflexbox">
                      <ImHtmlFive className="logo ImHtmlFive" />
                      <ImCss3 className="logo ImCss3" />
                      <SiJavascript className="logo SiJavascript" />
                      <SiReact className="logo SiReact" />
                      <FaNodeJs className="logo FaNodeJs" />
                    </div>
                  </div>
                </div>
                <div className="about-con-below-des-skill-con-con2">
                  <div className="frame skill-logo">
                    <h4>Frameworks / Libraries</h4>
                    <div className="logoflexbox">
                      <IoLogoSass className="logo IoLogoSass" />
                      <SiTailwindcss className="logo SiTailwindcss" />
                      <SiBootstrap className="logo SiBootstrap" />
                      <SiRedux className="logo SiRedux" />
                      <SiExpress className="logo SiExpress" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-con-below-des-education ">
              <h3>Education/Experience</h3>
              <div className="about-con-below-des-education-con">
                <div className="grid">
                  <p>2021-prev</p>
                  <h5>Web and Mobile Application Development Diploma</h5>
                  <p>
                    - Cornerstone International Community College, Vancouver, BC
                  </p>
                  <p>2017-2021</p>
                  <h5>Airplane Mechanical Engineer</h5>
                  <p>- AIRDO Co., Ltd. ,Japan</p>
                  <p>2013-2017</p>
                  <h5>Bachelor’s degree in Aerospace Engineering</h5>
                  <p>- Muroran Institute of Technology, Japan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
