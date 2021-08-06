import classNames from "classnames";
import React from "react";
import { IFlexProps } from "../../props/IFlexProps";
import styles from '../../sass/modules/Flex.module.scss';

export const Toolbar = ({ align = "top", justify = "start", ...props }: IFlexProps) => {
  const cs = classNames(styles.Flex, props.className, {
    [styles[`align-${ align }`]]: !!align,
    [styles[`justify-${ justify }`]]: !!justify,
  });

  return (
    <div className={ cs } style={ props.style }>
      { props.children }
    </div>
  );
};
