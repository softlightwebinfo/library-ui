import { IProps } from "../interfaces";
import { TAlign, TJustify } from "../types/TAlign";

export interface IFlexboxGridProps extends IProps {
  spacingBottom?: boolean;
  align?: TAlign;
  justify?: TJustify;
  gap?: number;
}
