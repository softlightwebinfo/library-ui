import { ChangeEvent } from "react";
import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface ICheckboxProps extends IProps {
  name?: string;
  readOnly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: TSize;
  value?: any;
  id?: string;
  onChange?: (checked: boolean, value?: any, e?: ChangeEvent<HTMLInputElement>) => void;
}
