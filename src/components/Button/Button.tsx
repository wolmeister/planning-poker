/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(styles.button, props.className)}
      type={props.type || 'button'}
      {...props}
    />
  );
}
