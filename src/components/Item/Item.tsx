import classNames from "classnames";
import React from "react";
import { IItemProps } from "../../props/IItemProps";
import styles from '../../sass/modules/Item.module.scss';

export const Item = (props: IItemProps) => {
  const cs = classNames(styles.Item, props.className, {});
  return (
    <div onClick={ props.onClick } className={ cs } style={ props.style }>
      { props.children }
    </div>
  );
};
