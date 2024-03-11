import {
  AppstoreAddOutlined,
  BarsOutlined,
  BlockOutlined,
  ClockCircleOutlined,
  ClusterOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  GlobalOutlined,
  KubernetesOutlined,
  SafetyOutlined
} from '@ant-design/icons';
import { ReactNode } from 'react';

export const routes: {
  key: string;
  title: string;
  icon: ReactNode;
}[] = [
  {
    key: 'cluster',
    title: '集群',
    icon: <KubernetesOutlined />
  },
  {
    key: 'node',
    title: '节点',
    icon: <ClusterOutlined />
  },
  {
    key: 'namespace',
    title: '命名空间',
    icon: <BlockOutlined />
  },
  {
    key: 'workloads',
    title: '工作负载',
    icon: <DeploymentUnitOutlined />
  },
  {
    key: 'network',
    title: '网络',
    icon: <GlobalOutlined />
  },
  {
    key: 'volume',
    title: '存储',
    icon: <DatabaseOutlined />
  },
  {
    key: 'config',
    title: '配置管理',
    icon: <BarsOutlined />
  },
  {
    key: 'access',
    title: '访问控制',
    icon: <SafetyOutlined />
  },
  {
    key: 'event',
    title: '事件',
    icon: <ClockCircleOutlined />
  },
  {
    key: 'crd',
    title: '扩展',
    icon: <AppstoreAddOutlined />
  }
];
