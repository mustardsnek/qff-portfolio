import React from "react";
import { SiTwitter, SiGithub, SiLinkedin, SiLivechat } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div
          className="m-4 shadow-lg text-white h2 text-center bg-black"
          style={{ width: "50px", height: "45px", maxWidth: "50px" }}
        >
          <Link
            to={"/"}
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Q
          </Link>
        </div>
      </div>
      <Link to="/about_me" style={{ textDecoration: "none" }}>
        <div className="h5 text-center mb-3 text-dark">About Me</div>
      </Link>
      <Link to="/examples" style={{ textDecoration: "none" }}>
        <div className="h5 text-center mb-3 text-dark">Examples</div>
      </Link>
      <Link to="/q_a" style={{ textDecoration: "none" }}>
        <div className="h5 text-center mb-3 text-dark">Q&A</div>
      </Link>

      <div className="row justify-content-center">
        <SiGithub className="h4 mt-3" />
        <SiLinkedin className="h4 mt-3" />
        <MdOutlineMail className="h4 mt-3" />
        <SiLivechat className="h4 mt-3 mb-3" />
      </div>

      <Link to="/submit_question" style={{ textDecoration: "none" }}>
        <div className="h5 text-center mb-3 text-dark">
          <RiAddFill />
          Question
        </div>
      </Link>
    </>
  );
};

export default Sidebar;
