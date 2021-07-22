import {IProps} from "../interfaces";
import {TSize} from "../types";
import {TInputType} from "../types/TInputType";

export interface IInputProps extends IProps {
    id?: string;
    size?: TSize;
    checked?: boolean;
    autoFocus?: boolean;
    multiple?: boolean;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
    onChange?: (value: any, event: any) => void;
    onChangeEvent?: (event: any) => void;
    type?: TInputType;
    value?: any;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    step?: number;
}