import { IProps } from "../interfaces";

export interface ISliderProps extends IProps {
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (value: string | number, evt: any) => void;
  onChangeEvent?: (evt: any) => void;
}
