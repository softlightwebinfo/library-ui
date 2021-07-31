import { CSSProperties } from "react";
import { IProps } from "../interfaces";
import { TAppearance } from "../types";
import { ITagPickerData } from "./ITagPickerMenuItemsProps";
import { ITagData } from "./ITagsProps";

export interface ITagPickerProps extends IProps {
  block?: boolean;
  appearanceButton?: TAppearance;
  styleButton?: CSSProperties;
  onChange?: (tags: ITagData[]) => void;
  data: ITagPickerData[];
  name?: string;
  placeholder?: string;
  initialOpen?: boolean;
}
