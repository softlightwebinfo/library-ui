import { IProps } from "../interfaces";

export interface IPickerMenuProps extends IProps {
  block?: boolean;
  searchValue?: string;
  onSearch?: (value: string, evt: any) => void;
  showSearch?: boolean;
}
