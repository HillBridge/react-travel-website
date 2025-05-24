import { Layout, Typography } from 'antd';
import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          版权所有 @ React 旅游网
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
};
