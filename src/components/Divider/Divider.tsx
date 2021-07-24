import classNames from "classnames";
import React from "react";
import { IDividerProps } from "../../props/IDividerProps";
import styles from '../../sass/modules/Divider.module.scss';

export const Divider = ({ className, style, ...props }: IDividerProps) => {
  const cs = classNames(styles.Divider, className, {
    [styles.Zero]: props.zero,
  });
  const Component: any = props.component ?? "div";
  return (
    <Component className={ cs } style={ style }/>
  );
};
