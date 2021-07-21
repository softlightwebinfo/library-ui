import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/TimelineItem.module.scss';
import {ITimelineItemProps} from "../../props/ITimelineItemProps";
import {Dot} from "../Dot";
import {useTimeline} from "../../context/useContextTimeline";

export const TimelineItem = (props: ITimelineItemProps) => {
    const ctx = useTimeline();
    const cs = classNames(styles.TimelineItem, props.className, {
        [styles[ctx.align ?? props.align ?? 'right']]: ctx.align ?? props.align,
    });
    return (
        <li className={cs} style={props.style}>
            <div className={styles.Tail}/>
            <Dot className={classNames(styles.Dot, {[styles.Active]: props.active})}/>
            <div className={styles.Content}>{props.children}</div>
        </li>
    )
};