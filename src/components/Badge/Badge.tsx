import React from "react";
import classNames from "classnames";
import {IBadgeProps} from "../../props/IBadgeProps";
import styles from '../../sass/modules/Badge.module.scss';

export const Badge = ({max = 99, ...props}: IBadgeProps) => {
    const isNumber = typeof props.content === "number";
    const cs = classNames(styles.Badge, props.className, {
        [styles.IsNumber]: isNumber,
        [styles.Independent]: !props.children,
        [styles.IndependentContent]: !props.children && !props.content,
    });
    const isMax = Number(props.content) > max;
    const group = (<span>+{max}</span>);
    return (
        <div className={cs}>
            {props.children}
            <div className={styles.Content} style={props.style}>
                {(isNumber && isMax) ? group : props.content}
            </div>
        </div>
    );
}