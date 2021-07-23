import { IProps } from "../interfaces";

export interface IRecommendProps extends IProps {
  circle?: boolean;
  title: string;
  footer: string;
  description: string;
  left: string;
  right: string;
  onClick?: (index: number, evt: any) => void;
  onClickFooter?: (evt: any) => void;
  defaultValue?: number;
  maxNumbers?: number;
}
