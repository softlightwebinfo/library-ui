import classNames from "classnames";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableCellHeaderProps } from "../../props/IDatatableCellHeaderProps";
import styles from '../../sass/modules/DatatableCellHeader.module.scss';
import { Checkbox } from "../Checkbox";
import { DatatableCell } from "./DatatableCell";
import { DatatableSort } from "./DatatableSort";

export const DatatableCellHeader = ({ ...props }: IDatatableCellHeaderProps) => {
  const cx = useDatatable();
  const cs = classNames(styles.DatatableCellHeader, props.className, {
    [styles.Sticky]: cx.isHeaderSticky,
    [styles.NotPinned]: !props.column.pinned,
    [styles.Checkbox]: props.column.id === "checkbox",
    [styles.Pinned]: ["buttons", "actions"].includes(props.column.id),
    [styles.LatestPinned]: props.latestPinned,
  });

  return (
    <DatatableCell
      rowIndex={ props.rowIndex }
      columnIndex={ props.columnIndex }
      columnId={ props.columnId }
      column={ props.column }
      className={ cs }
      style={ props.style }
      onClick={ () => props.column.sortable && cx.setOrder?.(props.column.field as string, props.column.id) }
    >
      <div className={ styles.Inner }>
        { !props.column.label && props.column.id === "checkbox" && (
          <Checkbox onChange={ cx.toggleCheckAll }/>
        ) }
        { props.column.label && (
          <span className={ styles.Label }>
            { props.column.label }
          </span>
        ) }
        <DatatableSort sortable={ props.column.sortable } field={ props.column.field }/>
      </div>
      { props.column.resizable && (<span className={ styles.Resizable }/>) }
    </DatatableCell>
  );
};
