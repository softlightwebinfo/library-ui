import {IProps} from "../interfaces";
import {ReactNode} from "react";

export interface IPanelProps extends IProps {
    header?: ReactNode;
    expanded?: boolean;
    eventKey?: string;
    id?: string;
    defaultExpanded?: boolean;
    collapsible?: boolean;
    shaded?: boolean;
    bordered?: boolean;
    bodyFill?: boolean;
}