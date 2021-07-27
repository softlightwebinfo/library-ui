import classNames from "classnames";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableBodyProps } from "../../props/IDatatableBodyProps";
import styles from '../../sass/modules/DatatableBody.module.scss';
import { DatatableCellBody } from "./DatatableCellBody";
import { DatatableCellHeader } from "./DatatableCellHeader";

export const DatatableBody = (props: IDatatableBodyProps) => {
  const ctx = useDatatable();
  const cs = classNames(styles.DatatableBody, props.className, {
    [styles.Grid]: true,
    [styles.Clickable]: true,
  });

  const style = {
    ...props.style,
    gridTemplateColumns: ctx.columns.reduce<string[]>((previousValue, currentValue, i) => {
      if (!currentValue.visible) return previousValue;
      let w = currentValue?.width?.toString?.();
      if (ctx.columns?.[i + 1]?.pinned) {
        w = "auto";
      }
      return [
        ...previousValue,
        w ?? "200px",
      ];
    }, []).join(" "),
    gridTemplateRows: `repeat(${ ctx.rows.length + 2 }, max-content)`,
  };

  return (
    <section className={ cs } style={ style }>
      { ctx.columns.map((value, index) => {
        if (!value.visible) return null;
        return (
          <DatatableCellHeader
            key={ `${ value.id }` }
            latestPinned={ ctx.columns?.[index + 1]?.pinned ?? false }
            column={ value }
            columnId={ value.id }
            columnIndex={ index.toString() }
          />
        );
      }) }
      { ctx.rows.map((value, index) => {
        return ctx.columns.map((col, indexCol) => {
          if (!col.visible) return null;
          return (
            <DatatableCellBody
              key={ `${ value.id }-${ col.id }` }
              row={ value }
              rowId={ value.id }
              rowIndex={ index.toString() }
              column={ col }
              columnId={ col.id }
              columnIndex={ indexCol.toString() }
            />
          );
        });
      }) }
    </section>
  );
};
