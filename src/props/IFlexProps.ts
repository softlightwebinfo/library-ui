import { IProps } from "../interfaces";
import { TAlign, TJustify } from "../types";

export interface IFlexProps extends IProps {
  justify?: TJustify;
  align?: TAlign
}
