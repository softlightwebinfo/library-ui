import classNames from "classnames";
import React from "react";
import { IParagraphProps } from "../../props/IParagraphProps";
import styles from '../../sass/modules/Paragraph.module.scss';

export const Paragraph = (props: IParagraphProps) => {
  const cs = classNames(styles.Paragraph, props.className, {
    [styles.AbsoluteRight]: props.absoluteRight,
  });

  return (
    <p className={ cs } style={ props.style }>
      { props.children }
    </p>
  );
};
