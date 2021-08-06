import classNames from "classnames";
import React from "react";
import { IToolbarProps } from "../../props/IToolbarProps";
import styles from '../../sass/modules/Toolbar.module.scss';

export const Toolbar = ({ align = "top", justify = "start", fixed = "bottom", ...props }: IToolbarProps) => {
  const cs = classNames(styles.Toolbar, props.className, {
    [styles[fixed]]: fixed,
    [styles[`align-${ align }`]]: !!align,
    [styles[`justify-${ justify }`]]: !!justify,
  });

  return (
    <div className={ cs } style={ props.style }>
      { props.children }
    </div>
  );
};
