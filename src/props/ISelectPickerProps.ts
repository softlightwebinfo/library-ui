import { CSSProperties, ReactNode } from "react";
import { IProps } from "../interfaces";
import { IButtonProps } from "./IButtonProps";
import { ISelectMenuDropdownProps } from "./ISelectMenuDropdownProps";

export interface ISelectPickerProps extends IProps, ISelectMethod {
  showSearch?: boolean;
  button?: Partial<IButtonProps>;
  styleButton?: CSSProperties;
  initialOpen?: boolean;
  data: ISelectPickerData[];
  onSelect?: (value: string, item: any) => void;
  groupBy?: string;
  placeholder?: string;
  block?: boolean;
  initialSelect?: ISelectPickerData | any | undefined;
}

export interface ISelectPickerData {
  label: string;
  value: string;

  [p: string]: any;
}

export interface ISelectMethod {
  renderMenuItem?: (label: string, item: ReactNode) => ReactNode;
  renderMenuGroup?: (label: string | ReactNode, item: TSelectRenderMenuGroupItem) => ReactNode;
  renderValue?: (label: string | undefined, select: ISelectPickerData | undefined, Content: () => JSX.Element) => ReactNode;
}

export type TSelectRenderMenuGroupItem = { children: any, component: ReactNode, props: ISelectMenuDropdownProps }
