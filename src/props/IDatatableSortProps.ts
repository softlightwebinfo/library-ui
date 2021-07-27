import { IProps } from "../interfaces";

export interface IDatatableSortProps extends IProps {
  field: string | undefined;
  sortable: boolean | undefined;
}
