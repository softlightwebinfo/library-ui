import classNames from "classnames";
import React from "react";
import { ITitleProps } from "../../props/ITitleProps";
import styles from '../../sass/modules/Title.module.scss';

export const Title = (props: ITitleProps) => {
  const cs = classNames(styles.Title, {
    [styles.White]: props.white,
  });
  const Component = "div";
  return (
    <Component className={ cs } style={ props.style }>
      { props.children }
    </Component>
  );
};
