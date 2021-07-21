import {createContext, useContext} from "react";
import {TTimelineAlign} from "../types/TTimelineAlign";

export interface IUseTimeline {
    timeline: boolean;
    align?: TTimelineAlign;
}

export const ContextTimeline = createContext<IUseTimeline>({
    timeline: false,
})
export const useTimeline = () => useContext(ContextTimeline);