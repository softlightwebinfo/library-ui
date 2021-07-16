import {IProps} from "../interfaces/IProps";

export interface ISidenavProps extends IProps {
    defaultOpenKeys?: string[];
    activeKey?: string;
}