import { CSSProperties } from "react";
import { IProps } from "../interfaces/IProps";

export interface IDropdownItemProps extends IProps {
  default?: boolean;
  onClick?: (eventKey: string | undefined, evt: any) => void;
  eventKey?: string;
  styleContent?: CSSProperties;
}
