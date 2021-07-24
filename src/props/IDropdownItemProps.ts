import { CSSProperties } from "react";
import { IProps } from "../interfaces/IProps";

export interface IDropdownItemProps extends IProps {
  eventKey?: string;
  styleContent?: CSSProperties;
}
