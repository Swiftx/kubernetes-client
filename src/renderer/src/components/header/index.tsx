import { CloudServerOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, MenuProps, Row, Space } from 'antd';

import styles from './style.module.less';
import { useLocation } from 'react-router';
import { routes } from '@renderer/route';
import { useCluster } from '@renderer/hooks/cluster';
import { useMount } from 'ahooks';

export default () => {
  const { pathname } = useLocation();
  const route = routes.find(({ key }) => {
    if (`/${key}` == pathname) return true;
    if (pathname.startsWith(`/${key}/`)) return true;
    return false;
  });

  const { current, contexts, reload, switchContext } = useCluster();
  useMount(reload);

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
    <Row gutter={0}>
      <Col flex="200px" />
      <Col flex="auto">{route?.title}</Col>
      <Col flex="200px" className={styles.right}>
        <Space>
          <Dropdown
            menu={{ items, onClick: (item) => switchContext(item.key) }}
            placement="bottomRight"
          >
            <Button size="small" className={styles.selector}>
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
