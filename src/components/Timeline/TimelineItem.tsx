import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/Timeline.module.scss';
import {ITimelineProps} from "../../props/ITimelineProps";

export const Timeline = (props: ITimelineProps) => {
    const cs = classNames(styles.Timeline, props.className);
    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    )
};