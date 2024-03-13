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
  items?: {
    key: string;
    title: string;
  }[];
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
    icon: <DeploymentUnitOutlined />,
    items: [
      {
        key: 'process',
        title: '进程'
      },
      {
        key: 'job',
        title: '任务'
      },
      {
        key: 'pod',
        title: '容器'
      }
    ]
  },
  {
    key: 'network',
    title: '网络',
    icon: <GlobalOutlined />,
    items: [
      {
        key: 'servic',
        title: '服务'
      },
      {
        key: 'ingress',
        title: '路由'
      }
    ]
  },
  {
    key: 'volume',
    title: '存储',
    icon: <DatabaseOutlined />,
    items: [
      {
        key: 'pvc',
        title: '存储声明'
      },
      {
        key: 'pv',
        title: '存储卷'
      },
      {
        key: 'storage-class',
        title: '存储类'
      }
    ]
  },
  {
    key: 'config',
    title: '配置管理',
    icon: <BarsOutlined />,
    items: [
      {
        key: 'map',
        title: '环境配置'
      },
      {
        key: 'priority-class',
        title: '权重策略'
      }
    ]
  },
  {
    key: 'access',
    title: '访问控制',
    icon: <SafetyOutlined />,
    items: [
      {
        key: 'service-account',
        title: '服务账户'
      },
      {
        key: 'cluster-role',
        title: '集群角色'
      },
      {
        key: 'role',
        title: '角色'
      }
    ]
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
