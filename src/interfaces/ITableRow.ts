import { IProps } from "./IProps";

export interface ITableRow extends IProps {
  id: string;

  [p: string]: any;
}
