import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface ITextareaProps extends IProps {
  dark?: boolean;
  id?: string;
  size?: TSize;
  autoFocus?: boolean;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  onChange?: (value: any, event: any) => void;
  onChangeEvent?: (event: any) => void;
  value?: any;
  minLength?: number;
  maxLength?: number;
}
