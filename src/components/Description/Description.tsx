import classNames from "classnames";
import React from "react";
import { IDescriptionProps } from "../../props/IDescriptionProps";
import styles from '../../sass/modules/Description.module.scss';

export const Description = (props: IDescriptionProps) => {
  const cs = classNames(styles.Description, props.className, {
    [styles.White]: props.white,
  });

  return (
    <p className={ cs } style={ props.style }>
      { props.children }
    </p>
  );
};
