import { IProps } from "../interfaces";

export interface IItemProps extends IProps {
  onClick?: (evt: any) => void;
}
