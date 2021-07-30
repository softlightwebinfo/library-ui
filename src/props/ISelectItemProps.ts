import { IProps } from "../interfaces";

export interface ISelectItemProps extends IProps {
  subItem?: boolean;
  onSelect?: (value: string, item: any) => void
  label: string;
  value: string;
  item?: any;
}
