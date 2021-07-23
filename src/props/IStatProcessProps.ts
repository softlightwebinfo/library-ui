import { IProps } from "../interfaces";
import { IStatProcessList } from "../interfaces/IStatProcessList";

export interface IStatProcessProps extends IProps {
  title: string;
  subTitle: string;
  list: IStatProcessList[];
  onClick?: (index: number, item: IStatProcessList, evt: any) => void;
}
