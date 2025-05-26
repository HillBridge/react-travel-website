import { GlobalOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Input, Layout, Menu, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useDispatch, useSelector } from '../../store/hooks';
import { setLanguage } from '../../store/storeSlice/languageSlice';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);
  const languageList = useSelector((state) => state.language.list);
  const handleLanguageChange: MenuProps['onClick'] = (e: any) => {
    if (e.key === 'zh') {
      dispatch(setLanguage('zh'));
    } else {
      dispatch(setLanguage('en'));
    }
  };
  return (
    <>
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text className={styles.slogan}>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            menu={{
              items: languageList.map((item) => ({
                key: item.code,
                label: item.name,
              })),
              onClick: handleLanguageChange,
            }}
            icon={<GlobalOutlined />}
          >
            {language}
          </Dropdown.Button>
          <Space.Compact className={styles['button-group']}>
            <Button onClick={() => navigate('/register')}>注册</Button>
            <Button onClick={() => navigate('/signIn')}>登陆</Button>
          </Space.Compact>
        </div>
      </div>
      <div className={styles['app-header']}>
        <Layout.Header className={styles['main-header']}>
          <span onClick={() => navigate('/')}>
            <img src={logo} alt="logo" className={styles['App-logo']} />
            <Typography.Title level={3} className={styles.title}>
              慕课旅游网
            </Typography.Title>
          </span>
          <Input.Search
            placeholder="请输入旅游目的地、主题、或关键字"
            className={styles['search-input']}
          />
        </Layout.Header>
        <Menu
          mode={'horizontal'}
          className={styles['main-menu']}
          items={[
            { key: '1', label: '旅游首页' },
            { key: '2', label: '周末游' },
            { key: '3', label: '跟团游' },
            { key: '4', label: '自由行' },
            { key: '5', label: '私家团' },
            { key: '6', label: '邮轮' },
            { key: '7', label: '酒店+景点' },
            { key: '8', label: '当地玩乐' },
            { key: '9', label: '主题游' },
            { key: '10', label: '定制游' },
            { key: '11', label: '游学' },
            { key: '12', label: '签证' },
            { key: '13', label: '企业游' },
            { key: '14', label: '高端游' },
            { key: '15', label: '爱玩户外' },
            { key: '16', label: '保险' },
          ]}
        />
      </div>
    </>
  );
};
