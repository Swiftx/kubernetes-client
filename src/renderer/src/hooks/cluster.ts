import { Cluster, Context, User } from '@kubernetes/client-node';
import { useState } from 'react';

export const useCluster = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [contexts, setContexts] = useState<Context[]>([]);
  const [current, setCurrent] = useState<string>();
  const [loading, setLoading] = useState(false);

  // 重载数据
  const reload = async () => {
    setLoading(true);
    setUsers([]);
    setClusters([]);
    setContexts([
      {
        cluster: 'docker-desktop',
        user: 'docker-desktop',
        name: 'docker-desktop'
      },
      {
        cluster: 'hermes-boot',
        user: 'hermes-boot',
        name: 'hermes-boot'
      },
      {
        cluster: 'oday-me',
        user: 'oday-me',
        name: 'oday-me'
      },
      {
        cluster: 'zixun-test',
        user: 'zixun-test',
        name: 'zixun-test'
      }
    ]);
    setCurrent('docker-desktop');
    setLoading(false);
  };

  // 切换上下文
  const switchContext = async (context: string) => {
    if (context == current) return;
    setCurrent(context);
  };

  return {
    users,
    clusters,
    contexts,
    current,
    reload,
    switchContext,
    loading
  };
};
