import classNames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ContextDatatable, IUseDatatable, TDatatableSort } from "../../context/useDatatable";
import { paginator } from "../../functions/paginator";
import { ITableRow } from "../../interfaces/ITableRow";
import { IDatatableProps } from "../../props/IDatatableProps";
import styles from "../../sass/modules/Datatable.module.scss";
import { DatatableBody } from "./DatatableBody";
import { DatatableFooter } from "./DatatableFooter";
import { DatatableHeader } from "./DatatableHeader";
import { DatatableNoResultsFound } from "./DatatableNoResyltsFound";

export const Datatable = (
  {
    columns = [], selectedRowsIds = [],
    showSearch = true,
    height = 600,
    showRowsInformation = true,
    isPaginated = true,
    showColumnVisibilityManager = true,
    isHeaderSticky = true,
    isVirtualScroll = true,
    ...props
  }: IDatatableProps,
) => {
  const [sort, setSort] = useState<TDatatableSort>();
  const [stateColumns, setStateColumns] = useState(columns);
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<string[]>(selectedRowsIds);
  const [rowsPage, setRowsPage] = useState<number>(20);
  const cs = classNames(styles.Datatable, props.className, {});

  const sortFunction = useCallback((a: ITableRow, b: ITableRow): number => {
    // @ts-ignore
    const aField = a?.[sort?.column];
    // @ts-ignore
    const bField = b?.[sort?.column];
    return aField < bField
      ? !sort?.desc
        ? -1
        : 1
      : aField > bField
        ? !sort?.desc
          ? 1
          : -1
        : 0;
  }, [sort]);

  const rows = useMemo(() => {
    const filter = () => {
      if (!searchValue.trim().length) return props.rows;
      return props.rows.filter(rw => {
        const filter = columns.map(value1 => {
          if (!value1.searchable) return false;
          // @ts-ignore
          const data = rw?.[value1.field];
          return data.toLowerCase().indexOf(searchValue.trim().toLowerCase()) != -1;
        });
        return filter.includes(true);
      });
    };

    if (sort?.column) {
      const currentCol = stateColumns.find(item => item.id === sort.columnId && item.field === sort.column);
      if (!currentCol?.sortable) return filter();
      if (currentCol?.sort) {
        return filter().sort((a, b): number => currentCol?.sort?.({
          a: a[sort.column],
          b: b[sort.column],
          isAscending: !sort.desc,
        }) as number);
      }

      return filter().sort(sortFunction);
    }

    return filter();
  }, [searchValue, sort, props.rows]);

  const paginatorObj = paginator(rows, page, rowsPage);

  const value: IUseDatatable = {
    sort,
    showSearch,
    showRowsInformation,
    isPaginated,
    showColumnVisibilityManager,
    isHeaderSticky,
    isVirtualScroll,
    page,
    rowsPage,
    searchValue: searchValue,
    columns: stateColumns,
    rows: paginatorObj.data,
    offset: paginatorObj.offset,
    totalRows: rows.length,
    selectedRows,
    changeSearch: setSearchValue,
    setRowsPage: e => {
      setRowsPage(Number(e));
      setPage(1);
    },
    setPage: setPage,
    setOrder: (column, columnId) => {
      setSort((prv) => {
        if (prv?.column === column) {
          if (!prv.desc) return;
          return {
            ...prv,
            column,
            desc: !prv.desc,
            columnId,
          };
        }
        return {
          desc: true,
          column,
          columnId,
        };
      });
    },
    onClickRow: props.onClickRow,
    toggleCheckAll: check => {
      setSelectedRows(check ? rows.map(i => i.id) : []);
    },
    toggleCheck: (check, id) => {
      setSelectedRows(prv => prv.indexOf(id) == -1 ? [...prv, id] : prv.filter(i => i != id));
    },
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
          style={ { maxHeight: height } }
          className={ classNames(styles.Wrapper, {
            [styles.Shadow]: props.shadow,
          }) }
        >
          <DatatableHeader/>
          <DatatableBody/>
          <DatatableNoResultsFound/>
          <DatatableFooter/>
        </div>
      </div>
    </ContextDatatable.Provider>
  );
};
