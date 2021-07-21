import React from "react";
import classNames from "classnames";
import {IBadgeProps} from "../../props/IBadgeProps";
import styles from '../../sass/modules/Badge.module.scss';

export const Badge = (props: IBadgeProps) => {
    const cs = classNames(styles.Badge, props.className);
    return (
        <div className={cs} style={props.style}>
            {props.children}
            <div className={styles.Content}>
                {props.content}
            </div>
        </div>
    );
}