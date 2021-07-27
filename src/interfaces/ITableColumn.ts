import { IUseDatatable } from "../context/useDatatable";
import { IDatatableCellBodyProps } from "../props/IDatatableCellBodyProps";
import { IProps } from "./IProps";
import { ITableRow } from "./ITableRow";

export interface ITableColumn extends IProps {
  id: string,
  field?: string,
  label?: string,
  pinned?: boolean,
  width?: string | number,
  getValue?: (data: { column: ITableColumn; row: ITableRow; value: any }) => any,
  setValue?: ({ value, data, setRow, column }: any) => void,
  minResizeWidth?: number,
  maxResizeWidth?: number,
  sortable?: boolean,
  editable?: boolean,
  searchable?: boolean,
  visible?: boolean,
  resizable?: boolean,
  search?: ({ value, searchText }: any) => {},
  sort?: ({ a, b, isAscending }: any) => {},
  cellRenderer?: TTableColumnCellRenderer;
  headerCellRenderer?: ({ tableManager, column }: any) => any,
  editorCellRenderer?: ({ tableManager, value, data, column, colIndex, rowIndex, onChange }: any) => any,
  placeHolderRenderer?: ({ tableManager, value, data, column, colIndex, rowIndex }: any) => any;
}

export type TTableColumnCellRenderer = (data: ITableColumnManager) => any;

export interface ITableColumnManager {
  tableManager: IUseDatatable;
  props: IDatatableCellBodyProps;
  value: any;
  row: ITableRow;
}
