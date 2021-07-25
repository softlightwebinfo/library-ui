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
  return (
    <footer className={ cs } style={ props.style }>
      <div className={ styles.Information }>
        Total rows: { cx.rows.length } | Rows: 1 - 2 | { cx.selectedRows.length } Selected
      </div>
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
          totalRecords={ 100 }
          initial
          pageLimit={ cx.rowsPage }
          currentPage={ cx.page }
          onPageChanged={ (e, page) => {
            e.preventDefault();
            cx.setPage?.(page);
          } }
        />
      </div>
    </footer>
  );
};
