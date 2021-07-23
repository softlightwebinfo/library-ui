import classNames from "classnames";
import React from "react";
import { IPriceProps } from "../../props/IPriceProps";
import styles from '../../sass/modules/Price.module.scss';

export const Price = (props: IPriceProps) => {
  const cs = classNames(styles.Price, props.className, {});
  return (
    <div className={ cs } style={ props.style }>
      { props.children }
    </div>
  );
};
