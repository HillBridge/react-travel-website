import { Layout, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { t } = useTranslation('footer');
  return (
    <div className={styles.footer}>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          {t('detail')}
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
};
