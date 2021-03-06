import { IProps } from "../interfaces";
import { ReactNode } from "react";

export interface IPanelProps extends IProps {
  classNameBody?: string;
  onClick?: (evt: any) => void;
  initialOpen?: boolean;
  spacingTop?: boolean;
  card?: boolean;
  header?: ReactNode;
  expanded?: boolean;
  eventKey?: string;
  id?: string;
  defaultExpanded?: boolean;
  collapsible?: boolean;
  shaded?: boolean;
  bordered?: boolean;
  bodyFill?: boolean;
}
