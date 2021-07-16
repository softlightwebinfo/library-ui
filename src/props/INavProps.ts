import {IProps} from "../interfaces/IProps";
import {TNavAppearance} from "../types/TNavAppearance";
import {SyntheticEvent} from "react";

export interface INavProps extends IProps {
    vertical?: boolean;
    block?: boolean;
    appearance?: TNavAppearance;
    justified?: boolean;
    onSelect?: (eventKey: any, event: SyntheticEvent<any>) => void,
    pills?: boolean;
    pullRight?: boolean;
    stacked?: boolean;
    reversed?: boolean;
    activeKey?: any;
}