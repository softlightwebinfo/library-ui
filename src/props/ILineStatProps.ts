import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IStatProps extends IProps {
  center?: boolean;
  icon?: ReactNode;
  topLeftText?: string;
  topRightText?: string;
  bottomLeftText?: string;
  bottomRightText?: string;
  percent?: number;
  dot?: boolean;
  price?: string | number;
  title: string;
  subTitle: string;
}
