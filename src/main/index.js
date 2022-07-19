import "./index.css";
import AboutMe from "./aboutMe/index.js";
import Skills from "./skills/index.js";
import header from "./header/index.js";
import "antd/dist/antd.min.css";

function MainPage() {
  return (
    <div>
      <div>
        <Header />
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
