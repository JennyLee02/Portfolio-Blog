import "./index.css";
import AboutMe from "./aboutMe/index.js";
import Skills from "./skills/index.js";
import "antd/dist/antd.min.css";

function MainPage() {
  return (
    <div>
      <div>
        <div id="header">
          <div id="Logo">MAKERSPACE J.L.</div>
          <div className="button">Project</div>
          <div className="button">Log</div>
          <div className="button">Career</div>
          <div className="button">Contact</div>
        </div>
        <div id="body">
          <div id="banner">
            <img src="images/PB-Bannercp.jpg" alt="" />
          </div>
        </div>
      </div>
      <AboutMe />
      <Skills />
    </div>
  );
}

export default MainPage;
