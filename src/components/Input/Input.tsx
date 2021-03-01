/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Input.module.css';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={clsx(styles.input, props.className)} {...props} />;
}
