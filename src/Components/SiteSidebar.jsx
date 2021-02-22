import React from "react";
import {
  PushpinFilled,
  SignalFilled,
  MailFilled,
  GoldenFilled,
  RedoOutlined,
} from "@ant-design/icons";

const SiteSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_content">
        <PushpinFilled />
        <SignalFilled />
        <MailFilled />
        <GoldenFilled />
        <RedoOutlined />
      </div>
    </div>
  );
};

export default SiteSidebar;
