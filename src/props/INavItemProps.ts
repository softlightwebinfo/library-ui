import {IProps} from "../interfaces/IProps";
import React, {ReactNode, SyntheticEvent} from "react";

export interface INavItemProps extends IProps {
    eventKey?: string;
    icon?: ReactNode;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    onSelect?: (eventKey: any, event: SyntheticEvent<any>) => void,
    renderItem?: (item: ReactNode) => ReactNode
}