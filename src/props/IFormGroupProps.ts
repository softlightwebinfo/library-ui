import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IFormGroupProps extends IProps {
  noMargin?: boolean;
  label?: string | ReactNode;
}
