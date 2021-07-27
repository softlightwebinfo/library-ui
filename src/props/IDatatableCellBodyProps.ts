import { IProps } from "../interfaces";
import { ITableRow } from "../interfaces/ITableRow";
import { IDatatableCellProps } from "./IDatatableCellProps";

export interface IDatatableCellBodyProps extends IProps, IDatatableCellProps {
  row: ITableRow;
  rowIndex: string;
  rowId: string;
}
