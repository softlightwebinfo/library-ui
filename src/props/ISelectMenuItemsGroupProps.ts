import { IProps } from "../interfaces";
import { ISelectPickerData } from "./ISelectPickerProps";

export interface ISelectMenuItemsGroupProps extends IProps {
  data?: Record<string, ISelectPickerData[]>;
}
