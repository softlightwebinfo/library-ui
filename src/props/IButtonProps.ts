import {IProps} from "../interfaces/IProps";
import {TAppearance} from "../types/TAppearance";
import {TSize} from "../types/TSize";
import {ReactNode} from "react";

export interface IButtonProps extends IProps {
    loading?: boolean;
    onClick?: (evt: any) => void;
    appearance?: TAppearance;
    size?: TSize;
    circle?: boolean;
    block?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
}