import {IProps} from "../interfaces/IProps";
import {TAppearance} from "../types/TAppearance";
import {TDropdownTrigger} from "../types/TDropdownTrigger";
import {TDropdownPlacement} from "../types/TDropdownPlacement";
import {ReactNode} from "react";

export interface IDropdownProps extends IProps {
    icon?: ReactNode;
    eventKey?: string;
    placementMenu?: TDropdownPlacement;
    isItem?: boolean;
    isDisabled?: boolean;
    activeKey?: string;
    title?: string;
    appearance?: TAppearance;
    trigger?: TDropdownTrigger | TDropdownTrigger[];
    renderTitle?: (children: ReactNode, props: IDropdownProps) => ReactNode;
}