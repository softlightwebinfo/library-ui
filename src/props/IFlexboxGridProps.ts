import {IProps} from "../interfaces";
import {TAlign, TJustify} from "../types/TAlign";

export interface IFlexboxGridProps extends IProps {
    align?: TAlign;
    justify?: TJustify;
}