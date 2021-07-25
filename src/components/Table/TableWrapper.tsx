import classNames from "classnames";
import React from "react";
import { ITableWrapperProps } from "../../props/ITableWrapperProps";
import styles from '../../sass/modules/TableWrapper.module.scss';

export const TableWrapper = (props: ITableWrapperProps) => {
  const cs = classNames(styles.TableWrapper, props.className, {
    [styles.Shadow]: props.shadow,
  });
  return (
    <div className={ cs } style={ props.style }>
      { props.children }
    </div>
  );
};
