import React from "react";
import { UnorderedListOutlined, DownloadOutlined, PrinterOutlined, QuestionCircleOutlined,LogoutOutlined } from '@ant-design/icons'

const SiteHeader = () => {
    return(
             <div className="header_title">
                 <h1>Diagnostic Tool</h1>
                 <div className="header_icons">
                     Logged in as a General User
                     <span>| <UnorderedListOutlined /></span>
                     <span><DownloadOutlined /></span>
                     <span><PrinterOutlined /></span>
                     <span><QuestionCircleOutlined /></span>
                     <span><LogoutOutlined /></span>
                 </div>
             </div>
    );
}

export default SiteHeader;