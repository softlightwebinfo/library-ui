import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/PanelGroup.module.scss';
import {IPanelGroupProps} from "../../props/IPanelGroupProps";

export const PanelGroup = (props: IPanelGroupProps) => {
    const cs = classNames(styles.PanelGroup, props.className);
    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    );
}