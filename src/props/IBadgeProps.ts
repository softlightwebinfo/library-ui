import {IProps} from "../interfaces";

export interface IBadgeProps extends IProps {
    max?: number;
    content?: string | number;
}