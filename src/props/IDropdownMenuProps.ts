import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";
import { TDropdownPlacement } from "../types/TDropdownPlacement";

export interface IDropdownMenuProps extends IProps {
  title?: string | ReactNode;
  placement?: TDropdownPlacement;
  isMenu?: boolean;
  expandedMobile?: boolean;
}
