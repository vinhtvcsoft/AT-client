/** @format */

import React, { useEffect } from "react";
import { Layout, Breadcrumb, Button } from "antd";
import { Outlet } from "react-router-dom";
import { SiderBar, HeaderBar } from "components";
import { getUser } from "services/api/user";
import createStyle from "./styles";

const MainPage = () => {
  const { styles } = createStyle();
  const { Content, Sider } = Layout;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout className={styles.pageWrapper}>
      <SiderBar />
      <Layout id={"rightLayout"}>
        <HeaderBar></HeaderBar>
        <Layout className={styles.pageContent}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainPage;
