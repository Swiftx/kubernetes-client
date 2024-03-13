import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { MemoryRouter, Route, Routes } from 'react-router';

import Slider from './layout/slider';
import Header from './layout/header';
import Window from './layout/window';

import { ClusterPage } from './pages/cluster';
import { NodePage } from './pages/node';
import { theme } from './theme';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MemoryRouter initialEntries={['/cluster']}>
      <ConfigProvider theme={theme}>
        <Window header={<Header />} slider={<Slider />}>
          <Routes>
            <Route path="cluster" element={<ClusterPage />}></Route>
            <Route path="node" element={<NodePage />}></Route>
          </Routes>
        </Window>
      </ConfigProvider>
    </MemoryRouter>
  </React.StrictMode>
);
