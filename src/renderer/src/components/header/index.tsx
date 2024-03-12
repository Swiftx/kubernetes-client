import { CloudServerOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, MenuProps, Row, Space } from 'antd';

import styles from './style.module.less';
import { useLocation } from 'react-router';

const items: MenuProps['items'] = [
  {
    label: 'docker-desktop',
    key: 'docker-desktop'
  },
  {
    label: 'hermes-boot',
    key: 'hermes-boot'
  },
  {
    label: 'oday-me',
    key: 'oday-me'
  },
  {
    label: 'zixun-test',
    key: 'zixun-test'
  },
  {
    type: 'divider'
  },
  {
    label: '编辑配置',
    key: 'edit'
  }
];

export default () => {
  const path = useLocation();
  return (
    <Row gutter={0}>
      <Col flex="200px" />
      <Col flex="auto">{path.pathname}</Col>
      <Col flex="200px" className={styles.right}>
        <Space>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button size="small" className={styles.selector}>
              <CloudServerOutlined />
              <span>docker-desktop</span>
              <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </Col>
    </Row>
  );
};
