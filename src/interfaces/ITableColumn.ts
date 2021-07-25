import { IProps } from "./IProps";

export interface ITableColumn extends IProps {
  id: string,
  field?: string,
  label?: string,
  pinned?: boolean,
  width?: string | number,
  getValue?: ({ value, column }: any) => any,
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
  cellRenderer?: ({ tableManager, value, data, column, colIndex, rowIndex }: any) => any;
  headerCellRenderer?: ({ tableManager, column }: any) => any,
  editorCellRenderer?: ({ tableManager, value, data, column, colIndex, rowIndex, onChange }: any) => any,
  placeHolderRenderer?: ({ tableManager, value, data, column, colIndex, rowIndex }: any) => any
}
