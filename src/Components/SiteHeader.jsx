import React from "react";
import {
  UnorderedListOutlined,
  DownloadOutlined,
  PrinterOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const SiteHeader = () => {
  return (
    <div className="header_title">
      <h1>Diagnostic Tool</h1>
      <div className="header_actions">
        <div className="text">Logged in as a General User</div>
        <UnorderedListOutlined />
        <DownloadOutlined />
        <PrinterOutlined />
        <QuestionCircleOutlined />
        <LogoutOutlined />
      </div>
    </div>
  );
};

export default SiteHeader;
