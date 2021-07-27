import classNames from "classnames";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableCellHeaderProps } from "../../props/IDatatableCellHeaderProps";
import styles from '../../sass/modules/DatatableCellHeader.module.scss';
import { Checkbox } from "../Checkbox";
import { DatatableCell } from "./DatatableCell";

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
      column={ props.column }
      className={ cs }
      style={ props.style }
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
      </div>
      { props.column.resizable && (<span className={ styles.Resizable }/>) }
    </DatatableCell>
  );
};
