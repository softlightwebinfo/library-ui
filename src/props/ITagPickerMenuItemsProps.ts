import { IObjectCustom } from "@codeunic/library-hooks/lib/library/interfaces/IObject";
import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface ITagPickerMenuItemsProps extends IProps {
  size?: TSize;
  data?: ITagPickerData[]
  name?: string;
  onChange?: (value: boolean, item: ITagPickerData) => void;
}

export type ITagPickerData = {
  label: string;
  value: string;
} & IObjectCustom<any>;
