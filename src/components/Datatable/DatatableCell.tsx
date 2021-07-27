import classNames from "classnames";
import React from "react";
import { IDatatableCellHeaderProps } from "../../props/IDatatableCellHeaderProps";
import styles from '../../sass/modules/DatatableCellHeader.module.scss';

export const DatatableCellHeader = (props: IDatatableCellHeaderProps) => {
  const cs = classNames(styles.DatatableCellHeader, props.className, {});
  return (
    <DatatableCell
      className={ cs }
      style={ props.style }
    >

    </DatatableCell>
  );
};
