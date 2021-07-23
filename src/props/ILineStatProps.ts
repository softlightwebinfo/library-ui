import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface ILineStatProps extends IProps {
  topLeftText?: string;
  topRightText?: string;
  bottomLeftText?: string;
  bottomRightText?: string;
  percent?: number;
}
