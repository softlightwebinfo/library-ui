import { IProps } from "../interfaces";
import { ITableColumn } from "../interfaces/ITableColumn";
import { ITableRow } from "../interfaces/ITableRow";

export interface IDatatableProps extends IProps {
  shadow?: boolean;
  columns: ITableColumn[];
  rows: ITableRow[];
  selectedRowsIds?: string[];
}
