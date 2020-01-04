import React from 'react';
import './functionBar.css'

import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components'
import logo from '../images/light.svg'

const Cookies = require('js-cookie');

const { Sider } = Layout;

const Logo = styled.div`
width: 100%;
background-image: url(${logo});
background-repeat: no-repeat;
background-position: center;
background-size: 60%;
height: 100px;
`;

const FunctionBar = ({ children, onChange }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Logo src={logo} />
        <Menu onSelect={({ key }) => { onChange(key) }} theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          <Menu.Item key="0">
            <Icon type="appstore" />
            <span className="nav-text">My Apps</span>
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Account</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="setting" />
            <span className="nav-text">Settings</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => {
            Cookies.set('token', null);
            window.location = '/login';
          }}>
            <Icon type="logout" />
            <span className="nav-text">Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ minWidth: '320px', paddingTop: '120px' }}>
        {children}
      </Layout>
    </Layout>
  );
}

export default FunctionBar;