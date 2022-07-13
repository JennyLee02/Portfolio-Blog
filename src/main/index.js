import "./index.css";
import AboutMe from "./aboutMe/index.js";
import "antd/dist/antd.css";

function MainPage() {
  return (
    <div>
      <div>
        <div id="header">
          <div id="Logo">MakerSpace J.L.</div>
          <div className="button">Projects</div>
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
    </div>
  );
}

export default MainPage;
