import { SyntheticEvent } from "react";
import { IProps } from "../interfaces";
import { TAppearance } from "../types";

export interface ITagsProps extends IProps {
  appearance?: TAppearance;
  onClose?: (data: ITagData, index: number, syntheticEvent: SyntheticEvent<any>) => void;
  tags: ITagData[];
}

export type ITagData = {
  label: string;
  value: string;
  [p: string]: any;
};
