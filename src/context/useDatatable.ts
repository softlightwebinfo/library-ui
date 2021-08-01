import { createContext, useContext } from "react";
import { ITableColumn } from "../interfaces/ITableColumn";
import { ITableRow } from "../interfaces/ITableRow";

export type TDatatableSort = {
  column: string;
  desc: boolean;
  columnId: string;
};

export interface IUseDatatable {
  sort?: TDatatableSort;
  toggleCheck?: (check: boolean, id: string) => void;
  toggleCheckAll?: (check: boolean) => void;
  setRowsPage?: (eventKey: string | undefined) => void;
  changeSearch?: (value: string) => void;
  toggleColumnVisibility?: (active: boolean, value: string) => void;
  columns: ITableColumn[];
  rows: ITableRow[];
  searchValue: string;
  page: number;
  rowsPage: number;
  selectedRows: string[];
  setPage?: (page: number) => void;
  showSearch: boolean;
  showRowsInformation: boolean;
  isPaginated: boolean;
  showColumnVisibilityManager: boolean;
  isHeaderSticky: boolean;
  isVirtualScroll: boolean;
  totalRows: number;
  offset: { start: number; end: number; }
  setOrder?: (field: string, columnId: string) => void;
  onClickRow?: TUseDatabaseOnClickRow;
}

export type TUseDatabaseOnClickRow = (value: ITableRow, col: ITableColumn, index: number, indexCol: number) => (evt: any) => void;
export const ContextDatatable = createContext<IUseDatatable>({
  selectedRows: [],
  columns: [],
  rows: [],
  searchValue: "",
  page: 1,
  totalRows: 0,
  rowsPage: 20,
  showSearch: true,
  showRowsInformation: true,
  isPaginated: true,
  showColumnVisibilityManager: true,
  isHeaderSticky: true,
  isVirtualScroll: true,
  offset: {
    start: 2,
    end: 20,
  },
});

export const useDatatable = () => useContext(ContextDatatable);
