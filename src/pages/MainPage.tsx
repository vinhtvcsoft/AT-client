/** @format */

import React from 'react';
import { Layout, Breadcrumb, Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { SiderBar } from 'components';

const MainPage = () => {
  const { Header, Content, Sider } = Layout;
  const navigate = useNavigate();

  return (
    <Layout>
      <Layout>
        <SiderBar></SiderBar>
        <Layout style={{}}>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className='demo-logo' />
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
          </Header>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Button>Button Text</Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainPage;
