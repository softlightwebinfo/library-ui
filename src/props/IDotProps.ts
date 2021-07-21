import {IProps} from "../interfaces";

export interface IDotProps extends IProps {
    active?: boolean;
    bar?: boolean;
    hover?: boolean;
    onClick?: (evt: any) => void;
    default?: boolean;
    vertical?: boolean;
}