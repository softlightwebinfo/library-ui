import { CSSProperties } from "react";
import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface IAvatarUserProps extends IProps {
  classNameAvatar?: string;
  styleAvatar?: CSSProperties;
  circle?: boolean;
  title: string;
  subTitle: string;
  name: string;
  avatar?: string;
  size?: TSize;
  align?: "left" | "right";
}
