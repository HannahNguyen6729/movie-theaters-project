import React from "react";
import { Tabs } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

export default function HomeMenu() {
  const [tabPosition, setTabPosition] = useState("left");

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div className="container mx-auto px-5 ">
      <Tabs tabPosition={tabPosition}>
        <TabPane tab={<div className="">
            <p>Location 1</p>
            <img src="https://picsum.photos/200" alt="img1" className="rounded-full w-24" />
        </div>} key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab={<div className="">
            <p>Location 1</p>
            <img src="https://picsum.photos/200" alt="img1" className="rounded-full w-24" />
        </div>} key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab={<div className="">
            <p>Location 1</p>
            <img src="https://picsum.photos/200" alt="img1" className="rounded-full w-24" />
        </div>} key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
