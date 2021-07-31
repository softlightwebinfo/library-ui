import classNames from "classnames";
import React from "react";
import { IItemBoxProps } from "../../props/IItemBoxProps";
import styles from '../../sass/modules/ItemBox.module.scss';

export const ItemBox = ({ appearance = "default", ...props }: IItemBoxProps) => {
  const cs = classNames(styles.ItemBox, props.className, {
    [styles[appearance]]: appearance,
  });
  return (
    <div onClick={ props.onClick } className={ cs } style={ props.style }>
      { props.children }
    </div>
  );
};
