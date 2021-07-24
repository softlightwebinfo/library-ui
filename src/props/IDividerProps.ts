import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";

export interface IDividerProps extends IProps {
  zero?: boolean;
  component?: string | ReactNode;
}
