import classNames from "classnames";
import React from "react";
import { IDatatableCellProps } from "../../props/IDatatableCellProps";
import styles from '../../sass/modules/DatatableCell.module.scss';

export const DatatableCell = (props: IDatatableCellProps) => {
  const cs = classNames(styles.DatatableCell, props.className, {});
  return (
    <div
      data-column-id={ props.columnId }
      data-row-id={ props.rowId }
      data-row-index={ props.rowIndex }
      data-column-index={ props.columnIndex }
      className={ cs }
      style={ props.style }
      onClick={props.onClick}
    >
      { props.children }
    </div>
  );
};
