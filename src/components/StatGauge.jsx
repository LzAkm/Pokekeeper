import React from 'react';
import styles from '../styles/StatGauge.module.css';
import { color } from '../styles/TypesColor';

function StatGauge({ value, maxValue, type }) {
  const percentage = (value / maxValue) * 100;

  const gaugeStyle = {
    width: `${percentage}%`,
    backgroundColor: color[type] || color.grey,
    borderRadius: '30px',
  };

  return (
    <div className={styles['stat-gauge']}>
      <div className={styles['fill']} style={gaugeStyle}>
        <div className={styles['fill-inner']}></div>
      </div>
    </div>
  );
}

export default StatGauge;
