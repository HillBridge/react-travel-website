import { GlobalOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Input, Layout, Menu, Space, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useDispatch, useSelector } from '../../store/hooks';
import { setLanguage } from '../../store/storeSlice/languageSlice';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(['header', 'common']);
  const language = useSelector((state) => state.language.value);
  const languageList = useSelector((state) => state.language.list);
  const handleLanguageChange: MenuProps['onClick'] = (e: any) => {
    if (e.key === 'zh') {
      dispatch(setLanguage('zh'));
      i18n.changeLanguage('zh');
    } else {
      dispatch(setLanguage('en'));
      i18n.changeLanguage('en');
    }
  };
  return (
    <>
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text className={styles.slogan}>{t('header:slogan')}</Typography.Text>
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
            <Button onClick={() => navigate('/register')}>{t('common:register')}</Button>
            <Button onClick={() => navigate('/signIn')}>{t('common:signIn')}</Button>
          </Space.Compact>
        </div>
      </div>
      <div className={styles['app-header']}>
        <Layout.Header className={styles['main-header']}>
          <span onClick={() => navigate('/')}>
            <img src={logo} alt="logo" className={styles['App-logo']} />
            <Typography.Title level={3} className={styles.title}>
              {t('header:title')}
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
            { key: '1', label: t('header:home_page') },
            { key: '2', label: t('header:weekend') },
            { key: '3', label: t('header:group') },
            { key: '4', label: t('header:backpack') },
            { key: '5', label: t('header:private') },
            { key: '6', label: t('header:cruise') },
            { key: '7', label: t('header:hotel') },
            { key: '8', label: t('header:local') },
            { key: '9', label: t('header:theme') },
            { key: '10', label: t('header:custom') },
            { key: '11', label: t('header:study') },
            { key: '12', label: t('header:visa') },
            { key: '13', label: t('header:enterprise') },
            { key: '14', label: t('header:high_end') },
            { key: '15', label: t('header:outdoor') },
            { key: '16', label: t('header:insurance') },
          ]}
        />
      </div>
    </>
  );
};
