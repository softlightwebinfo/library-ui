import { createContext, useContext } from "react";
import { ITableColumn } from "../interfaces/ITableColumn";
import { ITableRow } from "../interfaces/ITableRow";

export interface IUseDatatable {
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
}

export const ContextDatatable = createContext<IUseDatatable>({
  selectedRows: [],
  columns: [],
  rows: [],
  searchValue: "",
  page: 1,
  rowsPage: 20,
});

export const useDatatable = () => useContext(ContextDatatable);
