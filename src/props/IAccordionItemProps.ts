import { IAccordionData } from "../interfaces/IAccordionData";

export interface IAccordionItemProps extends IAccordionData {
  onClick?: (evt: any) => void;
  open?: boolean;
  default?: boolean;
}
