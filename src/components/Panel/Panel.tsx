import React from "react";
import classNames from "classnames";
import {IPanelProps} from "../../props/IPanelProps";
import styles from '../../sass/modules/Panel.module.scss';

export const Panel = (props: IPanelProps) => {
    const cs = classNames(styles.Panel, props.className, {
        [styles.Bordered]: props.bordered,
        [styles.Shaded]: props.shaded,
        [styles.NoHeader]: !props.header,
        [styles.BodyFill]: props.bodyFill,
    });
    return (
        <div className={cs} style={props.style}>
            {props.header && (<header className={styles.Header}>{props.header}</header>)}
            <div className={styles.Body}>
                {props.children}
            </div>
        </div>
    );
};