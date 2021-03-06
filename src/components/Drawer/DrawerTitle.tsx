import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/DrawerTitle.module.scss';
import { IDrawerTitleProps } from "../../props/IDrawerTitleProps";

export const DrawerTitle = (props: IDrawerTitleProps) => {
  const cs = classNames(styles.DrawerTitle, props.className, {
    [styles.White]: props.white,
  });
  return (
    <h4 className={ cs } style={ props.style }>
      { props.children }
    </h4>
  );
};
