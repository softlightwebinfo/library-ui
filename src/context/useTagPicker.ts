import { createContext, useContext } from "react";
import { ITagPickerData } from "../props/ITagPickerMenuItemsProps";
import { ITagData } from "../props/ITagsProps";
import { TSize } from "../types";

export interface IUseTagPicker {
  name?: string;
  size?: TSize;
  data?: ITagPickerData[];
  tags?: ITagData[];
  tagPicker?: boolean;
  selectTags?: string[];
  block?: boolean;
  onChange?: (value: boolean, item: ITagPickerData) => void;
}

export const ContextTagPicker = createContext<IUseTagPicker>({
  tagPicker: false,
});

export const useTagPicker = () => useContext(ContextTagPicker);
