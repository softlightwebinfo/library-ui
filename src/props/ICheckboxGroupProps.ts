import {IProps} from "../interfaces";
import {ChangeEvent} from "react";

export interface ICheckboxGroupProps extends IProps {
    onChange?: (checked: boolean, value?: any, e?: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    horizontal?: boolean;
}