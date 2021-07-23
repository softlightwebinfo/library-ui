import { IProps } from "../interfaces";

export interface IFooterProps extends IProps {
  onClick?: (evt: any) => void;
  preview?: boolean;
  page?: boolean;
}
