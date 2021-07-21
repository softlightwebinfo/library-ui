import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/Timeline.module.scss';
import {ITimelineProps} from "../../props/ITimelineProps";
import {ContextTimeline} from "../../context/useContextTimeline";

export const Timeline = ({align = "right", ...props}: ITimelineProps) => {
    const cs = classNames(styles.Timeline, props.className, {
        [styles[align]]: align,
    });
    const value = {
        align: align,
        timeline: true,
    }
    return (
        <ContextTimeline.Provider value={value}>
            <ul className={cs} style={props.style}>
                {props.children}
            </ul>
        </ContextTimeline.Provider>
    )
};