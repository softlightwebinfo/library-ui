import classNames from "classnames";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableBodyProps } from "../../props/IDatatableBodyProps";
import styles from '../../sass/modules/DatatableBody.module.scss';

export const DatatableBody = (props: IDatatableBodyProps) => {
  const ctx = useDatatable();
  const cs = classNames(styles.DatatableBody, props.className, {});

  const style = {
    ...props.style,
    gridTemplateColumns: ctx.columns.reduce<string[]>((previousValue, currentValue) => {
      return [
        ...previousValue,
        currentValue?.width?.toString?.() ?? "200px",
      ];
    }, []).join(" "),
  };

  return (
    <section className={ cs } style={ style }>

    </section>
  );
};
