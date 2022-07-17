import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="row justify-content-center m-4">
        <img src="ms.png" className="ms" alt="" />
      </div>
      <div className="row justify-content-center">
        <div className="display-5 col-1">Hello!</div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-7 m-3 about-me-text">
          <p>
            Welcome to my website. The goal behind this website is to impress
            upon you my skills and good character. It might also serve as a
            contact point and scheduling tool, depending on if I get around to
            coding it.
          </p>
          <p>
            My name is Jacoby, and I am a developer. I enjoy long walks on the
            beach, and Microsoft SQL Server.
          </p>
          <p>
            You can find my resume <a href="">here</a>. I built it in Microsoft
            Excel like a true professional and will modify it depending on who I
            am giving it to. Considering I don't exactly know who will be
            viewing <span style={{ fontStyle: "italic" }}>this</span> resume I
            have made it as generic as possible. It is highly likely that this
            resume will be outdated considering that to update it I will need to
            remember to FTP it onto whatever server is hosting this website. If
            you have recommendations on an easier way to do it, that doesn't
            involve Wordpress in anyway, please let me know <a href="">here</a>.
          </p>
          <p>
            Anyway, I do development. I learned some basic Python and Matlab in
            college but didn't start doing it professionally until after
            graduation. My first real programming project involved using SQL and
            Python to give users on a manufacturing floor a graphical
            representation of a product in a tray.
          </p>
          <p>
            Since then my professional projects have varied from simple text
            parsers and file ingestors, to complex statistical process control
            (SPC) web apps and enterprise resource management (ERP)
            enhancements.
          </p>
          <p>
            I've also developed a few bespoke websites (like this one) for
            personal curiosity as well as endeavors into the freelancing market.
          </p>
          <p>
            I enjoy programming, but I wouldn't say it's{" "}
            <span style={{ fontStyle: "italic" }}>why</span> I do development. I
            moreso enjoy the satisfaction of building customer relationships,
            and helping to solve actual problems.
          </p>
          <p>
            If you would like more detail about my experience, I would redirect
            you <a href="/examples">here</a>. Or feel free to contact me{" "}
            <a href="/examples">here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
