import React from "react";
import { Layout } from "antd";
import "../App.css";
import SiteSidebar from "./SiteSidebar";
import SiteHeader from "./SiteHeader";
import Page from "./Page";

const App = () => {
  const { Header, Content, Sider } = Layout;

  return (
    <Layout>
      <Sider width="50" theme="light">
        <SiteSidebar />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <SiteHeader />
        </Header>
        <Content>
          <Page />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
