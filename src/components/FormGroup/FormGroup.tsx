import classNames from "classnames";
import React from "react";
import { IFormGroupProps } from "../../props/IFormGroupProps";
import styles from '../../sass/modules/FormGroup.module.scss';

export const FormGroup = (props: IFormGroupProps) => {
  const cs = classNames(styles.FormGroup, props.className, {
    [styles.NoMargin]: props.noMargin,
  });
  const Component = props.label ? "label" : "div";
  return (
    <Component className={ cs } style={ props.style }>
      { props.label && (<span className={ styles.Label }>{ props.label }</span>) }
      { props.children }
    </Component>
  );
};
