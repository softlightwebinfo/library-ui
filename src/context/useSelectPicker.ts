import { createContext, useContext } from "react";
import { ISelectMethod, ISelectPickerData } from "../props/ISelectPickerProps";

export interface IUseSelectPicker extends ISelectMethod {
  showSearch?: boolean;
  data: ISelectPickerData[] | Record<string, ISelectPickerData[]>;
  isSelect?: boolean;
  search?: string | undefined;
  setSearch?: (evt: any) => void;
  onSelect?: (value: string, item: any) => void;
  groupBy?: string;
  select?: ISelectPickerData;
}

export const ContextSelectPicker = createContext<IUseSelectPicker>({
  data: [],
});

export const useSelectPicker = () => useContext(ContextSelectPicker);
