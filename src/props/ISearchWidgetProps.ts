import { IProps } from "../interfaces";
import { IInputProps } from "./IInputProps";
import { IModalProps } from "./IModalProps";

export interface ISearchWidgetProps extends IProps, IModalProps {
  onClick?: (evt: any) => void;
  input: IInputProps;
  results: ISearchWidgetData[];
}

export interface ISearchWidgetData {
  title: string;
  description: string;
}
