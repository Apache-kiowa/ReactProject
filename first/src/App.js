import React, { useState } from 'react';

import {
  HomeOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginModal from './components/account/loginModal/loginModal';

import Registration from "./components/account/registration/registration";
import About from './components/About/about';
import Main from './components/main/main';
import Place from './components/place/place';


const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/" >Main</Link>, '1', <HomeOutlined />),
  getItem(<Link to="/place" >Place</Link>, '2', <PieChartOutlined />),
  getItem(<Link to="/about" >About service</Link>, '3', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem(<Link to="/login" >login</Link>, '4'),
    getItem(<Link  to='/regist'>register</Link>, '5'),
    
  ]),
  getItem('Error', 'sub2', <TeamOutlined />,),
];


const App = () => {
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content>
        
      <Routes>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/regist" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Main />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    
  );
};



export default App;