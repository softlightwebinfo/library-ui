import { IProps } from "../interfaces";
import { ITableColumn } from "../interfaces/ITableColumn";
import { ITableRow } from "../interfaces/ITableRow";

export interface IDatatableProps extends IProps {
  height?: number;
  shadow?: boolean;
  columns: ITableColumn[];
  rows: ITableRow[];
  selectedRowsIds?: string[];
  showSearch?: boolean;
  showRowsInformation?: boolean;
  showColumnVisibilityManager?: boolean;
  isPaginated?: boolean;
  isVirtualScroll?: boolean;
  isHeaderSticky?: boolean;
}
