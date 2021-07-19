import {IProps} from "../interfaces/IProps";

export interface ISidenavProps extends IProps {
    collapse?: boolean;
    expanded?: boolean;
    defaultOpenKeys?: string[];
    activeKey?: string;
    appearance?: TSidenavAppearance;
}

export type TSidenavAppearance = "subtle";