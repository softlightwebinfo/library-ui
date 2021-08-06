import { IProps } from "../interfaces";

export interface IFlexboxGridItemProps extends IProps {
  colspan?: number | "auto";
  order?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
