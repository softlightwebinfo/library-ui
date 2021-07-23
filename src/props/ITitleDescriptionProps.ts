import { IProps } from "../interfaces";

export interface ITitleDescriptionProps extends IProps {
  white?: boolean;
  title: string;
  description: string;
  dot?: boolean;
  center?: boolean;
}
