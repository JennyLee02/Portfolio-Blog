import React, { useState } from "react";
import "./index.css";
import "antd/dist/antd.min.css";
import { Card } from "antd";

const tabList = [
  {
    key: "Languages",
    tab: "Languages",
  },
  {
    key: "Frameworks",
    tab: "Frameworks",
  },
  {
    key: "Tools",
    tab: "Tools",
  },
];
const contentList = {
  Languages: (
    <div className="Languages">
      <img
        src={process.env.PUBLIC_URL + "/images/htmlLogo.png"}
        width="100"
        alt="HTML"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/cssLogo.png"}
        width="72"
        alt="CSS"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/JavaScript-Logo.png"}
        width="98"
        alt="JS"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/Python-Symbol.png"}
        width="110"
        alt="Python"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/C++Logo.png"}
        width="85"
        alt="C++"
      />
    </div>
  ),
  Frameworks: (
    <div className="Frameworks">
      <img
        src={process.env.PUBLIC_URL + "/images/nodeLogo.png"}
        height="90"
        alt="NodeJS"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/reactlogo.png"}
        width="110"
        alt="React"
      />
      <img
        id="express"
        src={process.env.PUBLIC_URL + "/images/expressLogo.png"}
        height="60"
        alt="Express"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/antdLogo.png"}
        width="100"
        alt="Antd"
      />
    </div>
  ),
  Tools: (
    <div className="Tools">
      <img
        src={process.env.PUBLIC_URL + "/images/VSCodeLogo.png"}
        height="95"
        alt="VSCode"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/vSLogo.png"}
        height="100"
        alt="VS"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/pycharmLogo.png"}
        width="100"
        alt="pycharm"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/PSLogo.png"}
        height="100"
        alt="PS"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/blender3dLogo.png"}
        width="110"
        alt="blender3d"
      />
    </div>
  ),
};

const Skills = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("Languages");

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <>
      <div id="skillsCard">
        <Card
          style={{
            width: "100%",
            height: "200px",
          }}
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={(key) => {
            onTab1Change(key);
          }}
        >
          {contentList[activeTabKey1]}
        </Card>
      </div>
    </>
  );
};

export default Skills;
