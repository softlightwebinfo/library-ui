import {ReactNode} from "react";

export interface IAccordionData {
    title: string;
    content: string | ReactNode;
    isDisabled?: boolean;
}