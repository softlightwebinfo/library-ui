import {IProps} from "../interfaces";
import {TSize} from "../types";

export interface IListProps extends IProps {
    bordered?: boolean;
    hover?: boolean;
    size?: TSize;
}