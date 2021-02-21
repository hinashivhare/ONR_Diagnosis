import React from 'react';
import {Layout} from "antd";
import "../App.css"
import SiteSidebar from "./SiteSidebar";
import SiteHeader from "./SiteHeader";
import Page from "./Page";


const App = () => {
    const { Header, Content, Footer, Sider } = Layout;

    return (
    <Layout>
        <Sider
            width="50"
            theme="light"
        >
            <SiteSidebar/>
            <div className="logo" />
        </Sider>
        <Layout>
            <Header
                className="site-layout-sub-header-background"
                style={{ padding: 0 }}
            >
                <div className="site_header">
                    <SiteHeader/>
                </div>
             </Header>
            <Content>
                <div className="page_content">
                   <Page/>
                </div>
            </Content>
        </Layout>
    </Layout>
    );
}

export default App;