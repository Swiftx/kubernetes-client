import { Layout } from 'antd';
import { ReactNode } from 'react';
import styles from './style.module.less';

export interface WindowProps {
  children?: ReactNode;
  header?: ReactNode;
  slider?: ReactNode;
}

export default (props: WindowProps) => (
  <Layout className={styles.main}>
    <Layout.Header className={styles.header}>{props.header}</Layout.Header>
    <Layout>
      <Layout.Sider width={50} className={styles.slider}>
        {props.slider}
      </Layout.Sider>
      <Layout.Content className={styles.content}>{props.children}</Layout.Content>
    </Layout>
  </Layout>
);
