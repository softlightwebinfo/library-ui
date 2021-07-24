import { IProps } from "../interfaces";
import { IDrawerProps } from "./IDrawerProps";
import { IPanelProps } from "./IPanelProps";

export interface INewWidgetProps extends IProps, IDrawerProps {
  onClick?: (item: INewWidgetData, index: number, evt: any) => void;
  data: INewWidgetData[]
  title: string;
}

export interface INewWidgetData {
  title: string;
  description: string;
  date: string;
  badge: string;
  image?: string;
  panel?: Partial<IPanelProps>;
}
