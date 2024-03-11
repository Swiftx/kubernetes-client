import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Row } from 'antd';

import styles from './style.module.less';
import { useLocation } from 'react-router';

export default () => {
  const path = useLocation();
  return (
    <Row gutter={0}>
      <Col flex="100px" />
      <Col flex="auto">{path.pathname}</Col>
      <Col flex="100px" className={styles.right}>
        <Avatar size={20} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Col>
    </Row>
  );
};
