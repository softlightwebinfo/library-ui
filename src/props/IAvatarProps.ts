import {IProps} from "../interfaces";
import {TSize} from "../types";

export interface IAvatarProps extends IProps {
    size?: TSize;
    src?: string;
    alt?: string;
    title?: string;
    circle?: boolean;
}