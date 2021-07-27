import classNames from "classnames";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableNoResultsFoundProps } from "../../props/IDatatableNoResultsFoundProps";
import styles from '../../sass/modules/DatatableNoResultsFound.module.scss';

export const DatatableNoResultsFound = (props: IDatatableNoResultsFoundProps) => {
  const cx = useDatatable();
  const cs = classNames(styles.DatatableNoResultsFound, props.className, {});
  if (cx.rows.length) return null;
  return (
    <div className={ cs } style={ props.style }>
      No results found
    </div>
  );
};
