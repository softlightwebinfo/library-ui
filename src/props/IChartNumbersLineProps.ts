import { IProps } from "../interfaces";

export interface IChartNumbersLineProps extends IProps {
  days: number;
  data: Record<number, IChartNumbersLineData>;
}

export type IChartNumbersLineData = {
  value: number;
  label: string;
  color?: string;
};
