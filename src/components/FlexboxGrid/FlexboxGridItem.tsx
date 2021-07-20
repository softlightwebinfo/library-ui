import React from "react"
import {IFlexboxGridProps} from "../../props/IFlexboxGridProps";
import classNames from "classnames";
import styles from '../../sass/modules/FlexboxGrid.module.scss';

export const FlexboxGrid = (props: IFlexboxGridProps) => {
    const cs = classNames(styles.FlexboxGrid, props.className);
    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    )
}