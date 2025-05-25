import { GifOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';

export const SideMenu: React.FC = () => {
  return (
    <Menu
      mode="vertical"
      className={styles['side-menu']}
      items={sideMenuList.map((m) => ({
        label: m.title,
        key: m.title,
        icon: <GifOutlined />,
        children: m.subMenu.map((sm: any) => ({
          label: sm.title,
          key: sm.title,
          icon: <GifOutlined />,
          children: sm.subMenu.map((sms: any) => ({
            label: sms,
            key: sms,
            icon: <GifOutlined />,
          })),
        })),
      }))}
    />
  );
};
