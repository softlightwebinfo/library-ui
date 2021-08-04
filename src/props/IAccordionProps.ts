import { IAccordionData } from "../interfaces/IAccordionData";

export interface IAccordionProps {
  initialOpen?: number[];
  default?: boolean;
  isMultipleItems?: boolean;
  data: IAccordionData[];
}
