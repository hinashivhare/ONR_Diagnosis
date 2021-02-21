import React from 'react';
import { PushpinFilled, SignalFilled, MailFilled, GoldenFilled, RedoOutlined}  from '@ant-design/icons';

const SiteSidebar = () => {
    return(
       <div className="sidebar">
          <div className="sidebar_content">
              <p><PushpinFilled/></p>
              <p><SignalFilled /></p>
              <p><MailFilled /></p>
              <p><GoldenFilled /></p>
              <p><RedoOutlined /></p>
          </div>
       </div>
    );
}

export default SiteSidebar;