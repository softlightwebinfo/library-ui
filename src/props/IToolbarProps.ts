import { IProps } from "../interfaces";
import { TAlign, TJustify } from "../types";
import { TFixed } from "../types/TFixed";

export interface IToolbarProps extends IProps {
  align?: TAlign;
  justify?: TJustify;
  fixed?: TFixed;
}
