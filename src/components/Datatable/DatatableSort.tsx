import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableSortProps } from "../../props/IDatatableSortProps";
import styles from '../../sass/modules/DatatableSort.module.scss';
import { Icon } from "../Icon";

export const DatatableSort = (props: IDatatableSortProps) => {
  const cx = useDatatable();

  if (!props.sortable) return null;
  if (cx.sort?.column !== props.field) return null;

  if (cx.sort?.desc) {
    return (
      <Icon icon={ faArrowDown } className={ styles.DatatableSort }/>
    );
  }

  return (
    <Icon icon={ faArrowUp } className={ styles.DatatableSort }/>
  );
};
