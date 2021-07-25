import { IProps } from "../interfaces";

export interface ITableProps extends IProps {
  height?: number;
  data: any[];
  onRowClick?: () => void;
}
