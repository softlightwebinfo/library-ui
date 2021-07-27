import classNames from "classnames";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableCellBodyProps } from "../../props/IDatatableCellBodyProps";
import styles from '../../sass/modules/DatatableCellBody.module.scss';
import { Checkbox } from "../Checkbox";
import { DatatableCell } from "./DatatableCell";

export const DatatableCellBody = ({ ...props }: IDatatableCellBodyProps) => {
  const cx = useDatatable();
  const cs = classNames(styles.DatatableCellBody, props.className, {
    [styles.Checkbox]: props.column.id === "checkbox",
  });

  // @ts-ignore
  let content = props.row?.[props.column?.field];
  if (props.column.getValue) {
    content = props.column.getValue({ value: content, column: props.column, row: props.row });
  }
  const indexIdSelected = cx.selectedRows;
  return (
    <DatatableCell
      columnId={ props.columnId }
      columnIndex={ props.columnIndex }
      rowIndex={ props.rowIndex }
      rowId={ props.rowId }
      column={ props.column }
      className={ cs }
      style={ props.style }
    >
      { props.column?.cellRenderer?.({ tableManager: cx, props, value: content, row: props.row }) ?? (
        <>
          { !props.column.label && props.column.id === "checkbox" && (
            <Checkbox
              onChange={ cx.toggleCheck }
              value={ props.rowId }
              checked={ indexIdSelected.indexOf(props.rowId) != -1 }
            />
          ) }
          { (props.column.id !== "checkbox") && (
            <div className={ styles.Inner }>
              { content }
            </div>
          ) }
        </>
      ) }
    </DatatableCell>
  );
};
