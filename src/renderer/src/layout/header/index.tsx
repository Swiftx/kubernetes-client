import { CloudServerOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, MenuProps, Row, Space } from 'antd';

import styles from './style.module.less';
import { useLocation } from 'react-router';
import { routes } from '@renderer/route';
import { useCluster } from '@renderer/hooks/cluster';
import { useMount } from 'ahooks';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const { pathname } = useLocation();
  const { current, contexts, reload, switchContext } = useCluster();
  useMount(reload);

  // 生成标题栏
  const route = routes.find(({ key }) => {
    if (`/${key}` == pathname) return true;
    if (pathname.startsWith(`/${key}/`)) return true;
    return false;
  });
  let title: string | ReactNode[] = route?.title || 'kubernetes';
  if (route?.items) {
    title = route.items.map(({ key, title }) => {
      const uri = `/${route.key}/${key}`;
      const type = pathname == uri ? 'primary' : 'default';
      return (
        <Link key={key} to={uri}>
          <Button size="small" type={type}>
            {title}
          </Button>
        </Link>
      );
    });
  }

  const items: MenuProps['items'] = contexts.map(({ name }) => ({
    label: name,
    key: name
  }));
  items.push(
    {
      type: 'divider'
    },
    {
      label: '编辑配置',
      key: 'edit'
    }
  );

  return (
    <Row gutter={0} className={styles.body}>
      <Col flex="200px" />
      <Col flex="auto">
        <Space className={styles.button}>{title}</Space>
      </Col>
      <Col flex="200px" className={styles.right}>
        <Space>
          <Dropdown
            menu={{ items, onClick: (item) => switchContext(item.key) }}
            placement="bottomRight"
          >
            <Button size="small" className={styles.button}>
              <CloudServerOutlined />
              <span>{current}</span>
              <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </Col>
    </Row>
  );
};
