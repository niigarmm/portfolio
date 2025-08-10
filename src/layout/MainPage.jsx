import React from "react";
import main from "../img/main.png";
import second from "../img/IMG_7694 (1).JPEG";
import one from "../img/1.png";
import two from "../img/2.png";
import gif from "../img/gif.gif";
import mcgif from "../img/mcgif.gif";
const MainPage = () => {
  return (
    <>
      <div className="main">
        <img className="main-img" src={main} alt="" />
        <div className="name">
          <h1 className="first">NIGAR'S</h1>
          <h1 className="sec">PORTFOLIO</h1>
        </div>
      </div>
      <div className="marquee-container">
        <p className="marquee-text">
          I started as a Frontend Developer and now I am growing in the field of
          accounting. For me, growth continues in both technology and the
          business world.
        </p>
      </div>
      <div className="about">
        <div className="left">
          <img src={second} alt="" />
        </div>
        <div className="right">
          <h1>About Me</h1>
          <p>
            I have a solid educational background in accounting, having
            completed my studies in this field and gaining a strong
            understanding of financial principles and practices. Eager to
            broaden my skillset, I pursued programming courses where I developed
            knowledge in software development, frontend technologies, and coding
            best practices. <br /> <br /> After gaining valuable experience and
            insights in programming, I chose to return to the accounting
            profession, motivated by my passion for finance and business. This
            unique combination of technical and financial expertise allows me to
            approach problems with a versatile mindset and adapt quickly to
            different challenges.
          </p>{" "}
          <br />
          <div style={{ display: "flex" }}>
            <div>
              <h1>Education</h1>
              <p>Azerbaijan State University of Economics</p>
              <p>Finance/Accounting</p>
              <p>2021-2025</p>
            </div>
            <img src="https://clipart-library.com/img/1702259.gif" alt="" style={{ width: "300px" }} />
          </div>
        </div>
      </div>
      <div className="experience">
        <div>
          <h1>Experience:</h1>
          <div style={{ display: "flex", gap: "40px" }}>
            <div className="ex-item">
              <div>
                <p style={{ fontWeight: "900", fontSize: "24px" }}>
                  McDonald’s restaurant chain
                </p>
                <p>2022 June - 2023 January</p>
              </div>
              <img src={mcgif} alt="" className="mcgif" />
            </div>
            <div className="ex-item">
              <div>
                <p style={{ fontWeight: "900", fontSize: "24px" }}>
                  Socar Fugro - <span>Accounting Intern</span>
                </p>
                <p>2025 May 01 - May 31</p>
              </div>
              <img
                src="https://lh5.googleusercontent.com/proxy/IU_CYhWVEtrfZpJ2HYCTWZTcrVqDaBW9-1A3tIQbfR69hQoVI2n43JlwpdrG12PSYsmlmBkjoK4IBdsVzGMYQbHnhMkf"
                alt=""
                className="mcgif"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/98dedb_d2e2bf575f7e48f6b208d69149b10a91~mv2.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="skill">
        <h1>Completed Courses</h1>
        <div className="skill-item">
          <div>
            <p style={{ fontWeight: "900", fontSize: "24px" }}>
              Matrix Academy
            </p>
            <p>Front-end Development</p>
            <img src={one} alt="" />
          </div>
          <div>
            <p style={{ fontWeight: "900", fontSize: "24px" }}>Bfc Academy</p>
            <p>English Language</p>
            <img src={two} alt="" />
          </div>
          <div style={{border:"none",marginLeft:"30px"}}>
            <img
              src="https://i.pinimg.com/originals/45/0c/24/450c24a5e30fc6b31c0919c5a8fcde56.gif"
              alt=""
              style={{ width: "500px",marginTop:"-20px"}}
            />
            <p style={{fontSize:"62px",marginLeft:"50px",fontWeight:"800"}}>to be continued</p>
          </div>
        </div>
      </div>
      <div className="know">
        <h1>Knowledge and Skill</h1>
      </div>
    </>
  );
};

export default MainPage;
