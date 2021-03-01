import React, { PropsWithChildren } from 'react';

import styles from './Card.module.css';

type CardProps = PropsWithChildren<{}>;

export function Card({ children }: CardProps) {
  return (
    <div className={styles['outer-card']}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}
