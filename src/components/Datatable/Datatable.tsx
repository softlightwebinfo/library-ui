import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { ContextDatatable, IUseDatatable } from "../../context/useDatatable";
import { IDatatableProps } from "../../props/IDatatableProps";
import styles from "../../sass/modules/Datatable.module.scss";
import { DatatableBody } from "./DatatableBody";
import { DatatableFooter } from "./DatatableFooter";
import { DatatableHeader } from "./DatatableHeader";

export const Datatable = ({ columns = [], selectedRowsIds = [], ...props }: IDatatableProps) => {
  const [stateColumns, setStateColumns] = useState(columns);
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<string[]>(selectedRowsIds);
  const [rowsPage, setRowsPage] = useState<number>(20);
  const cs = classNames(styles.Datatable, props.className, {});

  const totalRows = props.rows;
  const value: IUseDatatable = {
    page,
    rowsPage,
    searchValue: searchValue,
    columns: stateColumns,
    rows: totalRows,
    selectedRows,
    changeSearch: setSearchValue,
    setRowsPage: e => setRowsPage(Number(e)),
    setPage: setPage,
    toggleColumnVisibility: (active, value) => {
      setStateColumns(prv => {
        const index = prv.findIndex((col) => col.id === value);
        prv[index].visible = active;
        return [
          ...prv,
        ];
      });
    },
  };

  useEffect(() => {
    setStateColumns(columns);
  }, [columns]);

  /**
   * Error maxim execution time
   */
  useEffect(() => {
    // setSelectedRows(selectedRowsIds);
  }, [selectedRowsIds]);

  return (
    <ContextDatatable.Provider value={ value }>
      <div className={ cs } style={ props.style }>
        <div
          className={ classNames(styles.Wrapper, {
            [styles.Shadow]: props.shadow,
          }) }
        >
          <DatatableHeader/>
          <DatatableBody/>
          <DatatableFooter/>
        </div>
      </div>
    </ContextDatatable.Provider>
  );
};
