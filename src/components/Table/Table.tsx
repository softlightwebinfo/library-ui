import classNames from "classnames";
import React from "react";
import { ITableProps } from "../../props/ITableProps";
import styles from '../../sass/modules/Table.module.scss';

export const Table = (props: ITableProps) => {
  const cs = classNames(styles.Table, props.className, {});
  const value = {};
  return (
    <div className={cs}>

    </div>
  );
};
