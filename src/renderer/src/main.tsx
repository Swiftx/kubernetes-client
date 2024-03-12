import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, Layout } from 'antd';

import SliderMenu from './components/slider';
import Header from './components/header';

import { MemoryRouter, Route, Routes } from 'react-router';
import { theme } from './theme';
import './main.css';
import { ClusterPage } from './pages/cluster';
import { NodePage } from './pages/node';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MemoryRouter initialEntries={['/cluster']}>
      <ConfigProvider theme={theme}>
        <Layout className="main">
          <Layout.Header className="header">
            <Header />
          </Layout.Header>
          <Layout>
            <Layout.Sider width={50} className="slider">
              <SliderMenu />
            </Layout.Sider>
            <Layout.Content className="content">
              <Routes>
                <Route path="cluster" element={<ClusterPage />}></Route>
                <Route path="node" element={<NodePage />}></Route>
              </Routes>
            </Layout.Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </MemoryRouter>
  </React.StrictMode>
);
