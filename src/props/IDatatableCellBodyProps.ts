import { IProps } from "../interfaces";
import { IDatatableCellProps } from "./IDatatableCellProps";

export interface IDatatableCellHeaderProps extends IProps, IDatatableCellProps {
  latestPinned?: boolean;
}
