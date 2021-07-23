import { IProps } from "../interfaces";

export interface IStatProps extends IProps {
  topLeftText?: string;
  topRightText?: string;
  bottomLeftText?: string;
  bottomRightText?: string;
  percent: number;
  title: string;
  subTitle: string;
  price?: string | number;
}
