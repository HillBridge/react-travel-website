import React from 'react';
import Counter from '../../components/counter/Counter';
import styles from './Other.module.css';

export const Other: React.FC = () => {
  return (
    <div>
      <Counter />
      <div className={styles.container}>
        <h2 className={styles['ignore-font']}>不被postcss 转换</h2>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
    </div>
  );
};
