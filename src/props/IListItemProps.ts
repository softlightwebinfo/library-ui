import {IProps} from "../interfaces";
import {TSize} from "../types";

export interface IListItemProps extends IProps {
    bordered?: boolean;
    hover?: boolean;
    index?: number;
    size?: TSize;
}