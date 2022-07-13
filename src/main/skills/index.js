import React, { useState } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import JS from "./src/images/JavaScript-Logo.png";

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
  Languages: <img src={JS} alt="JS" />,
  Frameworks: <p>content2</p>,
  Tools: <p>content3</p>,
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
