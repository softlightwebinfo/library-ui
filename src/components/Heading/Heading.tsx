import classNames from "classnames";
import React from "react";
import { IHeadingProps } from "../../props/IHeadingProps";
import styles from '../../sass/modules/Heading.module.scss';

export const Heading = (props: IHeadingProps) => {
  const cs = classNames(styles.Heading, props.className, {});
  const Component: any = props.as ?? "h2";
  return (
    <Component className={ cs } style={ props.style }>
      { props.children }
    </Component>
  );
};
