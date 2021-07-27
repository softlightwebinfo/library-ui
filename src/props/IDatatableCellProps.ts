import { IProps } from "../interfaces";
import { ITableColumn } from "../interfaces/ITableColumn";

export interface IDatatableCellProps extends IProps {
  onClick?: (evt: any) => void;
  columnIndex?: string;
  columnId?: string;
  column: ITableColumn;
  rowIndex?: string;
  rowId?: string;
}
