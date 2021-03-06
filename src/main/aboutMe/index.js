import React from "react";
import "./index.css";
import "antd/dist/antd.min.css";
import { Divider } from "antd";

function AboutMe() {
  return (
    <div>
      <div className="AboutMe">
        <div className="AboutMeitems">
          <Divider
            id="AboutMeTitle"
            orientation="left"
            style={{ borderColor: "Black" }}
            orientationMargin="0"
          >
            ABOUT ME
          </Divider>
          <div id="AboutBox">
            <div id="BoxText">
              <p className="intro">Welcome to MAKERSPACE J.L!</p>
              <p className="AboutText">
                My name is Jenny Lee, I am a Computer Engineering student
                <br />
                at University of Waterloo located in Waterloo, Ontario.
                <br />
                I have created this blog to share my projects and thoughts on
                <br />
                different topics related to technology. Just like how this blog
                is
                <br />
                named, I would like this blog to be a place where I can freely
                try
                <br />
                different projects and interact with viewer to get inspired!
                <br />
                So, feel free to leave a comment and share your throught on my
                project!
                <br />
                Welcome! And have Fun!
              </p>
            </div>
            <img
              id="ProfilePic"
              src={process.env.PUBLIC_URL + "/images/mockprofile.jpg"}
              height="270"
            />
          </div>

          <Divider
            id="SkillsTitle"
            orientation="left"
            style={{ borderColor: "Black" }}
            orientationMargin="0"
          >
            SKILLS
          </Divider>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default AboutMe;
