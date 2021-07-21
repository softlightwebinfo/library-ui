import {IProps} from "../interfaces";
import {ChangeEvent} from "react";

export interface IRadioProps extends IProps {
    name?: string;
    readOnly?: boolean;
    disabled?: boolean;
    checked?: boolean;
    value?: any;
    id?: string;
    onChange?: (checked: boolean, value?:any, e?: ChangeEvent<HTMLInputElement>) => void;
}