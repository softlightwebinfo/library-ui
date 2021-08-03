import classNames from "classnames";
import React from "react";
import { IHeadingProps } from "../../props/IHeadingProps";
import styles from '../../sass/modules/Paragraph.module.scss';

export const Paragraph = (props: IHeadingProps) => {
  const cs = classNames(styles.Paragraph, props.className, {});

  return (
    <p className={ cs } style={ props.style }>
      { props.children }
    </p>
  );
};
