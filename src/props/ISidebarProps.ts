import { IProps } from "../interfaces";

export interface ISidebarProps extends IProps {
  width?: number;
  preview?: boolean;
  collapsible?: boolean;
  default?: boolean;
}
