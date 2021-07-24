import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface IAvatarUserProps extends IProps {
  circle?: boolean;
  title: string;
  subTitle: string;
  name: string;
  avatar?: string;
  size?: TSize;
  align?: "left" | "right";
}
