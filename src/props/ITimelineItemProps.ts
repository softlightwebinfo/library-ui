import {IProps} from "../interfaces";
import {TTimelineAlign} from "../types/TTimelineAlign";

export interface ITimelineItemProps extends IProps {
    align?: TTimelineAlign;
    active?: boolean;
}