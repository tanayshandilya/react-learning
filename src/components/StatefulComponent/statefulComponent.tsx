import { useState } from 'react';
import StatefulComponentTypes from './statefulComponent.types';
import styles from './statefulComponent.module.css';

export default function StatefulComponent({
  min = 0,
  max = 100,
  initialCount = 0,
  ...rest
}: StatefulComponentTypes) {
  const [count, setCount] = useState(initialCount);
  const handleIncrementClick = () => {
    setCount((prevCount) => (prevCount < max ? ++prevCount : prevCount));
  };
  const handleDecrementClick = () => {
    setCount((prevCount) => (prevCount > min ? --prevCount : prevCount));
  };

  return (
    <div {...rest} className={styles['sc-card']}>
      <span className={styles['sc-count']}>{count}</span>
      <div className={styles['sc-control']}>
        <button type="button" onClick={handleDecrementClick}>
          <span>-</span>
        </button>
        <button type="button" onClick={handleIncrementClick}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
