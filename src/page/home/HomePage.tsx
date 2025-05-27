import { Col, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import {
  BusinessPartners,
  Carousel,
  Footer,
  Header,
  ProductCollection,
  SideMenu,
} from '../../components';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const { t } = useTranslation('home');
  const [productList, setProductList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://82.157.43.234:8080/api/productCollections');
      setProductList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      {/* 页面内容 content */}
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              {t('hot_recommended')}
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList[0]?.touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {t('new_arrival')}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList[1]?.touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t('domestic_travel')}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList[2]?.touristRoutes}
        />
        <BusinessPartners />
      </div>
      <Footer />
    </div>
  );
};
