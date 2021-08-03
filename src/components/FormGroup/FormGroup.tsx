import { IFormGroupProps } from "../../props/IFormGroupProps";
import styles from '../../sass/modules/FormGroup.module.scss';
import classNames from "classnames";
import React from "react";

export const FormGroup = (props: IFormGroupProps) => {
  const cs = classNames(styles.FormGroup, props.className, {});
  return (
    <div className={ cs } style={ props.style }>
      { props.children }
    </div>
  );
};
