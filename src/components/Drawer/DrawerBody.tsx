import classNames from "classnames";
import React from "react";
import { IDrawerBodyProps } from "../../props/IDrawerBodyProps";
import styles from '../../sass/modules/DrawerBody.module.scss';

export const DrawerBody = (props: IDrawerBodyProps) => {
  const cs = classNames(styles.DrawerBody, props.className, {
    [styles.Default]: props.default,
  });
  return (
    <section className={ cs } style={ props.style }>
      <div className={ styles.Content }>
        { props.children }
      </div>
    </section>
  );
};
