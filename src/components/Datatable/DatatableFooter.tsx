import classNames from "classnames";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableFooterProps } from "../../props/IDatatableFooterProps";
import styles from '../../sass/modules/DatatableFooter.module.scss';
import { Dropdown, DropdownItem } from "../Dropdown";
import { Pagination } from "../Pagination";

export const DatatableFooter = (props: IDatatableFooterProps) => {
  const cx = useDatatable();
  const cs = classNames(styles.DatatableFooter, props.className, {});
  if (!cx.isPaginated && !cx.showRowsInformation) return null;
  return (
    <footer className={ cs } style={ props.style }>
      { cx.showRowsInformation && (
        <div className={ styles.Information }>
          Total rows: { cx.totalRows } |
          Rows: { cx.offset.start } - { cx.offset.end } | { cx.selectedRows.length } Selected
        </div>
      ) }
      { cx.isPaginated && (
        <div className={ styles.Right }>
          <Dropdown
            title={ `Rows per page ${ cx.rowsPage }` }
            initial
            placementMenu={ "top-start" }
            activeKey={ cx.rowsPage.toString() }
            onClick={ e => cx.setRowsPage?.(e) }
          >
            <DropdownItem eventKey={ "20" }>20</DropdownItem>
            <DropdownItem eventKey={ "50" }>50</DropdownItem>
            <DropdownItem eventKey={ "100" }>100</DropdownItem>
          </Dropdown>
          <Pagination
            totalRecords={ cx.totalRows }
            initial
            pageLimit={ cx.rowsPage }
            currentPage={ cx.page }
            onPageChanged={ (e, page) => {
              e.preventDefault();
              cx.setPage?.(page);
            } }
          />
        </div>
      ) }
    </footer>
  );
};
